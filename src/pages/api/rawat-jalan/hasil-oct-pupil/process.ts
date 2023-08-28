import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

import { UpdatePupilOCTResultRequest } from '@modules/outpatient/pupil-oct-result/requests';
import { getToken } from '@hooks/useToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'POST' && token) {
    const params = UpdatePupilOCTResultRequest.createFromJson(req.body).normalize();

    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiUrl}/rawat-jalan/pemeriksaan-oct-glaukoma-process`,
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
