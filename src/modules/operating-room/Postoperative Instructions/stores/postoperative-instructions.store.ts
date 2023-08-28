import { IFindPdfRequest, PdfModel, PdfService } from "@src/shared/pdf";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PostoperativeInstructionsModel } from "../models/postoperative-instructions-model";
import { PostoperativeInstructionsService } from "../services";
import { IAppRequest } from "@src/shared/request";

export const fetchPostoperativeInstructions = createAsyncThunk(
  'postoperativeInstructions/fetchPostoperativeInstructions',
  async (option: IAppRequest): Promise<any> => {
    const {data} = await PostoperativeInstructionsService().show(option);
    return data.data;
  },
);

export const  fetchPostoperativeInstructionsPdf = createAsyncThunk(
  'postoperativeInstructions/fetchPostoperativeInstructionsPdf',
  async (option:IFindPdfRequest): Promise<any> => {
    const {data} = await PdfService().find(option);
    return data.data;
  },
);

const initialState: {
    postoperativeInstructions: PostoperativeInstructionsModel | undefined,
    pdf: PdfModel | undefined,
} = {
  postoperativeInstructions: undefined,
  pdf: undefined,
}

export const PostoperativeInstructionsSlice = createSlice({
  name: 'postoperativeInstructions',
  initialState,
  reducers: {
    handlepostoperativeInstructions: (state, action) => {
      state.postoperativeInstructions = new PostoperativeInstructionsModel(action.payload);
    },
    handlePdf: (state, action) => {
      state.pdf = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPostoperativeInstructions.fulfilled, (state, action) => {
      state.postoperativeInstructions = new PostoperativeInstructionsModel(action.payload);
    });
    builder.addCase(fetchPostoperativeInstructionsPdf.fulfilled, (state, action) => {
      if (action.payload) {
        state.pdf = action.payload;
      }
    });
  },
});

export const {
  handlepostoperativeInstructions,
  handlePdf,
} = PostoperativeInstructionsSlice.actions;

export default PostoperativeInstructionsSlice.reducer;
