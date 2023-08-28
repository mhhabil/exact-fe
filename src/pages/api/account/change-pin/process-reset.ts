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
    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/account/pin-process-reset`,
      {},
      {...{
        headers: {
          'x-token': token,
        },
      },
      });
    return res.status(200).json({
      data: (response.data) ? response.data.data : {},
      showMessage: true,
    });
  }
  return res.status(404).json({ error: 'not found' });
}
