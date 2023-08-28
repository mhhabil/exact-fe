import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

import { getToken } from '@hooks/useToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const { publicRuntimeConfig } = getConfig();
  const token = getToken(req.headers.authorization);
  if (req.method === 'POST' && token) {
    const { company_code, station_id, service_type } = req.body;
    const response = await axios.post(`${publicRuntimeConfig.env?.apiv2Url}/queue/places`, { company_code, station_id, service_type },
      {...{
        headers: {
          'x-token': token,
        },
      },
      },
    );
    let positions = response.data.data;
    if (service_type === 'UMUM') {
      positions = response.data.data.filter((position: any) => {
        return !position.QueuePlaceId.includes('BPJS');
      });
    } else if (service_type === 'BPJS') {
      positions = response.data.data.filter((position: any) => {
        return !position.QueuePlaceId.includes('UMUM');
      });
    }
    return res.status(200).json(positions);
  }
  return res.status(404).json({ error: 'not found' });
}
