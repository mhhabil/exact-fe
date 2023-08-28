import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

import { getToken } from '@hooks/useToken';
import { CreateCpptEmergencyRoomNurseRequest } from '@src/modules/emergency-room/cppt/requests/create-cppt-emergency-room-nurse.request';
import { UpdateCpptEmergencyRoomNurseRequest } from '@src/modules/emergency-room/cppt/requests/update-cppt-emergency-room-nurse.request';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'POST' && token) {
    const { ID } = req.body;
    const params = (!ID) ? CreateCpptEmergencyRoomNurseRequest.createFromJson(req.body).normalize() : UpdateCpptEmergencyRoomNurseRequest.createFromJson(req.body).normalize();

    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/cppt/process`,
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
