import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const { urlImage } = req.query;
  if (urlImage && typeof urlImage === 'string') {
    const response = await axios.get(urlImage, {
      responseType: 'arraybuffer',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'image/png',
      },
    });
    res.setHeader('Content-Type', 'image/png');
    return res.send(response.data);
  }
  return res.status(404).json({ errors: 'Not found' });
}
