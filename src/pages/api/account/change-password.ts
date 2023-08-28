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
  if (req.method === 'POST' && token) {
    const { old_password, new_password, confirm_password } = req.body;
    try {
      const response = await axios.post(
        `${publicRuntimeConfig.env?.simrsUrl}/user/change_password`,
        {
          old_password,
          new_password,
          confirm_password,
        }, {
          headers: {
            'x-token': token,
          },
        });
      return res.status(200).json(response.data);
    } catch (err: any) {
      const { response } = err;
      return res.status(400).json({ error: response?.data?.message ?? 'Something went wrong' });
    }
  }
  return res.status(404).json({ error: 'not found' });
}
