import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAppRequest } from '@shared/request';
import { NursingCarePlan } from '@modules/inpatient/nursing-care-plan/models/nursing-care-plan.model';
import { NursingCarePlanService } from '@modules/inpatient/nursing-care-plan/services';

export const fetchNursingCarePlan = createAsyncThunk(
  'nursingCarePlan/fetchNursingCarePlan',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await NursingCarePlanService().show(option);
    return data.data;
  },
);

export const fetchNursingCarePlanPdf = createAsyncThunk(
  'nursingCarePlan/fetchNursingCarePlanPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
)

const initialState: {
  nursingCarePlan: NursingCarePlan | undefined,
  pdf: PdfModel | undefined,
} = {
  nursingCarePlan: undefined,
  pdf: undefined,
}

export const NursingCarePlanSlice = createSlice({
  name: 'nursingCarePlan',
  initialState,
  reducers: {
    handleNursingCarePlan: (state, action) => {
      state.nursingCarePlan = new NursingCarePlan(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNursingCarePlan.fulfilled, (state, action) => {
      state.nursingCarePlan = new NursingCarePlan(action.payload);
    });
    builder.addCase(fetchNursingCarePlanPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
        //state.pdf = new PdfModel(action.payload);
      }
    });
  },
});

export const {
  handleNursingCarePlan,
  handlePdf,
} = NursingCarePlanSlice.actions;

export default NursingCarePlanSlice.reducer;
