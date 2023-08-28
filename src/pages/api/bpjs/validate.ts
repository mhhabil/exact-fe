import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

import { BPJSValidateRequest } from '@src/shared/bpjs/requests';
import { getToken } from '@hooks/useToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'POST' && token) {
    const params = BPJSValidateRequest.createFromJson(req.body);
    const response = await axios.post(
      `${publicRuntimeConfig.env?.bpjsUrl}/ihs/rs/validate`,
      params,
      {...{
        headers: {
          'x-token': token,
        },
      },
      });
    return res.status(200).json({...response.data});
  }
  return res.status(404).json({ error: 'not found' });
}