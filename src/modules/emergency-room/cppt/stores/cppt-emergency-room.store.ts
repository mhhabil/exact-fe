import { ConsultationLink, CpptEmergencyRoomModel } from "../models/cppt-emergency-room-model";
import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CpptEmergencyRoomService } from "../services";
import { CpptModel } from "@src/modules/ro/cppt/models/cppt-ro.model";
import { ISortingRequest } from "@src/shared/request/requests/cppt-sort.request";

const  initialState: {
  cppt: CpptModel | undefined,
  pdf: PdfModel | undefined,
  pdfAll:  PdfModel | undefined,
  cpptItem: CpptEmergencyRoomModel | undefined,
  showCreateEmergencyRoom: boolean | undefined,
  consultationLinkEmergencyRoom: ConsultationLink | undefined,
  autoRefresh: boolean,
} = {
  cppt: undefined,
  pdf: undefined,
  pdfAll: undefined,
  cpptItem: undefined,
  showCreateEmergencyRoom: undefined,
  consultationLinkEmergencyRoom: undefined,
  autoRefresh: false,
}

export const fetchCpptEmergencyRoom = createAsyncThunk(
  'cpptUgd/fetchCpptEmergencyRoom',
  async (option: ISortingRequest): Promise<any> => {
    const {data} = await CpptEmergencyRoomService().show(option);
    return data.data;
  },
);

export const fetchCpptEmergencyRoomItem = createAsyncThunk(
  'cpptUgd/fetchCpptEmergencyRoomItem',
  async (option: any): Promise<any> => {
    const {data} = await CpptEmergencyRoomService().view(option);
    return data.data;
  },
);

export const fetchCpptEmergencyRoomPdf = createAsyncThunk(
  'cpptUgd/fetchCpptEmergencyRoomPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
);

export const fetchCpptEmergencyRoomDayPdf = createAsyncThunk(
  'cpptUgd/fetchCpptEmergencyRoomDayPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
);

const CpptEmergencyRoomSlice = createSlice({
  name: 'cpptEmergencyRoom',
  initialState,
  reducers: {
    handleCppt: (state, action) => {
      state.cppt = (action.payload) ? new CpptModel(action.payload) : action.payload;
    },
    handleCpptItem: (state, action) => {
      state.cpptItem = (action.payload) ? new CpptModel(action.payload) : action.payload;
    },
    handlePdfAll: (state, action) => {
      state.pdfAll = action.payload;
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
    handleConsultationLinkEmergencyRoom: (state, action) => {
      state.consultationLinkEmergencyRoom = action.payload ? new ConsultationLink(action.payload) : undefined;
    },
    handleShowCreateEmergencyRoom: (state, action) => {
      state.showCreateEmergencyRoom = action.payload;
    },
    handleAutoRefresh: (state, action) => {
      state.autoRefresh = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCpptEmergencyRoom.fulfilled, (state, action) => {
      state.cppt = (action.payload) ? new CpptModel(action.payload) : action.payload;
    });
    builder.addCase(fetchCpptEmergencyRoomPdf.fulfilled, (state, action) => {
      state.pdfAll = action.payload
    });
    builder.addCase(fetchCpptEmergencyRoomDayPdf.fulfilled, (state, action) => {
      state.pdf = action.payload
    });
    builder.addCase(fetchCpptEmergencyRoomItem.fulfilled, (state, action) => {
      state.cpptItem = (action.payload) ? new CpptEmergencyRoomModel(action.payload) : action.payload;
    });
  },
});

export const {
  handleCppt,
  handlePdf,
  handlePdfAll,
  handleCpptItem,
  handleConsultationLinkEmergencyRoom,
  handleShowCreateEmergencyRoom,
} = CpptEmergencyRoomSlice.actions;

export default CpptEmergencyRoomSlice.reducer;
