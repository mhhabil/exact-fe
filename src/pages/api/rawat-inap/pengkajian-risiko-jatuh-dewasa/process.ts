import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

import { getToken } from '@hooks/useToken';
import {CreateFallRiskAssessementAdultRequest} from '@modules/inpatient/fall-risk-assessement-adult/requests/create-fall-risk-assessement-adult.request';
import {UpdateFallRiskAssessementAdultRequest} from '@modules/inpatient/fall-risk-assessement-adult/requests/update-fall-risk-assessement-adult.request';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'POST' && token) {
    const { ID } = req.body;
    const params = (!ID) ? CreateFallRiskAssessementAdultRequest.createFromJson(req.body).normalize() : UpdateFallRiskAssessementAdultRequest.createFromJson(req.body).normalize();
    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/rawat-inap/pengkajian-resiko-jatuh-dewasa-process`,
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
