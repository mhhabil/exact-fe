import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DoctorPreliminaryStudyModel } from '@modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model';
import { DoctorPreliminaryStudyService } from '@modules/outpatient/doctor-preliminary-study/services';
import { IAppRequest } from '@shared/request';

export const fetchDoctorPreliminaryStudy = createAsyncThunk(
  'doctorPreliminaryStudy/fetchDoctorPreliminaryStudy',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await DoctorPreliminaryStudyService().show(option);
    return data.data;
  },
);

export const fetchDoctorPreliminaryStudyPdf = createAsyncThunk(
  'doctorPreliminaryStudy/fetchDoctorPreliminaryStudyPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
);

const initialState: {
  doctorPreliminaryStudy: DoctorPreliminaryStudyModel | undefined;
  pdf: PdfModel | undefined,
} = {
  doctorPreliminaryStudy: undefined,
  pdf: undefined,
}

export const DoctorPreliminaryStudySlice = createSlice({
  name: 'doctorPreliminaryStudy',
  initialState,
  reducers: {
    handleDoctorPreliminaryStudy: (state, action) => {
      state.doctorPreliminaryStudy = action.payload;
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDoctorPreliminaryStudy.fulfilled, (state, action) => {
      state.doctorPreliminaryStudy = new DoctorPreliminaryStudyModel(action.payload);
    });
    builder.addCase(fetchDoctorPreliminaryStudyPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
      }
    });
  },
});

export const {
  handleDoctorPreliminaryStudy,
  handlePdf,
} = DoctorPreliminaryStudySlice.actions;

export default DoctorPreliminaryStudySlice.reducer;
