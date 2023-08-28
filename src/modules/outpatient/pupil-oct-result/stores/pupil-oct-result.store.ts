import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAppRequest } from '@shared/request';
import { PupilOCTResultModel } from '@modules/outpatient/pupil-oct-result/models/pupil-oct-result.model';
import { PupilOCTResultService } from '@modules/outpatient/pupil-oct-result/services';

export const fetchPupilOCTResult = createAsyncThunk(
  'pupilOCTResult/fetchPupilOCTResult',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await PupilOCTResultService().show(option);
    return data.data;
  },
);

export const fetchPupilOCTResultPdf = createAsyncThunk(
  'pupilOCTResult/fetchPupilOCTResultPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
);

const initialState: {
  pupilOCTResult: PupilOCTResultModel | undefined;
  pdf: PdfModel | undefined,
} = {
  pupilOCTResult: undefined,
  pdf: undefined,
}

export const PupilOCTResultSlice = createSlice({
  name: 'pupilOCTResult',
  initialState,
  reducers: {
    handlePupilOCTResult: (state, action) => {
      state.pupilOCTResult = action.payload;
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPupilOCTResult.fulfilled, (state, action) => {
      state.pupilOCTResult = new PupilOCTResultModel(action.payload);
    });
    builder.addCase(fetchPupilOCTResultPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = new PdfModel(action.payload);
      }
    });
  },
});

export const {
  handlePupilOCTResult,
  handlePdf,
} = PupilOCTResultSlice.actions;

export default PupilOCTResultSlice.reducer;
