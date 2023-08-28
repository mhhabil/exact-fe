// ** React Imports
import { useEffect, useState } from 'react';

// ** Custom Components
import Avatar from '../../../../@core/components/avatar';

// ** Utils
import { isUserLoggedIn } from '../../../../utility/Utils';

// ** Store & Actions
import { useDispatch } from 'react-redux';
// import { HandleLogout } from '../../../../redux/actions/auth';

// ** Third Party Components
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import { User, Power } from 'react-feather';

// ** Default Avatar Image
import defaultAvatar from '../../../../assets/images/avatars/8.png';

import { PatientFilterRequest } from '@src/modules/site/patient-list/requests';
import { StorageService } from '../../../../shared/local-storage';
import { handleFilter } from '@src/modules/site/patient-list/stores/patient.store';
import {handleLogout} from '../../../../redux/authentication';
import { handlePatientDetail } from '@src/shared/header/stores/patient-detail.store';
import { useRouter } from 'next/router';

const UserDropdown = () => {
  // ** Store Vars
  const dispatch = useDispatch();

  // ** State
  const [userData, setUserData] = useState(null);

  //** ComponentDidMount
  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUserData(JSON.parse(StorageService().get('userData')));
    }
  }, []);

  //** Vars
  // const userAvatar = (userData && userData.avatar) || defaultAvatar
  const userAvatar = defaultAvatar;

  const router = useRouter();

  return (
    <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
      <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
        <div className='user-nav d-sm-flex d-none'>
          <span className='user-name font-weight-bold'>{(userData && userData['fullName']) || 'My Account'}</span>
          <span className='user-status'>{(userData && userData.role) || ''}</span>
        </div>
        <Avatar img={userAvatar} imgHeight='40' imgWidth='40' status='online' />
      </DropdownToggle>
      <DropdownMenu end>
        {/*<DropdownItem tag={'button'} onClick={() => router.push('/')}>
          <User size={14} className='mr-75' />
          <span className='align-middle'>Profile</span>
        </DropdownItem>*/}
        <DropdownItem tag={'button'} onClick={() => {
          dispatch(handleLogout())
          dispatch(handlePatientDetail(undefined))
          dispatch(handleFilter(PatientFilterRequest.createFromJson({})));
        } }>
          <Power size={14} className='mr-75' />
          <span className='align-middle'>Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
};

export default UserDropdown


// // ** React Imports
// import { Link } from 'react-router-dom'
// import { useState } from 'react'
//
// // ** Custom Components
// import Avatar from '@components/avatar'
//
// // ** Utils
// // import { isUserLoggedIn } from '@utils'
//
// // ** Third Party Components
// import { User, Mail, CheckSquare, MessageSquare, Settings, CreditCard, HelpCircle, Power } from 'react-feather'
//
// // ** Reactstrap Imports
// import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
//
// // ** Default Avatar Image
// import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'
//
// const UserDropdown = () => {
//   // ** State
//   const [userData] = useState(null)
//
//   //** ComponentDidMount
//   // useEffect(() => {
//   //   if (isUserLoggedIn() !== null) {
//   //     setUserData(JSON.parse(localStorage.getItem('userData')))
//   //   }
//   // }, [])
//
//   //** Vars
//   const userAvatar = (userData && userData.avatar) || defaultAvatar
//
//   return (
//     <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
//       <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
//         <div className='user-nav d-sm-flex d-none'>
//           <span className='user-name fw-bold'>{(userData && userData['username']) || 'John Doe'}</span>
//           <span className='user-status'>{(userData && userData.role) || 'Admin'}</span>
//         </div>
//         <Avatar img={userAvatar} imgHeight='40' imgWidth='40' status='online' />
//       </DropdownToggle>
//       <DropdownMenu end>
//         <DropdownItem tag='a' href='/pages/profile' onClick={e => e.preventDefault()}>
//           <User size={14} className='me-75' />
//           <span className='align-middle'>Profile</span>
//         </DropdownItem>
//         <DropdownItem tag='a' href='/apps/email' onClick={e => e.preventDefault()}>
//           <Mail size={14} className='me-75' />
//           <span className='align-middle'>Inbox</span>
//         </DropdownItem>
//         <DropdownItem tag='a' href='/apps/todo' onClick={e => e.preventDefault()}>
//           <CheckSquare size={14} className='me-75' />
//           <span className='align-middle'>Tasks</span>
//         </DropdownItem>
//         <DropdownItem tag='a' href='/apps/chat' onClick={e => e.preventDefault()}>
//           <MessageSquare size={14} className='me-75' />
//           <span className='align-middle'>Chats</span>
//         </DropdownItem>
//         <DropdownItem divider />
//         <DropdownItem tag='a' href='/pages/account-settings' onClick={e => e.preventDefault()}>
//           <Settings size={14} className='me-75' />
//           <span className='align-middle'>Settings</span>
//         </DropdownItem>
//         <DropdownItem tag='a' href='/pages/pricing' onClick={e => e.preventDefault()}>
//           <CreditCard size={14} className='me-75' />
//           <span className='align-middle'>Pricing</span>
//         </DropdownItem>
//         <DropdownItem tag='a' href='/pages/faq' onClick={e => e.preventDefault()}>
//           <HelpCircle size={14} className='me-75' />
//           <span className='align-middle'>FAQ</span>
//         </DropdownItem>
//         <DropdownItem tag={Link} to='/login'>
//           <Power size={14} className='me-75' />
//           <span className='align-middle'>Logout</span>
//         </DropdownItem>
//       </DropdownMenu>
//     </UncontrolledDropdown>
//   )
// }
//
// export default UserDropdown
