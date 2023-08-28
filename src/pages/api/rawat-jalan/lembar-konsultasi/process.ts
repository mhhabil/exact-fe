import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

import { CreateConsultationSheetRequest, UpdateConsultationSheetRequest } from '@src/modules/outpatient/consultation-sheet/requests';
import { getToken } from '@hooks/useToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'POST' && token) {
    const { id } = req.body;
    const params = (!id) ? CreateConsultationSheetRequest.createFromJson(req.body) : UpdateConsultationSheetRequest.createFromJson(req.body);

    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/konsultasi/lembar-konsultasi-process`,
      params,
      {...{
        headers: {
          'x-token': token,
        },
      },
      });
    return res.status(200).json({...response.data, showMessage: true});
  }
  return res.status(404).json({ error: 'not found' });
}
