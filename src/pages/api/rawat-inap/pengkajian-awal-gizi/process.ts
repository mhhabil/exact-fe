import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

import { UpdateInitialNutritionalAssessmentRequest } from '@modules/inpatient/initial-nutritional-assessment/requests/update-initial-nutritional-assessment.request';
import { getToken } from '@hooks/useToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'POST' && token) {
    const params = UpdateInitialNutritionalAssessmentRequest.createFromJson(req.body);
    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/gizi/pengkajian-awal-process`,
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
