import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

import getConfig from 'next/config';
import { getToken } from '@hooks/useToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const token = getToken(req.headers.authorization);
  if (req.method === 'POST' && token) {
    const { company_code, station_id, place_id } = req.body;
    const { publicRuntimeConfig } = getConfig();
    const response = await axios.post(`${publicRuntimeConfig.env.apiv2Url}/queue/wait_list_place_total`, { company_code, station_id, place_id },
      {...{
        headers: {
          'x-token': token,
        },
      },
      },
    );
    let { data } = response.data;
    if (data && Array.isArray(data)) {
      data = data.filter((d: any) => d.Code === 200);
    } else {
      data = [];
    }
    return res.status(200).json(data);
  }
  return res.status(404).json({ error: 'not found' });
}
