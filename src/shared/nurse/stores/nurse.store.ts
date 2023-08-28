import { INurseModel, NurseService } from '@shared/nurse';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { INurseRequest } from '../requests/nurse.request';

export const fetchNurse = createAsyncThunk(
  'nurse/fetchNurse',
  async (option: INurseRequest): Promise<any> => {
    const { data } = await NurseService().get(option);
    return data.data.karyawan;
  },
)

const initialState: {
  nurses: Array<INurseModel>,
} = {
  nurses: [],
}

export const NurseSlice = createSlice({
  name: 'nurse',
  initialState,
  reducers: {
    handleNurse: (state, action) => {
      state.nurses = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNurse.fulfilled, (state, action) => {
      state.nurses = action.payload;
    });
  },
});

export const {
  handleNurse,
} = NurseSlice.actions;

export default NurseSlice.reducer;
