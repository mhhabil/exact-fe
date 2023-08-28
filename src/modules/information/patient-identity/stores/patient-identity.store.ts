import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAppRequest } from '@shared/request';
import { PatientIdentityModel } from '@modules/information/patient-identity/models/patient-identity.model';
import { PatientIdentityService } from '@modules/information/patient-identity/services';

export const fetchPatientIdentity = createAsyncThunk(
  'patientIdentity/fetchPatientIdentity',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await PatientIdentityService().show(option);
    return data.data;
  },
);

export const fetchPatientIdentityPdf = createAsyncThunk(
  'patientIdentity/fetchPatientIdentityPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
);

const initialState: {
  patientIdentity: PatientIdentityModel | undefined;
  pdf: Array<PdfModel> | undefined,
} = {
  patientIdentity: undefined,
  pdf: undefined,
}

export const PatientIdentitySlice = createSlice({
  name: 'patientIdentity',
  initialState,
  reducers: {
    handlePatientIdentity: (state, action) => {
      state.patientIdentity = action.payload;
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPatientIdentity.fulfilled, (state, action) => {
      state.patientIdentity = new PatientIdentityModel(action.payload);
    });
    builder.addCase(fetchPatientIdentityPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
        // state.pdf = new PdfModel(action.payload);
      }
    });
  },
});

export const {
  handlePatientIdentity,
  handlePdf,
} = PatientIdentitySlice.actions;

export default PatientIdentitySlice.reducer;
