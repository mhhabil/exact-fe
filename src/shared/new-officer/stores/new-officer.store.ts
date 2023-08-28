import { INewOfficerModel, NewOfficerService } from '@shared/new-officer';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAppRequest } from '@shared/request';

export const fetchNewOfficer = createAsyncThunk(
  'newOfficer/fetchNewOfficer',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await NewOfficerService().get(option);
    return data.data.karyawan;
  },
)

const initialState: {
  newOfficers: Array<INewOfficerModel>,
} = {
  newOfficers: [],
}

export const NewOfficerSlice = createSlice({
  name: 'newOfficer',
  initialState,
  reducers: {
    handleNewOfficer: (state, action) => {
      state.newOfficers = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNewOfficer.fulfilled, (state, action) => {
      state.newOfficers = action.payload;
    });
  },
});

export const {
  handleNewOfficer,
} = NewOfficerSlice.actions;

export default NewOfficerSlice.reducer;
