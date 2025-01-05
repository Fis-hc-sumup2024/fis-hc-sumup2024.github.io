/* eslint-disable @typescript-eslint/no-explicit-any */
import { customStyles } from "./constants";
import { diagnosCategories } from "../../common";
import Select, { components, SingleValue } from "react-select";
import { OptionType } from "../../type";

const CustomDropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L7.5286 9.5286C7.75082 9.75082 7.86193 9.86193 8 9.86193C8.13807 9.86193 8.24918 9.75082 8.4714 9.5286L12 6"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </components.DropdownIndicator>
  );
};

const CustomIndicatorSeparator = () => null;

interface FISSelectProps {
  selectedOption?: SingleValue<OptionType>;
  handleChange?: (option: SingleValue<OptionType>) => void;
}

const FISSelect = ({ selectedOption, handleChange }: FISSelectProps) => {
  return (
    <Select
      styles={customStyles}
      options={diagnosCategories.map((item) => ({
        label: item.diagnosName,
        value: item.id,
      }))}
      value={selectedOption}
      onChange={handleChange}
      className="z-40 w-full h-[40px] placeholder-white text-left flex justify-between items-center"
      placeholder="Năm 2024 của bạn như thế nào?"
      isSearchable={false}
      components={{
        IndicatorSeparator: CustomIndicatorSeparator,
        DropdownIndicator: CustomDropdownIndicator,
      }}
    />
  );
};

export default FISSelect;
