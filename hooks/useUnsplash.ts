import React from "react";
import { Axios } from "axios";

type UnsplashT = {
  image: string;
  name: string;
  unsplash: string;
};

const useUnsplash = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState({} as UnsplashT);
  const [error, setError] = React.useState("");

  const handler = async () => {
    try {
      setLoading(true);
      const axios = new Axios({ baseURL: "http://localhost:3000" });

      const responseFromApi = await axios.get("/api/unsplash").then((data) => {
        const res = JSON.parse(data.data);
        return res.body;
      });

      if (responseFromApi.type === "error") {
        console.log("Error has Occured..");
        console.error(responseFromApi.errors[0]);
        throw new Error(responseFromApi.errors[0]);
      } else {
        setResult({
          image: responseFromApi.response.urls.regular,
          name: responseFromApi.response.user.name,
          unsplash: responseFromApi.response.user.links.self,
        });
        setLoading(false);
      }
    } catch (e: any) {
      setError(e.message);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    handler();
  }, []);

  return { isLoading, result, error };
};

export default useUnsplash;
