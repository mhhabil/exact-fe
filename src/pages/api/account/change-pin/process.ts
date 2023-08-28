import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

import { ChangePinRequest } from '@modules/account/change-pin/requests';
import { getToken } from '@hooks/useToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'POST' && token) {
    const params = ChangePinRequest.createFromJson(req.body).normalize();
    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/account/pin-process`,
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
