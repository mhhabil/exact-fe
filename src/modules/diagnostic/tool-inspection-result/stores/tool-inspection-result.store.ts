import { IDicomSearch, IModality } from '../models/tool-inspection-result.model';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAppRequest } from '@shared/request';
import { ToolInspectionResultService } from '@modules/diagnostic/tool-inspection-result/services';
import { ISortingRequest } from '@src/shared/request/requests/cppt-sort.request';

export const fetchDicom = createAsyncThunk(
  'dicom/fetchDicom',
  async (option: ISortingRequest): Promise<any> => {
    const { data } = await ToolInspectionResultService().getDicom(option);
    return data.data;
  },
);

export const fetchModality = createAsyncThunk(
  'modality/fetchModality',
  async (): Promise<any> => {
    const { data } = await ToolInspectionResultService().getModality();
    return data.data;
  },
)

const initialState: {
  dicom: IDicomSearch | undefined,
  modality: IModality | undefined,
} = {
  dicom: undefined,
  modality: undefined,
}

export const ToolInspectionResultSlice = createSlice({
  name: 'dicom',
  initialState,
  reducers: {
    handleDicom: (state, action) => {
      state.dicom = action.payload
    },
    handleModality: (state, action) => {
      state.modality = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDicom.fulfilled, (state, action) => {
      state.dicom = action.payload;
    });
    builder.addCase(fetchModality.fulfilled, (state, action) => {
      state.modality = action.payload;
    });
  },
});

export const {
  handleDicom,
  handleModality,
} = ToolInspectionResultSlice.actions;

export default ToolInspectionResultSlice.reducer;
