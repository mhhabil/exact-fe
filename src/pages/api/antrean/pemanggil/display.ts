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
    const { company_code, station_id, place_id, service_type } = req.body;
    const response = await axios.post(`${publicRuntimeConfig.env?.apiv2Url}/queue/display`, { company_code, station_id, place_id, type_pelayanan: service_type },
      {...{
        headers: {
          'x-token': token,
        },
      },
      },
    );
    let display;
    if (response && response.data && response.data.data && Array.isArray(response.data.data)) {
      display = response.data.data.find((r: any) => r.Code === 200);
    }
    return res.status(200).json(display);
  }
  return res.status(404).json({ error: 'not found' });
}
