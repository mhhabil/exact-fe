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
    const response = await axios.post(`${publicRuntimeConfig.env?.apiv2Url}/queue/places_available`, { company_code, station_id, service_type },
      {...{
        headers: {
          'x-token': token,
        },
      },
      },
    );
    const data = response.data.data;

    if (data && Array.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        if (!!data[i].QueueStationNext.toLowerCase().includes('dokter')) {
          const resp = await axios.post(`${publicRuntimeConfig.env?.apiv2Url}/queue/places`, {
            company_code, station_id: data[i].QueueStationNext, service_type: '',
          },
          {...{
            headers: {
              'x-token': token,
            },
          },
          },
          )
          const doctor = resp.data.data;
          data[i].is_dokter = true;
          data[i].DoctorStations = doctor;
        } else {
          data[i].is_dokter = false;
        }
      }
    }
    return res.status(200).json(data);
  }
  return res.status(404).json({ error: 'not found' });
}
