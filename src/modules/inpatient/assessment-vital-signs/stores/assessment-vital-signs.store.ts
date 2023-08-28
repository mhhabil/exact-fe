import {
  AssessmentVitalSignsItemModel,
  AssessmentVitalSignsModel,
} from '@modules/inpatient/assessment-vital-signs/models/assessment-vital-signs.model';
import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AssessmentVitalSignsService } from '@modules/inpatient/assessment-vital-signs/services';
import { IAppRequest } from '@shared/request';

const initialState: {
  assessmentVitalSigns: AssessmentVitalSignsModel | undefined,
  pdf: PdfModel | undefined,
  pdfAll: PdfModel | undefined,
  assessmentVitalSignsItem: AssessmentVitalSignsItemModel | undefined,
} = {
  assessmentVitalSigns: undefined,
  pdf: undefined,
  pdfAll: undefined,
  assessmentVitalSignsItem: undefined,
}

export const fetchAssessmentVitalSigns = createAsyncThunk(
  'assessmentVitalSigns/fetchAssessmentVitalSigns',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await AssessmentVitalSignsService().show(option);
    return data.data;
  },
);

export const fetchAssessmentVitalSignsItem = createAsyncThunk(
  'assessmentVitalSigns/fetchAssessmentVitalSignsItem',
  async (option: any): Promise<any> => {
    // const { data } = await AssessmentVitalSignsService().view(option);
    // return data.data;
  },
);

export const fetchAssessmentVitalSignsPdf = createAsyncThunk(
  'AssessmentVitalSigns/fetchAssessmentVitalSignsPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
);

const AssessmentVitalSignsSlice = createSlice({
  name: 'assessmentVitalSigns',
  initialState,
  reducers: {
    handleAssessmentVitalSigns: (state, action) => {
      state.assessmentVitalSigns = (action.payload) ? new AssessmentVitalSignsModel(action.payload) : action.payload;
    },
    handleAssessmentVitalSignsItem: (state, action) => {
      state.assessmentVitalSignsItem = (action.payload) ? new AssessmentVitalSignsItemModel(action.payload) : action.payload;
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload; // (action.payload) ? new PdfModel(action.payload) : action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAssessmentVitalSigns.fulfilled, (state, action) => {
      state.assessmentVitalSigns = (action.payload) ? new AssessmentVitalSignsModel(action.payload) : action.payload;
    });
    builder.addCase(fetchAssessmentVitalSignsPdf.fulfilled, (state, action) => {
      state.pdf = action.payload; // (action.payload) ? new PdfModel(action.payload) : action.payload;
    });
    builder.addCase(fetchAssessmentVitalSignsItem.fulfilled, (state, action) => {
      state.assessmentVitalSignsItem = (action.payload) ? new AssessmentVitalSignsItemModel(action.payload) : action.payload;
    });
  },
});

export const {
  handleAssessmentVitalSigns,
  handleAssessmentVitalSignsItem,
  handlePdf,
} = AssessmentVitalSignsSlice.actions;

export default AssessmentVitalSignsSlice.reducer;
