import { IPatientResponseModel, ITreatmentModel } from '@modules/site/patient-list/models';
import { PatientFilterRequest, TreatmentFilterRequest } from '@modules/site/patient-list/requests';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PatientService } from '@modules/site/patient-list/services';
import { TreatmentService } from '@shared/treatment';

export const fetchPatients = createAsyncThunk(
  'patient/fetchPatients',
  async (option: PatientFilterRequest): Promise<IPatientResponseModel | undefined> => {
    const { data } = await PatientService().paginate(option);
    return data.data;
  },
);

export const fetchConsultationPatients = createAsyncThunk(
  'patient/fetchConsultationPatients',
  async (option: PatientFilterRequest): Promise<IPatientResponseModel | undefined> => {
    const { data } = await PatientService().paginateConsultation(option);
    return data.data;
  },
);

export const fetchTreatments = createAsyncThunk(
  'patient/fetchTreatments',
  async (option: TreatmentFilterRequest): Promise<ITreatmentModel[]> => {
    const { data } = await PatientService().getPaginatedTreatments(option);
    return data.data;
  },
);

export const fetchLastTreatment = createAsyncThunk(
  'patient/fetchLastTreatment',
  async (option: TreatmentFilterRequest): Promise<ITreatmentModel> => {
    const { data } = await PatientService().getLastTreatment(option);
    return data.data
  },
);

const initialState: {
  filter: PatientFilterRequest,
  patients: IPatientResponseModel | undefined,
  consultPatients: IPatientResponseModel | undefined,
  selectedPatient: any,
  treatments: ITreatmentModel[],
  treatment: ITreatmentModel | undefined,
  selectPatientModal: boolean,
} = {
  filter: PatientFilterRequest.createFromJson({}),
  patients: undefined,
  consultPatients: undefined,
  selectedPatient: undefined,
  treatments: [],
  treatment: undefined,
  selectPatientModal: false,
}

export const PatientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    handleFilter: (state, action) => {
      state.filter = action.payload;
    },
    handleConsultPatients: (state, action) => {
      state.consultPatients = action.payload;
    },
    handlePatients: (state, action) => {
      state.patients = action.payload;
    },
    handleSelectedPatient: (state, action) => {
      state.selectedPatient = action.payload;
      if (!action.payload) {
        state.treatments = [];
      }
    },
    handleTreatments: (state, action) => {
      state.treatments = action.payload;
    },
    handleTreatment: (state, action) => {
      state.treatment = action.payload;
      if (action.payload) {
        state.selectedPatient = undefined;
        state.treatments = [];
        TreatmentService().set(action.payload);
      } else {
        TreatmentService().destroy();
      }
    },
    handleSelectPatientModal: (state, action) => {
      state.selectPatientModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchConsultationPatients.fulfilled, (state, action) => {
      state.consultPatients = action.payload;
    });
    builder.addCase(fetchPatients.fulfilled, (state, action) => {
      state.patients = action.payload;
    });
    builder.addCase(fetchTreatments.fulfilled, (state, action) => {
      state.treatments = action.payload;
    });
    builder.addCase(fetchLastTreatment.fulfilled, (state, action) => {
      state.treatment = action.payload;
      if (action.payload) {
        state.selectedPatient = undefined;
        state.treatments = [];
        TreatmentService().set(action.payload);
      } else {
        TreatmentService().destroy();
      }
    });
  },
});

export const {
  handleConsultPatients,
  handleFilter,
  handlePatients,
  handleSelectedPatient,
  handleTreatments,
  handleTreatment,
  handleSelectPatientModal,
} = PatientSlice.actions;

export default PatientSlice.reducer;
