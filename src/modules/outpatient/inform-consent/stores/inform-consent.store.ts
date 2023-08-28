import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAppRequest } from "@src/shared/request";
import { InformConsentModel } from "@modules/outpatient/inform-consent/models/inform-consent.model";
import { InformConsentService } from "@modules/outpatient/inform-consent/services";

export const fetchInformConsent = createAsyncThunk(
  'informConsent/fetchInformConsent',
  async (option: IAppRequest) : Promise<any> => {
    const { data } = await InformConsentService().show(option);
    return data.data;
  },
);

export const fetchInformConsentPdf = createAsyncThunk(
  'informConsent/fetchInformConsentPdf',
  async (option: IFindPdfRequest) : Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
)

const initialState: {
  informConsent: InformConsentModel | undefined,
  pdf: PdfModel | undefined,
} = {
  informConsent: undefined,
  pdf: undefined,
}

export const InformConsentSlice = createSlice({
  name: 'informConsent',
  initialState,
  reducers: {
    handleInformConsent: (state, action) => {
      state.informConsent = new InformConsentModel(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInformConsent.fulfilled, (state, action) => {
      state.informConsent = new InformConsentModel(action.payload);
    });
    builder.addCase(fetchInformConsentPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload
      }
    });
  },
});

export const {
  handleInformConsent,
  handlePdf,
} = InformConsentSlice.actions;

export default InformConsentSlice.reducer;
