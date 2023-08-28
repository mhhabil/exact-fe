import { GivenMedsModel, RecordsOfMedicationOnTimeModel } from "../models/records-of-medication-on-time.model";
import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAppRequest } from "@src/shared/request";
import { ISortingRequest } from "@src/shared/request/requests/cppt-sort.request";
import { RecordsOfMedicationOnTimeService } from "../services";

export const fetchRecordsOfMedicationOnTime = createAsyncThunk(
  'recordsOfMedicationOnTime/fetchRecordsOfMedicationOnTime',
  async (option: ISortingRequest): Promise<any> => {
    const { data } = await RecordsOfMedicationOnTimeService().show(option);
    return data.data;
  },
);

export const fetchMeds = createAsyncThunk(
  'recordsOfMedicationOnTime/fetchMeds',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await RecordsOfMedicationOnTimeService().getMeds(option);
    return data.data;
  },
)

export const fetchRecordsOfMedicationOnTimePdf = createAsyncThunk(
  'recordsOfMedicationOnTime/fetchRecordsOfMedicationOnTimePdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
);

const initialState: {
  recordsOfMedicationOnTime: RecordsOfMedicationOnTimeModel | undefined,
  meds: GivenMedsModel | undefined,
  pdf: PdfModel | undefined,
} = {
  recordsOfMedicationOnTime: undefined,
  meds: undefined,
  pdf:  undefined,
}

export const RecordsOfMedicationOnTimeSlice = createSlice({
  name: 'recordsOfMedicationOnTime',
  initialState,
  reducers: {
    handleRecordsOfMedicationOnTime: (state, action) => {
      state.recordsOfMedicationOnTime = new RecordsOfMedicationOnTimeModel(action.payload);
    },
    handleMeds: (state, action) => {
      state.meds = new GivenMedsModel(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecordsOfMedicationOnTime.fulfilled, (state, action) => {
      state.recordsOfMedicationOnTime = new RecordsOfMedicationOnTimeModel(action.payload);
    });
    builder.addCase(fetchMeds.fulfilled, (state, action) => {
      state.meds = new GivenMedsModel(action.payload);
    });
    builder.addCase(fetchRecordsOfMedicationOnTimePdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
      }
    });
  },
});

export const {
  handleRecordsOfMedicationOnTime,
  handleMeds,
  handlePdf,
} = RecordsOfMedicationOnTimeSlice.actions;

export default RecordsOfMedicationOnTimeSlice.reducer;
