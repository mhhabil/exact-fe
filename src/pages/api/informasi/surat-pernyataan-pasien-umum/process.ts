import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import getConfig from 'next/config';

import { getToken } from "@src/utility/hooks/useToken";
import { UpdateGeneralPatientStatementRequest } from "@src/modules/information/general-patient-statement/requests/update-general-patient-statement.request";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const {publicRuntimeConfig} =  getConfig();
  if (req.method === 'POST' && token) {
    const params = UpdateGeneralPatientStatementRequest.createFromJson(req.body);
    const response = await axios.post(
      `${publicRuntimeConfig.env.apiv2Url}/informasi/surat-pernyataan-umum-process`,
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
