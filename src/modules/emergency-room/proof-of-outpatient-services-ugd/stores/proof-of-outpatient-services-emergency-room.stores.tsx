import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAppRequest } from "@src/shared/request";
import { ProofOfOutpatientServicesEmergencyRoom } from "../services";
import { ProofOfOutpatientServicesEmergencyRoomModel } from "../models/proof-of-outpatient-services-emergency-room.model";

export const fetchProofOfOutpatientServicesEmergencyRoom = createAsyncThunk(
  'proofOfOutpatientServicesEmergencyRoom/fetchProofOfOutpatientServicesEmergencyRoom',
  async (option: IAppRequest) : Promise<any> => {
    const {data} = await ProofOfOutpatientServicesEmergencyRoom().show(option);
    return data.data;
  },
);

export const fetchProofOfOutpatientServicesEmergencyRoomPdf = createAsyncThunk(
  'proofOfOutpatientServicesEmergencyRoom/fetchProofOfOutpatientServicesEmergencyRoomPdf',
  async (option: IFindPdfRequest) : Promise<any> => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
);

const initialState: {
  proofOfOutpatientServicesEmergencyRoom: ProofOfOutpatientServicesEmergencyRoomModel | undefined,
  pdf: PdfModel | undefined,
  autoSign: boolean | undefined,
} = {
  proofOfOutpatientServicesEmergencyRoom: undefined,
  pdf: undefined,
  autoSign: undefined,
}

export const ProofOfOutpatientServicesEmergencyRoomSlice = createSlice({
  name: 'proofOfOutpatientServicesEmergencyRoom',
  initialState,
  reducers: {
    handleproofOfOutpatientServicesEmergencyRoom: (state, action) => {
      state.proofOfOutpatientServicesEmergencyRoom = new ProofOfOutpatientServicesEmergencyRoomModel(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
    handleAutoSign: (state, action) => {
      state.autoSign = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProofOfOutpatientServicesEmergencyRoom.fulfilled, (state, action) => {
      state.proofOfOutpatientServicesEmergencyRoom = new ProofOfOutpatientServicesEmergencyRoomModel(action.payload);
    });
    builder.addCase(fetchProofOfOutpatientServicesEmergencyRoomPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
      }
    });
  },
});

export const {
  handleproofOfOutpatientServicesEmergencyRoom,
  handlePdf,
  handleAutoSign,
} = ProofOfOutpatientServicesEmergencyRoomSlice.actions;

export default ProofOfOutpatientServicesEmergencyRoomSlice.reducer;
