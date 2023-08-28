import { BaseRecordRequest, RequestMRPatientRequest } from '@modules/account/request-mr/requests';
import { IListMR, IRecordMR, IRequestMRHistoryModel } from '@modules/account/request-mr/models/request-mr.model';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IOfficerModel } from '@src/shared/officer';
import { IPatientResponseModel } from '@src/modules/site/patient-list/models';
import { ListMRFilterRequest } from '@src/modules/account/request-mr/requests';
import { RequestMRService } from '@modules/account/request-mr/services';

export const fetchAvailablePatients = createAsyncThunk(
  'requestMr/fetchAvailablePatients',
  async (option: RequestMRPatientRequest): Promise<IPatientResponseModel | undefined> => {
    const { data } = await RequestMRService().paginate(option);
    return data.data;
  },
);

export const fetchPendingRequests = createAsyncThunk(
  'requestMr/fetchPendingRequests',
  async (option: BaseRecordRequest): Promise<IRequestMRHistoryModel> => {
    const { data } = await RequestMRService().getPendingRequest(option);
    return data.data;
  },
);

export const fetchRequestHistories = createAsyncThunk(
  'requestMr/fetchRequestHistories',
  async (option: BaseRecordRequest): Promise<IRequestMRHistoryModel> => {
    const { data } = await RequestMRService().getRequestHistory(option);
    return data.data
  },
);

export const fetchApprovalHistories = createAsyncThunk(
  'requestMr/fetchApprovalHistories',
  async (option: BaseRecordRequest): Promise<IRequestMRHistoryModel> => {
    const { data } = await RequestMRService().getApprovedRequest(option);
    return data.data
  },
);

export const fetchMrs = createAsyncThunk(
  'requestMr/fetchMrs',
  async (option: ListMRFilterRequest): Promise<IListMR> => {
    const { data } = await RequestMRService().getListMr(option);
    return data.data
  },
);

export const fetchAllOfficers = createAsyncThunk(
  'requestMr/fetchAllOfficers',
  async (branchCode: string): Promise<any> => {
    const { data } = await RequestMRService().getAllOfficers(branchCode);
    return data.data.karyawan;
  },
);

const initialState: {
  filter: RequestMRPatientRequest,
  filterApproval: BaseRecordRequest,
  filterRequests: BaseRecordRequest,
  filterPending: BaseRecordRequest,
  filterListMr: ListMRFilterRequest,
  patients: IPatientResponseModel | undefined,
  pendingRequest: IRequestMRHistoryModel | undefined,
  requestHistories: IRequestMRHistoryModel | undefined,
  approvalHistories: IRequestMRHistoryModel | undefined,
  officers: Array<IOfficerModel>,
  selectPatientModal: boolean,
  mrs: IListMR | undefined,
  mrList: string[] | undefined,
} = {
  filter: RequestMRPatientRequest.createFromJson({}),
  filterApproval: BaseRecordRequest.createFromJson({}),
  filterRequests: BaseRecordRequest.createFromJson({}),
  filterPending: BaseRecordRequest.createFromJson({}),
  filterListMr: ListMRFilterRequest.createFromJson({}),
  patients: undefined,
  pendingRequest: undefined,
  requestHistories: undefined,
  approvalHistories: undefined,
  officers: [],
  selectPatientModal: false,
  mrs: undefined,
  mrList: undefined,
}

export const RequestMrSlice = createSlice({
  name: 'requestMr',
  initialState,
  reducers: {
    handleFilter: (state, action) => {
      state.filter = action.payload;
    },
    handleFilterApproval: (state, action) => {
      state.filterApproval = action.payload;
    },
    handleFilterRequest: (state, action) => {
      state.filterRequests = action.payload;
    },
    handleFilterPending: (state, action) => {
      state.filterPending = action.payload;
    },
    handleFilterListMr: (state, action) => {
      state.filterListMr = action.payload;
    },
    handlePatients: (state, action) => {
      state.patients = action.payload;
    },
    handlePendingRequests: (state, action) => {
      state.pendingRequest = action.payload;
    },
    handleRequestHistories: (state, action) => {
      state.requestHistories = action.payload;
    },
    handleApprovalHistories: (state, action) => {
      state.approvalHistories = action.payload;
    },
    handleSelectPatientModal: (state, action) => {
      state.selectPatientModal = action.payload;
    },
    handleMrList: (state, action) => {
      state.mrList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAvailablePatients.fulfilled, (state, action) => {
      state.patients = action.payload;
    });
    builder.addCase(fetchPendingRequests.fulfilled, (state, action) => {
      state.pendingRequest = action.payload;
    });
    builder.addCase(fetchApprovalHistories.fulfilled, (state, action) => {
      state.approvalHistories = action.payload;
    });
    builder.addCase(fetchRequestHistories.fulfilled, (state, action) => {
      state.requestHistories = action.payload;
    });
    builder.addCase(fetchMrs.fulfilled, (state, action) => {
      state.mrs = action.payload;
    });
    builder.addCase(fetchAllOfficers.fulfilled, (state, action) => {
      state.officers = action.payload;
    });
  },
});

export const {
  handleApprovalHistories,
  handleFilter,
  handleFilterApproval,
  handleFilterPending,
  handleFilterRequest,
  handleFilterListMr,
  handleMrList,
  handlePatients,
  handlePendingRequests,
  handleRequestHistories,
  handleSelectPatientModal,
} = RequestMrSlice.actions;

export default RequestMrSlice.reducer;
