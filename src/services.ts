import axiosInstance from "./axios-instance";
import { getRandomItemByDiagnosId, getRandomWithIgnore } from "./common";
import { sheetId } from "./config";
import { CheckInType } from "./type";

export const getCheckinList = async () => {
  try {
    const checkinListRes = await axiosInstance.get(sheetId);
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
    const checkinListRes = await axiosInstance.get(sheetId);
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

export const checkin = async (body: CheckInType) => {
  try {
    const checkinRes = await axiosInstance.post(sheetId, body);
    return checkinRes.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const checkinProcess = async ({
  account,
  diagnosId,
}: {
  account: string;
  diagnosId: number;
}): Promise<CheckInType | undefined> => {
  try {
    const checkinList = await getCheckinList();
    const existItem = checkinList.find(
      (item: CheckInType) => item.account === account
    );
    if (existItem) return existItem;

    const checkIn = {
      account,
      dateTime: new Date().toISOString(),
      diagnosId: getRandomItemByDiagnosId(diagnosId),
      code: getRandomWithIgnore(
        checkinList.map((item: CheckInType) => item.code)
      ),
    };
    const checkinRes = await axiosInstance.post(sheetId, checkIn);
    return checkinRes?.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
