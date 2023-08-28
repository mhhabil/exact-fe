import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAppRequest } from "@src/shared/request";
import InpatientInitialNursingEarlyWarningService from "../services";
import { NursingEarlyWarningModel } from "../models/nursing-early-warning-scoring.model";

export const fetchInpatientInitialNursingEarlyWarning = createAsyncThunk(
  'inpatient/fetchInpatientInitialNursingEarlyWarning',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await InpatientInitialNursingEarlyWarningService().show(option);
    return data.data;
  },
);

export const fetchInpatientInitialNursingEarlyWarningPdf = createAsyncThunk(
  'inpatient/fetchInpatientInitialNursingEarlyWarningPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
)

const initialState: {
  nursingEarlyWarning: NursingEarlyWarningModel | undefined,
  pdf: PdfModel | undefined,
} = {
  nursingEarlyWarning: undefined,
  pdf: undefined,
}

export const NursingEarlyWarningSlice = createSlice({
  name: 'nursingEarlyWarning',
  initialState,
  reducers: {
    handleNursingEarlyWarning: (state, action) => {
      state.nursingEarlyWarning = new NursingEarlyWarningModel(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInpatientInitialNursingEarlyWarning.fulfilled, (state, action) => {
      state.nursingEarlyWarning = new NursingEarlyWarningModel(action.payload);
    });
    builder.addCase(fetchInpatientInitialNursingEarlyWarningPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
        // state.pdf = new PdfModel(action.payload);
      }
    });
  },
});

export const {
  handleNursingEarlyWarning,
  handlePdf,
} = NursingEarlyWarningSlice.actions;

export default NursingEarlyWarningSlice.reducer;
