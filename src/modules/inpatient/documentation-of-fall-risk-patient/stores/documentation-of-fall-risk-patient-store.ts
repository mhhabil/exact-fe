import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DocumentationOfFallRiskPatientModel } from "../models/documentation-of-fall-risk-patient-model";
import { DocumentationOfFallRiskPatientService } from "../services";
import { IAppRequest } from "@src/shared/request";

export const fetchDocumentationOfFallRiskPatient = createAsyncThunk(
  'documentationOfFallRiskPatient/fetchDocumentationOfFallRiskPatient',
  async (option: IAppRequest): Promise<any> => {
    const {data} = await DocumentationOfFallRiskPatientService().show(option);
    return data.data;
  },
);

export const fetchDocumentationOfFallRiskPatientPdf = createAsyncThunk(
  'documentationOfFallRiskPatient/fetchDocumentationOfFallRiskPatientPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
)

const initialState: {
  documentationOfFallRiskPatient: DocumentationOfFallRiskPatientModel |  undefined,
  pdf: PdfModel | undefined,
} = {
  documentationOfFallRiskPatient: undefined,
  pdf: undefined,
}

export const DocumentationOfFallRiskPatientSlice = createSlice({
  name: 'documentationOfFallRiskPatient',
  initialState,
  reducers:  {
    handleDocumentationOfFallRiskPatient: (state, action) => {
      state.documentationOfFallRiskPatient = new DocumentationOfFallRiskPatientModel(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDocumentationOfFallRiskPatient.fulfilled, (state, action) => {
      state.documentationOfFallRiskPatient = new DocumentationOfFallRiskPatientModel(action.payload);
    });
    builder.addCase(fetchDocumentationOfFallRiskPatientPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
      }
    });
  },
});

export const {
  handleDocumentationOfFallRiskPatient,
  handlePdf,
} = DocumentationOfFallRiskPatientSlice.actions;

export default DocumentationOfFallRiskPatientSlice.reducer;
