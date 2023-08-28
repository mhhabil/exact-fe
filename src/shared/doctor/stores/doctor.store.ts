import { DoctorService, IDoctorModel } from '@shared/doctor';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IDoctorRequest } from '../requests/doctor.request';

export const fetchDoctor = createAsyncThunk(
  'doctor/fetchDoctor',
  async (option: IDoctorRequest): Promise<any> => {
    const { data } = await DoctorService().get(option);
    return data.data.karyawan;
  },
)

const initialState: {
  doctors: Array<IDoctorModel>,
} = {
  doctors: [],
}

export const DoctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {
    handleDoctor: (state, action) => {
      state.doctors = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDoctor.fulfilled, (state, action) => {
      state.doctors = action.payload;
    });
  },
});

export const {
  handleDoctor,
} = DoctorSlice.actions;

export default DoctorSlice.reducer;
