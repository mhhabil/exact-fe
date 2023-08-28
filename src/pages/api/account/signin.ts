import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'POST') {
    const { username, password } = req.body;
    try {
      const response = await axios.post(
        `${publicRuntimeConfig.env?.simrsUrl}/user/loginPortalNew`,
        {
          username,
          password,
        });
      return res.status(200).json(response.data);
    } catch (err: any) {
      const { response } = err;
      return res.status(400).json({ error: response?.data?.message ?? 'Something went wrong' });
    }
  }
  return res.status(404).json({ error: 'not found' });
}
