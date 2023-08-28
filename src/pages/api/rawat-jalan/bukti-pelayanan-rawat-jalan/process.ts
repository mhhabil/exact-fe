import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import getConfig from 'next/config';

import { UpdateProofOfOutpatientServicesRequest } from "@src/modules/outpatient/proof-of-outpatient-services/requests";
import { getToken } from "@src/utility/hooks/useToken";

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'POST' && token) {
    const params = UpdateProofOfOutpatientServicesRequest.createFromJson(req.body).normalize();
    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/rawat-jalan/bukti-pelayanan-rawat-jalan-process`,
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