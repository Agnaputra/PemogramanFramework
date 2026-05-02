import { retrieveProducts } from "@/pages/utils/db/servicefirebase"; // [cite: 511, 512]
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Ubah parameter menjadi "production2" sesuai nama koleksi di Firebase kamu
  const data = await retrieveProducts("production3"); // [cite: 536]
  res.status(200).json({ status: true, status_code: 200, data }); // [cite: 537]
}