import { Book, Circle } from 'react-feather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospitalAlt } from '@fortawesome/free-solid-svg-icons'

export default [
  {
    id: 'ok',
    title: 'Kamar Bedah',
    icon: <FontAwesomeIcon icon={ faHospitalAlt }/>,
    resource: 'EMR.KamarBedah',
    action: 'read',
    isTreatmentRequired: true,
    children: [
      {
        id: 'ok-cppt',
        title: 'CPPT',
        icon: <Circle size={20} />,
        navLink: '/ok/cppt',
        resource: 'EMR.KamarBedah',
        action: 'read',
      },
      {
        id: 'ok-surat-izin-anestesi',
        title: 'Persetujuan Tindakan Anestesi',
        icon: <Circle size={20} />,
        navLink: '/ok/surat-izin-anestesi',
        resource: 'EMR.KamarBedah',
        action: 'read',
      },
      {
        id: 'formulir-pra-anestesi',
        title: 'Formulir Pra Anestesi & Sedasi',
        icon: <Circle size={20} />,
        navLink: '/ok/formulir-pra-anestesi',
        resource: 'EMR.KamarBedah',
        action: 'read',
      },
      {
        id: 'ok-assesmen-pra-operasi',
        title: 'Assesmen Pra Operasi',
        icon: <Circle size={20} />,
        navLink: '/ok/assesmen-pra-operasi',
        resource: 'EMR.KamarBedah',
        action: 'read',
      },
      {
        id: 'ok-penandaan-area-pembedahan',
        title: 'Formulir Penandaan Area Pembedahan',
        icon: <Circle size={20} />,
        navLink: '/ok/penandaan-area-pembedahan',
        resource: 'EMR.KamarBedah',
        action: 'read',
      },
      {
        id: 'ok-catatan-keperawatan-pra-operatif',
        title: 'Catatan Keperawatan Peri Operatif (Pra-Operasi)',
        icon: <Circle size={20} />,
        navLink: '/ok/catatan-keperawatan-pra-operatif',
        resource: 'EMR.KamarBedah',
        action: 'read',
      },
      {
        id: 'ok-checklist-pra-operasi',
        title: 'Checklist Pra Operasi',
        icon: <Circle size={20} />,
        navLink: '/ok/checklist-pra-operasi',
        resource: 'EMR.KamarBedah',
        action: 'read',
      },
      {
        id: 'ok-persiapan-peralatan-anestesi',
        title: 'Persiapan Peralatan Anestesi',
        icon: <Circle size={20} />,
        navLink: '/ok/persiapan-peralatan-anestesi',
        resource: 'EMR.KamarBedah',
        action: 'read',
      },
      {
        id: 'ok-checklist-keselamatan-pasien-operasi',
        title: 'Checklist Keselamatan Pasien Operasi',
        icon: <Circle size={20} />,
        navLink: '/ok/checklist-keselamatan-pasien-operasi',
        resource: 'EMR.KamarBedah',
        action: 'read',
      },
      {
        id: 'ok-laporan-pembedahan-anestesi',
        title: 'Laporan Pembedahan',
        icon: <Circle size={20} />,
        navLink: '/ok/laporan-pembedahan-anestesi',
        resource: 'EMR.KamarBedah',
        action: 'read',
      },
      {
        id: 'ok-catatan-keperawatan-peri-operatif',
        title: 'Catatan Keperawatan Peri Operatif (Intra Dan Pasca Operatif)',
        icon: <Circle size={20} />,
        navLink: '/ok/catatan-keperawatan-intra-operasi',
        resource: 'EMR.KamarBedah',
        action: 'read',
      },
      {
        id: 'status-anestesi',
        title: 'Status Anestesi',
        icon: <Circle size={20} />,
        navLink: '/ok/status-anestesi',
        resource: 'EMR.KamarBedah',
        action: 'read',
      },
      {
        id: 'ok-instruksi-pasca-bedah',
        title: 'Instruksi Pasca Bedah Rajal',
        icon: <Circle size={20} />,
        navLink: '/ok/instruksi-pasca-bedah',
        resource: 'EMR.KamarBedah',
        action: 'read',
      },
      {
        id: 'ok-formulir-surveilans-infeksi-hais',
        title: 'Formulir Surveilans Infeksi Hais',
        icon: <Circle size={20} />,
        navLink: '/ok/formulir-surveilans-infeksi-hais',
        resource: 'EMR.KamarBedah',
        action: 'read',
      },
      {
        id: 'ok-patient-handover-form',
        title: 'Formulir Serah Terima Pasien',
        icon: <Circle size={20} />,
        navLink: '/ok/formulir-serah-terima-pasien',
        resource: 'EMR.KamarBedah',
        action: 'read',
      },
      {
        id: 'transfer-pasien',
        title: 'Transfer Pasien',
        icon: <Circle size={20} />,
        navLink: '/ok/transfer-pasien',
        resource: 'EMR.KamarBedah',
        action: 'read',
      },
      {
        id: 'ok-bukti-pelayanan-rawat-jalan',
        title: 'Bukti Pelayanan Rawat Jalan',
        icon: <Circle size={20} />,
        navLink: '/ok/bukti-pelayanan-rawat-jalan',
        resource: 'EMR.KamarBedah',
        action: 'read',
      },
    ],
  },
];