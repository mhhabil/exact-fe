import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import getConfig from 'next/config';

import { UpdateApprovalOrRefusalOfAnestheticActionRequest } from "@src/modules/inpatient/inform-consent/requests/approval-or-refusal-of-anesthetic-action-request";
import { getToken } from "@src/utility/hooks/useToken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const {publicRuntimeConfig} = getConfig();
  if  (req.method === 'POST' && token) {
    const params = UpdateApprovalOrRefusalOfAnestheticActionRequest.createFromJson(req.body);
    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/rawat-inap/persetujuan-tindakan-anestesi-process`,
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
