import React from "react";
import Avatar from "../assets/avatar.png";
import { diagnosCategories, diagnosItems } from "../common";
import RobotAnswer from "../components/RobotAnswer";
import Warning from "../components/Warning";
import useInnerHeight from "../hooks/useInnerHeight";
import { CheckInType, Treatment } from "../type";
import { hnAvatars } from "../registry";

interface HomeProps {
  data?: CheckInType | null;
}

const Home: React.FC<HomeProps> = ({ data }) => {
  const innerHeight = useInnerHeight();

  const diagnosItem = diagnosItems.find(
    (item) => item.id === Number(data?.diagnosId)
  );
  const diagnosCategory = diagnosCategories.find(
    (item) => item.id === diagnosItem?.diagnosId
  );

  const isManager = data?.role;

  return (
    <div className="h-full flex-grow flex flex-col justify-center">
      <div
        style={
          innerHeight > 750
            ? { paddingTop: "32px", paddingBottom: "32px" }
            : { paddingTop: "8px", paddingBottom: "8px" }
        }
        className="flex flex-col gap-1 items-center bg-white-blur-15 backdrop-blur-[20px] rounded-[20px] px-6 border border-white-blur-15"
      >
        <div className="w-[138px] h-[138px] rounded-full flex items-center justify-center">
          <img
            src={
              hnAvatars.find((item) => item.account === data?.account)
                ?.avatar ?? Avatar
            }
            className="bg-white rounded-full border-[3px] border-[#72E2F0]"
          />
        </div>
        {isManager ? (
          <>
            <div className="text-center">
              <h2 className="font-semibold">Chào {data?.accountDisplay}</h2>
              <p>
                Chào mừng đến với trạm không gian Công dân tương lai cùng
                Healthcare.
              </p>
            </div>
            <p className="text-center">
              Mời bạn di chuyển đến{" "}
              <span className="font-bold">Cụm Công Dân Care Connectors</span> để
              tham dự bữa tiệc nhé!
            </p>
          </>
        ) : (
          <>
            <h2 className="font-semibold">Chào {data?.accountDisplay}</h2>
            <p>Số may mắn của bạn là</p>
            <p
              style={{
                textShadow: "0px 1px 1px 0px #00000040",
                lineHeight: innerHeight > 750 ? "54.4px" : "36px",
              }}
              className={`${
                isManager ? "text-[#E20000]" : "text-[#72E2F0]"
              } text-xl text-center items-center`}
            >
              {isManager ? "#$&?" : data?.code}
            </p>
          </>
        )}
      </div>
      <div className="flex flex-col items-center">
        <div className="flex">
          <RobotAnswer className="ml-[35px] mb-[-55px] z-10" />
          <Warning className="ml-[-40px] z-10" />
        </div>
        <div className="gap-6 pt-10 pb-8 px-4 w-full bg-white-blur-15 backdrop-blur-[20px] rounded-[20px] text-center border border-white-blur-15">
          <p>
            Năm 2024 Dr.AI chẩn đoán bạn bị{" "}
            <span className="font-bold">"{diagnosCategory?.diagnosName}"</span>
          </p>
          {diagnosItem &&
            Object.keys(diagnosItem?.treatment).map(
              (key: string, index: number) => (
                <p key={`${key}-${index}`}>
                  {key}:{" "}
                  <span className="font-bold">
                    {(diagnosItem?.treatment as Treatment)[key] ?? ""}
                  </span>
                </p>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default Home;
