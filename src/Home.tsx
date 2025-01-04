interface HomeProps {
  account?: string | null;
  setAccount?: (account: string | null) => void;
}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="w-full mx-auto h-screen flex flex-col bg-fis-bg bg-no-repeat bg-cover items-center">
      {/* Main Content */}
      <div className="sm:w-full md:w-full lg:w-1/2 flex-grow flex flex-col justify-between p-6 relative overflow-hidden">
        {/* Form */}
        <div>
          <div className="relative z-20 mt-[53px] mb-[-33px]">
            <img
              className="z-20"
              // src={Header}
              alt="A friendly cartoon-style AI robot with a round head, big eyes, and antenna, waving with one hand"
            />
          </div>
          <div className="gap-4 bg-white-blur-15 backdrop-blur-[20px] rounded-[20px] py-8 px-6 space-y-3 relative z-10 border border-white-blur-15">
            <img
              src="https://www.figma.com/file/qJzBaGDWXee1L7R4RJvyd0/image/814baafe81d124c21f960d73630a095bbdf90e59"
              width={138}
              height={138}
            />
          </div>
        </div>
        {/* Footer */}
        <div className="flex justify-center items-center text-xs">
          {/* <img src={FIS} alt="FPT IS logo" className="h-[60px] w-[120px]" /> */}
          <span>Made by FIS HC</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
