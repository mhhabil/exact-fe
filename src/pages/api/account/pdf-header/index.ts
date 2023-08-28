import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

import { UpdateHeaderPdfConfigRequest } from '@src/modules/account/header-pdf-config/requests';
import { getToken } from '@hooks/useToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'GET' && token) {
    const params = req.query.company_code;
    const response = await axios.get(
      `${publicRuntimeConfig.env?.apiv2Url}/account/pdf-header?company_code=${params}`, {
        headers: {
          'x-token': token,
        },
      });
    return res.status(200).json({
      data: (response.data) ? response.data.data : {},
    });
  }
  if (req.method === 'POST' && token) {
    const params = UpdateHeaderPdfConfigRequest.createFromJson(req.body)
    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/account/pdf-header`,
      params,
      {...{
        headers: {
          'x-token': token,
        },
      },
      });
    return res.send({...response.data, showMessage: true});
  }
  return res.status(404).json({ error: 'not found' });
}
