import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

import { BaseRecordRequest } from '@modules/account/request-mr/requests';
import { getToken } from '@hooks/useToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'POST' && token) {
    const params = BaseRecordRequest.createFromJson(req.body);
    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/request-mr/approval-history`,
      params,
      {...{
        headers: {
          'x-token': token,
        },
      },
      });
    response.data.data = {
      ...response.data.data,
      currentPage: params.getCurrentPage(),
      totalPage: params.calculateTotalPage(response.data.data.total),
    }
    return res.status(200).json({
      data: (response.data) ? response.data.data : {},
    });
  }
  return res.status(404).json({ error: 'not found' });
}
