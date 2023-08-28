import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

import { CreateHaisSurveillanceInfectionListRequest, UpdateHaisSurveillanceInfectionListRequest } from '@src/modules/inpatient/hais-infection-surveillance/requests';
import { getToken } from '@hooks/useToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'POST' && token) {
    const { id } = req.body;
    const params = (!id) ? CreateHaisSurveillanceInfectionListRequest.createFromJson(req.body) : UpdateHaisSurveillanceInfectionListRequest.createFromJson(req.body);

    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/rawat-inap/infeksi-daerah-operasi-process`,
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
