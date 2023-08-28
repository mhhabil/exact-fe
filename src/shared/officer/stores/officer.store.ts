import { IOfficerModel, OfficerService } from '@shared/officer';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAppRequest } from '@shared/request';

export const fetchOfficer = createAsyncThunk(
  'officer/fetchOfficer',
  async (option: IAppRequest): Promise<any> => {
    const { data } = await OfficerService().get(option);
    return data.data.karyawan;
  },
)

const initialState: {
  officers: Array<IOfficerModel>,
} = {
  officers: [],
}

export const OfficerSlice = createSlice({
  name: 'officer',
  initialState,
  reducers: {
    handleOfficer: (state, action) => {
      state.officers = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOfficer.fulfilled, (state, action) => {
      state.officers = action.payload;
    });
  },
});

export const {
  handleOfficer,
} = OfficerSlice.actions;

export default OfficerSlice.reducer;
