import {
  PainMonitoringItemModel,
  PainMonitoringModel,
} from '@modules/inpatient/pain-monitoring/models/pain-monitoring.model';
import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PainMonitoringService } from '@modules/inpatient/pain-monitoring/services';
import { IAppRequest } from '@shared/request';

const initialState: {
  painMonitoring: PainMonitoringModel | undefined,
  pdf: PdfModel | undefined,
  pdfAll: PdfModel | undefined,
  painMonitoringItem: PainMonitoringItemModel | undefined,
} = {
  painMonitoring: undefined,
  pdf: undefined,
  pdfAll: undefined,
  painMonitoringItem: undefined,
}

export const fetchPainMonitoring = createAsyncThunk(
  'painMonitoring/fetchPainMonitoring',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await PainMonitoringService().show(option);
    return data.data;
  },
);

export const fetchPainMonitoringItem = createAsyncThunk(
  'painMonitoringItem/fetchPainMonitoringItem',
  async (option: any): Promise<any> => {
    //const { data } = await PainMonitoringService().view(option);
    //return data.data;
  },
);

export const fetchPainMonitoringPdf = createAsyncThunk(
  'painMonitoring/fetchPainMonitoringPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
);

const PainMonitoringSlice = createSlice({
  name: 'painMonitoring',
  initialState,
  reducers: {
    handlePainMonitoring: (state, action) => {
      state.painMonitoring = (action.payload) ? new PainMonitoringModel(action.payload) : action.payload;
    },
    handlePainMonitoringItem: (state, action) => {
      state.painMonitoringItem = (action.payload) ? new PainMonitoringItemModel(action.payload) : action.payload;
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload; // (action.payload) ? new PdfModel(action.payload) : action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPainMonitoring.fulfilled, (state, action) => {
      state.painMonitoring = (action.payload) ? new PainMonitoringModel(action.payload) : action.payload;
    });
    builder.addCase(fetchPainMonitoringPdf.fulfilled, (state, action) => {
      state.pdf = action.payload; // (action.payload) ? new PdfModel(action.payload) : action.payload;
    });
    /*
    builder.addCase(fetchPainMonitoringItem.fulfilled, (state, action) => {
      state.painMonitoringItem = (action.payload) ? new PainMonitoringItemModel(action.payload) : action.payload;
    });
    */
  },
});

export const {
  handlePainMonitoring,
  handlePainMonitoringItem,
  handlePdf,
} = PainMonitoringSlice.actions;

export default PainMonitoringSlice.reducer;
