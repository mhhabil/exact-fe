import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

import { AppRequest } from '@shared/request';
import { getToken } from '@hooks/useToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'POST' && token) {
    const params = AppRequest.createFromJson(req.body);
    try {
      const response = await axios.post(
        `${publicRuntimeConfig.env?.apiv2Url}/farmasi/given-meds-delete`,
        {...params, id: req.body.id},
        {...{
          headers: {
            'x-token': token,
          },
        },
        });
      return res.status(200).json(response.data);
    } catch (err: any) {
      const { response } = err;
      const errorMessage = response?.data?.message === 'med_used_error' ? 'Tidak bisa hapus data obat, Obat sudah diberikan ke pasien' : '';
      return res.status(400).json({ error: errorMessage })
    }
  }
  return res.status(404).json({ error: 'not found' });
}
