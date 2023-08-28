import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAppRequest } from "@src/shared/request";
import { MedsReconciliationModel } from "../models/meds-reconciliation.model";
import { MedsReconciliationService } from "../services";

export const fetchMedsReconciliation = createAsyncThunk(
  'medsReconciliation/fetchMedsReconciliation',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await MedsReconciliationService().show(option);
    return data.data;
  },
);

export const fetchMedsReconciliationPdf = createAsyncThunk(
  'medsReconciliation/fetchMedsReconciliationPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
);

const initialState: {
  medsReconciliation: MedsReconciliationModel | undefined,
  pdf: PdfModel | undefined,
} = {
  medsReconciliation: undefined,
  pdf:  undefined,
}

export const MedsReconciliationSlice = createSlice({
  name: 'medsReconciliation',
  initialState,
  reducers: {
    handleMedsReconciliation: (state, action) => {
      state.medsReconciliation = new MedsReconciliationModel(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMedsReconciliation.fulfilled, (state, action) => {
      state.medsReconciliation = new MedsReconciliationModel(action.payload);
    });
    builder.addCase(fetchMedsReconciliationPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
      }
    });
  },
});

export const {
  handleMedsReconciliation,
  handlePdf,
} = MedsReconciliationSlice.actions;

export default MedsReconciliationSlice.reducer;
