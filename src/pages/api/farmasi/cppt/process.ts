import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import getConfig from 'next/config';

import { getToken } from "@src/utility/hooks/useToken";
import { CreateCpptPharmacyRequest } from "@src/modules/pharmacy/cppt/requests/create-cppt-pharmacy.request";
import { UpdateCpptPharmacyRequest } from "@src/modules/pharmacy/cppt/requests/update-cppt-pharmacy.request";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,

) {
  const token = getToken(req.headers.authorization);
  const {publicRuntimeConfig} = getConfig();
  if (req.method === 'POST' && token) {
    const { ID } = req.body;
    const params = (!ID) ? CreateCpptPharmacyRequest.createFromJson(req.body).normalize() : UpdateCpptPharmacyRequest.createFromJson(req.body).normalize();
    const response = await axios.post(
      `${publicRuntimeConfig.env?.apiv2Url}/cppt/process`,
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
