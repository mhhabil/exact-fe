import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAppRequest } from '@shared/request';
import { DpjpSheet } from '@modules/inpatient/dpjp-sheet/models/dpjp-sheet.model';
import DpjpSheetService from '@modules/inpatient/dpjp-sheet/services';

export const fetchDpjpSheet = createAsyncThunk(
  'dpjpSheet/fetchDpjpSheet',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await DpjpSheetService().show(option);
    return data.data;
  },
);

export const fetchDpjpSheetPdf = createAsyncThunk(
  'dpjpSheet/fetchDpjpSheetPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
)

const initialState: {
  dpjpSheet: DpjpSheet | undefined,
  pdf: PdfModel | undefined,
} = {
  dpjpSheet: undefined,
  pdf: undefined,
}

export const DpjpSheetSlice = createSlice({
  name: 'dpjpSheet',
  initialState,
  reducers: {
    handleDpjpSheet: (state, action) => {
      state.dpjpSheet = new DpjpSheet(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDpjpSheet.fulfilled, (state, action) => {
      state.dpjpSheet = new DpjpSheet(action.payload);
    });
    builder.addCase(fetchDpjpSheetPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
        //state.pdf = new PdfModel(action.payload);
      }
    });
  },
});

export const {
  handleDpjpSheet,
  handlePdf,
} = DpjpSheetSlice.actions;

export default DpjpSheetSlice.reducer;
