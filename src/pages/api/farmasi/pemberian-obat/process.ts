import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

import { UpdateRecordsOfMedicationOnTime } from '@modules/pharmacy/records-of-medication-on-time/requests'
import { getToken } from '@hooks/useToken';
import { CreateRecordsOfMedicationOnTime } from '@src/modules/pharmacy/records-of-medication-on-time/requests/update-records-of-medication-on-time.request';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'POST' && token) {
    const params = req.body.id ? UpdateRecordsOfMedicationOnTime.createFromJson(req.body) : CreateRecordsOfMedicationOnTime.createFromJson(req.body);
    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/farmasi/pemberian-obat-beri-obat-process`,
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
