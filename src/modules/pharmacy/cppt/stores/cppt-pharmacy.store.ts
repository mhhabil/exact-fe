import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAppRequest } from '@shared/request';
import {CpptModel, CpptRoModel} from '@modules/ro/cppt/models/cppt-ro.model';
import {CpptOutPatientModel} from '@modules/outpatient/cppt/models/cppt-out-patient.model';
import {CpptOkModel} from '@modules/operating-room/cppt/models/cppt-ok.model';
import { ISortingRequest } from '@src/shared/request/requests/cppt-sort.request';
import { CpptpharmacyModel } from '../models/cppt-pharmacy';
import { CpptPharmacyService } from '../services';

const initialState: {
  cppt: CpptModel | undefined,
  pdf: PdfModel | undefined,
  pdfAll: PdfModel | undefined,
  cpptItem: CpptRoModel | CpptOutPatientModel | CpptOkModel | CpptpharmacyModel | undefined,
} = {
  cppt: undefined,
  pdf: undefined,
  pdfAll: undefined,
  cpptItem: undefined,
}

export const fetchCpptPharmacy = createAsyncThunk(
  'cpptPharmacy/fetchCpptPharmacy',
  async (option: ISortingRequest): Promise<any> => {
    const { data } = await CpptPharmacyService().show(option);
    return data.data;
  },
);

export const fetchCpptPharmacyItem = createAsyncThunk(
  'cpptPharmacy/fetchCpptPharmacyItem',
  async (option: any): Promise<any> => {
    const { data } = await CpptPharmacyService().view(option);
    return data.data;
  },
);

export const fetchCpptPharmacyPdf = createAsyncThunk(
  'cpptPharmacy/fetchCpptPharmacyPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
);

export const fetchCpptPharmacyDayPdf = createAsyncThunk(
  'cpptPharmacy/fetchCpptPharmacyDayPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
)

const CpptPharmacySlice = createSlice({
  name: 'cpptPharmacy',
  initialState,
  reducers: {
    handleCppt: (state, action) => {
      state.cppt = (action.payload) ? new CpptpharmacyModel(action.payload) : action.payload;
    },
    handleCpptItem: (state, action) => {
      state.cpptItem = (action.payload) ? new CpptpharmacyModel(action.payload) : action.payload;
    },
    handlePdfAll: (state, action) => {
      state.pdfAll = action.payload;
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCpptPharmacy.fulfilled, (state, action) => {
      state.cppt = (action.payload) ? new CpptModel(action.payload) : action.payload;
    });
    builder.addCase(fetchCpptPharmacyPdf.fulfilled, (state, action) => {
      state.pdfAll = action.payload;
    });
    builder.addCase(fetchCpptPharmacyDayPdf.fulfilled, (state, action) => {
      state.pdf = action.payload;
    })
    builder.addCase(fetchCpptPharmacyItem.fulfilled, (state, action) => {
      state.cpptItem = (action.payload) ? new CpptpharmacyModel(action.payload) : action.payload;
    });
  },
});

export const {
  handleCppt,
  handlePdf,
  handlePdfAll,
  handleCpptItem,
} = CpptPharmacySlice.actions;

export default CpptPharmacySlice.reducer;
