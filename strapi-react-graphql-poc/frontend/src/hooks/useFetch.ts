import React from "react";

export const useFetch = <Data = unknown>(url: string) => {
  const [data, setData] = React.useState<Data>();
  const [error, setError] = React.useState<unknown>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, isLoading };
};
