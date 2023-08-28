import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HaisInfectionSurveillanceService from '../services';
import { HaisSurveillanceInfectionForm } from '../models/hais-infection-surveillance-form.model';
import { HaisSurveillanceInfectionList } from '../models/hais-infection-surveillance-list.model';
import { IAppRequest } from '@shared/request';

export const fetchHaisSurveillanceInfectionForm = createAsyncThunk(
  'haisSurveillance/fetchHaisSurveillanceInfectionForm',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await HaisInfectionSurveillanceService().showForm(option);
    return data.data;
  },
);

export const fetchHaisSurveillanceInfectionList = createAsyncThunk(
  'haisSurveillance/fetchHaisSurveillanceInfectionList',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await HaisInfectionSurveillanceService().showList(option);
    return data.data;
  },
);

export const fetchHaisSurveillanceInfectionPdf = createAsyncThunk(
  'haisSurveillance/fetchHaisSurveillanceInfectionPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
);

const initialState: {
  haisSurveillanceForm: HaisSurveillanceInfectionForm | undefined,
  haisSurveillanceList: HaisSurveillanceInfectionList | undefined,
  pdf: PdfModel | undefined,
} = {
  haisSurveillanceForm: undefined,
  haisSurveillanceList: undefined,
  pdf: undefined,
}

export const HaisSurveillanceSlice = createSlice({
  name: 'haisSurveillance',
  initialState,
  reducers: {
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHaisSurveillanceInfectionForm.fulfilled, (state, action) => {
      state.haisSurveillanceForm = new HaisSurveillanceInfectionForm(action.payload);
    });
    builder.addCase(fetchHaisSurveillanceInfectionList.fulfilled, (state, action) => {
      state.haisSurveillanceList = new HaisSurveillanceInfectionList(action.payload);
    });
    builder.addCase(fetchHaisSurveillanceInfectionPdf.fulfilled, (state, action) => {
      state.pdf = action.payload;
    })
  },
});

export const {
  handlePdf,
} = HaisSurveillanceSlice.actions;

export default HaisSurveillanceSlice.reducer;
