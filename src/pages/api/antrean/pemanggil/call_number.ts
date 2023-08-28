import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';
import { getToken } from '@hooks/useToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const { publicRuntimeConfig } = getConfig();
  const token = getToken(req.headers.authorization);
  if (!token) return;
  if (req.method === 'POST') {
    const response = await axios.post(`${publicRuntimeConfig.env?.apiv2Url}/queue/call_number`,
      req.body,
      {...{
        headers: {
          'x-token': token,
        },
      },
      },
    );
    return res.status(200).json(response.data);
  }
  return res.status(404).json({ error: 'not found' });
}
