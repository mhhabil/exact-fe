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
    const { company_code, status, service_type } = req.body;
    const response = await axios.post(`${publicRuntimeConfig.env?.apiv2Url}/queue/stations_new`, { company_code, status },
      {...{
        headers: {
          'x-token': token,
        },
      },
      },
    );
    let locations = [];
    if (service_type === 'UMUM') {
      locations = response.data.data.filter((location: any) => {
        return !location.QueueStationId.includes('BPJS');
      });
    } else if (service_type === 'BPJS') {
      locations = response.data.data.filter((location: any) => {
        return !location.QueueStationId.includes('UMUM');
      });
    }
    return res.status(200).json(locations);
  }
  return res.status(404).json({ error: 'not found' });
}
