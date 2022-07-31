import React from "react";
import useFetch from "./useFetch";

const FetchComponent = () => {
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        "https://ranekapi.origamid.dev/json/api/produto/notebook"
      );

      console.log("response", response);
      console.log("json", json);
    }

    fetchData();
  }, [request]);

  if (error) return <p>{error}</p>;

  if (loading) return <p>Loading...</p>;

  if (data)
    return (
      <div>
        <p>{data.nome}</p>
      </div>
    );

  return null;
};

export default FetchComponent;
