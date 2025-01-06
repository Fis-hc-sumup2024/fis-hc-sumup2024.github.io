import Avatar from "../assets/avatar.png";
import RobotAnswer from "../components/RobotAnswer";
import Warning from "../components/Warning";
import useInnerHeight from "../hooks/useInnerHeight";
import { CheckInType } from "../type";

interface HomeProps {
  localData?: CheckInType | null;
  setLocalData?: (newValue: CheckInType | null) => void;
}

const Home: React.FC<HomeProps> = () => {
  const innerHeight = useInnerHeight();

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
        <h2 className="font-semibold">Chào PhuongNB4</h2>
        <p>Số may mắn của bạn là</p>
        <p
          style={{
            textShadow: "0px 1px 1px 0px #00000040",
            lineHeight: innerHeight > 750 ? "54.4px" : "36px",
          }}
          className="text-[#72E2F0] text-xl text-center items-center"
        >
          72
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex">
          <RobotAnswer className="ml-[35px] mb-[-55px] z-10" />
          <Warning className="ml-[-40px] z-10" />
        </div>
        <div className="gap-6 pt-10 pb-8 px-4 w-full bg-white-blur-15 backdrop-blur-[20px] rounded-[20px] text-center border border-white-blur-15">
          <p>Năm 2024 bạn được chẩn đoán bị ám ảnh deadline</p>
          <p>
            Dr.AI dành cho bạn lời khuyên Deadline chạy bộ “Deadline dí, nhưng
            bạn nhanh hơn deadline”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
