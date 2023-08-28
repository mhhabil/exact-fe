import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

import { getToken } from '@hooks/useToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'GET' && token) {
    const companyCode = req.query.company_code;
    const response = await axios.get(
      `${publicRuntimeConfig.env?.apiv2Url}/simrs/i-care-company?company_code=${companyCode}`,
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
