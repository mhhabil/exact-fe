import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PreparationOfAnestheticEquipmentModel } from "../models/preparation-of-anesthetic-equipment-model";
import { PreparationOfAnestheticEquipmentService } from "../services";
import { IAppRequest } from "@src/shared/request";

export const fetchPreparationOfAnestheticEquipment = createAsyncThunk(
  'preparationOfAnestheticEquipment/fetchPreparationOfAnestheticEquipment',
  async (option: IAppRequest): Promise<any> => {
    const {data} = await PreparationOfAnestheticEquipmentService().show(option);
    return data.data;
  },
);

export const fetchPreparationOfAnestheticEquipmentPdf = createAsyncThunk(
  'preparationOfAnestheticEquipment/fetchPreparationOfAnestheticEquipmentPdf',
  async (option: IFindPdfRequest): Promise<any> => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
);

const initialState: {
  preparationOfAnestheticEquipment: PreparationOfAnestheticEquipmentModel | undefined,
  pdf: PdfModel | undefined,
} = {
  preparationOfAnestheticEquipment: undefined,
  pdf: undefined,
}

export const PreparationOfAnestheticEquipmentSlice = createSlice({
  name: 'preparationOfAnestheticEquipment',
  initialState,
  reducers: {
    handlePreparationOfAnestheticEquipment: (state, action) => {
      state.preparationOfAnestheticEquipment = new PreparationOfAnestheticEquipmentModel(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPreparationOfAnestheticEquipment.fulfilled, (state, action) => {
      state.preparationOfAnestheticEquipment = new PreparationOfAnestheticEquipmentModel(action.payload);
    });
    builder.addCase(fetchPreparationOfAnestheticEquipmentPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
      }
    });
  },
});

export const {
  handlePreparationOfAnestheticEquipment,
  handlePdf,
} = PreparationOfAnestheticEquipmentSlice.actions;

export default PreparationOfAnestheticEquipmentSlice.reducer;
