import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { Key, Power, User } from 'react-feather';
import Avatar from '../../../@core/components/avatar';
import { PatientFilterRequest } from '@src/modules/site/patient-list/requests';
import defaultAvatar from '../../../../public/assets/default/user-default.png';
import { fetchChangePin } from '@src/modules/account/change-pin/stores/change-pin.store';
import { handleFilter } from '@src/modules/site/patient-list/stores/patient.store';
import { handleLogout } from '@store/authentication';
import { handlePatientDetail } from '@src/shared/header/stores/patient-detail.store';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { useRouter } from 'next/router';

const DropdownUser = () => {
  const dispatch = useAppDispatch()
  const router = useRouter();
  return (
    <UncontrolledDropdown>
      <DropdownToggle tag="a">
        <Avatar img={defaultAvatar} id='dropdown-user' imgHeight='27' imgWidth='27' status='online'/>
        {/* <User id='dropdown-user'/> */}
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem tag={'button'} className='w-100' onClick={() => {
          router.push('/account/change-pin')
        }}>
          <Key size={14} className='me-75'/>
          <span className='align-middle'>Ubah PIN & TTD</span>
        </DropdownItem>
        <DropdownItem tag={'button'} className="w-100" onClick={() => {
          dispatch(handleLogout())
          dispatch(handlePatientDetail(undefined))
          dispatch(handleFilter(PatientFilterRequest.createFromJson({})));
        }}>
          <Power size={14} className='me-75' />
          <span className='align-middle'>Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

export default DropdownUser;
