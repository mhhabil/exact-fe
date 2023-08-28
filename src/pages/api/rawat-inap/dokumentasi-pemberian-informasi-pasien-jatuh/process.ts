import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import getConfig from 'next/config';

import { getToken } from "@src/utility/hooks/useToken";
import { UpdateDocumentationOfFallRiskPatientRequest } from "@src/modules/inpatient/documentation-of-fall-risk-patient/requests";

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse,

) {
  const token =  getToken(req.headers.authorization);
  const {publicRuntimeConfig} = getConfig();
  if (req.method === 'POST' && token) {
    const params = UpdateDocumentationOfFallRiskPatientRequest.createFromJson(req.body);
    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/rawat-inap/pemberian-informasi-resiko-pasien-process`,
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
