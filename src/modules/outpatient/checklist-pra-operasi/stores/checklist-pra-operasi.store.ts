import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ChecklistPraOperasiModel } from "../models/checklist-pra-operasi-models";
import { ChecklistPraOperasiService } from "../services";
import { IAppRequest } from "@src/shared/request";

export const fetchChecklistPraOperasi = createAsyncThunk(
  'checklistPraOperasi/fetchChecklistPraOperasi',
  async (option: IAppRequest): Promise<any> => {
    const {data} = await ChecklistPraOperasiService().show(option);
    return data.data;
  },
);

export const fetchChecklistPraOperasiPdf = createAsyncThunk(
  'checklistPraOperasi/fetchChecklistPraOperasiPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
);

const initialState: {
    checklistPraOperasi: ChecklistPraOperasiModel | undefined,
    pdf: PdfModel | undefined,
} = {
  checklistPraOperasi: undefined,
  pdf:  undefined,
}

export const ChecklistPraOperasiSlice = createSlice({
  name: 'checklistPraOperasi',
  initialState,
  reducers: {
    handleChecklistPraOperasi: (state, action) => {
      state.checklistPraOperasi = new ChecklistPraOperasiModel(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChecklistPraOperasi.fulfilled, (state, action) => {
      state.checklistPraOperasi = new ChecklistPraOperasiModel(action.payload);
    });
    builder.addCase(fetchChecklistPraOperasiPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
      }
    });
  },
});

export const {
  handleChecklistPraOperasi,
  handlePdf,
} = ChecklistPraOperasiSlice.actions;

export default ChecklistPraOperasiSlice.reducer;
