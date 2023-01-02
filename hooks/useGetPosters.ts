/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Axios } from "axios";

type UnsplashT = {
  id: string;
  image: string;
  bigImage: string;
};

const useGetPosters = ({ query }: { query: string }) => {
  const [isLoading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState([] as UnsplashT[]);
  const [error, setError] = React.useState("");

  const handler = async () => {
    try {
      setLoading(true);
      const axios = new Axios({ baseURL: "http://localhost:3000" });

      const responseFromApi = await axios
        .get("/api/getPosters", { params: { query: query } })
        .then((data) => {
          const res = JSON.parse(data.data);
          return res.body;
        });

      if (responseFromApi.type === "error") {
        console.log("Error has Occured..");
        console.error(responseFromApi.errors[0]);
        throw new Error(responseFromApi.errors[0]);
      } else {
        console.log(responseFromApi);
        const output = [] as UnsplashT[];
        responseFromApi.response.results.forEach((el: any) => {
          output.push({
            id: el.id,
            image: el.urls.thumb,
            bigImage: el.urls.raw,
          });
        });
        setLoading(false);
        setResult(output);
      }
    } catch (e: any) {
      setError(e.message);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    handler();
  }, [query]);

  return { isLoading, result, error };
};

export default useGetPosters;
