import { GeneralPatientStatementModel } from "../models/general-patient-statement.model";
import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAppRequest } from "@src/shared/request";
import { GeneralPatientStatementService } from "../services";

const initialState: {
  generalPatientStatement: GeneralPatientStatementModel | undefined,
  pdf: PdfModel | undefined,
} = {
  generalPatientStatement: undefined,
  pdf: undefined,
}

export const fetchGeneralPatientStatement = createAsyncThunk(
  'generalPatientStatement/fetchGeneralPatientStatement',
  async (option: IAppRequest): Promise<any> => {
    const {data} = await GeneralPatientStatementService().show(option);
    return data.data;
  },
);

export const fetchGeneralPatientStatementPdf = createAsyncThunk(
  'generalPatientStatement/fetchGeneralPatientStatementPdf',
  async (option: any): Promise<any> => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
);

const GeneralPatientStatementSlice = createSlice({
  name: 'generalPatientStatement',
  initialState,
  reducers: {
    handleGeneralPatientStatement: (state, action) => {
      state.generalPatientStatement = (action.payload) ? new GeneralPatientStatementModel(action.payload) : action.payload;
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers:  (builder) => {
    builder.addCase(fetchGeneralPatientStatement.fulfilled, (state, action) => {
      state.generalPatientStatement = (action.payload) ? new GeneralPatientStatementModel(action.payload) : action.payload;
    });
    builder.addCase(fetchGeneralPatientStatementPdf.fulfilled, (state, action) => {
      state.pdf = action.payload;
    });
  },
});

export const {
  handleGeneralPatientStatement,
  handlePdf,
} = GeneralPatientStatementSlice.actions;

export default GeneralPatientStatementSlice.reducer;