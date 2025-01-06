import { useEffect, useState } from "react";
import { wait } from "../common";

export const useLoading = (): [boolean, (newValue: boolean) => void] => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = async () => {
      await wait(1000);
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  return [isLoading, setIsLoading];
};
