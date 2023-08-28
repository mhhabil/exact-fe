import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAppRequest } from '@shared/request';
import { DrugSideEffects } from '@modules/pharmacy/drug-side-effects/models/drug-side-effects.model';
import DrugSideEffectsService from '@modules/pharmacy/drug-side-effects/services';

//DrugSideEffects 
 
export const fetchDrugSideEffects = createAsyncThunk(
  'drugSideEffects/fetchDrugSideEffects',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await DrugSideEffectsService().show(option);
    return data.data;
  },
);

export const fetchDrugSideEffectsPdf = createAsyncThunk(
  'drugSideEffects/fetchDrugSideEffectsPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
)

const initialState: {
  drugSideEffects: DrugSideEffects | undefined,
  pdf: PdfModel | undefined,
} = {
  drugSideEffects: undefined,
  pdf: undefined,
}

export const DrugSideEffectsSlice = createSlice({
  name: 'DrugSideEffects',
  initialState,
  reducers: {
    handleDrugSideEffects: (state, action) => {
      state.drugSideEffects = new DrugSideEffects(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDrugSideEffects.fulfilled, (state, action) => {
      state.drugSideEffects = new DrugSideEffects(action.payload);
    });
    builder.addCase(fetchDrugSideEffectsPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
        //state.pdf = new PdfModel(action.payload);
      }
    });
  },
});

export const {
  handleDrugSideEffects,
  handlePdf,
} = DrugSideEffectsSlice.actions;

export default DrugSideEffectsSlice.reducer;
