import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import getConfig from 'next/config';

import { getToken } from "@src/utility/hooks/useToken";
import { UpdatePostoperativeInstructionsRequest } from "@src/modules/operating-room/Postoperative Instructions/requests";

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse,

) {
  const token = getToken(req.headers.authorization);
  const {publicRuntimeConfig} = getConfig();
  if (req.method === 'POST' && token) {
    const params = UpdatePostoperativeInstructionsRequest.createFromJson(req.body);
    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/ok/instruksi-pasca-bedah-rajal-process`,
      params,
      {...{
        headers: {
          'x-token': token,
        },
      },
      });
    return res.status(200).json({...response.data, showMessage: true});
  }
  return res.status(404).json({ error: 'not found' });
}
