import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NursingInitialAssessmentService } from "../services";
import { NursingInitialAssessmenttModel } from "../models/nursing-initial-assessment-model";
import { IAppRequest } from "@src/shared/request";

export const fetchNursingInitialAssessment = createAsyncThunk(
  'nursingInitialAssessment/fetchNursingInitialAssessment',
  async (option: IAppRequest): Promise<any> => {
    const {data} = await NursingInitialAssessmentService().show(option);
    return data.data;
  },
);

export const fetchNursingInitialAssessmentPdf = createAsyncThunk(
  'nursingInitialAssessment/fetchNursingInitialAssessmentPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
)

const initialState: {
  nursingInitialAssessment: NursingInitialAssessmenttModel | undefined,
  pdf: PdfModel | undefined,
} = {
  nursingInitialAssessment: undefined,
  pdf:undefined,
}

export const NursingInitialAssessmentSlice = createSlice({
  name: 'nursingInitialAssessment',
  initialState,
  reducers: {
    handlenursingInitialAssessment: (state, action) => {
      state.nursingInitialAssessment = new NursingInitialAssessmenttModel(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNursingInitialAssessment.fulfilled, (state, action) => {
      state.nursingInitialAssessment = new NursingInitialAssessmenttModel(action.payload);
    });
    builder.addCase(fetchNursingInitialAssessmentPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
      }
    });
  },
});

export const {
  handlenursingInitialAssessment,
  handlePdf,
} = NursingInitialAssessmentSlice.actions;

export default NursingInitialAssessmentSlice.reducer;