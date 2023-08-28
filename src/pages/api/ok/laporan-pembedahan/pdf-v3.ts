import type { NextApiRequest, NextApiResponse } from 'next';
import { SurgeryReportPdfRequestTov3 } from '@src/modules/operating-room/surgery-report/requests/surgery-report-general.request';
import axios from 'axios';
import getConfig from 'next/config';

import { getToken } from '@hooks/useToken';
import {PdfSurgeryReportRequest} from '@modules/operating-room/surgery-report/requests/pdf-surgery-report.request';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'POST' && token) {
    // const params = SurgeryReportPdfRequestTov3.createFromJson(req.body);
    const params = PdfSurgeryReportRequest.createFromJson(req.body);
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
    // return res.send(response.data);
    return res.status(200).json(response.data);
  }
  return res.status(404).json({ error: 'not found' });
}
