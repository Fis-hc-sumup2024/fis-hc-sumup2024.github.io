import { useState } from "react";
import FIS from "./assets/fis.svg";
import Header from "./assets/header.svg";
import Select from "react-select";

interface WelcomeProps {
  account?: string | null;
  setAccount?: (newValue: string) => void;
}

const Welcome = ({ account, setAccount }: WelcomeProps) => {
  const [inputAccount, setInputAccount] = useState<string>();

  const options = [
    {
      value: "google",
      label: "google",
    },
    {
      value: "bing",
      label: "bing",
    },
    {
      value: "yahoo",
      label: "yahoo",
    },
  ];

  const customStyles = {
    control: (provided) => ({
      // class attribute : class=" css-i32vvf-control"
      ...provided,
      background: "#FFFFFF1A",
      display: "flex",
      flexWrap: "nowrap",
      // borderColor: "hsl(0deg 78.56% 55.56%);",
      width: "100%",
    }),
    menu: (provided) => ({
      // 'menu' is from the div class too.
      ...provided,
      backgroundColor: "#FFFFFF33",
      backdropFilter: "blur(75px)",
      boxShadow: "0px 2px 10px 0px #00000026",
      border: "1px solid #FFFFFF4D",
      borderRadius: "8px",
      width: "100%",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#02018B" : "#ffffff",
      background: state.isSelected
        ? "linear-gradient(0deg, #78F1FF, #78F1FF), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))"
        : state.isFocused
        ? "#DFE1E61A"
        : "transparent",
      padding: "10px",
      borderRadius: "4px",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#DFE1E61A", // Đảm bảo hover hoạt động
      },
    }),
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputAccount(event.target.value);

  const onSubmit = async () => {
    // try {
    //   if (!account) return;
    //   const countData = await axiosInstance.get(sheetId);
    //   const checkIn = {
    //     account,
    //     dateTime: new Date().toISOString(),
    //     diagnosId: "1dc",
    //     code: countData.data?.length + 1,
    //   };
    //   await axiosInstance.post(sheetId, checkIn);
    // } catch (error) {
    //   console.log(error);
    // }
    if (inputAccount && setAccount) setAccount(inputAccount!);
  };

  return (
    <div className="w-full mx-auto h-screen flex flex-col bg-fis-bg bg-no-repeat bg-cover items-center">
      {/* Main Content */}
      <div className="sm:w-full md:w-full lg:w-1/2 flex-grow flex flex-col justify-between p-6 relative overflow-hidden">
        {/* Form */}
        <div>
          <div className="relative z-20 mt-[53px] mb-[-33px]">
            <img
              className="z-20"
              src={Header}
              alt="A friendly cartoon-style AI robot with a round head, big eyes, and antenna, waving with one hand"
            />
          </div>
          <div className="gap-4 bg-white-blur-15 backdrop-blur-[20px] rounded-[20px] py-8 px-6 space-y-3 relative z-10 border border-white-blur-15">
            <input
              className="w-full h-[40px] leading-[23.8px] bg-white-blur-10 placeholder-white backdrop-blur-[20px] rounded-[8px] text-left px-4 border border-white-blur-30"
              placeholder="Nhập account FPT"
              onChange={onChange}
            ></input>
            <Select
              styles={customStyles}
              className="z-40 w-full h-[40px] bg-white-blur-10 placeholder-white backdrop-blur-[20px] rounded-[8px] text-left flex justify-between items-center border border-white-blur-30"
              options={options}
            />
            <button
              style={{
                background:
                  "linear-gradient(185.85deg, #78F1FF 4.04%, #6BD2DE 94.76%), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))",
              }}
              className="w-full h-[40px] bg-btn text-text-btn py-3 backdrop-blur-[20px] rounded-[8px] font-bold"
              onClick={onSubmit}
            >
              CHẨN ĐOÁN VUI
            </button>
          </div>
        </div>
        {/* Footer */}
        <div className="flex justify-center items-center text-xs">
          <img src={FIS} alt="FPT IS logo" className="h-[60px] w-[120px]" />
          <span>Made by FIS HC</span>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
