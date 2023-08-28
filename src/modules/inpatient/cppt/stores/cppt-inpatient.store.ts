import { CpptInpatientModel, DaftarVisitDokter } from '../models/cppt-inpatient.model';
import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ConsultationLink } from '@src/modules/outpatient/cppt/models/cppt-out-patient.model';
import { CpptInpatientService } from '../services';
import { CpptModel } from '@modules/ro/cppt/models/cppt-ro.model';
import { IAppRequest } from '@src/shared/request';
import { ISortingRequest } from '@src/shared/request/requests/cppt-sort.request';

const initialState: {
  cppt: CpptModel | undefined,
  pdf: PdfModel | undefined,
  pdfAll: PdfModel | undefined,
  cpptItem: CpptInpatientModel | undefined,
  visits: DaftarVisitDokter | undefined,
  showCreateRanap: boolean | undefined,
  consultationLinkRanap: ConsultationLink | undefined,
  autoRefresh: boolean,
} = {
  cppt: undefined,
  pdf: undefined,
  pdfAll: undefined,
  cpptItem: undefined,
  visits: undefined,
  showCreateRanap: undefined,
  consultationLinkRanap: undefined,
  autoRefresh: false,
}

export const fetchCpptInpatient = createAsyncThunk(
  'cpptInpatient/fetchCpptInpatient',
  async (option: ISortingRequest): Promise<any> => {
    const { data } = await CpptInpatientService().show(option);
    return data.data;
  },
);

export const fetchCpptInpatientPdf = createAsyncThunk(
  'cpptInpatient/fetchCpptInpatientPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
);

export const fetchCpptInpatientDayPdf = createAsyncThunk(
  'cpptInpatient/fetchCpptInpatientDayPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
);

export const fetchInpatientVisits = createAsyncThunk(
  'cpptInpatient/fetchInpatientVisits',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await CpptInpatientService().getVisit(option);
    return data.data;
  },
);

const CpptInpatientSlice = createSlice({
  name: 'cpptInpatient',
  initialState,
  reducers: {
    handleConsultationLinkRanap: (state, action) => {
      state.consultationLinkRanap = action.payload ? new ConsultationLink(action.payload) : undefined;
    },
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
      state.pdf = action.payload;
    },
    handleShowCreateRanap: (state, action) => {
      state.showCreateRanap = action.payload;
    },
    handleAutoRefresh: (state, action) => {
      state.autoRefresh = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCpptInpatient.fulfilled, (state, action) => {
      state.cppt = (action.payload) ? new CpptModel(action.payload) : action.payload;
    });
    builder.addCase(fetchCpptInpatientPdf.fulfilled, (state, action) => {
      state.pdfAll = action.payload
    });
    builder.addCase(fetchCpptInpatientDayPdf.fulfilled, (state, action) => {
      state.pdf = action.payload
    });
    builder.addCase(fetchInpatientVisits.fulfilled, (state, action) => {
      state.visits = new DaftarVisitDokter(action.payload)
    });
  },
});

export const {
  handleConsultationLinkRanap,
  handleCppt,
  handlePdf,
  handlePdfAll,
  handleCpptItem,
  handleShowCreateRanap,
  handleAutoRefresh,
} = CpptInpatientSlice.actions;

export default CpptInpatientSlice.reducer;
