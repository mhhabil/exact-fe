import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IOfficerModel } from '@src/shared/officer';
import { MedicalRecordUsersService } from '@modules/account/medical-record-users/services';

export const fetchMedicalRecordUsers = createAsyncThunk(
  'medicalRecordUsers/fetchMedicalRecordUsers',
  async (option: string): Promise<any> => {
    const { data } = await MedicalRecordUsersService().get(option);
    return data.data.users;
  },
);

export const fetchAllOfficers = createAsyncThunk(
  'medicalRecordUsers/fetchAllOfficers',
  async (option: string): Promise<any> => {
    const { data } = await MedicalRecordUsersService().getAllOfficers(option);
    return data.data.karyawan;
  },
);

const initialState: {
  medicalRecordUsers: Array<IOfficerModel> | undefined,
  allOfficers: Array<IOfficerModel> | undefined,
} = {
  medicalRecordUsers: undefined,
  allOfficers: undefined,
}

export const MedicalRecordUsersSlice = createSlice({
  name: 'medicalRecordUsers',
  initialState,
  reducers: {
    handleMedicalRecordUsers: (state, action) => {
      state.medicalRecordUsers = action.payload;
    },
    handleAllOfficers: (state, action) => {
      state.allOfficers = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMedicalRecordUsers.fulfilled, (state, action) => {
      state.medicalRecordUsers = action.payload;
    });
    builder.addCase(fetchAllOfficers.fulfilled, (state, action) => {
      state.allOfficers = action.payload;
    })
  },
});

export const {
  handleMedicalRecordUsers,
  handleAllOfficers,
} = MedicalRecordUsersSlice.actions;

export default MedicalRecordUsersSlice.reducer;
