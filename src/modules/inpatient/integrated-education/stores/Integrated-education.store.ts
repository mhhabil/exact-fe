import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IntegratedEducationModel } from "../models/integrated-education.model";
import { IntegratedEducationService } from "../services";
import { IAppRequest } from "@src/shared/request";

export const fetchIntegratedEducation = createAsyncThunk(
  'integratedEducation/fetchIntegratedEducation',
  async (option: IAppRequest): Promise<any> => {
    const {data} = await IntegratedEducationService().show(option);
    return data.data;
  },
);

export const fetchIntegratedEducationPdf = createAsyncThunk(
  'integratedEducation/fetchIntegratedEducationPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
);

const initialState: {
  integratedEducation:  IntegratedEducationModel |  undefined,
  pdf: PdfModel | undefined,
} = {
  integratedEducation: undefined,
  pdf: undefined,
}

export const IntegratedEducationSlice = createSlice({
  name: 'integratedEducation',
  initialState,
  reducers: {
    handleIntegratedEducation: (state, action) => {
      state.integratedEducation = new IntegratedEducationModel(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIntegratedEducation.fulfilled, (state, action) => {
      state.integratedEducation = new IntegratedEducationModel(action.payload);
    });
    builder.addCase(fetchIntegratedEducationPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
      }
    });
  },
});

export const {
  handleIntegratedEducation,
  handlePdf,
} = IntegratedEducationSlice.actions;

export default IntegratedEducationSlice.reducer;
