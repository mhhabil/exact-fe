import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

import { PDFDashFilter } from '@src/modules/medical-record/pdf-dashboard/requests';
import { getToken } from '@hooks/useToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const { publicRuntimeConfig } = getConfig();
  const token = getToken(req.headers.authorization);
  if (req.method === 'POST' && token) {
    const params = PDFDashFilter.createFromJson(req.body);
    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/file/pdf/dash-item`,
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
