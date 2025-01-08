import axiosInstance from "./axios-instance";
import { getRandomItemByDiagnosId, getRandomWithIgnore } from "./common";
import { location, sheetId } from "./config";
import { CheckInType } from "./type";

export const getCheckinList = async () => {
  try {
    const checkinListRes = await axiosInstance.get(
      `${sheetId}/tabs/${location}`
    );
    return checkinListRes.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getCheckinData = async (
  account: string
): Promise<CheckInType | undefined> => {
  try {
    const checkinListRes = await axiosInstance.get(
      `${sheetId}/tabs/${location}/account/${account}`
    );
    if (checkinListRes?.data)
      return checkinListRes.data.find(
        (item: CheckInType) => item.account === account
      );
    return checkinListRes?.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const checkinProcess = async ({
  account,
  accountDisplay,
  diagnosId,
}: {
  account: string;
  accountDisplay: string;
  diagnosId: number;
}): Promise<CheckInType[] | undefined> => {
  try {
    const checkinList = await getCheckinList();
    const existItem: CheckInType = checkinList.find(
      (item: CheckInType) => item.account === account
    );
    if (existItem && existItem.checkinTime) return [existItem];

    const checkIn = {
      account,
      accountDisplay,
      checkinTime: new Date().toISOString(),
      diagnosId: getRandomItemByDiagnosId(diagnosId)?.id,
      code: existItem?.role
        ? undefined
        : getRandomWithIgnore(
            checkinList.map((item: CheckInType) => item.code)
          ),
    };
    const checkinRes = await axiosInstance.patch(
      `${sheetId}/tabs/${location}/account/${account}`,
      checkIn
    );
    return checkinRes?.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
