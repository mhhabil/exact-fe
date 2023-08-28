import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICompanyDetail } from '../models/companies.model';
import { SelectCompanyService } from '../services';
import { StorageService } from '@src/shared/local-storage';

const storageService = StorageService()

export const fetchCompanies = createAsyncThunk(
  'selectCompany/fetchCompanies',
  async (): Promise<any> => {
    const { data } = await SelectCompanyService().get();
    return data.data;
  },
);

const initialCompany = () => {
  const item = (typeof window !== 'undefined') ? storageService.get('companyCode') : undefined;
  //** Parse stored json or if none return initialValue
  return item ? item : undefined;
}

const initialCompanyName = () => {
  const item = (typeof window !== 'undefined') ? storageService.get('companyName') : undefined;
  return item ? item : undefined;
}

const initialState: {
  companies: Array<ICompanyDetail> | undefined,
  authorizedCompany: Array<string> | undefined,
  companyCode: string | undefined,
  companyName: string | undefined,
} = {
  companies: undefined,
  authorizedCompany: undefined,
  companyCode: initialCompany(),
  companyName: initialCompanyName(),
}

export const SelectCompanySlice = createSlice({
  name: 'selectCompany',
  initialState,
  reducers: {
    handleCompanies: (state, action) => {
      state.companies = action.payload;
    },
    handleAuthorizedCompany: (state, action) => {
      state.authorizedCompany = action.payload;
    },
    handleCompanyCode: (state, action) => {
      state.companyCode = action.payload;
      storageService.set('companyCode', action.payload);
    },
    handleCompanyName: (state, action) => {
      state.companyName = action.payload;
      storageService.set('companyName', action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCompanies.fulfilled, (state, action) => {
      state.companies = action.payload;
    });
  },
});

export const {
  handleCompanies,
  handleAuthorizedCompany,
  handleCompanyCode,
  handleCompanyName,
} = SelectCompanySlice.actions;

export default SelectCompanySlice.reducer;
