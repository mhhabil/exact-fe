import dashboard from './dashboard';
import diagnostik from './diagnostik';
import farmasi from './farmasi';
import gizi from './gizi';
import informasi from './informasi';
import ok from './ok';
import optik from './optik';
import rawatInap from './rawat-inap';
import rawatJalan from './rawat-jalan';
import rekamMedik from './rekam-medik';
import requestMr from './request-mr';
import ro from './ro';
import ugd from './ugd';

export default [
  ...dashboard,
  ...informasi,
  ...ugd,
  ...ro,
  ...rawatJalan,
  ...rawatInap,
  ...gizi,
  ...ok,
  ...farmasi,
  ...optik,
  ...rekamMedik,
  ...diagnostik,
  ...requestMr,
];
