import { NextApiRequest, NextApiResponse } from "next";
import { createApi } from "unsplash-js";
import * as nodeFetch from "node-fetch";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { query } = request.query;
  console.log(request.method);

  const unsplash = createApi({
    accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY as string,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "User-Agent": "*",
    },
    fetch: nodeFetch.default as unknown as typeof fetch,
  });

  return unsplash.search
    .getPhotos({
      query: query as string,
      perPage: 30,
      page: 1,
    })
    .then((result) => {
      if (result.type === "error") {
        return response.status(201).json({ body: result });
      } else {
        return response.status(result.status).json({ body: result });
      }
    });
};

export default handler;
