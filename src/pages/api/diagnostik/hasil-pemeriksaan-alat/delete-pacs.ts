import type { NextApiRequest, NextApiResponse } from 'next';
import { AppRequest } from '@src/shared/request';
import { DeletePacs } from '@modules/diagnostic/tool-inspection-result/requests'
import axios from 'axios';
import getConfig from 'next/config';

import { getToken } from '@hooks/useToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  const params = DeletePacs.createFromJson(req.body);
  if (req.method === 'POST' && token) {
    try {
      const response = await axios.post(
        `${publicRuntimeConfig.env?.apiv2Url}/file/dicom/delete`,
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
    } catch (err) {
      console.log(err);
    }
  }
  return res.status(404).json({ error: 'not found' });
}
