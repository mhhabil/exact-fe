import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MedicalSummaryModel } from "../models/medical-summary-model";
import { MedicalSummaryService } from "../services";
import { IAppRequest } from "@src/shared/request";

export const fetchMedicalSummary = createAsyncThunk(
  'medicalSummary/fetchMedicalSummary',
  async (option: IAppRequest): Promise<any> => {
    const {data} = await MedicalSummaryService().show(option);
    return data.data;
  },
);

export const fetchMedicalSummaryPdf = createAsyncThunk(
  'medicalSummary/fetchMedicalSummaryPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
);

const initialState: {
  medicalSummary: MedicalSummaryModel | undefined,
  pdf:  PdfModel | undefined,
} = {
  medicalSummary: undefined,
  pdf: undefined,
}

export const MedicalSummarySlice = createSlice({
  name: 'medicalSummary',
  initialState,
  reducers: {
    handleMedicalSummary: (state, action) => {
      state.medicalSummary = new MedicalSummaryModel(action.payload)
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMedicalSummary.fulfilled, (state, action) => {
      state.medicalSummary = new MedicalSummaryModel(action.payload);
    });
    builder.addCase(fetchMedicalSummaryPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
      }
    });
  },
});

export const {
  handleMedicalSummary,
  handlePdf,
} = MedicalSummarySlice.actions;

export default MedicalSummarySlice.reducer;
