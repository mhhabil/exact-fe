import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAppRequest } from "@src/shared/request";
import { TriageForm } from "../models/triage-form.model";
import { TriageFormService } from "@modules/emergency-room/triage-form/services";

export const fetchTriageForm = createAsyncThunk(
  'triageForm/fetchTriageForm',
  async (option: IAppRequest) : Promise<any> => {
    const {data} = await TriageFormService().show(option);
    return data.data;
  },
);

export const fetchTriageFormPdf = createAsyncThunk(
  'triageForm/fetchTriageFormPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
)

const initialState: {
  triageForm: TriageForm | undefined,
  pdf: PdfModel | undefined,
} = {
  triageForm: undefined,
  pdf: undefined,
}

export const TriageFormSlice = createSlice({
  name: 'triageForm',
  initialState,
  reducers: {
    handleTriageForm: (state, action) => {
      state.triageForm = new TriageForm(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTriageForm.fulfilled, (state, action) => {
      state.triageForm = new TriageForm(action.payload);
    });
    builder.addCase(fetchTriageFormPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
        // state.pdf = new PdfModel(action.payload);
      }
    });
  },
});

export const {
  handleTriageForm,
  handlePdf,
} = TriageFormSlice.actions;

export default TriageFormSlice.reducer;
