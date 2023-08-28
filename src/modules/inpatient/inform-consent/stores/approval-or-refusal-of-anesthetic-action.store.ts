import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAppRequest } from "@src/shared/request";
import { ApprovalOrRefusalOfAnestheticActionModel } from "../models/approval-or-refusal-of-anesthetic-action-model";
import { ApprovalOrRefusalOfAnestheticActionService } from "../services";

export const fetchApprovalOrRefusalOfAnestheticAction = createAsyncThunk(
  'approvalOrRefusalOfAnestheticAction/fetchApprovalOrRefusalOfAnestheticAction',
  async (option: IAppRequest) : Promise<any> => {
    const {data} = await ApprovalOrRefusalOfAnestheticActionService().show(option);
    return data.data;
  },
);

export const fetchApprovalOrRefusalOfAnestheticActionPdf = createAsyncThunk(
  'approvalOrRefusalOfAnestheticAction/fetchApprovalOrRefusalOfAnestheticActionPdf',
  async (option: IFindPdfRequest) : Promise<any> => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
)

const initialState: {
  approvalOrRefusalOfAnestheticAction: ApprovalOrRefusalOfAnestheticActionModel | undefined,
  pdf: PdfModel | undefined,
} = {
  approvalOrRefusalOfAnestheticAction: undefined,
  pdf: undefined,
}

export const ApprovalOrRefusalOfAnestheticActionSlice = createSlice({
  name: 'approvalOrRefusalOfAnestheticAction',
  initialState,
  reducers: {
    handleApprovalOrRefusalOfAnestheticAction: (state, action) => {
      state.approvalOrRefusalOfAnestheticAction = new ApprovalOrRefusalOfAnestheticActionModel(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApprovalOrRefusalOfAnestheticAction.fulfilled, (state, action) => {
      state.approvalOrRefusalOfAnestheticAction = new ApprovalOrRefusalOfAnestheticActionModel(action.payload);
    });
    builder.addCase(fetchApprovalOrRefusalOfAnestheticActionPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload
      }
    });
  },
});

export const {
  handleApprovalOrRefusalOfAnestheticAction,
  handlePdf,
} = ApprovalOrRefusalOfAnestheticActionSlice.actions;

export default ApprovalOrRefusalOfAnestheticActionSlice.reducer;
