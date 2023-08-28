import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

import { getToken } from '@hooks/useToken';
import {CreateImplementationRiskPatientsRequest} from '@modules/inpatient/implementation-risk-patients/requests/create-implementation-risk-patients.request';
import {UpdateImplementationRiskPatientsRequest} from '@modules/inpatient/implementation-risk-patients/requests/update-implementation-risk-patients.request';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'POST' && token) {
    const { ID } = req.body;
    const params = (!ID) ? CreateImplementationRiskPatientsRequest.createFromJson(req.body).normalize() : UpdateImplementationRiskPatientsRequest.createFromJson(req.body).normalize();
    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/rawat-inap/implementasi-pasien-resiko-jatuh-process`,
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
