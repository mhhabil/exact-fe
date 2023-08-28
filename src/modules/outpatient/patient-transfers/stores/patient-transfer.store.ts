import { PatientTransferFormModel, PatientTransferModel } from "../models/patient-transfer-model";
import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAppRequest } from "@src/shared/request";
import { PatientTransferService } from "../services";

const initialState: {
    patientTransfer: PatientTransferModel | undefined,
    pdf: PdfModel | undefined,
    pdfAll: PdfModel | undefined,
    patientTransferItem: PatientTransferFormModel | undefined,
} = {
  patientTransfer: undefined,
  pdf: undefined,
  pdfAll:undefined,
  patientTransferItem: undefined,
}

export const fetchPatientTransfer = createAsyncThunk(
  'patientTransfer/fetchPatientTransfer',
  async (option: IAppRequest): Promise<any> => {
    const {data} = await PatientTransferService().show(option);
    return data.data;
  },
);

export const fetchPatientTransferItem = createAsyncThunk(
  'patientTransfer/fetchPatientTransferItem',
  async (option: any): Promise<any> => {
    const {data} = await PatientTransferService().view(option);
    return data.data;
  },
);

export const fetchPatientTransferPdf = createAsyncThunk(
  'patientTransfer/fetchPatientTransferPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
);

const PatientTransferSlice = createSlice({
  name: 'patientTransfer',
  initialState,
  reducers: {
    handlePatientTransfer: (state, action) => {
      state.patientTransfer = (action.payload) ? new PatientTransferModel(action.payload) : action.payload;
    },
    handlePatientTransferItem: (state, action) => {
      state.patientTransferItem = (action.payload) ? new PatientTransferFormModel(action.payload) : action.payload;
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPatientTransfer.fulfilled, (state, action) => {
      state.patientTransfer = (action.payload) ? new PatientTransferModel(action.payload) : action.payload;
    });
    builder.addCase(fetchPatientTransferPdf.fulfilled, (state, action) => {
      state.pdf = action.payload;
    });
    builder.addCase(fetchPatientTransferItem.fulfilled, (state, action) => {
      state.patientTransferItem = (action.payload) ? new PatientTransferFormModel(action.payload) : action.payload;
    });
  },
});

export const {
  handlePatientTransfer,
  handlePatientTransferItem,
  handlePdf,
} = PatientTransferSlice.actions;

export default PatientTransferSlice.reducer;
