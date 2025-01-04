import Welcome from "./Welcome";
import Home from "./Home";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [account, setAccount] = useLocalStorage<string | null>("account", null);

  return account ? (
    <Home account={account} setAccount={setAccount} />
  ) : (
    <Welcome setAccount={setAccount} />
  );
}

export default App;
