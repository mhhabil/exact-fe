import { Circle, Voicemail } from 'react-feather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'

export default [
  {
    id: 'optik',
    title: 'Optik',
    icon: <FontAwesomeIcon icon={ faEye }/>,
    resource: 'EMR.Optik',
    action: 'read',
    isTreatmentRequired: true,
    children: [
      {
        id: 'optik-resep-kacamata',
        title: 'Resep Kacamata',
        icon: <Circle size={20} />,
        navLink: '/optik/resep-kacamata',
        resource: 'EMR.Optik',
        action: 'read',
      },
    ],
  },
];
