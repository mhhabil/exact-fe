import type { NextApiRequest, NextApiResponse } from 'next';
import { SurgeryReportPdfRequest } from '@src/modules/operating-room/surgery-report/requests/surgery-report-general.request';
import axios from 'axios';
import getConfig from 'next/config';

import { getToken } from '@hooks/useToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'POST' && token) {
    const params = SurgeryReportPdfRequest.createFromJson(req.body);
    const response = await axios.post(
      `${publicRuntimeConfig.env?.lumenUrl}/pdf/ok/laporan-pembedahan`,
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
    // return res.send(response.data);
    return res.status(200).json(response.data);
  }
  return res.status(404).json({ error: 'not found' });
}
