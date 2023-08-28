import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PerioperativeNursingRecordsModel } from "../models/perioperative-nursing-records.model";
import { PerioperativeNursingRecordsService } from "../services";
import { IAppRequest } from "@src/shared/request";

export const fetchPerioperativeNursingRecord = createAsyncThunk(
  'perioperativeNursingRecord/fetchPerioperativeNursingRecord',
  async (option: IAppRequest): Promise<any> => {
    const {data} = await PerioperativeNursingRecordsService().show(option);
    return data.data;
  },
);

export const fetchPerioperativeNursingRecordPdf = createAsyncThunk(
  'perioperativeNursingRecord/fetchPerioperativeNursingRecordPdf',
  async (option: IFindPdfRequest): Promise<any>  => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
);

const initialState: {
    perioperativeNursingRecord: PerioperativeNursingRecordsModel | undefined,
    pdf:  PdfModel | undefined,
} = {
    perioperativeNursingRecord:  undefined,
    pdf: undefined,
}

export const PerioperativeNursingRecordsSlice = createSlice({
  name: 'perioperativeNursingRecord',
  initialState,
  reducers: {
    handleoperioperativeNursingRecord: (state, action) => {
      state.perioperativeNursingRecord = new  PerioperativeNursingRecordsModel(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPerioperativeNursingRecord.fulfilled, (state, action) => {
      state.perioperativeNursingRecord = new PerioperativeNursingRecordsModel(action.payload);
    });
    builder.addCase(fetchPerioperativeNursingRecordPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
      }
    });
  },
});

export const {
  handleoperioperativeNursingRecord,
  handlePdf,
} = PerioperativeNursingRecordsSlice.actions;

export default PerioperativeNursingRecordsSlice.reducer;
