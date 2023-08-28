import { Circle, Zap } from 'react-feather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMortarPestle } from '@fortawesome/free-solid-svg-icons'

export default [
  // {
  //   header: 'GIZI',
  //   resource: 'EMR.RO',
  //   action: 'read',
  // },
  {
    id: 'gizi',
    title: 'Gizi',
    icon: <FontAwesomeIcon icon={ faMortarPestle }/>,
    resource: 'EMR.Gizi',
    action: 'read',
    isTreatmentRequired: true,
    children: [
      {
        id: 'gizi-cppt',
        title: 'CPPT',
        icon: <Circle size={20} />,
        navLink: '/gizi/cppt',
        resource: 'EMR.Gizi',
        action: 'read',
      },
      {
        id: 'gizi-edukasi-terintegrasi',
        title: 'Edukasi Terintegrasi',
        icon: <Circle size={20} />,
        navLink: '/gizi/edukasi-terintegrasi',
        resource: 'EMR.Gizi',
        action: 'read',
      },
      {
        id: 'gizi-pengkajian-awal-gizi',
        title: 'Pengkajian Awal Gizi',
        icon: <Circle size={20} />,
        navLink: '/gizi/pengkajian-awal-gizi',
        resource: 'EMR.Gizi',
        action: 'read',
      },
    ],
  },
];
