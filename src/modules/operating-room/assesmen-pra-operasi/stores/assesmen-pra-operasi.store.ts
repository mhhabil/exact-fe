import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AssesmenPraOperasiModel } from "../models/assesmen-pra-operasi-models";
import { AssesmentPraOperasiService } from "../services";
import { IAppRequest } from "@src/shared/request";

export const fetchAssesmenPraoperasi = createAsyncThunk(
  'assesmenPraOperasi/fetchAssesmenPraOperasi',
  async (option: IAppRequest): Promise<any> => {
    const {data} = await AssesmentPraOperasiService().show(option);
    return data.data;
  },
);

export const fetchAssesmenPraOperasiPdf = createAsyncThunk(
  'assesmenPraOperasi/fetchAssesmenPraOperasiPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
);

const initialState: {
    assesmenPraOperasi: AssesmenPraOperasiModel | undefined,
    pdf: PdfModel | undefined,
} = {
  assesmenPraOperasi: undefined,
  pdf: undefined,
}

export const AssesmenPraOperasiSlice = createSlice({
  name: 'AssesmenPraOperasi',
  initialState,
  reducers: {
    handleAssesmenPraOperasi: (state, action) => {
      state.assesmenPraOperasi = new AssesmenPraOperasiModel(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAssesmenPraoperasi.fulfilled, (state, action) => {
      state.assesmenPraOperasi = new AssesmenPraOperasiModel(action.payload);
    });
    builder.addCase(fetchAssesmenPraOperasiPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
      }
    });
  },
});

export const {
  handleAssesmenPraOperasi,
  handlePdf,
} = AssesmenPraOperasiSlice.actions;

export default AssesmenPraOperasiSlice.reducer;
