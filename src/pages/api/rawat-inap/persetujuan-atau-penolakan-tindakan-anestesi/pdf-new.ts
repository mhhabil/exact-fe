import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import getConfig from 'next/config';

import { PdfInformConsentRequest } from "@src/modules/outpatient/inform-consent/requests/pdf-inform-consent.request";
import { getToken } from "@src/utility/hooks/useToken";
import { PdfApprovalOrRefusalOfAnestheticActionRequest } from "@src/modules/inpatient/inform-consent/requests/pdf-approval-or-refusal-of-anesthetic-action-request";
import { CreatePDFRequest } from "@src/shared/pdf/requests/create-pdf.request";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const { publicRuntimeConfig } = getConfig();
  if (req.method === 'POST' && token) {
    const params = CreatePDFRequest.createFromJson(req.body);
    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/file/pdf/generate_v3`,
      params,
      {...{
        headers: {
          'x-token': token,
        },
      },
      });
    if (response.status !== 200) {
      return res.send('error')
    }
    // return res.send({...response.data, showMessage: true});
    return res.status(200).json(response.data);
  }
  return res.status(404).json({ error: 'not found' });
}
