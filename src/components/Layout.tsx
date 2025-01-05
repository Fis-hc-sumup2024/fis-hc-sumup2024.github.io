import FIS from "./Footer";

interface LayoutProps {
  children?: React.ReactNode;
  isChildrenCenter?: boolean;
}

const Layout = ({ children, isChildrenCenter }: LayoutProps) => {
  return (
    <div className="w-full h-dvh mx-auto flex flex-col items-center">
      {/* Main Content */}
      <div
        className={`w-full lg:w-1/2 flex-grow flex flex-col p-6 relative overflow-hidden ${
          isChildrenCenter ? "justify-center" : "justify-between"
        }`}
      >
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
