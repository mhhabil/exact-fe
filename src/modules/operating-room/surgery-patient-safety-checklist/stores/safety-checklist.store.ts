import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SafetyChecklist } from "../models/safety-checklist.model";
import { SafetyChecklistService } from "../services";
import { IAppRequest } from "@src/shared/request";

export const fetchSafetyChecklist = createAsyncThunk(
  'safetyChecklist/fetchSafetyChecklist',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await SafetyChecklistService().show(option);
    return data.data;
  },
);

export const fetchSafetyChecklistPdf = createAsyncThunk(
  'safetyChecklist/fetchSafetyChecklistPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
)

const initialState: {
  safetyChecklist: SafetyChecklist | undefined,
  pdf: PdfModel | undefined,
} = {
  safetyChecklist: undefined,
  pdf: undefined,
}

export const SafetyChecklistSlice = createSlice({
  name: 'safetyChecklist',
  initialState,
  reducers: {
    handleSafetyChecklist: (state, action) => {
      state.safetyChecklist = new SafetyChecklist(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSafetyChecklist.fulfilled, (state, action) => {
      state.safetyChecklist = new SafetyChecklist(action.payload);
    });
    builder.addCase(fetchSafetyChecklistPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload; // new PdfModel(action.payload);
      }
    });
  },
});

export const {
  handleSafetyChecklist,
  handlePdf,
} = SafetyChecklistSlice.actions;

export default SafetyChecklistSlice.reducer;

