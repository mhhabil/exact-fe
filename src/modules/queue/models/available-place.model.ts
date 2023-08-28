export interface IDoctorStation {
  QueuePlaceId: string;
  QueuePlaceName: string;
  QueuePlaceSound: string;
}
export interface IAvailablePlaceModel {
  QueueStationName: string;
  QueueStationNext: string;
  DoctorStations: IDoctorStation[];
  is_dokter: boolean;
}

export class AvailablePlaceModel {
  QueueStationName: string;
  QueueStationNext: string;
  DoctorStations: IDoctorStation[];
  is_dokter: boolean;
  constructor(availablePlaceModel: AvailablePlaceModel) {
    this.QueueStationName = availablePlaceModel.QueueStationName;
    this.QueueStationNext = availablePlaceModel.QueueStationNext;
    this.DoctorStations = availablePlaceModel.DoctorStations;
    this.is_dokter = availablePlaceModel.is_dokter;
  }
}
