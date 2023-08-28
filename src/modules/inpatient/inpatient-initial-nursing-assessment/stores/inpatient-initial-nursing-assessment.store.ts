import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAppRequest } from '@shared/request';
import { InpatientInitialNursingAssessment } from '@modules/inpatient/inpatient-initial-nursing-assessment/models/inpatient-initial-nursing-assessment.model';
import InpatientInitialNursingAssessmentService from '@modules/inpatient/inpatient-initial-nursing-assessment/services';

export const fetchInpatientInitialNursingAssessment = createAsyncThunk(
  'inpatient/fetchInpatientInitialNursingAssessment',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await InpatientInitialNursingAssessmentService().show(option);
    return data.data;
  },
);

export const fetchInpatientInitialNursingAssessmentPdf = createAsyncThunk(
  'inpatient/fetchInpatientInitialNursingAssessmentPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
)

const initialState: {
  inpatientInitialNursingAssessment: InpatientInitialNursingAssessment | undefined,
  pdf: PdfModel | undefined,
} = {
  inpatientInitialNursingAssessment: undefined,
  pdf: undefined,
}

export const InpatientInitialNursingAssessmentSlice = createSlice({
  name: 'inpatientInitialNursingAssessment',
  initialState,
  reducers: {
    handleInpatientInitialNursingAssessment: (state, action) => {
      state.inpatientInitialNursingAssessment = new InpatientInitialNursingAssessment(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInpatientInitialNursingAssessment.fulfilled, (state, action) => {
      state.inpatientInitialNursingAssessment = new InpatientInitialNursingAssessment(action.payload);
    });
    builder.addCase(fetchInpatientInitialNursingAssessmentPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
        // state.pdf = new PdfModel(action.payload);
      }
    });
  },
});

export const {
  handleInpatientInitialNursingAssessment,
  handlePdf,
} = InpatientInitialNursingAssessmentSlice.actions;

export default InpatientInitialNursingAssessmentSlice.reducer;
