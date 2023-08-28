import { Circle, Clipboard } from 'react-feather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCapsules } from '@fortawesome/free-solid-svg-icons'

export default [
  {
    id: 'farmasi',
    title: 'Farmasi',
    icon: <FontAwesomeIcon icon={faCapsules}/>,
    resource: 'EMR.Farmasi',
    action: 'read',
    isTreatmentRequired: true,
    children: [
      {
        id: 'farmasi-cppt',
        title: 'CPPT',
        icon: <Circle size={20} />,
        navLink: '/farmasi/cppt',
        resource: 'EMR.Farmasi',
        action: 'read',
      },
      {
        id: 'farmasi-edukasi-harian',
        title: 'Edukasi Harian',
        icon: <Circle size={20} />,
        navLink: '/farmasi/edukasi-harian',
        resource: 'EMR.Farmasi',
        action: 'read',
      },
      {
        id: 'pelaporan-efek-samping-obat',
        title: 'Monitoring Efek Samping Obat',
        icon: <Circle size={20} />,
        navLink: '/farmasi/pelaporan-efek-samping-obat',
        resource: 'EMR.Farmasi',
        action: 'read',
      },
      {
        id: 'formulir-rekonsiliasi-obat',
        title: 'Formulir Rekonsiliasi Obat',
        icon: <Circle size={20} />,
        navLink: '/farmasi/formulir-rekonsiliasi-obat',
        resource: 'EMR.Farmasi',
        action: 'read',
      },
      {
        id: 'catatan-pemberian-obat-tepat-waktu',
        title: 'Catatan Pemberian Obat Tepat Waktu',
        icon: <Circle size={20} />,
        navLink: '/farmasi/pemberian-obat',
        resource: 'EMR.Farmasi',
        action: 'read',
      },
      {
        id: 'edukasi-terintegrasi-farmasi',
        title: 'Edukasi Terintegrasi',
        icon: <Circle size={20}/>,
        navLink: '/farmasi/edukasi-terintegrasi',
        resource: 'EMR.Farmasi',
        action: 'read',
      },
    ],
  },
];
