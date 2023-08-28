import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileMedical } from '@fortawesome/free-solid-svg-icons'

export default [
  {
    id: 'request-mr',
    title: 'Permintaan & Persetujuan Rekam Medis',
    icon: <FontAwesomeIcon icon={ faFileMedical }/>,
    navLink: '/account/request-mr',
    // resource: 'EMR.RO',
    // action: 'read',
  },
];

