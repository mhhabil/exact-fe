import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAppRequest } from '@shared/request';
import { InpatientInitialNursingAssessmentChildren } from '@modules/inpatient/inpatient-initial-nursing-assessment-children/models/inpatient-initial-nursing-assessment-chiildren.model';
import InpatientInitialNursingAssessmentChildrenService
  from '@modules/inpatient/inpatient-initial-nursing-assessment-children/services';

export const fetchInpatientInitialNursingAssessmentChildren = createAsyncThunk(
  'inpatient/fetchInpatientInitialNursingAssessmentChildren',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await InpatientInitialNursingAssessmentChildrenService().show(option);
    return data.data;
  },
);

export const fetchInpatientInitialNursingAssessmentChildrenPdf = createAsyncThunk(
  'inpatient/fetchInpatientInitialNursingAssessmentChildrenPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
)

const initialState: {
  inpatientInitialNursingAssessmentChildren: InpatientInitialNursingAssessmentChildren | undefined,
  pdf: PdfModel | undefined,
} = {
  inpatientInitialNursingAssessmentChildren: undefined,
  pdf: undefined,
}

export const InpatientInitialNursingAssessmentChildrenSlice = createSlice({
  name: 'inpatientInitialNursingAssessmentChildren',
  initialState,
  reducers: {
    handleInpatientInitialNursingAssessmentChildren: (state, action) => {
      state.inpatientInitialNursingAssessmentChildren = new InpatientInitialNursingAssessmentChildren(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInpatientInitialNursingAssessmentChildren.fulfilled, (state, action) => {
      state.inpatientInitialNursingAssessmentChildren = new InpatientInitialNursingAssessmentChildren(action.payload);
    });
    builder.addCase(fetchInpatientInitialNursingAssessmentChildrenPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
        // state.pdf = new PdfModel(action.payload);
      }
    });
  },
});

export const {
  handleInpatientInitialNursingAssessmentChildren,
  handlePdf,
} = InpatientInitialNursingAssessmentChildrenSlice.actions;

export default InpatientInitialNursingAssessmentChildrenSlice.reducer;
