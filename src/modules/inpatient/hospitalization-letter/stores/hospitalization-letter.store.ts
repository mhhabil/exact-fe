import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HospitalizationLetter} from '@modules/inpatient/hospitalization-letter/models/hospitalization-letter.model';
import HospitalizationLetterService from "@modules/inpatient/hospitalization-letter/services";
import { IAppRequest } from '@shared/request';

export const fetchHospitalizationLetter = createAsyncThunk(
  'hospitalizationLetter/fetchHospitalizationLetter',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await HospitalizationLetterService().show(option);
    return data.data;
  },
);

export const fetchHospitalizationLetterPdf = createAsyncThunk(
  'hospitalizationLetter/fetchHospitalizationLetterPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
);

const initialState: {
  hospitalizationLetter: HospitalizationLetter | undefined;
  pdf: PdfModel | undefined,
} = {
  hospitalizationLetter: undefined,
  pdf: undefined,
}

export const HospitalizationLetterSlice = createSlice({
  name: 'hospitalizationLetter',
  initialState,
  reducers: {
    handleHospitalizationLetter: (state, action) => {
      state.hospitalizationLetter = action.payload;
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHospitalizationLetter.fulfilled, (state, action) => {
      state.hospitalizationLetter = new HospitalizationLetter(action.payload);
    });
    builder.addCase(fetchHospitalizationLetterPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
      }
    });
  },
});

export const {
  handleHospitalizationLetter,
  handlePdf,
} = HospitalizationLetterSlice.actions;

export default HospitalizationLetterSlice.reducer;
