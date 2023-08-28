import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AssessmentUgdModel } from "../models/assessment-ugd-models";
import { AssessmentUgdService } from "../services";
import { IAppRequest } from "@src/shared/request";

export const fetchAssessmentUgd = createAsyncThunk(
  'assessmentUgd/fetchAssessmentUgd',
  async (option: IAppRequest): Promise<any> => {
    const {data} = await AssessmentUgdService().show(option);
    return data.data;
  },
);

export const fetchAssessmentUgdPdf = createAsyncThunk(
  'assessmentUgd/fetchAssessmentUgdPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
)

const initialState: {
    assessmentUgd: AssessmentUgdModel | undefined,
    pdf: PdfModel | undefined,
} = {
  assessmentUgd: undefined,
  pdf: undefined,
}

export const AssessmentUgdSlice = createSlice({
  name: 'assessmentUgd',
  initialState,
  reducers: {
    handleAssessmentUgd: (state, action) => {
      state.assessmentUgd = new AssessmentUgdModel(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAssessmentUgd.fulfilled, (state, action) => {
      state.assessmentUgd = new AssessmentUgdModel(action.payload);
    });
    builder.addCase(fetchAssessmentUgdPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
      }
    });
  },
});

export const {
  handleAssessmentUgd,
  handlePdf,
} = AssessmentUgdSlice.actions;

export default AssessmentUgdSlice.reducer;
