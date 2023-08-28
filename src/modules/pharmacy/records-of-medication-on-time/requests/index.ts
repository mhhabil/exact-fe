import { CreateGivenMeds, ICreateGivenMeds, IUpdateGivenMeds, IUpdateObat, IUpdateRecordsOfMedicationOnTime, IValidateRecords, UpdateGivenMeds, UpdateObat, UpdateRecordsOfMedicationOnTime, ValidateRecords } from '@modules/pharmacy/records-of-medication-on-time/requests/update-records-of-medication-on-time.request';

export type {
  IUpdateGivenMeds,
  ICreateGivenMeds,
  IUpdateObat,
  IUpdateRecordsOfMedicationOnTime,
  IValidateRecords,
};

export {
  UpdateGivenMeds,
  CreateGivenMeds,
  UpdateObat,
  UpdateRecordsOfMedicationOnTime,
  ValidateRecords,
}
