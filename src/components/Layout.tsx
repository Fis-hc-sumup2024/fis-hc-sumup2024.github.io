import FIS from "./Footer";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-full mx-auto flex flex-col items-center">
      {/* Main Content */}
      <div className={`w-full lg:w-1/2 h-[calc(100%-60px)] p-6`}>
        {/* Content */}
        {children}
        {/* Footer */}
        <div className="absolute w-[calc(100%-3rem)] bottom-0 m-auto footer">
          <div className="flex justify-center items-center text-xs">
            <FIS />
            <span>Made by FIS HC</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
