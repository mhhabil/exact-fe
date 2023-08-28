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
    const params = {
      nomor_mr: null,
      id_pelayanan: null,
      kode_cabang: null,
      tipe_pasien: null,
      jenis_pelayanan: null,
      id_dokter: null,
      no_sep: null,
    };
    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/account/pin-form`,
      params,
      {...{
        headers: {
          'x-token': token,
        },
      },
      });
    return res.status(200).json({
      data: (response.data) ? response.data.data : {},
    });
  }
  return res.status(404).json({ error: 'not found' });
}
