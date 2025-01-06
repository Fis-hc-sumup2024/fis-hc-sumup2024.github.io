/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Header from "../components/Header";
import FISSelect from "../components/Select/FISSelect";
import { useMutation } from "react-query";
import { SingleValue } from "react-select";
import { CheckInType, OptionType } from "../type";
import { checkinProcess } from "../services";
import useInnerHeight from "../hooks/useInnerHeight";

interface WelcomeProps {
  setLocalData?: (newValue: CheckInType | null) => void;
  setIsLoading?: (newValue: boolean) => void;
}

const Welcome = ({ setLocalData, setIsLoading }: WelcomeProps) => {
  const innerHeight = useInnerHeight();
  const [inputAccount, setInputAccount] = useState<string>();
  const [selectedOption, setSelectedOption] =
    useState<SingleValue<OptionType>>(null);

  const checkinMutation = useMutation({ mutationFn: checkinProcess });

  const inValid = !inputAccount || !selectedOption;

  const handleChange = (option: SingleValue<OptionType>) => {
    setSelectedOption(option);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputAccount(event.target.value);

  const onSubmit = () => {
    if (inValid) return;
    if (setIsLoading) setIsLoading(true);
    checkinMutation.mutate(
      {
        account: inputAccount,
        diagnosId: selectedOption.value,
      },
      {
        onSuccess(checkinData) {
          if (checkinData && setLocalData) setLocalData(checkinData);
          if (setIsLoading) setIsLoading(false);
        },
      }
    );
  };

  return (
    <div style={{ marginTop: innerHeight > 650 ? "53px" : "0px" }}>
      <div className="relative z-20 mb-[-33px]">
        <Header />
      </div>
      <div className="gap-4 bg-white-blur-15 backdrop-blur-[20px] rounded-[20px] py-8 px-6 space-y-3 relative z-10 border border-white-blur-15">
        <input
          className="w-full h-[40px] bg-white-blur-10 placeholder-white backdrop-blur-[20px] rounded-[8px] text-left px-4 border border-white-blur-30"
          placeholder="Nhập account FPT"
          onChange={onChange}
        ></input>
        <FISSelect
          selectedOption={selectedOption}
          handleChange={handleChange}
        />
        <button
          disabled={inValid}
          style={{
            color: inValid ? "#B0B0B0" : "#02018B",
            background: inValid
              ? "linear-gradient( 185.85deg, rgba(120, 241, 255, 0.5) 4.04%, rgba(107, 210, 222, 0.5) 94.76% ), linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))"
              : "linear-gradient(185.85deg, #78F1FF 4.04%, #6BD2DE 94.76%), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))",
          }}
          className={`w-full h-[40px] py-3 backdrop-blur-[20px] rounded-[8px] font-bold cursor-pointer ${
            !inValid ? "active:scale-[.98] transition duration-200" : ""
          }`}
          onClick={onSubmit}
        >
          CHẨN ĐOÁN VUI
        </button>
      </div>
    </div>
  );
};

export default Welcome;
