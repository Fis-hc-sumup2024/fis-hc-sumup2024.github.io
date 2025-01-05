import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import useLocalStorage from "./hooks/useLocalStorage";
import Layout from "./components/Layout";
import { getCheckinData } from "./services";
import { useQuery } from "react-query";
import { CheckInType } from "./type";
import { useLoading } from "./hooks/useLoading";
import LoadingOverlay from "@achmadk/react-loading-overlay";

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
      spinner
      text="Loading your content..."
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
