import {
  DailyEducationItemModel,
  DailyEducationModel,
} from '@modules/general/daily-education/models/daily-education.model';
import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DailyEducationService } from '@modules/general/daily-education/services';
import { IAppRequest } from '@shared/request';

const initialState: {
  dailyEducation: DailyEducationModel | undefined,
  pdf: PdfModel | undefined,
  pdfAll: PdfModel | undefined,
  dailyEducationItem: DailyEducationItemModel | undefined,
} = {
  dailyEducation: undefined,
  pdf: undefined,
  pdfAll: undefined,
  dailyEducationItem: undefined,
}

export const fetchDailyEducation = createAsyncThunk(
  'dailyEducation/fetchDailyEducation',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await DailyEducationService().show(option);
    return data.data;
  },
);

export const fetchDailyEducationItem = createAsyncThunk(
  'dailyEducation/fetchDailyEducationItem',
  async (option: any): Promise<any> => {
    const { data } = await DailyEducationService().view(option);
    return data.data;
  },
);

export const fetchDailyEducationPdf = createAsyncThunk(
  'dailyEducation/fetchDailyEducationPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
);

const DailyEducationSlice = createSlice({
  name: 'dailyEducation',
  initialState,
  reducers: {
    handleDailyEducation: (state, action) => {
      state.dailyEducation = (action.payload) ? new DailyEducationModel(action.payload) : action.payload;
    },
    handleDailyEducationItem: (state, action) => {
      state.dailyEducationItem = (action.payload) ? new DailyEducationItemModel(action.payload) : action.payload;
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload; // (action.payload) ? new PdfModel(action.payload) : action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDailyEducation.fulfilled, (state, action) => {
      state.dailyEducation = (action.payload) ? new DailyEducationModel(action.payload) : action.payload;
    });
    builder.addCase(fetchDailyEducationPdf.fulfilled, (state, action) => {
      state.pdf = action.payload; // (action.payload) ? new PdfModel(action.payload) : action.payload;
    });
    builder.addCase(fetchDailyEducationItem.fulfilled, (state, action) => {
      state.dailyEducationItem = (action.payload) ? new DailyEducationItemModel(action.payload) : action.payload;
    });
  },
});

export const {
  handleDailyEducation,
  handleDailyEducationItem,
  handlePdf,
} = DailyEducationSlice.actions;

export default DailyEducationSlice.reducer;
