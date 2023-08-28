import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAppRequest } from '@shared/request';
import {CpptModel, CpptRoModel} from '@modules/ro/cppt/models/cppt-ro.model';
import {CpptOutPatientModel} from '@modules/outpatient/cppt/models/cppt-out-patient.model';
import {CpptOkModel} from '@modules/operating-room/cppt/models/cppt-ok.model';
import {CpptOkService} from '@modules/operating-room/cppt/services';
import { ISortingRequest } from '@src/shared/request/requests/cppt-sort.request';

const initialState: {
  cppt: CpptModel | undefined,
  pdf: PdfModel | undefined,
  pdfAll: PdfModel | undefined,
  cpptItem: CpptRoModel | CpptOutPatientModel | CpptOkModel | undefined,
  autoRefresh: boolean,
} = {
  cppt: undefined,
  pdf: undefined,
  pdfAll: undefined,
  cpptItem: undefined,
  autoRefresh: false,
}

export const fetchCpptOk = createAsyncThunk(
  'cpptOk/fetchCpptOk',
  async (option: ISortingRequest): Promise<any> => {
    const { data } = await CpptOkService().show(option);
    return data.data;
  },
);

export const fetchCpptOkItem = createAsyncThunk(
  'cpptOk/fetchCpptOkItem',
  async (option: any): Promise<any> => {
    const { data } = await CpptOkService().view(option);
    return data.data;
  },
);

export const fetchCpptOkPdf = createAsyncThunk(
  'cpptOk/fetchCpptOkPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
);

export const fetchCpptOkDayPdf = createAsyncThunk(
  'cpptOk/fetchCpptOkDayPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
);

const CpptOkSlice = createSlice({
  name: 'cpptOk',
  initialState,
  reducers: {
    handleCppt: (state, action) => {
      state.cppt = (action.payload) ? new CpptModel(action.payload) : action.payload;
    },
    handleCpptItem: (state, action) => {
      state.cpptItem = (action.payload) ? new CpptModel(action.payload) : action.payload;
    },
    handlePdfAll: (state, action) => {
      state.pdfAll = action.payload;
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload
    },
    handleAutoRefresh: (state, action) => {
      state.autoRefresh = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCpptOk.fulfilled, (state, action) => {
      state.cppt = (action.payload) ? new CpptModel(action.payload) : action.payload;
    });
    builder.addCase(fetchCpptOkPdf.fulfilled, (state, action) => {
      state.pdfAll = action.payload
    });
    builder.addCase(fetchCpptOkDayPdf.fulfilled, (state, action) => {
      state.pdf = action.payload
    });
    builder.addCase(fetchCpptOkItem.fulfilled, (state, action) => {
      state.cpptItem = (action.payload) ? new CpptOkModel(action.payload) : action.payload;
    });
  },
});

export const {
  handleCppt,
  handlePdf,
  handlePdfAll,
  handleCpptItem,
  handleAutoRefresh,
} = CpptOkSlice.actions;

export default CpptOkSlice.reducer;
