import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GeneralConsentModel } from '../models/general-consent.model';
import { GeneralConsentService } from '@modules/information/general-consent/services';
import { IAppRequest } from '@shared/request';

export const fetchGeneralConsent = createAsyncThunk(
  'generalConsent/fetchGeneralConsent',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await GeneralConsentService().show(option);
    return data.data;
  },
);

export const fetchGeneralConsentPdf = createAsyncThunk(
  'generalConsent/fetchGeneralConsentPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
)

const initialState: {
  generalConsent: GeneralConsentModel | undefined,
  pdf: PdfModel | undefined,
} = {
  generalConsent: undefined,
  pdf: undefined,
}

export const GeneralConsentSlice = createSlice({
  name: 'generalConsent',
  initialState,
  reducers: {
    handleGeneralConsent: (state, action) => {
      state.generalConsent = new GeneralConsentModel(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGeneralConsent.fulfilled, (state, action) => {
      state.generalConsent = new GeneralConsentModel(action.payload);
    });
    builder.addCase(fetchGeneralConsentPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
        // state.pdf = new PdfModel(action.payload);
      }
    });
  },
});

export const {
  handleGeneralConsent,
  handlePdf,
} = GeneralConsentSlice.actions;

export default GeneralConsentSlice.reducer;
