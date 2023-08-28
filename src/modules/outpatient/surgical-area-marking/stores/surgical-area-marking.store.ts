import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAppRequest } from "@src/shared/request";
import { SurgicalAreaMarkingModel } from "@modules/outpatient/surgical-area-marking/models/surgical-area-marking.model";
import { SurgicalAreaMarkingService } from "@modules/outpatient/surgical-area-marking/services";

export const fetchSurgicalAreaMarking = createAsyncThunk(
  'surgicalAreaMarking/fetchSurgicalAreaMarking',
  async (option: IAppRequest) : Promise<any> => {
    const { data } = await SurgicalAreaMarkingService().show(option);
    return data.data;
  },
);

export const fetchSurgicalAreaMarkingPdf = createAsyncThunk(
  'surgicalAreaMarking/fetchSurgicalAreaMarkingPdf',
  async (option: IFindPdfRequest) : Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
)

const initialState: {
  surgicalAreaMarking: SurgicalAreaMarkingModel | undefined,
  pdf: PdfModel | undefined,
} = {
  surgicalAreaMarking: undefined,
  pdf: undefined,
}

export const SurgicalAreaMarkingSlice = createSlice({
  name: 'surgicalAreaMarking',
  initialState,
  reducers: {
    handleSurgicalAreaMarking: (state, action) => {
      state.surgicalAreaMarking = new SurgicalAreaMarkingModel(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSurgicalAreaMarking.fulfilled, (state, action) => {
      state.surgicalAreaMarking = new SurgicalAreaMarkingModel(action.payload);
    });
    builder.addCase(fetchSurgicalAreaMarkingPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload
      }
    });
  },
});

export const {
  handleSurgicalAreaMarking,
  handlePdf,
} = SurgicalAreaMarkingSlice.actions;

export default SurgicalAreaMarkingSlice.reducer;
