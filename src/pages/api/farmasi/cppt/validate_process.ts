import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import getConfig from 'next/config';

import { getToken } from "@src/utility/hooks/useToken";
import { ValidateCpptRoRequest } from "@src/modules/ro/cppt/requests/validate-cppt-ro.request";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const {publicRuntimeConfig} = getConfig();
  if (req.method === 'POST' && token) {
    const params = ValidateCpptRoRequest.createFromJson(req.body).normalize();

    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiUrl}/rawat-jalan/cppt-validate-process`,
      params,
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
