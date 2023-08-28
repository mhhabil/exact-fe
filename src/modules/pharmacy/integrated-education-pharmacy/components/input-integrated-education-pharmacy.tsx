import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { IntegratedEducationModel } from '@src/modules/inpatient/integrated-education/models/integrated-education.model';

const InputIntegratedEducationPharmacy = (props: { data: IntegratedEducationModel, setValue:any, initialImage?: string, register: any, errors: any }) => {
  const { data, setValue, initialImage, register, errors } = props;

  return (
    <FormGroup>
      <Input
        name="asesmen"
        type='hidden'
        innerRef={register('asesmen')as any}
      />
      <Input
        name="dpjp"
        type='hidden'
        innerRef={register('dpjp')as any}
      />
      <Input
        name="asesmen"
        type='hidden'
        innerRef={register('asesmen')as any}
      />
      <Input
        name="dpjp_kondisi_pasien"
        type='hidden'
        innerRef={register('dpjp_kondisi_pasien')as any}
      />
      <Input
        name="dpjp_hasil_pemeriksaan"
        type='hidden'
        innerRef={register('dpjp_hasil_pemeriksaan')as any}
      />
      <Input
        name="dpjp_pengobatan"
        type='hidden'
        innerRef={register('dpjp_pengobatan')as any}
      />
      <Input
        name="dpjp_manfaat"
        type='hidden'
        innerRef={register('dpjp_manfaat')as any}
      />
      <Input
        name="dpjp_manfaat"
        type='hidden'
        innerRef={register('dpjp_manfaat')as any}
      />
      <Input
        name="dpjp_alternatif"
        type='hidden'
        innerRef={register('dpjp_alternatif')as any}
      />
      <Input
        name="dpjp_keberhasilan"
        type='hidden'
        innerRef={register('dpjp_keberhasilan')as any}
      />
      <Input
        name="dpjp_pemulihan"
        type='hidden'
        innerRef={register('dpjp_pemulihan')as any}
      />
      <Input
        name="dpjp_diagnosa"
        type='hidden'
        innerRef={register('dpjp_diagnosa')as any}
      />
      <Input
        name="dpjp_diagnosa_teks"
        type='hidden'
        innerRef={register('dpjp_diagnosa_teks')as any}
      />
      <Input
        name="dpjp_hasil_asuhan"
        type='hidden'
        innerRef={register('dpjp_hasil_asuhan')as any}
      />
      <Input
        name="dpjp_hasil_asuhan_teks"
        type='hidden'
        innerRef={register('dpjp_hasil_asuhan_teks')as any}
      />
      <Input
        name="dpjp_diskusi"
        type='hidden'
        innerRef={register('dpjp_diskusi')as any}
      />
      <Input
        name="dpjp_demonstrasi"
        type='hidden'
        innerRef={register('dpjp_demonstrasi')as any}
      />
      <Input
        name="dpjp_ceramah"
        type='hidden'
        innerRef={register('dpjp_ceramah')as any}
      />
      <Input
        name="dpjp_solusi"
        type='hidden'
        innerRef={register('dpjp_solusi')as any}
      />
      <Input
        name="dpjp_observatori"
        type='hidden'
        innerRef={register('dpjp_observatori')as any}
      />
      <Input
        name="dpjp_metode_pembelajaran_lain"
        type='hidden'
        innerRef={register('dpjp_metode_pembelajaran_lain')as any}
      />
      <Input
        name="dpjp_metode_pembelajaran_lain_teks"
        type='hidden'
        innerRef={register('dpjp_metode_pembelajaran_lain_teks')as any}
      />
      <Input
        name="dpjp_mampu_mengerti"
        type='hidden'
        innerRef={register('dpjp_mampu_mengerti')as any}
      />
      <Input
        name="dpjp_mampu_memahami"
        type='hidden'
        innerRef={register('dpjp_mampu_memahami')as any}
      />
      <Input
        name="dpjp_evaluasi_pasien_lain"
        type='hidden'
        innerRef={register('dpjp_evaluasi_pasien_lain')as any}
      />
      <Input
        name="dpjp_evaluasi_pasien_lain_teks"
        type='hidden'
        innerRef={register('dpjp_evaluasi_pasien_lain_teks')as any}
      />
      <Input
        name="dpjp_waktu_edukasi"
        type='hidden'
        innerRef={register('dpjp_waktu_edukasi')as any}
      />
      <Input
        name="dpjp_durasi"
        type='hidden'
        innerRef={register('dpjp_durasi')as any}
      />
      <Input
        name="dpjp_pasien"
        type='hidden'
        innerRef={register('dpjp_pasien')as any}
      />
      <Input
        name="dpjp_pasangan"
        type='hidden'
        innerRef={register('dpjp_pasangan')as any}
      />
      <Input
        name="dpjp_orang_tua"
        type='hidden'
        innerRef={register('dpjp_orang_tua')as any}
      />
      <Input
        name="dpjp_saudara_kandung"
        type='hidden'
        innerRef={register('dpjp_saudara_kandung')as any}
      />
      <Input
        name="dpjp_penerima_edukasi_lain"
        type='hidden'
        innerRef={register('dpjp_penerima_edukasi_lain')as any}
      />
      <Input
        name="dpjp_penerima_edukasi_lain_teks"
        type='hidden'
        innerRef={register('dpjp_penerima_edukasi_lain_teks')as any}
      />
      <Input
        name="ttd_penerima_edukasi_dpjp"
        type='hidden'
        innerRef={register('ttd_penerima_edukasi_dpjp')as any}
      />
      <Input
        name="ttd_edukator_dpjp"
        type='hidden'
        innerRef={register('ttd_edukator_dpjp')as any}
      />
      <Input
        name="id_edukator_dpjp"
        type='hidden'
        innerRef={register('id_edukator_dpjp')as any}
      />

      {/* manajemen nyeri */}
      <Input
        name="manajemen_nyeri_farmakologi"
        type='hidden'
        innerRef={register('manajemen_nyeri_farmakologi')as any}
      />
      <Input
        name="manajemen_nyeri_non_farmakologi"
        type='hidden'
        innerRef={register('manajemen_nyeri_non_farmakologi')as any}
      />
      <Input
        name="manajemen_nyeri_diskusi"
        type='hidden'
        innerRef={register('manajemen_nyeri_diskusi')as any}
      />
      <Input
        name="manajemen_nyeri_demonstrasi"
        type='hidden'
        innerRef={register('manajemen_nyeri_demonstrasi')as any}
      />
      <Input
        name="manajemen_nyeri_ceramah"
        type='hidden'
        innerRef={register('manajemen_nyeri_ceramah')as any}
      />
      <Input
        name="manajemen_nyeri_solusi"
        type='hidden'
        innerRef={register('manajemen_nyeri_solusi')as any}
      />
      <Input
        name="manajemen_nyeri_observatori"
        type='hidden'
        innerRef={register('manajemen_nyeri_observatori')as any}
      />
      <Input
        name="manajemen_nyeri_metode_pembelajaran_lain"
        type='hidden'
        innerRef={register('manajemen_nyeri_metode_pembelajaran_lain')as any}
      />
      <Input
        name="manajemen_nyeri_metode_pembelajaran_lain_teks"
        type='hidden'
        innerRef={register('manajemen_nyeri_metode_pembelajaran_lain_teks')as any}
      />
      <Input
        name="manajemen_nyeri_mampu_mengerti"
        type='hidden'
        innerRef={register('manajemen_nyeri_mampu_mengerti')as any}
      />
      <Input
        name="manajemen_nyeri_mampu_memahami"
        type='hidden'
        innerRef={register('manajemen_nyeri_mampu_memahami')as any}
      />
      <Input
        name="manajemen_nyeri_evaluasi_pasien_lain"
        type='hidden'
        innerRef={register('manajemen_nyeri_evaluasi_pasien_lain')as any}
      />
      <Input
        name="manajemen_nyeri_evaluasi_pasien_lain_teks"
        type='hidden'
        innerRef={register('manajemen_nyeri_evaluasi_pasien_lain_teks')as any}
      />
      <Input
        name="manajemen_nyeri_waktu_edukasi"
        type='hidden'
        innerRef={register('manajemen_nyeri_waktu_edukasi')as any}
      />
      <Input
        name="manajemen_nyeri_durasi"
        type='hidden'
        innerRef={register('manajemen_nyeri_durasi')as any}
      />
      <Input
        name="manajemen_nyeri_pasien"
        type='hidden'
        innerRef={register('manajemen_nyeri_pasien')as any}
      />
      <Input
        name="manajemen_nyeri_pasangan"
        type='hidden'
        innerRef={register('manajemen_nyeri_pasangan')as any}
      />
      <Input
        name="manajemen_nyeri_orang_tua"
        type='hidden'
        innerRef={register('manajemen_nyeri_orang_tua')as any}
      />
      <Input
        name="manajemen_nyeri_saudara_kandung"
        type='hidden'
        innerRef={register('manajemen_nyeri_saudara_kandung')as any}
      />
      <Input
        name="manajemen_nyeri_penerima_edukasi_lain"
        type='hidden'
        innerRef={register('manajemen_nyeri_penerima_edukasi_lain')as any}
      />
      <Input
        name="manajemen_nyeri_penerima_edukasi_lain_teks"
        type='hidden'
        innerRef={register('manajemen_nyeri_penerima_edukasi_lain_teks')as any}
      />
      <Input
        name="ttd_penerima_edukasi_manajemen_nyeri"
        type='hidden'
        innerRef={register('ttd_penerima_edukasi_manajemen_nyeri')as any}
      />
      <Input
        name="ttd_edukator_manajemen_nyeri"
        type='hidden'
        innerRef={register('ttd_edukator_manajemen_nyeri')as any}
      />
      <Input
        name="id_edukator_manajemen_nyeri"
        type='hidden'
        innerRef={register('id_edukator_manajemen_nyeri')as any}
      />

      {/* keperawatan */}
      <Input
        name="keperawatan_mobilisasi"
        type='hidden'
        innerRef={register('keperawatan_mobilisasi')as any}
      />
      <Input
        name="keperawatan_perawatan_luka"
        type='hidden'
        innerRef={register('keperawatan_perawatan_luka')as any}
      />
      <Input
        name="keperawatan_perawatan_peralatan"
        type='hidden'
        innerRef={register('keperawatan_perawatan_peralatan')as any}
      />
      <Input
        name="keperawatan_pemberian_makan"
        type='hidden'
        innerRef={register('keperawatan_pemberian_makan')as any}
      />
      <Input
        name="keperawatan_membuang_urine"
        type='hidden'
        innerRef={register('keperawatan_membuang_urine')as any}
      />
      <Input
        name="keperawatan_lain_lain"
        type='hidden'
        innerRef={register('keperawatan_lain_lain')as any}
      />
      <Input
        name="keperawatan_lain_lain_teks"
        type='hidden'
        innerRef={register('keperawatan_lain_lain_teks')as any}
      />
      <Input
        name="keperawatan_diskusi"
        type='hidden'
        innerRef={register('keperawatan_diskusi')as any}
      />
      <Input
        name="keperawatan_demonstrasi"
        type='hidden'
        innerRef={register('keperawatan_demonstrasi')as any}
      />
      <Input
        name="keperawatan_ceramah"
        type='hidden'
        innerRef={register('keperawatan_ceramah')as any}
      />
      <Input
        name="keperawatan_solusi"
        type='hidden'
        innerRef={register('keperawatan_solusi')as any}
      />
      <Input
        name="keperawatan_observatori"
        type='hidden'
        innerRef={register('keperawatan_observatori')as any}
      />
      <Input
        name="keperawatan_metode_pembelajaran_lain"
        type='hidden'
        innerRef={register('keperawatan_metode_pembelajaran_lain')as any}
      />
      <Input
        name="keperawatan_metode_pembelajaran_lain_teks"
        type='hidden'
        innerRef={register('keperawatan_metode_pembelajaran_lain_teks')as any}
      />
      <Input
        name="keperawatan_mampu_mengerti"
        type='hidden'
        innerRef={register('keperawatan_mampu_mengerti')as any}
      />
      <Input
        name="keperawatan_mampu_memahami"
        type='hidden'
        innerRef={register('keperawatan_mampu_memahami')as any}
      />
      <Input
        name="keperawatan_evaluasi_pasien_lain"
        type='hidden'
        innerRef={register('keperawatan_evaluasi_pasien_lain')as any}
      />
      <Input
        name="keperawatan_evaluasi_pasien_lain_teks"
        type='hidden'
        innerRef={register('keperawatan_evaluasi_pasien_lain_teks')as any}
      />
      <Input
        name="keperawatan_waktu_edukasi"
        type='hidden'
        innerRef={register('keperawatan_waktu_edukasi')as any}
      />
      <Input
        name="keperawatan_durasi"
        type='hidden'
        innerRef={register('keperawatan_durasi')as any}
      />
      <Input
        name="keperawatan_pasien"
        type='hidden'
        innerRef={register('keperawatan_pasien')as any}
      />
      <Input
        name="keperawatan_pasangan"
        type='hidden'
        innerRef={register('keperawatan_pasangan')as any}
      />
      <Input
        name="keperawatan_orang_tua"
        type='hidden'
        innerRef={register('keperawatan_orang_tua')as any}
      />
      <Input
        name="keperawatan_saudara_kandung"
        type='hidden'
        innerRef={register('keperawatan_saudara_kandung')as any}
      />
      <Input
        name="keperawatan_penerima_edukasi_lain"
        type='hidden'
        innerRef={register('keperawatan_penerima_edukasi_lain')as any}
      />
      <Input
        name="keperawatan_penerima_edukasi_lain_teks"
        type='hidden'
        innerRef={register('keperawatan_penerima_edukasi_lain_teks')as any}
      />
      <Input
        name="ttd_penerima_edukasi_keperawatan"
        type='hidden'
        innerRef={register('ttd_penerima_edukasi_keperawatan')as any}
      />
      <Input
        name="ttd_edukator_keperawatan"
        type='hidden'
        innerRef={register('ttd_edukator_keperawatan')as any}
      />
      <Input
        name="id_edukator_keperawatan"
        type='hidden'
        innerRef={register('id_edukator_keperawatan')as any}
      />

      {/* informasi lain */}
      <Input
        name="daftar_pasien_informasi_lain_"
        type='hidden'
        innerRef={register('daftar_pasien_informasi_lain_')as any}
      />
      <Input
        name="informasi_lain_diskusi"
        type='hidden'
        innerRef={register('informasi_lain_diskusi')as any}
      />
      <Input
        name="informasi_lain_demonstrasi"
        type='hidden'
        innerRef={register('informasi_lain_demonstrasi')as any}
      />
      <Input
        name="informasi_lain_ceramah"
        type='hidden'
        innerRef={register('informasi_lain_ceramah')as any}
      />
      <Input
        name="informasi_lain_solusi"
        type='hidden'
        innerRef={register('informasi_lain_solusi')as any}
      />
      <Input
        name="informasi_lain_observatori"
        type='hidden'
        innerRef={register('informasi_lain_observatori')as any}
      />
      <Input
        name="informasi_lain_metode_pembelajaran_lain"
        type='hidden'
        innerRef={register('informasi_lain_metode_pembelajaran_lain')as any}
      />
      <Input
        name="informasi_lain_metode_pembelajaran_lain_teks"
        type='hidden'
        innerRef={register('informasi_lain_metode_pembelajaran_lain_teks')as any}
      />
      <Input
        name="informasi_lain_mampu_mengerti"
        type='hidden'
        innerRef={register('informasi_lain_mampu_mengerti')as any}
      />
      <Input
        name="informasi_lain_mampu_memahami"
        type='hidden'
        innerRef={register('informasi_lain_mampu_memahami')as any}
      />
      <Input
        name="informasi_lain_evaluasi_pasien_lain"
        type='hidden'
        innerRef={register('informasi_lain_evaluasi_pasien_lain')as any}
      />
      <Input
        name="informasi_lain_evaluasi_pasien_lain_teks"
        type='hidden'
        innerRef={register('informasi_lain_evaluasi_pasien_lain_teks')as any}
      />
      <Input
        name="informasi_lain_waktu_edukasi"
        type='hidden'
        innerRef={register('informasi_lain_waktu_edukasi')as any}
      />
      <Input
        name="informasi_lain_durasi"
        type='hidden'
        innerRef={register('informasi_lain_durasi')as any}
      />
      <Input
        name="informasi_lain_pasien"
        type='hidden'
        innerRef={register('informasi_lain_pasien')as any}
      />
      <Input
        name="informasi_lain_pasangan"
        type='hidden'
        innerRef={register('informasi_lain_pasangan')as any}
      />
      <Input
        name="informasi_lain_orang_tua"
        type='hidden'
        innerRef={register('informasi_lain_orang_tua')as any}
      />
      <Input
        name="informasi_lain_saudara_kandung"
        type='hidden'
        innerRef={register('informasi_lain_saudara_kandung')as any}
      />
      <Input
        name="informasi_lain_penerima_edukasi_lain"
        type='hidden'
        innerRef={register('informasi_lain_penerima_edukasi_lain')as any}
      />
      <Input
        name="informasi_lain_penerima_edukasi_lain_teks"
        type='hidden'
        innerRef={register('informasi_lain_penerima_edukasi_lain_teks')as any}
      />
      <Input
        name="ttd_penerima_edukasi_informasi_lain"
        type='hidden'
        innerRef={register('ttd_penerima_edukasi_informasi_lain')as any}
      />
      <Input
        name="ttd_edukator_informasi_lain"
        type='hidden'
        innerRef={register('ttd_edukator_informasi_lain')as any}
      />
      <Input
        name="id_edukator_informasi_lain"
        type='hidden'
        innerRef={register('id_edukator_informasi_lain')as any}
      />

      {/* post operasi */}
      <Input
        name="post_op_merunduk"
        type='hidden'
        innerRef={register('post_op_merunduk')as any}
      />
      <Input
        name="post_op_setengah_duduk"
        type='hidden'
        innerRef={register('post_op_setengah_duduk')as any}
      />
      <Input
        name="post_op_tidak_ada"
        type='hidden'
        innerRef={register('post_op_tidak_ada')as any}
      />
      <Input
        name="post_op_diskusi"
        type='hidden'
        innerRef={register('post_op_diskusi')as any}
      />
      <Input
        name="post_op_demonstrasi"
        type='hidden'
        innerRef={register('post_op_demonstrasi')as any}
      />
      <Input
        name="post_op_ceramah"
        type='hidden'
        innerRef={register('post_op_ceramah')as any}
      />
      <Input
        name="post_op_solusi"
        type='hidden'
        innerRef={register('post_op_solusi')as any}
      />
      <Input
        name="post_op_observatori"
        type='hidden'
        innerRef={register('post_op_observatori')as any}
      />
      <Input
        name="post_op_metode_pembelajaran_lain"
        type='hidden'
        innerRef={register('post_op_metode_pembelajaran_lain')as any}
      />
      <Input
        name="post_op_metode_pembelajaran_lain_teks"
        type='hidden'
        innerRef={register('post_op_metode_pembelajaran_lain_teks')as any}
      />
      <Input
        name="post_op_mampu_mengerti"
        type='hidden'
        innerRef={register('post_op_mampu_mengerti')as any}
      />
      <Input
        name="post_op_mampu_memahami"
        type='hidden'
        innerRef={register('post_op_mampu_memahami')as any}
      />
      <Input
        name="post_op_evaluasi_pasien_lain"
        type='hidden'
        innerRef={register('post_op_evaluasi_pasien_lain')as any}
      />
      <Input
        name="post_op_evaluasi_pasien_lain_teks"
        type='hidden'
        innerRef={register('post_op_evaluasi_pasien_lain_teks')as any}
      />
      <Input
        name="post_op_waktu_edukasi"
        type='hidden'
        innerRef={register('post_op_waktu_edukasi')as any}
      />
      <Input
        name="post_op_durasi"
        type='hidden'
        innerRef={register('post_op_durasi')as any}
      />
      <Input
        name="post_op_pasien"
        type='hidden'
        innerRef={register('post_op_pasien')as any}
      />
      <Input
        name="post_op_pasangan"
        type='hidden'
        innerRef={register('post_op_pasangan')as any}
      />
      <Input
        name="post_op_orang_tua"
        type='hidden'
        innerRef={register('post_op_orang_tua')as any}
      />
      <Input
        name="post_op_saudara_kandung"
        type='hidden'
        innerRef={register('post_op_saudara_kandung')as any}
      />
      <Input
        name="post_op_penerima_edukasi_lain"
        type='hidden'
        innerRef={register('post_op_penerima_edukasi_lain')as any}
      />
      <Input
        name="post_op_penerima_edukasi_lain_teks"
        type='hidden'
        innerRef={register('post_op_penerima_edukasi_lain_teks')as any}
      />
      <Input
        name="ttd_edukator_post_op"
        type='hidden'
        innerRef={register('ttd_edukator_post_op')as any}
      />
      <Input
        name="id_edukator_post_op"
        type='hidden'
        innerRef={register('id_edukator_post_op')as any}
      />

      {/* dokter spesialis */}
      <Input
        name="dokter_kondisi_pasien"
        type='hidden'
        innerRef={register('dokter_kondisi_pasien')as any}
      />
      <Input
        name="dokter_hasil_pemeriksaan"
        type='hidden'
        innerRef={register('dokter_hasil_pemeriksaan')as any}
      />
      <Input
        name="dokter_teknik_anestesi"
        type='hidden'
        innerRef={register('dokter_teknik_anestesi')as any}
      />
      <Input
        name="dokter_nyeri_pasca"
        type='hidden'
        innerRef={register('dokter_nyeri_pasca')as any}
      />
      <Input
        name="dokter_nyeri_analgesi"
        type='hidden'
        innerRef={register('dokter_nyeri_analgesi')as any}
      />
      <Input
        name="dokter_diskusi"
        type='hidden'
        innerRef={register('dokter_diskusi')as any}
      />
      <Input
        name="dokter_demonstrasi"
        type='hidden'
        innerRef={register('dokter_demonstrasi')as any}
      />
      <Input
        name="dokter_ceramah"
        type='hidden'
        innerRef={register('dokter_ceramah')as any}
      />
      <Input
        name="dokter_solusi"
        type='hidden'
        innerRef={register('dokter_solusi')as any}
      />
      <Input
        name="dokter_observatori"
        type='hidden'
        innerRef={register('dokter_observatori')as any}
      />
      <Input
        name="dokter_metode_pembelajaran_lain"
        type='hidden'
        innerRef={register('dokter_metode_pembelajaran_lain')as any}
      />
      <Input
        name="dokter_metode_pembelajaran_lain_teks"
        type='hidden'
        innerRef={register('dokter_metode_pembelajaran_lain_teks')as any}
      />
      <Input
        name="dokter_mampu_mengerti"
        type='hidden'
        innerRef={register('dokter_mampu_mengerti')as any}
      />
      <Input
        name="dokter_mampu_memahami"
        type='hidden'
        innerRef={register('dokter_mampu_memahami')as any}
      />
      <Input
        name="dokter_evaluasi_pasien_lain"
        type='hidden'
        innerRef={register('dokter_evaluasi_pasien_lain')as any}
      />
      <Input
        name="dokter_evaluasi_pasien_lain_teks"
        type='hidden'
        innerRef={register('dokter_evaluasi_pasien_lain_teks')as any}
      />
      <Input
        name="dokter_waktu_edukasi"
        type='hidden'
        innerRef={register('dokter_waktu_edukasi')as any}
      />
      <Input
        name="dokter_durasi"
        type='hidden'
        innerRef={register('dokter_durasi')as any}
      />
      <Input
        name="dokter_pasien"
        type='hidden'
        innerRef={register('dokter_pasien')as any}
      />
      <Input
        name="dokter_pasangan"
        type='hidden'
        innerRef={register('dokter_pasangan')as any}
      />
      <Input
        name="dokter_orang_tua"
        type='hidden'
        innerRef={register('dokter_orang_tua')as any}
      />
      <Input
        name="dokter_saudara_kandung"
        type='hidden'
        innerRef={register('dokter_saudara_kandung')as any}
      />
      <Input
        name="dokter_penerima_edukasi_lain"
        type='hidden'
        innerRef={register('dokter_penerima_edukasi_lain')as any}
      />
      <Input
        name="dokter_penerima_edukasi_lain_teks"
        type='hidden'
        innerRef={register('dokter_penerima_edukasi_lain_teks')as any}
      />
      <Input
        name="ttd_penerima_edukasi_dokter"
        type='hidden'
        innerRef={register('ttd_penerima_edukasi_dokter')as any}
      />
      <Input
        name="ttd_edukator_dokter"
        type='hidden'
        innerRef={register('ttd_edukator_dokter')as any}
      />
      <Input
        name="id_edukator_dokter"
        type='hidden'
        innerRef={register('id_edukator_dokter')as any}
      />

      {/* Mencuci Tangan */}
      <Input
        name="mencuci_tangan_handwash"
        type='hidden'
        innerRef={register('mencuci_tangan_handwash')as any}
      />
      <Input
        name="mencuci_tangan_handrub"
        type='hidden'
        innerRef={register('mencuci_tangan_handrub')as any}
      />
      <Input
        name="mencuci_tangan_diskusi"
        type='hidden'
        innerRef={register('mencuci_tangan_diskusi')as any}
      />
      <Input
        name="mencuci_tangan_demonstrasi"
        type='hidden'
        innerRef={register('mencuci_tangan_demonstrasi')as any}
      />
      <Input
        name="mencuci_tangan_ceramah"
        type='hidden'
        innerRef={register('mencuci_tangan_ceramah')as any}
      />
      <Input
        name="mencuci_tangan_solusi"
        type='hidden'
        innerRef={register('mencuci_tangan_solusi')as any}
      />
      <Input
        name="mencuci_tangan_observatori"
        type='hidden'
        innerRef={register('mencuci_tangan_observatori')as any}
      />
      <Input
        name="mencuci_tangan_metode_pembelajaran_lain"
        type='hidden'
        innerRef={register('mencuci_tangan_metode_pembelajaran_lain')as any}
      />
      <Input
        name="mencuci_tangan_metode_pembelajaran_lain_teks"
        type='hidden'
        innerRef={register('mencuci_tangan_metode_pembelajaran_lain_teks')as any}
      />
      <Input
        name="mencuci_tangan_mampu_mengerti"
        type='hidden'
        innerRef={register('mencuci_tangan_mampu_mengerti')as any}
      />
      <Input
        name="mencuci_tangan_mampu_memahami"
        type='hidden'
        innerRef={register('mencuci_tangan_mampu_memahami')as any}
      />
      <Input
        name="mencuci_tangan_evaluasi_pasien_lain"
        type='hidden'
        innerRef={register('mencuci_tangan_evaluasi_pasien_lain')as any}
      />
      <Input
        name="mencuci_tangan_evaluasi_pasien_lain_teks"
        type='hidden'
        innerRef={register('mencuci_tangan_evaluasi_pasien_lain_teks')as any}
      />
      <Input
        name="mencuci_tangan_waktu_edukasi"
        type='hidden'
        innerRef={register('mencuci_tangan_waktu_edukasi')as any}
      />
      <Input
        name="mencuci_tangan_durasi"
        type='hidden'
        innerRef={register('mencuci_tangan_durasi')as any}
      />
      <Input
        name="mencuci_tangan_pasien"
        type='hidden'
        innerRef={register('mencuci_tangan_metode_pembelajaran_lain')as any}
      />

      <Input
        name="mencuci_tangan_pasangan"
        type='hidden'
        innerRef={register('mencuci_tangan_pasangan')as any}
      />
      <Input
        name="mencuci_tangan_orang_tua"
        type='hidden'
        innerRef={register('mencuci_tangan_orang_tua')as any}
      />
      <Input
        name="mencuci_tangan_saudara_kandung"
        type='hidden'
        innerRef={register('mencuci_tangan_saudara_kandung')as any}
      />
      <Input
        name="mencuci_tangan_penerima_edukasi_lain"
        type='hidden'
        innerRef={register('mencuci_tangan_evaluasi_pasien_lain')as any}
      />
      <Input
        name="mencuci_tangan_penerima_edukasi_lain_teks"
        type='hidden'
        innerRef={register('mencuci_tangan_penerima_edukasi_lain_teks')as any}
      />
      <Input
        name="ttd_penerima_edukasi_mencuci_tangan"
        type='hidden'
        innerRef={register('ttd_penerima_edukasi_mencuci_tangan')as any}
      />
      <Input
        name="ttd_edukator_mencuci_tangan"
        type='hidden'
        innerRef={register('ttd_edukator_mencuci_tangan')as any}
      />
      <Input
        name="id_edukator_mencuci_tangan"
        type='hidden'
        innerRef={register('id_edukator_mencuci_tangan')as any}
      />

      {/* penggunaan alat */}
      <Input
        name="penggunaan_peralatan_infus"
        type='hidden'
        innerRef={register('penggunaan_peralatan_infus')as any}
      />
      <Input
        name="penggunaan_peralatan_oksigen"
        type='hidden'
        innerRef={register('penggunaan_peralatan_oksigen')as any}
      />
      <Input
        name="penggunaan_peralatan_nebulizer"
        type='hidden'
        innerRef={register('penggunaan_peralatan_nebulizer')as any}
      />
      <Input
        name="penggunaan_peralatan_lain"
        type='hidden'
        innerRef={register('penggunaan_peralatan_lain')as any}
      />
      <Input
        name="penggunaan_peralatan_lain_teks"
        type='hidden'
        innerRef={register('penggunaan_peralatan_lain_teks')as any}
      />
      <Input
        name="penggunaan_peralatan_diskusi"
        type='hidden'
        innerRef={register('penggunaan_peralatan_diskusi')as any}
      />
      <Input
        name="penggunaan_peralatan_demonstrasi"
        type='hidden'
        innerRef={register('penggunaan_peralatan_demonstrasi')as any}
      />
      <Input
        name="penggunaan_peralatan_ceramah"
        type='hidden'
        innerRef={register('penggunaan_peralatan_ceramah')as any}
      />
      <Input
        name="penggunaan_peralatan_solusi"
        type='hidden'
        innerRef={register('penggunaan_peralatan_solusi')as any}
      />
      <Input
        name="penggunaan_peralatan_observatori"
        type='hidden'
        innerRef={register('penggunaan_peralatan_observatori')as any}
      />
      <Input
        name="penggunaan_peralatan_metode_pembelajaran_lain"
        type='hidden'
        innerRef={register('penggunaan_peralatan_metode_pembelajaran_lain')as any}
      />
      <Input
        name="penggunaan_peralatan_metode_pembelajaran_lain_teks"
        type='hidden'
        innerRef={register('penggunaan_peralatan_metode_pembelajaran_lain_teks')as any}
      />
      <Input
        name="penggunaan_peralatan_mampu_mengerti"
        type='hidden'
        innerRef={register('penggunaan_peralatan_mampu_mengerti')as any}
      />
      <Input
        name="penggunaan_peralatan_mampu_memahami"
        type='hidden'
        innerRef={register('penggunaan_peralatan_mampu_memahami')as any}
      />
      <Input
        name="penggunaan_peralatan_evaluasi_pasien_lain"
        type='hidden'
        innerRef={register('penggunaan_peralatan_evaluasi_pasien_lain')as any}
      />
      <Input
        name="penggunaan_peralatan_evaluasi_pasien_lain_teks"
        type='hidden'
        innerRef={register('penggunaan_peralatan_evaluasi_pasien_lain_teks')as any}
      />
      <Input
        name="penggunaan_peralatan_waktu_edukasi"
        type='hidden'
        innerRef={register('penggunaan_peralatan_waktu_edukasi')as any}
      />
      <Input
        name="penggunaan_peralatan_durasi"
        type='hidden'
        innerRef={register('penggunaan_peralatan_durasi')as any}
      />
      <Input
        name="penggunaan_peralatan_pasien"
        type='hidden'
        innerRef={register('penggunaan_peralatan_pasien')as any}
      />
      <Input
        name="penggunaan_peralatan_pasangan"
        type='hidden'
        innerRef={register('penggunaan_peralatan_pasangan')as any}
      />
      <Input
        name="penggunaan_peralatan_orang_tua"
        type='hidden'
        innerRef={register('penggunaan_peralatan_orang_tua')as any}
      />
      <Input
        name="penggunaan_peralatan_penerima_edukasi_lain"
        type='hidden'
        innerRef={register('penggunaan_peralatan_penerima_edukasi_lain')as any}
      />
      <Input
        name="penggunaan_peralatan_penerima_edukasi_lain_teks"
        type='hidden'
        innerRef={register('penggunaan_peralatan_penerima_edukasi_lain_teks')as any}
      />
      <Input
        name="ttd_penerima_edukasi_penggunaan_peralatan"
        type='hidden'
        innerRef={register('ttd_penerima_edukasi_penggunaan_peralatan')as any}
      />
      <Input
        name="ttd_edukator_penggunaan_peralatan"
        type='hidden'
        innerRef={register('ttd_edukator_penggunaan_peralatan')as any}
      />
      <Input
        name="id_edukator_penggunaan_peralatan"
        type='hidden'
        innerRef={register('id_edukator_penggunaan_peralatan')as any}
      />

      {/*  hak kewajiban */}
      <Input
        name="hak_kewajiban_hak_pasien"
        type='hidden'
        innerRef={register('hak_kewajiban_hak_pasien')as any}
      />
      <Input
        name="hak_kewajiban_kewajiban_pasien"
        type='hidden'
        innerRef={register('hak_kewajiban_kewajiban_pasien')as any}
      />
      <Input
        name="hak_kewajiban_diskusi"
        type='hidden'
        innerRef={register('hak_kewajiban_diskusi')as any}
      />
      <Input
        name="hak_kewajiban_demonstrasi"
        type='hidden'
        innerRef={register('hak_kewajiban_demonstrasi')as any}
      />
      <Input
        name="hak_kewajiban_ceramah"
        type='hidden'
        innerRef={register('hak_kewajiban_ceramah')as any}
      />
      <Input
        name="hak_kewajiban_solusi"
        type='hidden'
        innerRef={register('hak_kewajiban_solusi')as any}
      />
      <Input
        name="hak_kewajiban_observatori"
        type='hidden'
        innerRef={register('hak_kewajiban_observatori')as any}
      />
      <Input
        name="hak_kewajiban_metode_pembelajaran_lain"
        type='hidden'
        innerRef={register('hak_kewajiban_metode_pembelajaran_lain')as any}
      />
      <Input
        name="hak_kewajiban_metode_pembelajaran_lain_teks"
        type='hidden'
        innerRef={register('hak_kewajiban_metode_pembelajaran_lain_teks')as any}
      />
      <Input
        name="hak_kewajiban_mampu_mengerti"
        type='hidden'
        innerRef={register('hak_kewajiban_mampu_mengerti')as any}
      />
      <Input
        name="hak_kewajiban_mampu_memahami"
        type='hidden'
        innerRef={register('hak_kewajiban_mampu_memahami')as any}
      />
      <Input
        name="hak_kewajiban_evaluasi_pasien_lain"
        type='hidden'
        innerRef={register('hak_kewajiban_evaluasi_pasien_lain')as any}
      />
      <Input
        name="hak_kewajiban_evaluasi_pasien_lain_teks"
        type='hidden'
        innerRef={register('hak_kewajiban_evaluasi_pasien_lain_teks')as any}
      />
      <Input
        name="hak_kewajiban_waktu_edukasi"
        type='hidden'
        innerRef={register('hak_kewajiban_waktu_edukasi')as any}
      />
      <Input
        name="hak_kewajiban_durasi"
        type='hidden'
        innerRef={register('hak_kewajiban_durasi')as any}
      />
      <Input
        name="hak_kewajiban_pasien"
        type='hidden'
        innerRef={register('hak_kewajiban_pasien')as any}
      />
      <Input
        name="hak_kewajiban_pasangan"
        type='hidden'
        innerRef={register('hak_kewajiban_pasangan')as any}
      />
      <Input
        name="hak_kewajiban_orang_tua"
        type='hidden'
        innerRef={register('hak_kewajiban_orang_tua')as any}
      />
      <Input
        name="hak_kewajiban_saudara_kandung"
        type='hidden'
        innerRef={register('hak_kewajiban_saudara_kandung')as any}
      />
      <Input
        name="hak_kewajiban_penerima_edukasi_lain"
        type='hidden'
        innerRef={register('hak_kewajiban_penerima_edukasi_lain')as any}
      />
      <Input
        name="hak_kewajiban_penerima_edukasi_lain_teks"
        type='hidden'
        innerRef={register('hak_kewajiban_penerima_edukasi_lain_teks')as any}
      />
      <Input
        name="ttd_penerima_edukasi_hak_kewajiban"
        type='hidden'
        innerRef={register('ttd_penerima_edukasi_hak_kewajiban')as any}
      />
      <Input
        name="ttd_edukator_hak_kewajiban"
        type='hidden'
        innerRef={register('ttd_edukator_hak_kewajiban')as any}
      />
      <Input
        name="id_edukator_hak_kewajiban"
        type='hidden'
        innerRef={register('id_edukator_hak_kewajiban')as any}
      />

      {/* GIZI */}
      <Input
        name="gizi_status_gizi"
        type='hidden'
        innerRef={register('gizi_status_gizi')as any}
      />
      <Input
        name="gizi_selama_perawatan"
        type='hidden'
        innerRef={register('gizi_selama_perawatan')as any}
      />
      <Input
        name="gizi_untuk_dirumah"
        type='hidden'
        innerRef={register('gizi_untuk_dirumah')as any}
      />
      <Input
        name="gizi_diluar_rs"
        type='hidden'
        innerRef={register('gizi_diluar_rs')as any}
      />
      <Input
        name="gizi_lain_lain"
        type='hidden'
        innerRef={register('gizi_lain_lain')as any}
      />
      <Input
        name="gizi_lain_lain_teks"
        type='hidden'
        innerRef={register('gizi_lain_lain_teks')as any}
      />
      <Input
        name="gizi_lain_lain_teks"
        type='hidden'
        innerRef={register('gizi_lain_lain_teks')as any}
      />
      <Input
        name="gizi_diskusi"
        type='hidden'
        innerRef={register('gizi_diskusi')as any}
      />
      <Input
        name="gizi_demonstrasi"
        type='hidden'
        innerRef={register('gizi_demonstrasi')as any}
      />
      <Input
        name="gizi_ceramah"
        type='hidden'
        innerRef={register('gizi_ceramah')as any}
      />
      <Input
        name="gizi_solusi"
        type='hidden'
        innerRef={register('gizi_solusi')as any}
      />
      <Input
        name="gizi_observatori"
        type='hidden'
        innerRef={register('gizi_observatori')as any}
      />
      <Input
        name="gizi_metode_pembelajaran_lain"
        type='hidden'
        innerRef={register('gizi_metode_pembelajaran_lain')as any}
      />
      <Input
        name="gizi_metode_pembelajaran_lain_teks"
        type='hidden'
        innerRef={register('gizi_metode_pembelajaran_lain_teks')as any}
      />
      <Input
        name="gizi_mampu_mengerti"
        type='hidden'
        innerRef={register('gizi_mampu_mengerti')as any}
      />
      <Input
        name="gizi_mampu_memahami"
        type='hidden'
        innerRef={register('gizi_mampu_memahami')as any}
      />
      <Input
        name="gizi_evaluasi_pasien_lain"
        type='hidden'
        innerRef={register('gizi_evaluasi_pasien_lain')as any}
      />
      <Input
        name="gizi_evaluasi_pasien_lain_teks"
        type='hidden'
        innerRef={register('gizi_evaluasi_pasien_lain_teks')as any}
      />
      <Input
        name="gizi_waktu_edukasi"
        type='hidden'
        innerRef={register('gizi_waktu_edukasi')as any}
      />
      <Input
        name="gizi_durasi"
        type='hidden'
        innerRef={register('gizi_durasi')as any}
      />
      <Input
        name="gizi_pasien"
        type='hidden'
        innerRef={register('gizi_pasien')as any}
      />
      <Input
        name="gizi_pasangan"
        type='hidden'
        innerRef={register('gizi_pasangan')as any}
      />
      <Input
        name="gizi_orang_tua"
        type='hidden'
        innerRef={register('gizi_orang_tua')as any}
      />
      <Input
        name="gizi_saudara_kandung"
        type='hidden'
        innerRef={register('gizi_saudara_kandung')as any}
      />
      <Input
        name="gizi_penerima_edukasi_lain"
        type='hidden'
        innerRef={register('gizi_penerima_edukasi_lain')as any}
      />
      <Input
        name="gizi_penerima_edukasi_lain_teks"
        type='hidden'
        innerRef={register('gizi_penerima_edukasi_lain_teks')as any}
      />
      <Input
        name="ttd_penerima_edukasi_gizi"
        type='hidden'
        innerRef={register('ttd_penerima_edukasi_gizi')as any}
      />
      <Input
        name="ttd_edukator_gizi"
        type='hidden'
        innerRef={register('ttd_edukator_gizi')as any}
      />
      <Input
        name="id_edukator_gizi"
        type='hidden'
        innerRef={register('id_edukator_gizi')as any}
      />
    </FormGroup>
  )
}

export default InputIntegratedEducationPharmacy;
