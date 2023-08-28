import type { NextApiRequest, NextApiResponse } from 'next';
import { AppRequest } from '@src/shared/request';
import axios from 'axios';
import getConfig from 'next/config';

import { getToken } from '@hooks/useToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  const params = AppRequest.createFromJson(req.body);
  if (req.method === 'POST' && token) {
    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiUrl}/pasien/detail`,
      params,
      {...{
        headers: {
          'x-token': token,
        },
      },
      });
    return res.status(200).json({
      data: (response.data) ? response.data.data : {},
    });
  }
  return res.status(404).json({ error: 'not found' });
}
