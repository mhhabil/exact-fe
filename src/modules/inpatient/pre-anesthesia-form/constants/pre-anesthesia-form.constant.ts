const PreAnesthesiaFormConstant = {
  kebiasaan: [
    [
      {
        label: 'Merokok',
        name: 'merokok_radio',
        text_name: 'merokok_teks',
        defaultChecked: 'Merokok_Radio',
      },
      {
        label: 'Alkohol',
        name: 'alkohol_radio',
        text_name: 'alkohol_teks',
        defaultChecked: 'Alkohol_Radio',
      },
    ],
    [
      {
        label: 'Kopi/Teh/Cola',
        name: 'kopi_radio',
        text_name: 'kopi_teks',
        defaultChecked: 'Kopi_Radio',
      },
      {
        label: 'Olahraga Rutin',
        name: 'olahraga_radio',
        text_name: 'olahraga_teks',
        defaultChecked: 'Olahraga_Radio',
      },
    ],
  ],
  obat: [
    {
      label: 'Aspirin / Plavix Rutin',
      name: 'aspirin_radio',
      text_name: 'aspirin_teks',
      defaultChecked: 'Aspirin_Radio',
    },
    {
      label: 'Obat Anti Sakit',
      name: 'anti_sakit_radio',
      text_name: 'anti_sakit_teks',
      defaultChecked: 'Anti_Sakit_Radio',
    },
  ],
  riwayat_keluarga: [
    [
      {
        label: 'Pendarahan yang tidak normal',
        name: 'keluarga_pendarahan_radio',
        defaultChecked: 'Keluarga_Pendarahan_Radio',
      },
      {
        label: 'Pembekuan darah yang tidak normal',
        name: 'keluarga_pembekuan_darah_radio',
        defaultChecked: 'Keluarga_Pembekuan_Darah_Radio',
      },
      {
        label: 'Permasalahan dengan pembiusan',
        name: 'keluarga_pembiusan_radio',
        defaultChecked: 'Keluarga_Pembiusan_Radio',
      },
      {
        label: 'Demam tinggi pasca operasi',
        name: 'keluarga_demam_radio',
        defaultChecked: 'Keluarga_Demam_Radio',
      },
      {
        label: 'Diabetes (Kencing Manis)',
        name: 'keluarga_diabetes_radio',
        defaultChecked: 'Keluarga_Diabetes_Radio',
      },
    ],
    [
      {
        label: 'Serangan Jantung',
        name: 'keluarga_jantung_radio',
        defaultChecked: 'Keluarga_Jantung_Radio',
      },
      {
        label: 'Gangguan Irama Jantung',
        name: 'keluarga_irama_jantung_radio',
        defaultChecked: 'Keluarga_Irama_Jantung_Radio',
      },
      {
        label: 'Hipertensi',
        name: 'keluarga_hipertensi_radio',
        defaultChecked: 'Keluarga_Hipertensi_Radio',
      },
      {
        label: 'Tuberkulosis',
        name: 'keluarga_tuberkulosis_radio',
        defaultChecked: 'Keluarga_Tuberkulosis_Radio',
      },
      {
        label: 'Penyakit Berat Lainnya',
        name: 'keluarga_lainnya_radio',
        defaultChecked: 'Keluarga_Lainnya_Radio',
      },
    ],
  ],
  riwayat_penyakit_pasien: [
    [
      {
        label: 'Pendarahan yang tidak normal',
        name: 'pasien_pendarahan_radio',
        defaultChecked: 'Pasien_Pendarahan_Radio',
      },
      {
        label: 'Pembekuan darah yang tidak normal',
        name: 'pasien_pembekuan_darah_radio',
        defaultChecked: 'Pasien_Pembekuan_Darah_Radio',
      },
      {
        label: 'Sakit Maag',
        name: 'pasien_maag_radio',
        defaultChecked: 'Pasien_Maag_Radio',
      },
      {
        label: 'Anemia',
        name: 'pasien_anemia_radio',
        defaultChecked: 'Pasien_Anemia_Radio',
      },
      {
        label: 'Serangan Jantung / Nyeri Dada',
        name: 'pasien_jantung_radio',
        defaultChecked: 'Pasien_Jantung_Radio',
      },
      {
        label: 'Asthma',
        name: 'pasien_asthma_radio',
        defaultChecked: 'Pasien_Asthma_Radio',
      },
      {
        label: 'Diabetes (Kencing Manis)',
        name: 'pasien_diabetes_radio',
        defaultChecked: 'Pasien_Diabetes_Radio',
      },
      {
        label: 'Pingsan',
        name: 'pasien_pingsan_radio',
        defaultChecked: 'Pasien_Pingsan_Radio',
      },
    ],
    [
      {
        label: 'Mengorok',
        name: 'pasien_mengorok_radio',
        defaultChecked: 'Pasien_Mengorok_Radio',
      },
      {
        label: 'Hepatitis / Sakit Kuning',
        name: 'pasien_hepatitis_radio',
        defaultChecked: 'Pasien_Hepatitis_Radio',
      },
      {
        label: 'Hipertensi',
        name: 'pasien_hipertensi_radio',
        defaultChecked: 'Pasien_Hipertensi_Radio',
      },
      {
        label: 'Penyakit berat lainnya',
        name: 'pasien_lainnya_radio',
        defaultChecked: 'Pasien_Lainnya_Radio',
      },
    ],
    [
      {
        label: 'Kejang',
        name: 'pasien_kejang_radio',
        defaultChecked: 'Pasien_Kejang_Radio',
      },
      {
        label: 'Penyakit Bawaan Lahir',
        name: 'pasien_bawaan_radio',
        defaultChecked: 'Pasien_Bawaan_Radio',
      },
    ],
    [
      {
        label: 'Apakah pasien pernah mendapat transfusi darah?',
        name: 'pasien_transfusi',
        text_name: 'pasien_transfusi_teks',
        placeholder: 'Tahun berapa?',
        defaultChecked: 'Pasien_Transfusi',
      },
      {
        label: 'Apakah pasien pernah diperiksa untuk diagnosis HIV?',
        name: 'pasien_diagnosis_hiv',
        text_name: 'pasien_diagnosis_hiv_teks',
        placeholder: 'Tahun berapa?',
        defaultChecked: 'Pasien_Diagnosis_HIV',
      },
    ],
  ],
  pasien_memakai: [
    {
      label: 'Lensa Kotak',
      name: 'pasien_lensa_kontak',
      defaultChecked: 'Pasien_Lensa_Kontak',
    },
    {
      label: 'Kacamata',
      name: 'pasien_kacamata',
      defaultChecked: 'Pasien_Kacamata',
    },
    {
      label: 'Alat Bantu Dengar',
      name: 'pasien_alat_bantu_dengar',
      defaultChecked: 'Pasien_Alat_Bantu_Dengar',
    },
    {
      label: 'Gigi Palsu',
      name: 'pasien_gigi_palsu',
      defaultChecked: 'Pasien_Gigi_Palsu',
    },
    {
      label: 'Lain-lain',
      name: 'pasien_pakai_lainnya',
      text_name: 'pasien_pakai_lainnya_teks',
      defaultChecked: 'Pasien_Pakai_Lainnya',
    },
  ],
  kajian_sistem: [
    [
      {
        label: 'Hilangnya gigi',
        name: 'sistem_gigi_radio',
        defaultChecked: 'Sistem_Gigi_Radio',
      },
      {
        label: 'Masalah mobilisasi leher',
        name: 'sistem_mobilisasi_leher_radio',
        defaultChecked: 'Sistem_Mobilisasi_Leher_Radio',
      },
      {
        label: 'Leher Pendek',
        name: 'sistem_leher_pendek_radio',
        defaultChecked: 'Sistem_Leher_Pendek_Radio',
      },
      {
        label: 'Batuk',
        name: 'sistem_batuk_radio',
        defaultChecked: 'Sistem_Batuk_Radio',
      },
      {
        label: 'Sesak Napas',
        name: 'sistem_sesak_napas_radio',
        defaultChecked: 'Sistem_Sesak_Napas_Radio',
      },
      {
        label: 'Baru saja menderita ISPA',
        name: 'sistem_ispa_radio',
        defaultChecked: 'Sistem_ISPA_Radio',
      },
      {
        label: 'Sakit Dada',
        name: 'sistem_dada_radio',
        defaultChecked: 'Sistem_Dada_Radio',
      },
      {
        label: 'Denyut jantung tidak normal',
        name: 'sistem_denyut_jantung_radio',
        defaultChecked: 'Sistem_Denyut_Jantung_Radio',
      },
    ],
    [
      {
        label: 'Muntah',
        name: 'sistem_muntah_radio',
        defaultChecked: 'Sistem_Muntah_Radio',
      },
      {
        label: 'Pingsan',
        name: 'sistem_pingsan_radio',
        defaultChecked: 'Sistem_Pingsan_Radio',
      },
      {
        label: 'Stroke',
        name: 'sistem_stroke_radio',
        defaultChecked: 'Sistem_Stroke_Radio',
      },
      {
        label: 'Kejang',
        name: 'sistem_kejang_radio',
        defaultChecked: 'Sistem_Kejang_Radio',
      },
      {
        label: 'Sedang hamil',
        name: 'sistem_hamil_radio',
        defaultChecked: 'Sistem_Hamil_Radio',
      },
      {
        label: 'Kelainan Tulang Belakang',
        name: 'sistem_tulang_belakang_radio',
        defaultChecked: 'Sistem_Tulang_Belakang_Radio',
      },
      {
        label: 'Obesitas',
        name: 'sistem_obesitas_radio',
        defaultChecked: 'Sistem_Obesitas_Radio',
      },
    ],
  ],
  kajian_sistem_2: [
    {
      label: 'Skor Mallampati',
      name: 'kajian_teks_mallampati',
    },
    {
      label: 'Gigi Palsu',
      name: 'kajian_teks_gigi_palsu',
    },
    {
      label: 'Jantung',
      name: 'kajian_teks_jantung',
    },
    {
      label: 'Paru-paru',
      name: 'kajian_teks_paru',
    },
    {
      label: 'Abdomen',
      name: 'kajian_teks_abdomen',
    },
    {
      label: 'Tulang Belakang',
      name: 'kajian_teks_tulang_belakang',
    },
    {
      label: 'Ekstremitas',
      name: 'kajian_teks_ekstremitas',
    },
    {
      label: 'Neurologi (bila dapat diperiksa)',
      name: 'kajian_teks_neurologi',
    },
    {
      label: 'Keterangan',
      name: 'kajian_teks_keterangan',
    },
  ],
  laboratorium: [
    [
      {
        label: 'Hb / Ht',
        name: 'laboratorium_hb_ht',
      },
      {
        label: 'PT',
        name: 'laboratorium_pt',
      },
      {
        label: 'Glukosa Darah',
        name: 'laboratorium_glukosa',
      },
      {
        label: 'Tes Kehamilan',
        name: 'laboratorium_kehamilan',
      },
      {
        label: 'Kalium',
        name: 'laboratorium_kalium',
      },
      {
        label: 'Ureum',
        name: 'laboratorium_ureum',
      },
    ],
    [
      {
        label: 'Leukosit',
        name: 'laboratorium_leukosit',
      },
      {
        label: 'Trombosit',
        name: 'laboratorium_trombosit',
      },
      {
        label: 'Rontgen Dada',
        name: 'laboratorium_rontgen',
      },
      {
        label: 'EKG (40th keatas)',
        name: 'laboratorium_ekg',
      },
      {
        label: 'Na/Cl',
        name: 'laboratorium_na_cl',
      },
      {
        label: 'Kreatinin',
        name: 'laboratorium_kreatinin',
      },
    ],
  ],
  asa: [
    {
      label: 'ASA 1 Pasien Normal yang sehat',
      name: 'asa_1',
      defaultChecked: 'ASA_1',
    },
    {
      label: 'ASA 2 Pasien dengan penyakit sistemik ringan',
      name: 'asa_2',
      defaultChecked: 'ASA_2',
    },
    {
      label: 'ASA 3 Pasien dengan penyakit sistemik berat',
      name: 'asa_3',
      defaultChecked: 'ASA_3',
    },
    {
      label: 'ASA 4 Pasien dengan penyakit sistemik berat yang mengancam jiwa',
      name: 'asa_4',
      defaultChecked: 'ASA_4',
    },
  ],
  perencanaan_anestesi: [
    {
      label: 'Teknik Anestesi & Sedasi',
      item: [
        [
          {
            label: 'Sedasi',
            name: 'perencanaan_anestesi_sedasi',
            text_name: 'perencanaan_anestesi_sedasi_teks',
            defaultChecked: 'Perencanaan_Anestesi_Sedasi',
          },
          {
            label: 'GA',
            name: 'perencanaan_anestesi_ga',
            text_name: 'perencanaan_anestesi_ga_teks',
            defaultChecked: 'Perencanaan_Anestesi_GA',
          },
          {
            label: 'Lainnya',
            name: 'perencanaan_anestesi_lainnya',
            text_name: 'perencanaan_anestesi_lainnya_teks',
            defaultChecked: 'Perencanaan_Anestesi_Lainnya',
          },
        ],
      ],
    },
    {
      label: 'Teknik Khusus',
      item: [
        [
          {
            label: 'Tidak Ada',
            name: 'perencanaan_khusus_tidak_ada',
            defaultChecked: 'Perencanaan_Khusus_Tidak_Ada',
          },
          {
            label: 'Hipotensi',
            name: 'perencanaan_khusus_hipotensi',
            defaultChecked: 'Perencanaan_Khusus_Hipotensi',
          },
          {
            label: 'Ventilasi Satu Paru',
            name: 'perencanaan_khusus_ventilasi',
            defaultChecked: 'Perencanaan_Khusus_Ventilasi',
          },
          {
            label: 'TCI',
            name: 'perencanaan_khusus_tci',
            defaultChecked: 'Perencanaan_Khusus_TCI',
          },
          {
            label: 'Lainnya',
            name: 'perencanaan_khusus_lainnya',
            text_name: 'perencanaan_khusus_lainnya_teks',
            defaultChecked: 'Perencanaan_Khusus_Lainnya',
          },
        ],
      ],
    },
    {
      label: 'Monitoring',
      item: [
        [
          {
            label: 'EKG Lead',
            name: 'perencanaan_monitoring_ekg_lead',
            text_name: 'perencanaan_monitoring_ekg_lead_teks',
            defaultChecked: 'Perencanaan_Monitoring_EKG_Lead',
          },
          {
            label: 'CVP',
            name: 'perencanaan_monitoring_cvp',
            text_name: 'perencanaan_monitoring_cvp_teks',
            defaultChecked: 'Perencanaan_Monitoring_CVP',
          },
          {
            label: 'Arteri Line',
            name: 'perencanaan_monitoring_arteri_line',
            text_name: 'perencanaan_monitoring_arteri_line_teks',
            defaultChecked: 'Perencanaan_Monitoring_Arteri_Line',
          },
        ],
        [
          {
            label: 'SpO2',
            name: 'perencanaan_monitoring_spo2',
            defaultChecked: 'Perencanaan_Monitoring_SPO2',
          },
          {
            label: 'ET CO2',
            name: 'perencanaan_monitoring_et_co2',
            defaultChecked: 'Perencanaan_Monitoring_ET_CO2',
          },
          {
            label: 'NIBP',
            name: 'perencanaan_monitoring_nibp',
            defaultChecked: 'Perencanaan_Monitoring_NIBP',
          },
        ],
        [
          {
            label: 'BIS',
            name: 'perencanaan_monitoring_bis',
            defaultChecked: 'Perencanaan_Monitoring_BIS',
          },
          {
            label: 'Temp',
            name: 'perencanaan_monitoring_temp',
            defaultChecked: 'Perencanaan_Monitoring_Temp',
          },
          {
            label: 'Lainnya',
            name: 'perencanaan_monitoring_lainnya',
            text_name: 'perencanaan_monitoring_lainnya_teks',
            defaultChecked: 'Perencanaan_Monitoring_Lainnya',
          },
        ],
      ],
    },
    {
      label: 'Alat Khusus',
      item: [
        [
          {
            label: 'Bronchoscopy',
            name: 'perencanaan_alat_khusus_bronchoscopy',
            defaultChecked: 'Perencanaan_Alat_Khusus_Bronchoscopy',
          },
          {
            label: 'Glidescope',
            name: 'perencanaan_alat_khusus_glidescope',
            defaultChecked: 'Perencanaan_Alat_Khusus_Glidescope',
          },
          {
            label: 'USG',
            name: 'perencanaan_alat_khusus_usg',
            defaultChecked: 'Perencanaan_Alat_Khusus_USG',
          },
          {
            label: 'Lainnya',
            name: 'perencanaan_alat_khusus_lainnya',
            text_name: 'perencanaan_alat_khusus_lainnya_teks',
            defaultChecked: 'Perencanaan_Alat_Khusus_Lainnya',
          },
        ],
      ],
    },
    // {
    //   label: 'Perawatan Pasca Anestesi',
    //   item: [
    //     [
    //       {
    //         label: 'Rawat Inap',
    //         name: 'perencanaan_perawatan_rawat_inap',
    //         defaultChecked: 'Perencanaan_Perawatan_Rawat_Inap',
    //       },
    //       {
    //         label: 'Rawat Jalan',
    //         name: 'perencanaan_perawatan_rawat_jalan',
    //         defaultChecked: 'Perencanaan_Perawatan_Rawat_Jalan',
    //       },
    //       {
    //         label: 'Lainnya',
    //         name: 'perencanaan_perawatan_lainnya',
    //         text_name: 'perencanaan_perawatan_lainnya_teks',
    //         defaultChecked: 'Perencanaan_Perawatan_Lainnya',
    //       },
    //     ],
    //   ],
    // },
  ],
  persiapan_anestesi: [
    {
      label: 'Persiapan Pra Anestesi',
      item: [
        [
          {
            label: 'Puasa Mulai',
            name: 'perencanaan_persiapan_puasa',
            text_name: 'perencanaan_persiapan_puasa_waktu',
            defaultChecked: 'Perencanaan_Persiapan_Puasa',
          },
          {
            label: 'Pre medikasi',
            name: 'perencanaan_persiapan_pre_medikasi',
            text_name: 'perencanaan_persiapan_pre_medikasi_waktu',
            defaultChecked: 'Perencanaan_Persiapan_Pre_Medikasi',
          },
          {
            label: 'Transportasi ke Kamar Bedah',
            name: 'perencanaan_persiapan_transportasi_kamar_bedah',
            text_name: 'perencanaan_persiapan_transportasi_kamar_bedah_waktu',
            defaultChecked: 'Perencanaan_Persiapan_Transportasi_Kamar_Bedah',
          },
          {
            label: 'Rencana Operasi',
            name: 'perencanaan_persiapan_rencana_operasi',
            text_name: 'perencanaan_persiapan_rencana_operasi_waktu',
            defaultChecked: 'Perencanaan_Persiapan_Rencana_Operasi',
          },
        ],
      ],
    },
  ],
}

export default PreAnesthesiaFormConstant;
