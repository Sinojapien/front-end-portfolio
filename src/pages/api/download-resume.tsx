import axios, { AxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (typeof process.env.PORTFOLIO_RESUME_URL !== "string") {
    throw Error("[ERROR] Invalid portfolio url.");
  }

  const { data } = await axios
    .get<ArrayBuffer>(process.env.PORTFOLIO_RESUME_URL, {
      responseType: "arraybuffer",
    })
    .catch((error: AxiosError) => {
      throw new Error(error.message);
    });

  res
    .setHeader("content-type", "application/pdf")
    .setHeader("Content-Disposition", "attachment; filename=content.pdf")
    .status(200)
    .send(data);
};
