import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import useLocalStorage from "./hooks/useLocalStorage";
import Layout from "./components/Layout";
import { getCheckinData } from "./services";
import { useQuery } from "react-query";
import { CheckInType } from "./type";
import { useLoading } from "./hooks/useLoading";
import LoadingOverlay from "@achmadk/react-loading-overlay";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./assets/anim.json";

function App() {
  const [isLoadingDOM, setIsLoading] = useLoading();
  const [localData, setLocalData] = useLocalStorage<CheckInType | null>(
    "localData",
    null
  );

  const { data, isLoading } = useQuery(
    ["get-checkin-data", localData],
    () => getCheckinData(localData?.account ?? ""),
    { enabled: !!localData }
  );

  return (
    <LoadingOverlay
      active={isLoading || isLoadingDOM}
      spinner={
        <Lottie
          className="h-1/4 m-auto"
          animationData={groovyWalkAnimation}
          loop={true}
        />
      }
      text={
        <>
          <p>Chúng tôi biết bạn đang chờ đợi.</p>
          <p>Chúng tôi cũng vậy :))</p>
        </>
      }
    >
      <Layout>
        {data && !isLoading && (
          <Home localData={localData} setLocalData={setLocalData} />
        )}
        {!data && !isLoading && (
          <Welcome setLocalData={setLocalData} setIsLoading={setIsLoading} />
        )}
        {!data && !isLoading && <></>}
      </Layout>
    </LoadingOverlay>
  );
}

export default App;
