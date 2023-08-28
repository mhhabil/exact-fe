import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAppRequest } from '@shared/request';
import { InitialNutritionalAssessment } from '@modules/inpatient/initial-nutritional-assessment/models/initial-nutritional-assessment.model';
import InitialNutritionalAssessmentService from '@modules/inpatient/initial-nutritional-assessment/services';

export const fetchInitialNutritionalAssessment = createAsyncThunk(
  'inpatientInitialNutritionalAssessment/fetchInitialNutritionalAssessment',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await InitialNutritionalAssessmentService().show(option);
    return data.data;
  },
);

export const fetchInitialNutritionalAssessmentPdf = createAsyncThunk(
  'inpatientInitialNutritionalAssessment/fetchInitialNutritionalAssessmentPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
)

const initialState: {
  initialNutritionalAssessment: InitialNutritionalAssessment | undefined,
  pdf: PdfModel | undefined,
} = {
  initialNutritionalAssessment: undefined,
  pdf: undefined,
}

export const initialNutritionalAssessmentSlice = createSlice({
  name: 'inpatientMedicalNote',
  initialState,
  reducers: {
    handleInitialNutritionalAssessment: (state, action) => {
      state.initialNutritionalAssessment = new InitialNutritionalAssessment(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInitialNutritionalAssessment.fulfilled, (state, action) => {
      state.initialNutritionalAssessment = new InitialNutritionalAssessment(action.payload);
    });
    builder.addCase(fetchInitialNutritionalAssessmentPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
        // state.pdf = new PdfModel(action.payload);
      }
    });
  },
});

export const {
  handleInitialNutritionalAssessment,
  handlePdf,
} = initialNutritionalAssessmentSlice.actions;

export default initialNutritionalAssessmentSlice.reducer;
