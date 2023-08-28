import {
  FallRiskAssessementAdultItemModel,
  FallRiskAssessementAdultModel,
} from '@modules/inpatient/fall-risk-assessement-adult/models/fall-risk-assessement-adult.model';
import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FallRiskAssessementAdultService } from '@modules/inpatient/fall-risk-assessement-adult/services';
import { IAppRequest } from '@shared/request';

//FallRiskAssessementAdult
//fall-risk-assessement-adult

const initialState: {
  fallRiskAssessementAdult: FallRiskAssessementAdultModel | undefined,
  pdf: PdfModel | undefined,
  pdfAll: PdfModel | undefined,
  fallRiskAssessementAdultItem: FallRiskAssessementAdultItemModel | undefined,
} = {
  fallRiskAssessementAdult: undefined,
  pdf: undefined,
  pdfAll: undefined,
  fallRiskAssessementAdultItem: undefined,
}

export const fetchFallRiskAssessementAdult = createAsyncThunk(
  'fallRiskAssessementAdult/fetchFallRiskAssessementAdult',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await FallRiskAssessementAdultService().show(option);
    return data.data;
  },
);

export const fetchFallRiskAssessementAdultItem = createAsyncThunk(
  'fallRiskAssessementAdultItem/fetchFallRiskAssessementAdultItem',
  async (option: any): Promise<any> => {
    //const { data } = await FallRiskAssessementAdultService().view(option);
    //return data.data;
  },
);

export const fetchFallRiskAssessementAdultPdf = createAsyncThunk(
  'fallRiskAssessementAdult/fetchFallRiskAssessementAdultPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
);

const FallRiskAssessementAdultSlice = createSlice({
  name: 'fallRiskAssessementAdult',
  initialState,
  reducers: {
    handleFallRiskAssessementAdult: (state, action) => {
      state.fallRiskAssessementAdult = (action.payload) ? new FallRiskAssessementAdultModel(action.payload) : action.payload;
    },
    handleFallRiskAssessementAdultItem: (state, action) => {
      state.fallRiskAssessementAdultItem = (action.payload) ? new FallRiskAssessementAdultItemModel(action.payload) : action.payload;
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload; // (action.payload) ? new PdfModel(action.payload) : action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFallRiskAssessementAdult.fulfilled, (state, action) => {
      state.fallRiskAssessementAdult = (action.payload) ? new FallRiskAssessementAdultModel(action.payload) : action.payload;
    });
    builder.addCase(fetchFallRiskAssessementAdultPdf.fulfilled, (state, action) => {
      state.pdf = action.payload; // (action.payload) ? new PdfModel(action.payload) : action.payload;
    });
    /*
    builder.addCase(fetchFallRiskAssessementAdultItem.fulfilled, (state, action) => {
      state.FallRiskAssessementAdultItem = (action.payload) ? new FallRiskAssessementAdultItemModel(action.payload) : action.payload;
    });
    */
  },
});

export const {
  handleFallRiskAssessementAdult,
  handleFallRiskAssessementAdultItem,
  handlePdf,
} = FallRiskAssessementAdultSlice.actions;

export default FallRiskAssessementAdultSlice.reducer;
