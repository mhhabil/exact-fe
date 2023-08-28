import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

import { getToken } from '@hooks/useToken';
import {CreateDailyEducationRequest} from '@modules/general/daily-education/requests/create-daily-education.request';
import {UpdateDailyEducationRequest} from '@modules/general/daily-education/requests/update-daily-education.request';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'POST' && token) {
    const { ID } = req.body;
    const params = (!ID) ? CreateDailyEducationRequest.createFromJson(req.body).normalize() : UpdateDailyEducationRequest.createFromJson(req.body).normalize();

    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/edukasi-harian/process`,
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
