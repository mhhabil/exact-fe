import { Circle, Minimize } from 'react-feather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedkit } from '@fortawesome/free-solid-svg-icons'

export default [
  // {
  //   header: 'RO',
  //   resource: 'EMR.RO',
  //   action: 'read',
  // },
  {
    id: 'ro',
    title: 'RO',
    icon: <FontAwesomeIcon icon={ faMedkit }/>,
    resource: 'EMR.RO',
    action: 'read',
    isTreatmentRequired: true,
    children: [
      {
        id: 'ro-pengkajian-awal',
        title: 'Pengkajian Awal',
        icon: <Circle size={20} />,
        navLink: '/ro/pengkajian-awal',
        resource: 'EMR.RO',
        action: 'read',
      },
      {
        id: 'ro-cppt',
        title: 'CPPT',
        icon: <Circle size={20} />,
        navLink: '/ro/cppt',
        resource: 'EMR.RO',
        action: 'read',
      },
      {
        id: 'ro-edukasi-harian',
        title: 'Edukasi Harian',
        icon: <Circle size={20} />,
        navLink: '/ro/edukasi-harian',
        resource: 'EMR.RO',
        action: 'read',
      },
    ],
  },
];
