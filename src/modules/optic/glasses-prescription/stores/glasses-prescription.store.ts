import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GlassesPrescriptionModel } from '@src/modules/optic/glasses-prescription/models/glasses-prescription.model';
import { GlassesPrescriptionService } from '@src/modules/optic/glasses-prescription/services';
import { IAppRequest } from '@shared/request';

export const fetchGlassesPrescription = createAsyncThunk(
  'glassesPrescription/fetchGlassesPrescription',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await GlassesPrescriptionService().show(option);
    return data.data;
  },
);

export const fetchGlassesPrescriptionPdf = createAsyncThunk(
  'glassesPrescription/fetchGlassesPrescriptionPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
);

const initialState: {
  glassesPrescription: GlassesPrescriptionModel | undefined;
  pdf: Array<PdfModel> | undefined,
} = {
  glassesPrescription: undefined,
  pdf: undefined,
}

export const GlassesPrescriptionSlice = createSlice({
  name: 'glassesPrescription',
  initialState,
  reducers: {
    handleGlassesPrescription: (state, action) => {
      state.glassesPrescription = action.payload;
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGlassesPrescription.fulfilled, (state, action) => {
      state.glassesPrescription = new GlassesPrescriptionModel(action.payload);
    });
    builder.addCase(fetchGlassesPrescriptionPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
      }
    });
  },
});

export const {
  handleGlassesPrescription,
  handlePdf,
} = GlassesPrescriptionSlice.actions;

export default GlassesPrescriptionSlice.reducer;
