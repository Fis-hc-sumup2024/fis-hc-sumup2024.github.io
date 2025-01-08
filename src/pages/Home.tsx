import React from "react";
import Avatar from "../assets/avatar.png";
import { diagnosCategories, diagnosItems } from "../common";
import RobotAnswer from "../components/RobotAnswer";
import Warning from "../components/Warning";
import useInnerHeight from "../hooks/useInnerHeight";
import { CheckInType, Treatment } from "../type";

interface HomeProps {
  data: CheckInType | null;
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
            ? { gap: "16px", paddingTop: "32px", paddingBottom: "32px" }
            : { gap: "4px", paddingTop: "8px", paddingBottom: "8px" }
        }
        className="flex flex-col items-center bg-white-blur-15 backdrop-blur-[20px] rounded-[20px] px-6 border border-white-blur-15"
      >
        <div className="w-[138px] h-[138px] rounded-full flex items-center justify-center">
          <img
            src={Avatar}
            className="bg-white rounded-full border-[3px] border-[#72E2F0]"
          />
        </div>
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
      </div>
      <div className="flex flex-col items-center">
        <div className="flex">
          <RobotAnswer
            className={`${isManager ? "ml-[35px]" : ""} mb-[-55px] z-10`}
          />
          {isManager && <Warning className="ml-[-40px] z-10" />}
        </div>
        <div className="gap-6 pt-10 pb-8 px-4 w-full bg-white-blur-15 backdrop-blur-[20px] rounded-[20px] text-center border border-white-blur-15">
          {isManager ? (
            <p>
              Chào mừng đến với trạm không gian Công dân tương lai cùng
              Healthcare
            </p>
          ) : (
            <React.Fragment>
              <p>
                Năm 2024 Dr.AI chẩn đoán bạn bị{" "}
                <span className="font-bold">
                  "{diagnosCategory?.diagnosName}"
                </span>
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
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
