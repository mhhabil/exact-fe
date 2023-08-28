import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import getConfig from 'next/config';

import { getToken } from "@src/utility/hooks/useToken";
import { UpdateSummaryOfHospitalizedPatientRequest } from "@src/modules/inpatient/summary-of-hospitalized-patients/requests";

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse,

) {
  const token = getToken(req.headers.authorization);
  const {publicRuntimeConfig} = getConfig();
  if (req.method === 'POST' && token) {
    const params = UpdateSummaryOfHospitalizedPatientRequest.createFromJson(req.body);
    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/rawat-inap/resume-pasien-pulang-process`,
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
