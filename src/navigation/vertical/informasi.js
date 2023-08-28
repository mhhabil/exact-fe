import { Circle, FileText } from 'react-feather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardUser } from '@fortawesome/free-solid-svg-icons'

export default [
  // {
  //   header: 'Informasi Edukasi',
  //   resource: 'EMR.RO',
  //   action: 'read',
  // },
  {
    id: 'pendaftaran',
    title: 'Pendaftaran',
    icon: <FontAwesomeIcon icon={ faClipboardUser } />,
    resource: 'EMR.Pendaftaran',
    action: 'read',
    isTreatmentRequired: true,
    children: [
      {
        id: 'pendaftaran-identitas-pasien',
        title: 'Identitas Pasien',
        icon: <Circle size={20} />,
        navLink: '/informasi-edukasi/identitas-pasien',
        resource: 'EMR.Pendaftaran',
        action: 'read',
      },
      {
        id: 'pendaftaran-general-consent',
        title: 'General Consent',
        icon: <Circle size={20} />,
        navLink: '/informasi-edukasi/general-consent',
        resource: 'EMR.Pendaftaran',
        action: 'read',
      },
      {
        id: 'pendaftaran-bukti-pelayanan-rawat-jalan',
        title: 'Bukti Pelayanan Rawat Jalan',
        icon: <Circle size={20} />,
        navLink: '/informasi-edukasi/bukti-pelayanan-rawat-jalan',
        resource: 'EMR.Pendaftaran',
        action: 'read',
      },
      {
        id: 'pendaftaran-edukasi-harian',
        title: 'Edukasi Harian',
        icon: <Circle size={20} />,
        navLink: '/informasi-edukasi/edukasi-harian',
        resource: 'EMR.Pendaftaran',
        action: 'read',
      },
      {
        id: 'pendaftaran-risiko-jatuh',
        title: 'Pengkajian Risiko Jatuh (Skala Up and Go)',
        icon: <Circle size={20} />,
        navLink: '/informasi-edukasi/risiko-jatuh',
        resource: 'EMR.Pendaftaran',
        action: 'read',
      },
    ],
  },
];
