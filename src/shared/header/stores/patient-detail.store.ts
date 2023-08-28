import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAppRequest } from '@shared/request';
import { PatientInformationService } from '@shared/header/services';

export const fetchPatientDetail = createAsyncThunk(
  'patientDetail/fetchPatientDetail',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await PatientInformationService().getDetail(option);
    return data.data;
  },
);

export const fetchMedsRpo = createAsyncThunk(
  'patientDetail/fetchMedsRpo',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await PatientInformationService().getMedsRpo(option);
    return data.data;
  },
);

const initialState: {
  patientDetail: any | undefined,
  meds: Array<string> | undefined,
} = {
  patientDetail: undefined,
  meds: undefined,
}

export const PatientDetailSlice = createSlice({
  name: 'patientDetail',
  initialState,
  reducers: {
    handlePatientDetail: (state, action) => {
      state.patientDetail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPatientDetail.fulfilled, (state, action) => {
      state.patientDetail = action.payload;
    });

    builder.addCase(fetchMedsRpo.fulfilled, (state, action) => {
      state.meds = action.payload;
    });
  },
});

export const {
  handlePatientDetail,
} = PatientDetailSlice.actions;

export default PatientDetailSlice.reducer;
