import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PatientHandoverModel } from "../models/patient-handover-form-model";
import { PatientHandoverFormService } from "../services";
import { IAppRequest } from "@src/shared/request";

export const fetchPatientHandoverForm = createAsyncThunk(
  'patientHandoverForm/fetchPatientHandoverForm',
  async (option: IAppRequest): Promise<any> => {
    const {data} = await PatientHandoverFormService().show(option);
    return data.data;
  },
);

export const fetchPatientHandoverFormPdf = createAsyncThunk(
  'patientHandoverForm/fetchPatientHandoverFormPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
);

const initialState: {
    patientHandoverForm: PatientHandoverModel | undefined,
    pdf: PdfModel | undefined,
} = {
  patientHandoverForm: undefined,
  pdf: undefined,
}

export const PatientHandoverFormSlice =  createSlice({
  name: 'patientHandoverForm',
  initialState,
  reducers: {
    handlePatientHandoverForm: (state, action) => {
      state.patientHandoverForm = new PatientHandoverModel(action.payload)
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPatientHandoverForm.fulfilled, (state, action) => {
      state.patientHandoverForm = new PatientHandoverModel(action.payload);
    });
    builder.addCase(fetchPatientHandoverFormPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
      }
    });
  },
});

export const {
  handlePatientHandoverForm,
  handlePdf,
} = PatientHandoverFormSlice.actions;

export default PatientHandoverFormSlice.reducer;
