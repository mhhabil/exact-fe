import * as yup from 'yup';
import { AppRequest, IAppRequest } from "@src/shared/request";
import { ISortingRequest } from '@src/shared/request/requests/cppt-sort.request';

export interface IPacsRequest {
  emr_id: string;
  sort?: string;
}


export class PacsRequest {
  emr_id: string;
  sort?: string;

  constructor(request: IPacsRequest) {
    this.emr_id = request.emr_id;
    this.sort = request.sort;
  }

  static createFromStore(store: ISortingRequest) {
    return PacsRequest.createFromJson({
      emr_id: store.emr_id,
      sort: store.sort,
    })
  }

  static createFromJson(json: IPacsRequest) {
    return new PacsRequest(json);
  }
}

export interface IUploadPacsRequest {
  emr_id: string;
  series_date: string;
  series_time: string;
  series_description: string;
  modality_id: string;
  modality_code: string;
  modality_name: string;
  operator_id: string;
  doctor_id: string;
  image: File;
  image_thumbnail: File;
}

export class UploadPacsRequest {
  emr_id: string;
  series_date: string;
  series_time: string;
  series_description: string;
  modality_id: string;
  modality_code: string;
  modality_name: string;
  operator_id: string;
  doctor_id: string;
  image: File;
  image_thumbnail: File;

  constructor(request: IUploadPacsRequest) {
    this.emr_id = request.emr_id;
    this.series_date = request.series_date;
    this.series_time = request.series_time;
    this.series_description = request.series_description;
    this.modality_id = request.modality_id;
    this.modality_code = request.modality_code;
    this.modality_name = request.modality_name;
    this.operator_id = request.operator_id;
    this.doctor_id = request.doctor_id;
    this.image = request.image;
    this.image_thumbnail = request.image_thumbnail;
  }

  static schema() {
    return yup.object().shape({
      dicom_instance: yup.array().of(yup.object().shape({
        series_description: yup.string().required(),
        modality_id: yup.object().shape({
          value: yup.string().required(),
          label: yup.string().required(),
        }),
        modality_code: yup.string(),
        modality_name: yup.string(),
        operator_id: yup.object().shape({
          value: yup.string().required(),
          label: yup.string().required(),
        }),
        doctor_id: yup.object().shape({
          value: yup.string().required(),
          label: yup.string().required(),
        }),
      })),
    })
  }

  static createFromJson(json: IUploadPacsRequest) {
    return new UploadPacsRequest(json);
  }
}

export interface IDeletePacs {
  emr_id: string;
  SOPInstanceUID: string;
}

export class DeletePacs {
  emr_id: string;
  SOPInstanceUID: string;

  constructor(req: IDeletePacs) {
    this.emr_id = req.emr_id;
    this.SOPInstanceUID = req.SOPInstanceUID;
  }

  static createFromJson(json: IDeletePacs) {
    return new DeletePacs(json);
  }
}

export interface IGenerateDicom {
  emr_id: string;
  StudyInstanceUID: string;
  SeriesInstanceUID: string;
  SOPInstanceUID: string;
  nik: string;
}

export class GenerateDicom {
  emr_id: string;
  StudyInstanceUID: string;
  SeriesInstanceUID: string;
  SOPInstanceUID: string;
  nik: string;

  constructor(req: IGenerateDicom) {
    this.emr_id = req.emr_id;
    this.StudyInstanceUID = req.StudyInstanceUID;
    this.SeriesInstanceUID = req.SeriesInstanceUID;
    this.SOPInstanceUID = req.SOPInstanceUID;
    this.nik = req.nik;
  }

  static createFromJson(json: IGenerateDicom) {
    return new GenerateDicom(json);
  }
}
