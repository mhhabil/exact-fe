import type { NextApiRequest,  NextApiResponse } from "next";
import axios from "axios";
import getConfig from 'next/config';

import { getToken } from "@src/utility/hooks/useToken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const {publicRuntimeConfig} = getConfig();
  if (req.method === 'GET' && token) {
    const {emr_id} = req.query;
    const response = await axios.get(
      `${publicRuntimeConfig.env?.apiv2Url}/informasi/surat-pernyataan-bpjs-index?emr_id=${emr_id}`,
      {...{
        headers: {
          'x-token': token,
        },
      },
      });
    return res.status(200).json(response.data);
  }
  return res.status(404).json({ error: 'not found' });
}
