import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAppRequest } from '@shared/request';
import { InpatientMedicalNote } from '@modules/inpatient/inpatient-medical-note/models/inpatient-medical-note.model';
import InpatientMedicalNoteService from '@modules/inpatient/inpatient-medical-note/services';

export const fetchInpatientMedicalNote = createAsyncThunk(
  'inpatientMedicalNote/fetchInpatientMedicalNote',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await InpatientMedicalNoteService().show(option);
    return data.data;
  },
);

export const fetchInpatientMedicalNotePdf = createAsyncThunk(
  'inpatientMedicalNote/fetchInpatientMedicalNotePdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
)

const initialState: {
  inpatientMedicalNote: InpatientMedicalNote | undefined,
  pdf: PdfModel | undefined,
} = {
  inpatientMedicalNote: undefined,
  pdf: undefined,
}

export const InpatientMedicalNoteSlice = createSlice({
  name: 'inpatientMedicalNote',
  initialState,
  reducers: {
    handleInpatientMedicalNote: (state, action) => {
      state.inpatientMedicalNote = new InpatientMedicalNote(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInpatientMedicalNote.fulfilled, (state, action) => {
      state.inpatientMedicalNote = new InpatientMedicalNote(action.payload);
    });
    builder.addCase(fetchInpatientMedicalNotePdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
        // state.pdf = new PdfModel(action.payload);
      }
    });
  },
});

export const {
  handleInpatientMedicalNote,
  handlePdf,
} = InpatientMedicalNoteSlice.actions;

export default InpatientMedicalNoteSlice.reducer;
