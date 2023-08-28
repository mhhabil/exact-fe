import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SummaryOfHospitalizedPatientModel } from "../models/summary-of-hospitalized-patient-models";
import { SummaryOfHospitalizedPatientService } from "../services";
import { IAppRequest } from "@src/shared/request";

export const fetchSummaryOfHospitalizedPatient = createAsyncThunk(
  'summaryOfHospitalizedPatient/fetchSummaryOfHospitalizedPatient',
  async (option: IAppRequest): Promise<any> => {
    const {data} =  await SummaryOfHospitalizedPatientService().show(option);
    return data.data;
  },
);

export const fetchSummaryOfHospitalizedPatientPdf =  createAsyncThunk(
  'summaryOfHospitalizedPatient/fetchSummaryOfHospitalizedPatientPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
);

const initialState: {
  summaryOfHospitalizedPatient: SummaryOfHospitalizedPatientModel | undefined,
  pdf: PdfModel | undefined,
} = {
  summaryOfHospitalizedPatient: undefined,
  pdf: undefined,
}

export const SummaryOfHospitalizedPatientSlice = createSlice({
  name: 'summaryOfHospitalizedPatient',
  initialState,
  reducers: {
    handleSummaryOfHospitalizedPatient: (state, action) => {
      state.summaryOfHospitalizedPatient = new SummaryOfHospitalizedPatientModel(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSummaryOfHospitalizedPatient.fulfilled, (state,  action) => {
      state.summaryOfHospitalizedPatient = new SummaryOfHospitalizedPatientModel(action.payload);
    });
    builder.addCase(fetchSummaryOfHospitalizedPatientPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf =  action.payload;
      }
    });
  },
});

export const {
  handleSummaryOfHospitalizedPatient,
  handlePdf,
} = SummaryOfHospitalizedPatientSlice.actions;

export default SummaryOfHospitalizedPatientSlice.reducer;
