import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { OperativeFairyNursingNotesModel } from "../models/operative-fairy-nursing-notes.model";
import { OperativeFairyNursingNotesModel } from "../models";
import { OperativeFairyNursingNotesService } from "../services";
import { IAppRequest } from "@src/shared/request";

export const fetchOperativeFairyNursingNotes = createAsyncThunk(
  'operativeFairyNursingNotes/fetchoOperativeFairyNursingNotes',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await OperativeFairyNursingNotesService().show(option);
    return data.data;
  },
);

export const fetchOperativeFairyNursingNotesPdf = createAsyncThunk(
  'operativeFairyNursingNotes/fetchoOperativeFairyNursingNotesPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
);

const initialState: {
  operativeFairyNursingNotes: OperativeFairyNursingNotesModel | undefined,
  pdf: PdfModel | undefined,
} = {
  operativeFairyNursingNotes: undefined,
  pdf:undefined,
}

export const OperativeFairyNursingNotesSlice = createSlice({
  name: 'operativeFairyNursingNotes',
  initialState,
  reducers: {
    handleoperativeFairyNursingNotes: (state, action) => {
      state.operativeFairyNursingNotes = new OperativeFairyNursingNotesModel(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOperativeFairyNursingNotes.fulfilled, (state, action) => {
      state.operativeFairyNursingNotes = new OperativeFairyNursingNotesModel(action.payload);
    });
    builder.addCase(fetchOperativeFairyNursingNotesPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload; //  new PdfModel(action.payload);
      }
    });
  },
});

export const {
  handleoperativeFairyNursingNotes,
  handlePdf,
} = OperativeFairyNursingNotesSlice.actions;

export default OperativeFairyNursingNotesSlice.reducer;