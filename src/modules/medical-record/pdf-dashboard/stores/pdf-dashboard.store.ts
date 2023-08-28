import { IPDFDashFilter, PDFDashFilter } from '../requests';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PDFDashboard } from '../models/pdf-dashboard.model';
import { PDFDashboardService } from '../services';

export const fetchPDFDashboard = createAsyncThunk(
  'pdfDashboard/fetchPDFDashboard',
  async (option: IPDFDashFilter): Promise<any> => {
    const { data } = await PDFDashboardService().show(option);
    return data;
  },
);

const initialState: {
  filter: PDFDashFilter
  pdfDashboard: PDFDashboard | undefined,
} = {
  filter: PDFDashFilter.createFromJson({}),
  pdfDashboard: undefined,
}

export const PDFDashboardSlice = createSlice({
  name: 'pdfDashboard',
  initialState,
  reducers: {
    handleFilter: (state, action) => {
      state.filter = new PDFDashFilter(action.payload);
    },
    handlePDFDashboard: (state, action) => {
      if (action.payload) {
        state.pdfDashboard = new PDFDashboard(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPDFDashboard.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdfDashboard = new PDFDashboard(action.payload);
      }
    });
  },
});

export const {
  handleFilter,
  handlePDFDashboard,
} = PDFDashboardSlice.actions;

export default PDFDashboardSlice.reducer;
