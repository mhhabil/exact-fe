import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

import { HaisSurveillanceInfectionFormRequest } from '@src/modules/inpatient/hais-infection-surveillance/requests';
import { getToken } from '@hooks/useToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'POST' && token) {
    const params = HaisSurveillanceInfectionFormRequest.createFromJson(req.body)
    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/ok/surveilans-infeksi-hais-process`,
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