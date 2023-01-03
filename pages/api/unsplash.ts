import { NextApiRequest, NextApiResponse } from "next";
import { createApi } from "unsplash-js";
import * as nodeFetch from "node-fetch";

const handler = (request: NextApiRequest, response: NextApiResponse) => {
  {
    const unsplash = createApi({
      accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY as string,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "*",
      },
      fetch: nodeFetch.default as unknown as typeof fetch,
    });

    return unsplash.photos
      .get({
        photoId: "IW5Bm4rB9OA",
      })
      .then((result) => {
        if (result.type === "error") {
          console.log("error occurred.");
          return response.status(201).json({ body: result });
        } else {
          return response.status(result.status).json({ body: result });
        }
      });
  }
};

export default handler;
