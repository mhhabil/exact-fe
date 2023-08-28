import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

import { AppRequest } from '@shared/request';
import { getToken } from '@hooks/useToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'POST' && token) {
    const params = AppRequest.createFromJson(req.body);
    const response = await axios.post(
      `${publicRuntimeConfig.env?.lumenUrl}/pdf/optik/resep-kacamata`,
      params,
      {...{
        headers: {
          'x-token': token,
        },
      },
      });
    return res.send(response.data);
  }
  return res.status(404).json({ error: 'not found' });
}
