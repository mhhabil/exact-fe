import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAppRequest } from '@shared/request';
import { SurgeryReportModel } from '@modules/operating-room/surgery-report/models/surgery-report.model';
import { SurgeryReportService } from '@modules/operating-room/surgery-report/services';

export const fetchSurgeryReport = createAsyncThunk(
  'surgeryReport/fetchSurgeryReport',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await SurgeryReportService().show(option);
    return data.data;
  },
);

export const fetchSurgeryReportPdf = createAsyncThunk(
  'surgeryReport/fetchSurgeryReportPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
);

const initialState: {
  surgeryReport: SurgeryReportModel | undefined;
  pdf: PdfModel | undefined,
} = {
  surgeryReport: undefined,
  pdf: undefined,
}

export const SurgeryReportSlice = createSlice({
  name: 'surgeryReport',
  initialState,
  reducers: {
    handleSurgeryReport: (state, action) => {
      state.surgeryReport = action.payload;
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSurgeryReport.fulfilled, (state, action) => {
      state.surgeryReport = new SurgeryReportModel(action.payload);
    });
    builder.addCase(fetchSurgeryReportPdf.fulfilled, (state, action) => {
      // if (action.payload) {
      //   state.pdf = new PdfModel(action.payload);
      // }
      state.pdf = action.payload;
    });
  },
});

export const {
  handleSurgeryReport,
  handlePdf,
} = SurgeryReportSlice.actions;

export default SurgeryReportSlice.reducer;
