import { BiometricModel, ToolInspectionModel } from "../../inspection-result/models/inspection-result.model";
import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAppRequest } from "@src/shared/request";
import { InspectionResultYagLaserAndRetinaService } from "../services";

const initialState: {
  inspectionResultYagLaserAndRetina: ToolInspectionModel | undefined,
  pdf: PdfModel | undefined,
  pdfAll:  PdfModel | undefined,
  inspectionResultYagLaserAndRetinaItem: BiometricModel | undefined,
} = {
  inspectionResultYagLaserAndRetina: undefined,
  pdf: undefined,
  pdfAll: undefined,
  inspectionResultYagLaserAndRetinaItem: undefined,
}

export const fetchInspectionResultYagLaserAndRetina = createAsyncThunk(
  'inspectionResultYagLaserAndRetina/fetchInspectionResultYagLaserAndRetina',
  async (option: IAppRequest): Promise<any> => {
    const {data} = await InspectionResultYagLaserAndRetinaService().show(option);
    return data.data;
  },
);

export const fetchInspectionResultYagLaserAndRetinaItem = createAsyncThunk(
  'inspectionResultYagLaserAndRetina/fetchInspectionResultYagLaserAndRetinaItem',
  async (option: any): Promise<any> => {
    const {data} = await InspectionResultYagLaserAndRetinaService().view(option);
    return data.data;
  },
);

export const fetchInspectionResultYagLaserAndRetinaPdf = createAsyncThunk(
  'inspectionResultYagLaserAndRetina/fetchInspectionResultYagLaserAndRetinaPdf',
  async (option:  IFindPdfRequest): Promise<any> => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
);

const InspectionResultYagLaserAndRetinaSlice = createSlice({
  name: 'inspectionResultYagLaserAndRetina',
  initialState,
  reducers: {
    handleInspectionResultYagLaserAndRetina: (state, action) => {
      state.inspectionResultYagLaserAndRetina = (action.payload) ? new ToolInspectionModel(action.payload) : action.payload;
    },
    handleInspectionResultYagLaserAndReinaItem: (state, action) => {
      state.inspectionResultYagLaserAndRetinaItem = (action.payload) ? new BiometricModel(action.payload) : action.payload;
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInspectionResultYagLaserAndRetina.fulfilled, (state, action) => {
      state.inspectionResultYagLaserAndRetina = (action.payload) ? new ToolInspectionModel(action.payload) : action.payload;
    });
    builder.addCase(fetchInspectionResultYagLaserAndRetinaItem.fulfilled, (state, action) => {
      state.inspectionResultYagLaserAndRetinaItem = (action.payload) ? new BiometricModel(action.payload) : action.payload;
    });
    builder.addCase(fetchInspectionResultYagLaserAndRetinaPdf.fulfilled, (state, action) => {
      state.pdf = action.payload;
    });
  },
});

export const {
  handleInspectionResultYagLaserAndRetina,
  handleInspectionResultYagLaserAndReinaItem,
  handlePdf,
} = InspectionResultYagLaserAndRetinaSlice.actions;

export default InspectionResultYagLaserAndRetinaSlice.reducer;
