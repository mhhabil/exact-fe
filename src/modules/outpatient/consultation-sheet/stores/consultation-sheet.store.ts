import { CPPTLink, ConsultationSheet } from '../models/consultation-sheet.model';
import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ConsultationSheetService } from '../services';
import { ISortingRequest } from '@src/shared/request/requests/cppt-sort.request';

const initialState: {
  consultations: ConsultationSheet | undefined,
  cpptAllPdf: PdfModel | undefined,
  showCreate: boolean | undefined,
  cpptData: CPPTLink | undefined,
} = {
  consultations: undefined,
  cpptAllPdf: undefined,
  showCreate: undefined,
  cpptData: undefined,
}

export const fetchConsultationSheet = createAsyncThunk(
  'consultationSheet/fetchConsultationSheet',
  async (option: ISortingRequest): Promise<any> => {
    const { data } = await ConsultationSheetService().show(option);
    return data.data;
  },
);

export const fetchCpptAllPdf = createAsyncThunk(
  'consultationSheet/fetchCpptAllPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
);

const ConsultationSheetSlice = createSlice({
  name: 'consultationSheet',
  initialState,
  reducers: {
    handleCppt: (state, action) => {
      state.consultations = (action.payload) ? new ConsultationSheet(action.payload) : action.payload;
    },
    handlePdfAll: (state, action) => {
      state.cpptAllPdf = action.payload;
    },
    handleShowCreate: (state, action) => {
      state.showCreate = action.payload;
    },
    handleCpptLink: (state, action) => {
      state.cpptData = action.payload ? new CPPTLink(action.payload) : undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchConsultationSheet.fulfilled, (state, action) => {
      state.consultations = (action.payload) ? new ConsultationSheet(action.payload) : action.payload;
    });
    builder.addCase(fetchCpptAllPdf.fulfilled, (state, action) => {
      state.cpptAllPdf = action.payload
    });
  },
});

export const {
  handleCppt,
  handlePdfAll,
  handleShowCreate,
  handleCpptLink,
} = ConsultationSheetSlice.actions;

export default ConsultationSheetSlice.reducer;
