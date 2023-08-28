import { Circle, Clipboard } from 'react-feather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookMedical } from '@fortawesome/free-solid-svg-icons'

export default [
  {
    id: 'rekam-medik',
    title: 'Rekam Medik',
    icon: <FontAwesomeIcon icon={ faBookMedical }/>,
    resource: 'EMR.PDF',
    action: 'read',
    isTreatmentRequired: true,
    children: [
      {
        id: 'pdf-dash',
        title: 'PDF Dashboard',
        icon: <Circle size={20} />,
        navLink: '/rekam-medik/pdf-dashboard',
        resource: 'EMR.PDF',
        action: 'read',
      },
    ],
  },
];
