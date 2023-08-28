import { IFindPdfRequest, PdfModel, PdfService } from '@shared/pdf';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAppRequest } from '@shared/request';
import { AnestheticStatus } from '@modules/operating-room/anesthetic-status/models/anesthetic-status.model';
import AnestheticStatusService from '@modules/operating-room/anesthetic-status/services';

//AnestheticStatus 
 
export const fetchAnestheticStatus = createAsyncThunk(
  'anestheticStatus/fetchAnestheticStatus',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await AnestheticStatusService().show(option);
    return data.data;
  },
);

export const fetchAnestheticStatusPdf = createAsyncThunk(
  'anestheticStatus/fetchAnestheticStatusPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const { data } = await PdfService().find(option);
    return data.data;
  },
)

const initialState: {
  anestheticStatus: AnestheticStatus | undefined,
  pdf: PdfModel | undefined,
} = {
  anestheticStatus: undefined,
  pdf: undefined,
}

export const AnestheticStatusSlice = createSlice({
  name: 'AnestheticStatus',
  initialState,
  reducers: {
    handleAnestheticStatus: (state, action) => {
      state.anestheticStatus = new AnestheticStatus(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAnestheticStatus.fulfilled, (state, action) => {
      state.anestheticStatus = new AnestheticStatus(action.payload);
    });
    builder.addCase(fetchAnestheticStatusPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
        //state.pdf = new PdfModel(action.payload);
      }
    });
  },
});

export const {
  handleAnestheticStatus,
  handlePdf,
} = AnestheticStatusSlice.actions;

export default AnestheticStatusSlice.reducer;
