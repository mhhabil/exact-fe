import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DischargePlanningModel } from "../models/discharge-planning-models";
import { DischargePlanningService } from "../services";
import { IAppRequest } from "@src/shared/request";

export const fetchDischargePlanning = createAsyncThunk(
  'dischargePlanning/fetchDischargePlanning',
  async (option: IAppRequest): Promise<any> => {
    const {data} = await DischargePlanningService().show(option);
    return data.data;
  },
);

export const fetchDischargePlanningPdf = createAsyncThunk(
  'dischargePlanning/fetchDischargePlanningPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
)

const initialState: {
  dischargePlanning: DischargePlanningModel | undefined,
  pdf: PdfModel | undefined,
} = {
  dischargePlanning: undefined,
  pdf: undefined,
}

export const DischargePlanningSlice = createSlice({
  name: 'dischargePlanning',
  initialState,
  reducers: {
    handleDischargePlanning: (state, action) => {
      state.dischargePlanning = new DischargePlanningModel(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDischargePlanning.fulfilled, (state, action) => {
      state.dischargePlanning = new DischargePlanningModel(action.payload);
    });
    builder.addCase(fetchDischargePlanningPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
      }
    });
  },
});

export const {
  handleDischargePlanning,
  handlePdf,
} = DischargePlanningSlice.actions;

export default DischargePlanningSlice.reducer;
