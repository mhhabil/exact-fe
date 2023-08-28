import type { NextApiRequest, NextApiResponse } from 'next';
import AES from 'crypto-js/aes';
import axios from 'axios';
import enc from 'crypto-js/enc-utf8';
import getConfig from 'next/config';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  let { idCetak } = req.query;
  const { publicRuntimeConfig } = getConfig();
  if ((typeof idCetak === 'string') && publicRuntimeConfig.env && publicRuntimeConfig.env.secretKey) {
    idCetak = idCetak.replace(/pluss/g, '+');
    const path = (AES.decrypt(idCetak, publicRuntimeConfig.env.secretKey)).toString(enc);
    const url = `${publicRuntimeConfig.env.pdfUrl}/${path}`;
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/pdf',
      },
    });
    res.setHeader('Content-Type', 'application/pdf');
    return res.send(response.data);
  }
  return res.status(404).json({ errors: 'Not found' });
}
