import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAppRequest } from '@shared/request';
import { PreliminaryStudyModel } from '@modules/ro/preliminary-study/models/preliminary-study.model';
import { PreliminaryStudyService } from '@modules/ro/preliminary-study/services';

const initialState: {
  preliminaryStudy: PreliminaryStudyModel | undefined,
  pdf: PdfModel | undefined,
} = {
  preliminaryStudy: undefined,
  pdf: undefined,
}

export const fetchPreliminaryStudy = createAsyncThunk(
  'preliminaryStudy/fetchPreliminaryStudy',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await PreliminaryStudyService().show(option);
    return data.data;
  },
);

export const fetchPreliminaryStudyPdf = createAsyncThunk(
  'preliminaryStudy/fetchPreliminaryStudyPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
)

const PreliminaryStudySlice = createSlice({
  name: 'preliminaryStudy',
  initialState,
  reducers: {
    handlePreliminaryStudy: (state, action) => {
      state.preliminaryStudy = action.payload;
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPreliminaryStudy.fulfilled, (state, action) => {
      state.preliminaryStudy = new PreliminaryStudyModel(action.payload);
    });
    builder.addCase(fetchPreliminaryStudyPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
        // state.pdf = new PdfModel(action.payload);
      }
    });
  },
});

export const {
  handlePreliminaryStudy,
  handlePdf,
} = PreliminaryStudySlice.actions;

export default PreliminaryStudySlice.reducer;
