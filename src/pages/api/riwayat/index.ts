import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

import { HistoryRequest } from '@modules/history/requests';
import { getToken } from '@hooks/useToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'POST' && token) {
    const params = HistoryRequest.createFromJson(req.body);
    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiUrl}/pasien/list-daftar-berobat`,
      params,
      {...{
        headers: {
          'x-token': token,
        },
      },
      });
    const newResponse = {
      data: response.data.data,
      currentPage: params.getCurrentPage(),
      totalPage: params.calculateTotalPage(response.data.data.length),
    }
    return res.status(200).json({
      data: (response.data) ? newResponse : {},
    });
  }
  return res.status(404).json({ error: 'not found' });
}
