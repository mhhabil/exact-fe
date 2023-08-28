import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FallRiskAssessmentModel } from "../models/fall-risk-assessment.model";
import { FallRiskAssessmentService } from "../services";
import { IAppRequest } from "@src/shared/request";

export const fetchFallRiskAssessment = createAsyncThunk(
  'fallRiskAssessment/fetchFallRiskAssessment',
  async (option: IAppRequest): Promise<any> => {
    const {data} = await FallRiskAssessmentService().show(option);
    return data.data;
  },
);

export const fetchFallRiskAssessmentPdf = createAsyncThunk(
  'fallRiskAssessment/fetchFallRiskAssessmentPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
)

const initialState: {
  fallRiskAssessment: FallRiskAssessmentModel | undefined,
  pdf: PdfModel | undefined,
} = {
  fallRiskAssessment: undefined,
  pdf:undefined,
}

export const FallRiskAssessmentSlice = createSlice({
  name: 'fallRiskAssessment',
  initialState,
  reducers: {
    handlefallRiskAsessment: (state, action) => {
      state.fallRiskAssessment = new FallRiskAssessmentModel(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFallRiskAssessment.fulfilled, (state, action) => {
      state.fallRiskAssessment = new FallRiskAssessmentModel(action.payload);
    });
    builder.addCase(fetchFallRiskAssessmentPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload; // new PdfModel(action.payload);
      }
    });
  },
});

export const {
  handlefallRiskAsessment,
  handlePdf,
} = FallRiskAssessmentSlice.actions;

export default FallRiskAssessmentSlice.reducer;
