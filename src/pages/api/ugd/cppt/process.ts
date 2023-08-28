import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

import { CreateCpptEmergencyRoomRequest } from '@src/modules/emergency-room/cppt/requests/create-cppt-emergency-room.request';
import { UpdateCpptEmergencyRoomRequest } from '@src/modules/emergency-room/cppt/requests/update-cppt-emergency-room.request';
import { getToken } from '@hooks/useToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'POST' && token) {
    const { ID } = req.body;
    const params = (!ID) ? CreateCpptEmergencyRoomRequest.createFromJson(req.body).normalize() : UpdateCpptEmergencyRoomRequest.createFromJson(req.body).normalize();

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
