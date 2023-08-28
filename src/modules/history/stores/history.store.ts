import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HistoryRequest } from '@modules/history/requests';
import { HistoryService } from '../services';
import { IHistory } from '@modules/history/models/history.model';

export const fetchHistories = createAsyncThunk(
  'history/fetchHistories',
  async (option: HistoryRequest): Promise<IHistory | undefined> => {
    const { data } = await HistoryService().paginate(option);
    return data.data;
  },
);

const initialState: {
  filter: HistoryRequest,
  histories: IHistory | undefined,
} = {
  filter: HistoryRequest.createFromJson({}),
  histories: undefined,
}

export const HistorySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    handleFilter: (state, action) => {
      state.filter = action.payload;
    },
    handleHistories: (state, action) => {
      state.histories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHistories.fulfilled, (state, action) => {
      state.histories = action.payload;
    });
  },
});

export const {
  handleFilter,
  handleHistories,
} = HistorySlice.actions;

export default HistorySlice.reducer;
