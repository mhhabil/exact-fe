import { ConsultationLink, CpptOutPatientModel } from '@modules/outpatient/cppt/models/cppt-out-patient.model';
import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CpptModel } from '@modules/ro/cppt/models/cppt-ro.model';
import { CpptOutPatientService } from '@modules/outpatient/cppt/services';
import { ISortingRequest } from '@src/shared/request/requests/cppt-sort.request';

const initialState: {
  cppt: CpptModel | undefined,
  pdf: PdfModel | undefined,
  pdfAll: PdfModel | undefined,
  cpptItem: CpptOutPatientModel | undefined,
  showCreateRajal: boolean | undefined,
  consultationLinkRajal: ConsultationLink | undefined,
  autoRefresh: boolean,
} = {
  cppt: undefined,
  pdf: undefined,
  pdfAll: undefined,
  cpptItem: undefined,
  showCreateRajal: undefined,
  consultationLinkRajal: undefined,
  autoRefresh: false,
}

export const fetchCpptOutPatient = createAsyncThunk(
  'cpptOutPatient/fetchCpptOutPatient',
  async (option: ISortingRequest): Promise<any> => {
    const { data } = await CpptOutPatientService().show(option);
    return data.data;
  },
);

export const fetchCpptOutPatientItem = createAsyncThunk(
  'cpptRo/fetchCpptOutPatientItem',
  async (option: any): Promise<any> => {
    const { data } = await CpptOutPatientService().view(option);
    return data.data;
  },
);

export const fetchCpptOutPatientPdf = createAsyncThunk(
  'cpptOutPatient/fetchCpptOutPatientPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
);

export const fetchCpptOutPatientDayPdf = createAsyncThunk(
  'cpptOutPatient/fetchCpptOutPatientDayPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
);

const CpptOutPatientSlice = createSlice({
  name: 'cpptOutPatient',
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
      state.pdf = action.payload;
    },
    handleConsultationLinkRajal: (state, action) => {
      state.consultationLinkRajal = action.payload ? new ConsultationLink(action.payload) : undefined;
    },
    handleShowCreateRajal: (state, action) => {
      state.showCreateRajal = action.payload;
    },
    handleAutoRefresh: (state, action) => {
      state.autoRefresh = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCpptOutPatient.fulfilled, (state, action) => {
      state.cppt = (action.payload) ? new CpptModel(action.payload) : action.payload;
    });
    builder.addCase(fetchCpptOutPatientPdf.fulfilled, (state, action) => {
      state.pdfAll = action.payload
    });
    builder.addCase(fetchCpptOutPatientDayPdf.fulfilled, (state, action) => {
      state.pdf = action.payload
    });
    builder.addCase(fetchCpptOutPatientItem.fulfilled, (state, action) => {
      state.cpptItem = (action.payload) ? new CpptOutPatientModel(action.payload) : action.payload;
    });
  },
});

export const {
  handleCppt,
  handlePdf,
  handlePdfAll,
  handleCpptItem,
  handleConsultationLinkRajal,
  handleShowCreateRajal,
  handleAutoRefresh,
} = CpptOutPatientSlice.actions;

export default CpptOutPatientSlice.reducer;
