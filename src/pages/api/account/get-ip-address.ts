import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  if (req.method === 'GET') {
    const response = await axios.get(
      `https://api.ipify.org?format=json`);
    return res.status(200).json({
      data: (response.data) ? response.data : {},
    });
  }
  return res.status(404).json({ error: 'not found' });
}
