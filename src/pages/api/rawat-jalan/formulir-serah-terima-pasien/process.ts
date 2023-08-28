import type { NextApiRequest, NextApiResponse } from "next";
import axios, { Axios } from "axios";
import getConfig from 'next/config';

import { UpdatePatientHandoverFormRequest } from "@src/modules/outpatient/patient-handover-form/requests";
import { getToken } from "@src/utility/hooks/useToken";

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse,

) {
  const token = getToken(req.headers.authorization);
  const {publicRuntimeConfig} = getConfig();
  if  (req.method === 'POST' && token) {
    const params = UpdatePatientHandoverFormRequest.createFromJson(req.body);
    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/rawat-jalan/serah-terima-pasien-process`,
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
