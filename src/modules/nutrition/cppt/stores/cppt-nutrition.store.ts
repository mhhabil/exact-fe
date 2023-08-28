import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CpptModel } from '@modules/ro/cppt/models/cppt-ro.model';
import { CpptNutritionModel } from '../models/cppt-nutrition.model';
import { CpptNutritionService } from '../services';
import { IAppRequest } from '@src/shared/request';
import { ISortingRequest } from '@src/shared/request/requests/cppt-sort.request';

const initialState: {
  cppt: CpptModel | undefined,
  pdf: PdfModel | undefined,
  pdfAll: PdfModel | undefined,
  cpptItem: CpptNutritionModel | undefined,
} = {
  cppt: undefined,
  pdf: undefined,
  pdfAll: undefined,
  cpptItem: undefined,
}

export const fetchCpptNutrition = createAsyncThunk(
  'cpptNutrition/fetchCpptNutrition',
  async (option: ISortingRequest): Promise<any> => {
    const { data } = await CpptNutritionService().show(option);
    return data.data;
  },
);

export const fetchCpptNutritionPdf = createAsyncThunk(
  'cpptNutrition/fetchCpptNutritionPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
);

export const fetchCpptNutritionDayPdf = createAsyncThunk(
  'cpptNutrition/fetchCpptNutritionDayPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
);

const CpptNutritionSlice = createSlice({
  name: 'cpptNutrition',
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCpptNutrition.fulfilled, (state, action) => {
      state.cppt = (action.payload) ? new CpptModel(action.payload) : action.payload;
    });
    builder.addCase(fetchCpptNutritionPdf.fulfilled, (state, action) => {
      state.pdfAll = action.payload
    });
    builder.addCase(fetchCpptNutritionDayPdf.fulfilled, (state, action) => {
      state.pdf = action.payload
    });
  },
});

export const {
  handleCppt,
  handlePdf,
  handlePdfAll,
  handleCpptItem,
} = CpptNutritionSlice.actions;

export default CpptNutritionSlice.reducer;
