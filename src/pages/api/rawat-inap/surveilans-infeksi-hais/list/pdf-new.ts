import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

import { RootPDFRequest } from '@src/shared/request/requests/cppt-pdf.request';
import { getToken } from '@hooks/useToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'POST' && token) {
    const params = RootPDFRequest.createFromJson(req.body);
    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/file/pdf/generate_v3`,
      params,
      {...{
        headers: {
          'x-token': token,
        },
      },
      });
    if (response.status !== 200) {
      return res.send('error')
    }
    // return res.send({...response.data, showMessage: true});
    return res.status(200).json(response.data);
  }
  return res.status(404).json({ error: 'not found' });
}
