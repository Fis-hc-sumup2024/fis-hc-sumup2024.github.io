import Welcome from "./Welcome";
import Home from "./Home";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [account, setAccount] = useLocalStorage("account", null);

  return account ? (
    <Home account={account} setAccount={setAccount} />
  ) : (
    <Welcome account={account} setAccount={setAccount} />
  );
}

export default App;
