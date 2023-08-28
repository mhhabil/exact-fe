import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PerioperativeNursingRecordRajalsModel } from "../models/perioperative-nursing-records-rajal-model";
import { PerioperativeNursingRecordsRajalService } from "../services";
import { IAppRequest } from "@src/shared/request";

export const fetchPerioperativeNursingRecordRajal = createAsyncThunk(
  'perioperativeNursingRecordRajal/fetchPerioperativeNursingRecordRajal',
  async (option: IAppRequest): Promise<any> => {
    const {data} = await PerioperativeNursingRecordsRajalService().show(option);
    return data.data;
  },
);

export const fetchPerioperativeNursingRecordRajalPdf = createAsyncThunk(
  'perioperativeNursingRecordRajal/fetchPerioperativeNursingRecordRajalPdf',
  async (option: IFindPdfRequest): Promise<any>  => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
);

const initialState: {
    perioperativeNursingRecordRajal: PerioperativeNursingRecordRajalsModel | undefined,
    pdf:  PdfModel | undefined,
} = {
    perioperativeNursingRecordRajal: undefined,
    pdf: undefined,
}

export const PerioperativeNursingRecordsRajalSlice = createSlice({
  name: 'perioperativeNursingRecordRajal',
  initialState,
  reducers: {
    handleoperioperativeNursingRecordRajal: (state, action) => {
      state.perioperativeNursingRecordRajal = new  PerioperativeNursingRecordRajalsModel(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPerioperativeNursingRecordRajal.fulfilled, (state, action) => {
      state.perioperativeNursingRecordRajal = new PerioperativeNursingRecordRajalsModel(action.payload);
    });
    builder.addCase(fetchPerioperativeNursingRecordRajalPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
      }
    });
  },
});

export const {
  handleoperioperativeNursingRecordRajal,
  handlePdf,
} = PerioperativeNursingRecordsRajalSlice.actions;

export default PerioperativeNursingRecordsRajalSlice.reducer;
