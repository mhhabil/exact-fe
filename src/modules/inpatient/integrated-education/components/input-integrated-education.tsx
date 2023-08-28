import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { IntegratedEducationModel } from '@src/modules/inpatient/integrated-education/models/integrated-education.model';

const InputIntegratedEducation = (props: { data: IntegratedEducationModel, setValue:any, initialImage?: string, register: any, errors: any }) => {
  const { data, setValue, initialImage, register, errors } = props;

  return (
    <FormGroup>
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

      {/* farmasi */}
      <Input
        name="farmasi_penggunaan_obat"
        type='hidden'
        innerRef={register('farmasi_penggunaan_obat')as any}
      />
      <Input
        name="farmasi_efek_samping"
        type='hidden'
        innerRef={register('farmasi_efek_samping')as any}
      />
      <Input
        name="farmasi_mencegah_interaksi"
        type='hidden'
        innerRef={register('farmasi_mencegah_interaksi')as any}
      />
      <Input
        name="farmasi_lain_lain"
        type='hidden'
        innerRef={register('farmasi_lain_lain')as any}
      />
      <Input
        name="farmasi_lain_lain_teks"
        type='hidden'
        innerRef={register('farmasi_lain_lain_teks')as any}
      />
      <Input
        name="farmasi_diskusi"
        type='hidden'
        innerRef={register('farmasi_diskusi')as any}
      />
      <Input
        name="farmasi_demonstrasi"
        type='hidden'
        innerRef={register('farmasi_demonstrasi')as any}
      />
      <Input
        name="farmasi_ceramah"
        type='hidden'
        innerRef={register('farmasi_ceramah')as any}
      />
      <Input
        name="farmasi_solusi"
        type='hidden'
        innerRef={register('farmasi_solusi')as any}
      />
      <Input
        name="farmasi_observatori"
        type='hidden'
        innerRef={register('farmasi_observatori')as any}
      />
      <Input
        name="farmasi_metode_pembelajaran_lain"
        type='hidden'
        innerRef={register('farmasi_metode_pembelajaran_lain')as any}
      />
      <Input
        name="farmasi_metode_pembelajaran_lain_teks"
        type='hidden'
        innerRef={register('farmasi_metode_pembelajaran_lain_teks')as any}
      />
      <Input
        name="farmasi_mampu_memahami"
        type='hidden'
        innerRef={register('farmasi_mampu_memahami')as any}
      />
      <Input
        name="farmasi_mampu_mengerti"
        type='hidden'
        innerRef={register('farmasi_mampu_mengerti')as any}
      />
      <Input
        name="farmasi_evaluasi_pasien_lain"
        type='hidden'
        innerRef={register('farmasi_evaluasi_pasien_lain')as any}
      />
      <Input
        name="farmasi_evaluasi_pasien_lain_teks"
        type='hidden'
        innerRef={register('farmasi_evaluasi_pasien_lain_teks')as any}
      />
      <Input
        name="farmasi_waktu_edukasi"
        type='hidden'
        innerRef={register('farmasi_waktu_edukasi')as any}
      />
      <Input
        name="farmasi_durasi"
        type='hidden'
        innerRef={register('farmasi_durasi')as any}
      />
      <Input
        name="farmasi_pasien"
        type='hidden'
        innerRef={register('farmasi_pasien')as any}
      />
      <Input
        name="farmasi_pasangan"
        type='hidden'
        innerRef={register('farmasi_pasangan')as any}
      />
      <Input
        name="farmasi_orang_tua"
        type='hidden'
        innerRef={register('farmasi_orang_tua')as any}
      />
      <Input
        name="farmasi_saudara_kandung"
        type='hidden'
        innerRef={register('farmasi_saudara_kandung')as any}
      />
      <Input
        name="farmasi_penerima_edukasi_lain"
        type='hidden'
        innerRef={register('farmasi_penerima_edukasi_lain')as any}
      />
      <Input
        name="farmasi_penerima_edukasi_lain_teks"
        type='hidden'
        innerRef={register('farmasi_penerima_edukasi_lain_teks')as any}
      />
      <Input
        name="ttd_penerima_edukasi_farmasi"
        type='hidden'
        innerRef={register('ttd_penerima_edukasi_farmasi')as any}
      />
      <Input
        name="ttd_edukator_farmasi"
        type='hidden'
        innerRef={register('ttd_edukator_farmasi')as any}
      />
      <Input
        name="id_edukator_farmasi"
        type='hidden'
        innerRef={register('id_edukator_farmasi')as any}
      />
    </FormGroup>
  )
}

export default InputIntegratedEducation;
