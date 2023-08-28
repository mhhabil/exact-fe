import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

import { getToken } from '@hooks/useToken';
import {CreateAssessmentVitalSignsRequest} from '@modules/inpatient/assessment-vital-signs/requests/create-assessment-vital-signs.request';
import {UpdateAssessmentVitalSignsRequest} from '@modules/inpatient/assessment-vital-signs/requests/update-assessment-vital-signs.request';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'POST' && token) {
    const { ID } = req.body;
    const params = (!ID) ? CreateAssessmentVitalSignsRequest.createFromJson(req.body).normalize() : UpdateAssessmentVitalSignsRequest.createFromJson(req.body).normalize();
    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/rawat-inap/asesmen-ulang-tanda-vital-process`,
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
