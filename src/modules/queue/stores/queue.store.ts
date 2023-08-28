import { AvailablePlaceModel, DisplayModel, IDoctorStation, WaitingPatientModel } from '@modules/queue/models';
import {
  GetAvailablePlacesOption,
  GetDisplayOption,
  GetWaitingDoctorPatientsOption,
  GetWaitingPatientsOption,
} from '@modules/queue/services/queue.service';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { QueueService } from '@modules/queue/services';

export const fetchWaitingPatients = createAsyncThunk(
  'queue/fetchWaitingPatients',
  async (option: GetWaitingPatientsOption): Promise<never[] | WaitingPatientModel[]> => {
    const { data } = await QueueService().getWaitingPatients(option);
    if (Array.isArray(data)) {
      return data.map(waitingPatient => WaitingPatientModel.createFromJson(waitingPatient));
    }
    return [];
  },
)

export const fetchWaitingDoctorPatients = createAsyncThunk(
  'queue/fetchWaitingDoctorPatients',
  async (option: GetWaitingDoctorPatientsOption): Promise<never[] | WaitingPatientModel[]> => {
    const { data } = await QueueService().getWaitingDoctorPatients(option);
    if (Array.isArray(data)) {
      return data.map(waitingPatient => WaitingPatientModel.createFromJson(waitingPatient));
    }
    return [];
  },
)

export const fetchAvailablePlaces = createAsyncThunk(
  'queue/fetchAvailablePlaces',
  async (option: GetAvailablePlacesOption) => {
    const { data } = await QueueService().getAvailablePlaces(option);
    if (Array.isArray(data)) {
      return data.map(availablePlace => new AvailablePlaceModel(availablePlace));
    }
    return [];
  },
)

export const fetchDisplay = createAsyncThunk(
  'queue/fetchDisplay',
  async (option: GetDisplayOption) => {
    const { data } = await QueueService().getDisplay(option);
    return new DisplayModel(data);
  },
)

const initialState: {
  form: {
    service: string | undefined,
    location: string | undefined,
    position: string | undefined,
  },
  services: any[],
  locations: any[],
  positions: any[],
  waitingPatients: WaitingPatientModel[],
  availablePlaces: AvailablePlaceModel[],
  display: DisplayModel | undefined,
  selectedPatient: WaitingPatientModel | undefined,
  currentPatient: WaitingPatientModel | undefined,
  socket: any,
  doctorStations: Array<IDoctorStation> | undefined,
  socketConnected: boolean,
  sortOption: string,
} = {
  form: {
    service: undefined,
    location: undefined,
    position: undefined,
  },
  services: [],
  locations: [],
  positions: [],
  waitingPatients: [],
  availablePlaces: [],
  display: undefined,
  selectedPatient: undefined,
  currentPatient: undefined,
  socket: undefined,
  doctorStations: undefined,
  socketConnected: false,
  sortOption: 'wt_tunggu',
}

export const QueueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    handleForm: (state, action) => {
      if (action.payload.service) {
        state.form = {
          service: action.payload.service,
          location: undefined,
          position: undefined,
        };
        state.positions = [];
        state.waitingPatients = [];
        state.availablePlaces = [];
        state.display = undefined;
      }
      if (action.payload.location) {
        state.form = {
          ...state.form,
          location: action.payload.location,
          position: undefined,
        };
      }
      if (action.payload.position) {
        state.form = {...state.form, position: action.payload.position};
      }
    },
    handleServices: (state, action) => {
      state.services = action.payload;
    },
    handleLocations: (state, action) => {
      state.locations = action.payload;
    },
    handlePositions: (state, action) => {
      state.positions = action.payload;
    },
    handleWaitingPatients: (state, action) => {
      state.waitingPatients = action.payload;
    },
    handleDisplay: (state, action) => {
      state.display = action.payload;
    },
    handleAvailablePlaces: (state, action) => {
      state.availablePlaces = action.payload;
    },
    handleSelectedPatient: (state, action) => {
      state.selectedPatient = action.payload;
    },
    handleCurrentPatient: (state, action) => {
      state.currentPatient = action.payload;
    },
    handleSocket: (state, action) => {
      state.socket = action.payload;
    },
    handleDoctorStations: (state, action) => {
      state.doctorStations = action.payload;
    },
    handleSocketConnected: (state, action) => {
      state.socketConnected = action.payload;
    },
    handleSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWaitingPatients.fulfilled, (state, action) => {
      state.waitingPatients = action.payload;
    });
    builder.addCase(fetchWaitingDoctorPatients.fulfilled, (state, action) => {
      state.waitingPatients = action.payload;
    });
    builder.addCase(fetchAvailablePlaces.fulfilled, (state, action) => {
      state.availablePlaces = action.payload;
    });
    builder.addCase(fetchDisplay.fulfilled, (state, action) => {
      state.display = action.payload;
    });
  },
});

export const {
  handleDoctorStations,
  handleForm,
  handleServices,
  handleLocations,
  handlePositions,
  handleWaitingPatients,
  handleDisplay,
  handleAvailablePlaces,
  handleSelectedPatient,
  handleCurrentPatient,
  handleSocket,
  handleSocketConnected,
  handleSortOption,
} = QueueSlice.actions;

export default QueueSlice.reducer;
