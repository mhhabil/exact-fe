import { PatientBpjsStatementFormModel, PatientBpjsStatementModel } from "../models/patient-bpjs-statement.model";
import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAppRequest } from "@src/shared/request";
import { PatientBpjsStatementService } from "../services";

const initialState: {
  patientBpjsStatement: PatientBpjsStatementModel | undefined,
  pdf: PdfModel | undefined,
} =  {
  patientBpjsStatement: undefined,
  pdf: undefined,
}

export const fetchPatientBpjsStatement = createAsyncThunk(
  'patientBpjsStatement/fetchPatientBpjsStatement',
  async (option: IAppRequest):  Promise<any> => {
    const {data} = await PatientBpjsStatementService().show(option);
    return data.data;
  },
);

export const fetchPatientBpjsStatementPdf = createAsyncThunk(
  'patientBpjsStatement/fetchPatientBpjsStatementPdf',
  async (option: any): Promise<any> => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
);

const PatientBpjsStatementSlice = createSlice({
  name: 'patientBpjsStatement',
  initialState,
  reducers: {
    handlePatientBpjsStatement: (state, action) => {
      state.patientBpjsStatement = (action.payload) ? new PatientBpjsStatementModel(action.payload) : action.payload;
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPatientBpjsStatement.fulfilled, (state, action) => {
      state.patientBpjsStatement = (action.payload) ? new PatientBpjsStatementModel(action.payload) : action.payload;
    });
    builder.addCase(fetchPatientBpjsStatementPdf.fulfilled, (state, action) => {
      state.pdf = action.payload;
    });
  },
});

export const {
  handlePatientBpjsStatement,
  handlePdf,
} = PatientBpjsStatementSlice.actions;

export default PatientBpjsStatementSlice.reducer;
