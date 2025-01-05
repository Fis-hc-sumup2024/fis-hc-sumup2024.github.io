/* eslint-disable @typescript-eslint/no-explicit-any */
export const customStyles = {
  control: (provided: any) => ({
    // class attribute : class=" css-i32vvf-control"
    ...provided,
    color: "#FFFFFF",
    background: "#FFFFFF1A",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid #FFFFFF4D",
    borderRadius: "8px",
    boxShadow: "none",
    display: "flex",
    flexWrap: "nowrap",
    // borderColor: "hsl(0deg 78.56% 55.56%);",
    width: "100%",
    "&:hover": {
      border: "1px solid #FFFFFF4D",
    },
  }),
  menu: (provided: any) => ({
    // 'menu' is from the div class too.
    ...provided,
    padding: "8px",
    backgroundColor: "#FFFFFF33",
    backdropFilter: "blur(75px)",
    WebkitBackdropFilter: "blur(75px)",
    boxShadow: "0px 2px 10px 0px #00000026",
    border: "1px solid #FFFFFF4D",
    borderRadius: "8px",
    width: "100%",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected ? "#02018B" : "#ffffff",
    background: state.isSelected
      ? "linear-gradient(0deg, #78F1FF, #78F1FF), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))"
      : state.isFocused
      ? "#DFE1E61A"
      : "transparent",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#DFE1E61A",
    },
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "white",
  }),
  singleValue: (base: any) => ({ ...base, color: "white" }),
};
