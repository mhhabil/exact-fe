import { CreatePreliminaryCppt, UpdatePreliminaryCppt } from '@src/modules/outpatient/doctor-preliminary-study/requests/update-doctor-preliminary-study.request';
import type { NextApiRequest, NextApiResponse } from 'next';
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
    const { ID } = req.body;
    const params = (!ID) ? CreatePreliminaryCppt.createFromJson(req.body).normalize() : UpdatePreliminaryCppt.createFromJson(req.body).normalize();

    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/cppt/process`,
      params,
      {...{
        headers: {
          'x-token': token,
        },
      },
      });
    return res.status(200).json(response.data);
  }
  return res.status(404).json({ error: 'not found' });
}
