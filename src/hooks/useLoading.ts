import { useEffect, useState } from "react";

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setIsLoading(false);
    };
    window.addEventListener("load", handlePageLoad);
    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  return isLoading;
};
