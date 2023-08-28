import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAppRequest } from "@src/shared/request";
import { ProofOfOutpatientService } from "../services";
import { ProofOfOutpatientServicesModel } from "../models/proof-of-outpatient-services.model";

export const fetchProofOfOutpatientService = createAsyncThunk(
  'proofOfOutpatientService/fetchProofOfOutpatientService',
  async (option: IAppRequest) : Promise<any> => {
    const {data} = await ProofOfOutpatientService().show(option);
    return data.data;
  },
);

export const fetchProofOfOutpatientServicePdf = createAsyncThunk(
  'proofOfOutpatientService/fetchProofOfOutpatientServicePdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
)

const initialState: {
  proofOfOutpatientService: ProofOfOutpatientServicesModel | undefined,
  pdf: PdfModel | undefined,
  autoSign: boolean | undefined,
} = {
  proofOfOutpatientService: undefined,
  pdf:undefined,
  autoSign: undefined,
}

export const ProofOfOutpatientServiceSlice = createSlice({
  name: 'proofOfOutpatientService',
  initialState,
  reducers: {
    handleproofOfOutpatientService: (state, action) => {
      state.proofOfOutpatientService = new ProofOfOutpatientServicesModel(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
    handleAutoSign: (state, action) => {
      state.autoSign = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProofOfOutpatientService.fulfilled, (state, action) => {
      state.proofOfOutpatientService = new ProofOfOutpatientServicesModel(action.payload);
    });
    builder.addCase(fetchProofOfOutpatientServicePdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
      }
    });
  },
});

export const {
  handleproofOfOutpatientService,
  handlePdf,
  handleAutoSign,
} = ProofOfOutpatientServiceSlice.actions;

export default ProofOfOutpatientServiceSlice.reducer;
