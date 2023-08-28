import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {CpptModel, CpptRoModel} from '@modules/ro/cppt/models/cppt-ro.model';
import { CpptRoService } from '@modules/ro/cppt/services';
import { IAppRequest } from '@shared/request';
import {CpptOutPatientModel} from '@modules/outpatient/cppt/models/cppt-out-patient.model';
import { ISortingRequest } from '@src/shared/request/requests/cppt-sort.request';

const initialState: {
  cppt: CpptModel | undefined,
  pdf: PdfModel | undefined,
  pdfAll: PdfModel | undefined,
  cpptItem: CpptRoModel | undefined,
} = {
  cppt: undefined,
  pdf: undefined,
  pdfAll: undefined,
  cpptItem: undefined,
}

export const fetchCpptRo = createAsyncThunk(
  'cpptRo/fetchCpptRo',
  async (option: ISortingRequest): Promise<any> => {
    const { data } = await CpptRoService().show(option);
    return data.data;
  },
);

export const fetchCpptRoItem = createAsyncThunk(
  'cpptRo/fetchCpptRoItem',
  async (option: any): Promise<any> => {
    const { data } = await CpptRoService().view(option);
    return data.data;
  },
);

export const fetchCpptRoPdf = createAsyncThunk(
  'cpptRo/fetchCpptRoPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
);

export const fetchCpptRoDayPdf = createAsyncThunk(
  'cpptRo/fetchCpptRoDayPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
);

const CpptRoSlice = createSlice({
  name: 'cpptRo',
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
      state.pdf = action.payload; // (action.payload) ? new PdfModel(action.payload) : action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCpptRo.fulfilled, (state, action) => {
      state.cppt = (action.payload) ? new CpptModel(action.payload) : action.payload;
    });
    builder.addCase(fetchCpptRoPdf.fulfilled, (state, action) => {
      state.pdfAll = action.payload; // (action.payload) ? new PdfModel(action.payload) : action.payload;
    });
    builder.addCase(fetchCpptRoDayPdf.fulfilled, (state, action) => {
      state.pdf = action.payload;
    })
    builder.addCase(fetchCpptRoItem.fulfilled, (state, action) => {
      state.cpptItem = (action.payload) ? new CpptRoModel(action.payload) : action.payload;
    });
  },
});

export const {
  handleCppt,
  handleCpptItem,
  handlePdf,
  handlePdfAll,
} = CpptRoSlice.actions;

export default CpptRoSlice.reducer;
