import {
  ImplementationRiskPatientsItemModel,
  ImplementationRiskPatientsModel,
} from '@modules/inpatient/implementation-risk-patients/models/implementation-risk-patients.model';
import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ImplementationRiskPatientsService } from '@modules/inpatient/implementation-risk-patients/services';
import { IAppRequest } from '@shared/request';

//ImplementationRiskPatients

const initialState: {
  implementationRiskPatients: ImplementationRiskPatientsModel | undefined,
  pdf: PdfModel | undefined,
  pdfAll: PdfModel | undefined,
  implementationRiskPatientsItem: ImplementationRiskPatientsItemModel | undefined,
} = {
  implementationRiskPatients: undefined,
  pdf: undefined,
  pdfAll: undefined,
  implementationRiskPatientsItem: undefined,
}

export const fetchImplementationRiskPatients = createAsyncThunk(
  'implementationRiskPatients/fetchImplementationRiskPatients',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await ImplementationRiskPatientsService().show(option);
    return data.data;
  },
);

export const fetchImplementationRiskPatientsItem = createAsyncThunk(
  'implementationRiskPatientsItem/fetchImplementationRiskPatientsItem',
  async (option: any): Promise<any> => {
    //const { data } = await ImplementationRiskPatientsService().view(option);
    //return data.data;
  },
);

export const fetchImplementationRiskPatientsPdf = createAsyncThunk(
  'implementationRiskPatients/fetchImplementationRiskPatientsPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
);

const ImplementationRiskPatientsSlice = createSlice({
  name: 'implementationRiskPatients',
  initialState,
  reducers: {
    handleImplementationRiskPatients: (state, action) => {
      state.implementationRiskPatients = (action.payload) ? new ImplementationRiskPatientsModel(action.payload) : action.payload;
    },
    handleImplementationRiskPatientsItem: (state, action) => {
      state.implementationRiskPatientsItem = (action.payload) ? new ImplementationRiskPatientsItemModel(action.payload) : action.payload;
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload; // (action.payload) ? new PdfModel(action.payload) : action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImplementationRiskPatients.fulfilled, (state, action) => {
      state.implementationRiskPatients = (action.payload) ? new ImplementationRiskPatientsModel(action.payload) : action.payload;
    });
    builder.addCase(fetchImplementationRiskPatientsPdf.fulfilled, (state, action) => {
      state.pdf = action.payload; // (action.payload) ? new PdfModel(action.payload) : action.payload;
    });
    builder.addCase(fetchImplementationRiskPatientsItem.fulfilled, (state, action) => {
      state.implementationRiskPatientsItem = (action.payload) ? new ImplementationRiskPatientsItemModel(action.payload) : action.payload;
    });
  },
});

export const {
  handleImplementationRiskPatients,
  handleImplementationRiskPatientsItem,
  handlePdf,
} = ImplementationRiskPatientsSlice.actions;

export default ImplementationRiskPatientsSlice.reducer;
