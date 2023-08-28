import {
  FallRiskAssessementChildrenItemModel,
  FallRiskAssessementChildrenModel,
} from '@modules/inpatient/fall-risk-assessment-children/models/fall-risk-assessment-children-model';
import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import  FallRiskAssessementChildrenService from '@modules/inpatient/fall-risk-assessment-children/services';
import { IAppRequest } from '@shared/request';

//FallRiskAssessementChildren
//fall-risk-assessement-Children

const initialState: {
  fallRiskAssessementChildren: FallRiskAssessementChildrenModel | undefined,
  pdf: PdfModel | undefined,
  pdfAll: PdfModel | undefined,
  fallRiskAssessementChildrenItem: FallRiskAssessementChildrenItemModel | undefined,
} = {
  fallRiskAssessementChildren: undefined,
  pdf: undefined,
  pdfAll: undefined,
  fallRiskAssessementChildrenItem: undefined,
}

export const fetchFallRiskAssessementChildren = createAsyncThunk(
  'fallRiskAssessementChildren/fetchFallRiskAssessementChildren',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await FallRiskAssessementChildrenService().show(option);
    return data.data;
  },
);

export const fetchFallRiskAssessementChildrenItem = createAsyncThunk(
  'fallRiskAssessementChildrenItem/fetchFallRiskAssessementChildrenItem',
  async (option: any): Promise<any> => {
    //const { data } = await FallRiskAssessementChildrenService().view(option);
    //return data.data;
  },
);

export const fetchFallRiskAssessementChildrenPdf = createAsyncThunk(
  'fallRiskAssessementChildren/fetchFallRiskAssessementChildrenPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
);

const FallRiskAssessementChildrenSlice = createSlice({
  name: 'fallRiskAssessementChildren',
  initialState,
  reducers: {
    handleFallRiskAssessementChildren: (state, action) => {
      state.fallRiskAssessementChildren = (action.payload) ? new FallRiskAssessementChildrenModel(action.payload) : action.payload;
    },
    handleFallRiskAssessementChildrenItem: (state, action) => {
      state.fallRiskAssessementChildrenItem = (action.payload) ? new FallRiskAssessementChildrenItemModel(action.payload) : action.payload;
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload; // (action.payload) ? new PdfModel(action.payload) : action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFallRiskAssessementChildren.fulfilled, (state, action) => {
      state.fallRiskAssessementChildren = (action.payload) ? new FallRiskAssessementChildrenModel(action.payload) : action.payload;
    });
    builder.addCase(fetchFallRiskAssessementChildrenPdf.fulfilled, (state, action) => {
      state.pdf = action.payload; // (action.payload) ? new PdfModel(action.payload) : action.payload;
    });
    /*
    builder.addCase(fetchFallRiskAssessementChildrenItem.fulfilled, (state, action) => {
      state.FallRiskAssessementChildrenItem = (action.payload) ? new FallRiskAssessementChildrenItemModel(action.payload) : action.payload;
    });
    */
  },
});

export const {
  handleFallRiskAssessementChildren,
  handleFallRiskAssessementChildrenItem,
  handlePdf,
} = FallRiskAssessementChildrenSlice.actions;

export default FallRiskAssessementChildrenSlice.reducer;
