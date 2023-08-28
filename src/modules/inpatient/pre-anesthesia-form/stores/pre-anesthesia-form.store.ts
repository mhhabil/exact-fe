import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAppRequest } from '@shared/request';
import { PreAnesthesiaFormModel } from '@modules/inpatient/pre-anesthesia-form/models/pre-anesthesia-form.model';
import PreAnesthesiaFormService from '@modules/inpatient/pre-anesthesia-form/services';

export const fetchPreAnesthesiaForm = createAsyncThunk(
  'preAnesthesiaForm/fetchPreAnesthesiaForm',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await PreAnesthesiaFormService().show(option);
    return data.data;
  },
);

export const fetchPreAnesthesiaFormPdf = createAsyncThunk(
  'preAnesthesiaForm/fetchPreAnesthesiaFormPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
)

const initialState: {
  preAnesthesiaForm: PreAnesthesiaFormModel | undefined,
  pdf: PdfModel | undefined,
} = {
  preAnesthesiaForm: undefined,
  pdf: undefined,
}

export const PreAnesthesiaFormSlice = createSlice({
  name: 'preAnesthesiaForm',
  initialState,
  reducers: {
    handlePreAnesthesiaForm: (state, action) => {
      state.preAnesthesiaForm = new PreAnesthesiaFormModel(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPreAnesthesiaForm.fulfilled, (state, action) => {
      state.preAnesthesiaForm = new PreAnesthesiaFormModel(action.payload);
    });
    builder.addCase(fetchPreAnesthesiaFormPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
        // state.pdf = new PdfModel(action.payload);
      }
    });
  },
});

export const {
  handlePreAnesthesiaForm,
  handlePdf,
} = PreAnesthesiaFormSlice.actions;

export default PreAnesthesiaFormSlice.reducer;
