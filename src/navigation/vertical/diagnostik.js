import { Circle, PieChart } from 'react-feather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiagnoses } from '@fortawesome/free-solid-svg-icons'

export default [
  {
    id: 'diagnostik',
    title: 'Diagnostik',
    icon: <FontAwesomeIcon icon={ faDiagnoses }/>,
    resource: 'EMR.Diagnostik',
    action: 'read',
    isTreatmentRequired: true,
    children: [
      {
        id: 'diagnostik-hasil-pemeriksaan-alat',
        title: 'Unggah Pemeriksaan Alat',
        icon: <Circle size={20} />,
        navLink: '/diagnostik/hasil-pemeriksaan-alat',
        resource: 'EMR.Diagnostik',
        action: 'read',
      },
      {
        id: 'diagnostik-hasil-pemeriksaan',
        title: 'Hasil Pemeriksaan Alat',
        icon: <Circle size={20} />,
        navLink: '/diagnostik/hasil-pemeriksaan',
        resource: 'EMR.Diagnostik',
        action: 'read',
      },
      {
        id: 'diagnostik-hasil-tindakan-laser',
        title: 'Hasil Tindakan Laser',
        icon: <Circle size={20} />,
        navLink: '/diagnostik/tindakan-yag-laser-dan-laser-retina',
        resource: 'EMR.Diagnostik',
        action: 'read',
      },
    ],
  },
];
