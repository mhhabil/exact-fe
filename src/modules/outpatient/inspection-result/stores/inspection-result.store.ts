import { BiometricModel, IBiometricModel, ToolInspectionModel } from '../models/inspection-result.model';
import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAppRequest } from '@shared/request';
import { ToolInspectionService } from '../services';

const initialState: {
  inspectionResult: ToolInspectionModel | undefined,
  pdf: PdfModel | undefined,
  pdfAll: PdfModel | undefined,
  inspectionResultItem: BiometricModel | undefined,
} = {
  inspectionResult: undefined,
  pdf: undefined,
  pdfAll: undefined,
  inspectionResultItem: undefined,
}

export const fetchInspectionResult = createAsyncThunk(
  'inspectionResult/fetchInspectionResult',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await ToolInspectionService().show(option);
    return data.data;
  },
);

export const fetchInspectionResultItem = createAsyncThunk(
  'inspectionResult/fetchInspectionResultItem',
  async (option: any): Promise<any> => {
    const { data } = await ToolInspectionService().view(option);
    return data.data;
  },
);

export const fetchInspectionResultPdf = createAsyncThunk(
  'inspectionResult/fetchInspectionResultPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
);

const InspectionResultSlice = createSlice({
  name: 'inspectionResult',
  initialState,
  reducers: {
    handleInspectionResult: (state, action) => {
      state.inspectionResult = (action.payload) ? new ToolInspectionModel(action.payload) : action.payload;
    },
    handleInspectionResultItem: (state, action) => {
      state.inspectionResultItem = (action.payload) ? new BiometricModel(action.payload) : action.payload;
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload; // (action.payload) ? new PdfModel(action.payload) : action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInspectionResult.fulfilled, (state, action) => {
      state.inspectionResult = (action.payload) ? new ToolInspectionModel(action.payload) : action.payload;
    });
    builder.addCase(fetchInspectionResultPdf.fulfilled, (state, action) => {
      state.pdf = action.payload; // (action.payload) ? new PdfModel(action.payload) : action.payload;
    });
    builder.addCase(fetchInspectionResultItem.fulfilled, (state, action) => {
      state.inspectionResultItem = (action.payload) ? new BiometricModel(action.payload) : action.payload;
    });
  },
});

export const {
  handleInspectionResult,
  handleInspectionResultItem,
  handlePdf,
} = InspectionResultSlice.actions;

export default InspectionResultSlice.reducer;
