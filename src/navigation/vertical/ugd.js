import { Circle, Clipboard } from 'react-feather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance } from '@fortawesome/free-solid-svg-icons'

export default [
  {
    id: 'ugd',
    title: 'Unit Gawat Darurat',
    icon: <FontAwesomeIcon icon={ faAmbulance }/>,
    resource: 'EMR.UGD',
    action: 'read',
    isTreatmentRequired: true,
    children: [
      {
        id: 'general-consent',
        title: 'General Consent',
        icon: <Circle size={20} />,
        navLink: '/ugd/general-consent',
        resource: 'EMR.UGD',
        action: 'read',
      },
      {
        id: 'formulir-triase',
        title: 'Formulir Triase',
        icon: <Circle size={20} />,
        navLink: '/ugd/formulir-triase',
        resource: 'EMR.UGD',
        action: 'read',
      },
      {
        id: 'assessmen-ugd',
        title: 'Assesmen UGD',
        icon: <Circle size={20} />,
        navLink: '/ugd/assessment-ugd',
        resource: 'EMR.UGD',
        action: 'read',
      },
      {
        id: 'transfer-pasien',
        title: 'Transfer Pasien',
        icon: <Circle size={20} />,
        navLink: '/ugd/transfer-pasien',
        resource: 'EMR.UGD',
        action: 'read',
      },
      {
        id: 'surat-pernyataan-pasien',
        title: 'Surat Pernyataan Pasien UMUM',
        icon: <Circle size={20}/>,
        navLink: '/ugd/surat-pernyataan-pasien-umum',
        resource: 'EMR.UGD',
        action: 'read',
      },
      {
        id: 'surat-pernyataan-pasien-bpjs',
        title: 'Surat Pernyataan Pasien BPJS',
        icon: <Circle size={20}/>,
        navLink: '/ugd/surat-pernyataan-pasien-bpjs',
        resource: 'EMR.UGD',
        action: 'read',
      },
      {
        id: 'cppt',
        title: 'CPPT',
        icon: <Circle size={20}/>,
        navLink: '/ugd/cppt',
        resource: 'EMR.UGD',
        action: 'read',
      },
      {
        id: 'ugd-bukti-pelayanan-rawat-jalan',
        title: 'Bukti Pelayanan Rawat Jalan',
        icon: <Circle size={20}/>,
        navLink: '/ugd/bukti-pelayanan-rawat-jalan',
        resource: 'EMR.UGD',
        action: 'read',
      },
    ],
  },
];
