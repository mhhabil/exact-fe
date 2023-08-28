import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

import { FindPdfRequest } from '@shared/pdf';
import { getToken } from '@hooks/useToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'POST' && token) {
    const params = FindPdfRequest.createFromJson(req.body);
    // const splitted = params.form_name.split('/')
    // const formName = `${splitted[0]}-${splitted[1]}`

    // const checkLumen = await axios.get(`${publicRuntimeConfig.env?.lumenUrl}/pdf/pdf-find/${params.emr_id}/${params.job_name}`);
    // if (checkLumen.data && checkLumen.data.data) {
    //   return res.status(200).json({ data: undefined });
    // }

    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/file/pdf/find`,
      {
        emr_id: params.emr_id,
        form_name: params.form_name,
      },
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
