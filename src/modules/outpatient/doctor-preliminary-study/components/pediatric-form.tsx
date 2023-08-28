import { Button, Col, FormFeedback, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import { Fragment, useEffect, useState } from 'react';
import { Key, Minus, Plus } from 'react-feather';
import { SelectInput, TextInput } from '@shared/input';
import adaptasi from '@modules/ro/preliminary-study/consts/adaptasi';
import at38 from '../consts/at-38cm';
import at55 from '../consts/at-55cm';
import at84 from '../consts/at-84cm';
import coverUncover from '../consts/cover-uncover';
import coverUncoverMapping from '../consts/cover-uncover-mapping';
import falses from '@modules/ro/preliminary-study/consts/falses';
import pd from '@modules/ro/preliminary-study/consts/pd';
import prism from '../consts/prism';
import prismMapping from '../consts/prism-mapping';
import rafRuler from '../consts/raf-ruler';
import randotAnimal from '../consts/randot-animal';
import randotCircles from '../consts/randot-circles';
import randotForm from '../consts/randot-form';
import testDistance1m from '../consts/test-distance-1m';
import testDistance50m from '../consts/test-distance-50m';
import visualAquilities from '@modules/ro/preliminary-study/consts/visual-aquilities';

import AxisSelector from '@modules/ro/preliminary-study/components/axis-selector';
import CylSelector from '@modules/ro/preliminary-study/components/cyl-selector';
import GonioMeterSelector from '@modules/outpatient/doctor-preliminary-study/components/goniometer-selector';
import { IPediatric, Pediatric } from '../models/doctor-preliminary-study.model';
import SphSelector from '@modules/ro/preliminary-study/components/sph-selector';
import nearvision from '../consts/nearvision';
import ptosisFip from '../consts/ptosis-fip';
import ptosisMrd from '../consts/ptosis-mrd';
import ptosisLa from '../consts/ptosis-la';

const PediatricForm = (props: { register: any, errors: any, setValue: any, getValues: any, defaultSelected?: boolean, data?: IPediatric }) => {

  const { register, errors, setValue, getValues, defaultSelected, data } = props;

  const [showForm, setShowForm] = useState(defaultSelected);
  const [complaintNearvision, setComplaintNearvision] = useState(!!((data && data.Nearvision_OD_Select === 'Lain-lain') || (data && data.Nearvision_OD_Nearvision !== '')))
  const [complaintVisusOd, setComplaintVisusOd] = useState(!!((data && data?.Rpl_Streak_OD_Va === 'Lain-lain')))
  const [complaintFalseOd, setComplaintFalseOd] = useState(!!((data && data.Rpl_Streak_OD_False === 'Lain-lain')))
  const [complaintNearvisionOd, setComplaintNearvisionOd] = useState(!!((data?.Nearvision_OD_Nearvision === 'Lain-lain')))
  const [complaintNearvisionOs, setComplaintNearvisionOs] = useState(!!((data?.Nearvision_OS_Nearvision === 'Lain-lain')))
  const [complaintPdJauhOd, setComplaintPdJauhOd] = useState(!!(data && data.Rpl_Streak_OD_Pd_Jauh === 'Lain-lain'))
  const [complaintAdaptasiOd, setComplaintAdaptasiOd] = useState(!!(data && data.Rpl_Streak_OD_Adaptasi === 'Lain-lain'))
  const [complaintVisusOS, setComplaintVisusOs] = useState(!!(data && data.Rpl_Streak_OS_Va === 'Lain-lain'))
  const [complaintFalseOS, setComplaintFalseOs] = useState(!!(data && data.Rpl_Streak_OS_False === 'Lain-lain'))
  const [complaintPdJauhOS, setComplaintPdJauhOs] = useState(!!(data && data.Rpl_Streak_OS_Pd_Jauh === 'Lain-lain'))
  const [complaintAdaptasiOs, setComplaintAdaptasiOs] = useState(!!(data && data.Rpl_Streak_OS_Adaptasi === 'Lain-lain'))
  const [complaintOcularOd1, setComplaintOcularOd1] = useState(!!(data && data.Cover_OD_Cover_1 === "Lain-lain"))
  const [complaintOcularOd2, setComplaintOcularOd2] = useState(!!(data && data.Cover_OD_Cover_2 === "Lain-lain"))
  const [complaintOcularOd3, setComplaintOcularOd3] = useState(!!(data && data.Cover_OD_Cover_3 === "Lain-lain"))
  const [complaintOcularOd4, setComplaintOcularOd4] = useState(!!(data && data.Cover_OD_Cover_4 === "Lain-lain"))
  const [complaintOcularOd5, setComplaintOcularOd5] = useState(!!(data && data.Cover_OD_Cover_5 === 'Lain-lain'))
  const [complaintOcularOd6, setComplaintOcularOd6] = useState(!!(data && data.Cover_OD_Cover_6 === 'Lain-lain'))
  const [complaintOcularOs1, setComplaintOcularOs1] = useState(!!(data && data.Cover_OS_Cover_1 === 'Lain-lain'))
  const [complaintOcularOs2, setComplaintOcularOs2] = useState(!!(data && data.Cover_OS_Cover_2 === 'Lain-lain'))
  const [complaintOcularOs3, setComplaintOcularOs3] = useState(!!(data && data.Cover_OS_Cover_3 === 'Lain-lain'))
  const [complaintOcularOs4, setComplaintOcularOs4] = useState(!!(data && data.Cover_OS_Cover_4 === 'Lain-lain'))
  const [complaintOcularOs5, setComplaintOcularOs5] = useState(!!(data && data.Cover_OS_Cover_5 === 'Lain-lain'))
  const [complaintOcularOs6, setComplaintOcularOs6] = useState(!!(data && data.Cover_OS_Cover_6 === 'Lain-lain'))
  const [complaintVOD, setComplaintVOD] = useState(!!((data && data?.VOD === 'Lain-lain')))
  const [complaintVOS, setComplaintVOS] = useState(!!((data && data?.VOS === 'Lain-lain')))

  //Lainlain Prisma
  const [prism1, setPrism1] = useState<boolean>(!!(data?.Prisma_OD_Prisma_Without_Xt_Near === 'Lain-lain'))
  const [prism2, setPrism2] = useState<boolean>(!!(data?.Prisma_OD_Prisma_Without_Et_Near === 'Lain-lain'))
  const [prism3, setPrism3] = useState<boolean>(!!(data?.Prisma_OD_Prisma_Without_Hi_Near === 'Lain-lain'))
  const [prism4, setPrism4] = useState<boolean>(!!(data?.Prisma_OD_Prisma_Without_Ho_Near === 'Lain-lain'))
  const [prism5, setPrism5] = useState<boolean>(!!(data?.Prisma_OS_Prisma_Without_Xt_Near === 'Lain-lain'))
  const [prism6, setPrism6] = useState<boolean>(!!(data?.Prisma_OS_Prisma_Without_Et_Near === 'Lain-lain'))
  const [prism7, setPrism7] = useState<boolean>(!!(data?.Prisma_OS_Prisma_Without_Hi_Near === 'Lain-lain'))
  const [prism8, setPrism8] = useState<boolean>(!!(data?.Prisma_OS_Prisma_Without_Ho_Near === 'Lain-lain'))
  const [prism9, setPrism9] = useState<boolean>(!!(data?.Prisma_OD_Prisma_Without_Xt_Distance === 'Lain-lain'))
  const [prism10, setPrism10] = useState<boolean>(!!(data?.Prisma_OD_Prisma_Without_Et_Distance === 'Lain-lain'))
  const [prism11, setPrism11] = useState<boolean>(!!(data?.Prisma_OD_Prisma_Without_Hi_Distance === 'Lain-lain'))
  const [prism12, setPrism12] = useState<boolean>(!!(data?.Prisma_OD_Prisma_Without_Ho_Distance === 'Lain-lain'))
  const [prism13, setPrism13] = useState<boolean>(!!(data?.Prisma_OS_Prisma_Without_Xt_Distance === 'Lain-lain'))
  const [prism14, setPrism14] = useState<boolean>(!!(data?.Prisma_OS_Prisma_Without_Et_Distance === 'Lain-lain'))
  const [prism15, setPrism15] = useState<boolean>(!!(data?.Prisma_OS_Prisma_Without_Hi_Distance === 'Lain-lain'))
  const [prism16, setPrism16] = useState<boolean>(!!(data?.Prisma_OS_Prisma_Without_Ho_Distance === 'Lain-lain'))
  const [prism17, setPrism17] = useState<boolean>(!!(data?.Prisma_OD_Prisma_With_Xt_Near === 'Lain-lain'))
  const [prism18, setPrism18] = useState<boolean>(!!(data?.Prisma_OD_Prisma_With_Et_Near === 'Lain-lain'))
  const [prism19, setPrism19] = useState<boolean>(!!(data?.Prisma_OD_Prisma_With_Hi_Near === 'Lain-lain'))
  const [prism20, setPrism20] = useState<boolean>(!!(data?.Prisma_OD_Prisma_With_Ho_Near === 'Lain-lain'))
  const [prism21, setPrism21] = useState<boolean>(!!(data?.Prisma_OS_Prisma_With_Xt_Near === 'Lain-lain'))
  const [prism22, setPrism22] = useState<boolean>(!!(data?.Prisma_OS_Prisma_With_Et_Near === 'Lain-lain'))
  const [prism23, setPrism23] = useState<boolean>(!!(data?.Prisma_OS_Prisma_With_Hi_Near === 'Lain-lain'))
  const [prism24, setPrism24] = useState<boolean>(!!(data?.Prisma_OS_Prisma_With_Ho_Near === 'Lain-lain'))
  const [prism25, setPrism25] = useState<boolean>(!!(data?.Prisma_OD_Prisma_With_Xt_Distance === 'Lain-lain'))
  const [prism26, setPrism26] = useState<boolean>(!!(data?.Prisma_OD_Prisma_With_Et_Distance === 'Lain-lain'))
  const [prism27, setPrism27] = useState<boolean>(!!(data?.Prisma_OD_Prisma_With_Hi_Distance === 'Lain-lain'))
  const [prism28, setPrism28] = useState<boolean>(!!(data?.Prisma_OD_Prisma_With_Ho_Distance === 'Lain-lain'))
  const [prism29, setPrism29] = useState<boolean>(!!(data?.Prisma_OS_Prisma_With_Xt_Distance === 'Lain-lain'))
  const [prism30, setPrism30] = useState<boolean>(!!(data?.Prisma_OS_Prisma_With_Et_Distance === 'Lain-lain'))
  const [prism31, setPrism31] = useState<boolean>(!!(data?.Prisma_OS_Prisma_With_Hi_Distance === 'Lain-lain'))
  const [prism32, setPrism32] = useState<boolean>(!!(data?.Prisma_OS_Prisma_With_Ho_Distance === 'Lain-lain'))

  //LainlainCoverUncover
  const [cover1, setCover1] = useState<boolean>(!!(data?.Cover_Uncover_OD_Ortho_Without_Xt_Near === 'Lain-lain'));
  const [cover2, setCover2] = useState<boolean>(!!(data?.Cover_Uncover_OD_Ortho_Without_Et_Near === 'Lain-lain'));
  const [cover3, setCover3] = useState<boolean>(!!(data?.Cover_Uncover_OD_Ortho_Without_Hi_Near === 'Lain-lain'));
  const [cover4, setCover4] = useState<boolean>(!!(data?.Cover_Uncover_OD_Ortho_Without_Ho_Near === 'Lain-lain'));
  const [cover5, setCover5] = useState<boolean>(!!(data?.Cover_Uncover_OS_Ortho_Without_Xt_Near === 'Lain-lain'));
  const [cover6, setCover6] = useState<boolean>(!!(data?.Cover_Uncover_OS_Ortho_Without_Et_Near === 'Lain-lain'));
  const [cover7, setCover7] = useState<boolean>(!!(data?.Cover_Uncover_OS_Ortho_Without_Hi_Near === 'Lain-lain'));
  const [cover8, setCover8] = useState<boolean>(!!(data?.Cover_Uncover_OS_Ortho_Without_Ho_Near === 'Lain-lain'));
  const [cover9, setCover9] = useState<boolean>(!!(data?.Cover_Uncover_OD_Ortho_Without_Xt_Distance === 'Lain-lain'));
  const [cover10, setCover10] = useState<boolean>(!!(data?.Cover_Uncover_OD_Ortho_Without_Et_Distance === 'Lain-lain'));
  const [cover11, setCover11] = useState<boolean>(!!(data?.Cover_Uncover_OD_Ortho_Without_Hi_Distance === 'Lain-lain'));
  const [cover12, setCover12] = useState<boolean>(!!(data?.Cover_Uncover_OD_Ortho_Without_Ho_Distance === 'Lain-lain'));
  const [cover13, setCover13] = useState<boolean>(!!(data?.Cover_Uncover_OS_Ortho_Without_Xt_Distance === 'Lain-lain'));
  const [cover14, setCover14] = useState<boolean>(!!(data?.Cover_Uncover_OS_Ortho_Without_Et_Distance === 'Lain-lain'));
  const [cover15, setCover15] = useState<boolean>(!!(data?.Cover_Uncover_OS_Ortho_Without_Hi_Distance === 'Lain-lain'));
  const [cover16, setCover16] = useState<boolean>(!!(data?.Cover_Uncover_OS_Ortho_Without_Ho_Distance === 'Lain-lain'));
  const [cover17, setCover17] = useState<boolean>(!!(data?.Cover_Uncover_OD_Ortho_With_Xt_Near === 'Lain-lain'));
  const [cover18, setCover18] = useState<boolean>(!!(data?.Cover_Uncover_OD_Ortho_With_Et_Near === 'Lain-lain'));
  const [cover19, setCover19] = useState<boolean>(!!(data?.Cover_Uncover_OD_Ortho_With_Hi_Near === 'Lain-lain'));
  const [cover20, setCover20] = useState<boolean>(!!(data?.Cover_Uncover_OD_Ortho_With_Ho_Near === 'Lain-lain'));
  const [cover21, setCover21] = useState<boolean>(!!(data?.Cover_Uncover_OS_Ortho_With_Xt_Near === 'Lain-lain'));
  const [cover22, setCover22] = useState<boolean>(!!(data?.Cover_Uncover_OS_Ortho_With_Et_Near === 'Lain-lain'));
  const [cover23, setCover23] = useState<boolean>(!!(data?.Cover_Uncover_OS_Ortho_With_Hi_Near === 'Lain-lain'));
  const [cover24, setCover24] = useState<boolean>(!!(data?.Cover_Uncover_OS_Ortho_With_Ho_Near === 'Lain-lain'));
  const [cover25, setCover25] = useState<boolean>(!!(data?.Cover_Uncover_OD_Ortho_With_Xt_Distance === 'Lain-lain'));
  const [cover26, setCover26] = useState<boolean>(!!(data?.Cover_Uncover_OD_Ortho_With_Et_Distance === 'Lain-lain'));
  const [cover27, setCover27] = useState<boolean>(!!(data?.Cover_Uncover_OD_Ortho_With_Hi_Distance === 'Lain-lain'));
  const [cover28, setCover28] = useState<boolean>(!!(data?.Cover_Uncover_OD_Ortho_With_Ho_Distance === 'Lain-lain'));
  const [cover29, setCover29] = useState<boolean>(!!(data?.Cover_Uncover_OS_Ortho_With_Xt_Distance === 'Lain-lain'));
  const [cover30, setCover30] = useState<boolean>(!!(data?.Cover_Uncover_OS_Ortho_With_Et_Distance === 'Lain-lain'));
  const [cover31, setCover31] = useState<boolean>(!!(data?.Cover_Uncover_OS_Ortho_With_Hi_Distance === 'Lain-lain'));
  const [cover32, setCover32] = useState<boolean>(!!(data?.Cover_Uncover_OS_Ortho_With_Ho_Distance === 'Lain-lain'));

  useEffect(() => {
    setShowForm(defaultSelected)
  }, [defaultSelected])

  useEffect(() => {
    if (showForm) {
      setValue('pediatric_submit', '1')
    } else {
      setValue('pediatric_submit', '0')
    }
  }, [showForm])
  const handleButtonClick = () => {
    setShowForm(true);
  }

  const handleButtonHide = () => {
    setShowForm(false);
  }

  const handleChangeComplaint = (e: any) => {
    if (e.target.value === 'Lain-lain') {
      setComplaintNearvision(true);
    } else {
      setComplaintNearvision(false);
    }
  }

  const handleChangeComplaintOs = (e: any) => {
    if (e.target.value === 'Lain-lain') {
      setComplaintNearvisionOs(true);
    } else {
      setComplaintNearvisionOs(false);
    }
  }

  const handleChangeComplaintOd = (e: any) => {
    if (e.target.value === 'Lain-lain') {
      setComplaintNearvisionOd(true);
    } else {
      setComplaintNearvisionOd(false);
    }
  }

  const handleChangeComplaintVaOd = (e: any) => {
    if (e.target.value === 'Lain-lain') {
      setComplaintVisusOd(true);
    } else {
      setComplaintVisusOd(false);
    }
  }

  const handleChangeComplaintFalseOd = (e: any) => {
    if (e.target.value === 'Lain-lain') {
      setComplaintFalseOd(true);
    } else {
      setComplaintFalseOd(false);
    }
  }

  const handleChangeComplaintPdJauhOd = (e: any) => {
    if (e.target.value === 'Lain-lain') {
      setComplaintPdJauhOd(true);
    } else {
      setComplaintPdJauhOd(false);
    }
  }

  const handleChangeComplaintAdaptasiOd = (e: any) => {
    if (e.target.value === 'Lain-lain') {
      setComplaintAdaptasiOd(true);
    } else {
      setComplaintAdaptasiOd(false);
    }
  }

  const hanldleChangeComplaintVisusOs = (e: any) => {
    if (e.target.value === 'Lain-lain') {
      setComplaintVisusOs(true);
    } else {
      setComplaintVisusOs(false);
    }
  }

  const handleChangeComplaintFalseOS = (e: any) => {
    if (e.target.value === 'Lain-lain') {
      setComplaintFalseOs(true);
    } else {
      setComplaintFalseOs(false);
    }
  }

  const handleChangeComplaintPdJauhOs = (e: any) => {
    if (e.target.value === 'Lain-lain') {
      setComplaintPdJauhOs(true);
    } else {
      setComplaintPdJauhOs(false);
    }
  }

  const handleChangeComplaintAdaptasiOs = (e: any) => {
    if (e.target.value === 'Lain-lain') {
      setComplaintAdaptasiOs(true);
    } else {
      setComplaintAdaptasiOs(false);
    }
  }

  const handleChangeOcularOd1 = (e: any) => {
    if (e.target.value === 'Lain-lain') {
      setComplaintOcularOd1(true);
    } else {
      setComplaintOcularOd1(false);
    }
  }

  const handleChangeOcularOd2 = (e: any) => {
    if (e.target.value === 'Lain-lain') {
      setComplaintOcularOd2(true);
    } else {
      setComplaintOcularOd2(false);
    }
  }

  const handleChangeOcularOd3 = (e: any) => {
    if (e.target.value === 'Lain-lain') {
      setComplaintOcularOd3(true);
    } else {
      setComplaintOcularOd3(false);
    }
  }

  const handleChangeOcularOd4 = (e: any) => {
    if (e.target.value === 'Lain-lain') {
      setComplaintOcularOd4(true);
    } else {
      setComplaintOcularOd4(false);
    }
  }

  const handleChangeOcularOd5 = (e: any) => {
    if (e.target.value === 'Lain-lain') {
      setComplaintOcularOd5(true);
    } else {
      setComplaintOcularOd5(false);
    }
  }

  const handleChangeOcularOd6 = (e: any) =>  {
    if (e.target.value === 'Lain-lain') {
      setComplaintOcularOd6(true);
    } else {
      setComplaintOcularOd6(false);
    }
  }

  const handleChangeOcularOs1 = (e: any) =>  {
    if (e.target.value === 'Lain-lain') {
      setComplaintOcularOs1(true);
    } else {
      setComplaintOcularOs1(false);
    }
  }

  const handleChangeOcularOs5 = (e: any) =>  {
    if (e.target.value === 'Lain-lain') {
      setComplaintOcularOs5(true);
    } else {
      setComplaintOcularOs5(false);
    }
  }

  const handleChangeOcularOs2 = (e: any) =>  {
    if (e.target.value === 'Lain-lain') {
      setComplaintOcularOs2(true);
    } else {
      setComplaintOcularOs2(false);
    }
  }

  const handleChangeOcularOs3 = (e: any) =>  {
    if (e.target.value === 'Lain-lain') {
      setComplaintOcularOs3(true);
    } else {
      setComplaintOcularOs3(false);
    }
  }

  const handleChangeOcularOs4 = (e: any) =>  {
    if (e.target.value === 'Lain-lain') {
      setComplaintOcularOs4(true);
    } else {
      setComplaintOcularOs4(false);
    }
  }

  const handleChangeOcularOs6 = (e: any) =>  {
    if (e.target.value === 'Lain-lain') {
      setComplaintOcularOs6(true);
    } else {
      setComplaintOcularOs6(false);
    }
  }

  const handleChangeComplaintVOD = (e: any) =>  {
    if (e.target.value === 'Lain-lain') {
      setComplaintVOD(true);
    } else {
      setComplaintVOD(false);
    }
  }

  const handleChangeComplaintVOS = (e: any) =>  {
    if (e.target.value === 'Lain-lain') {
      setComplaintVOS(true);
    } else {
      setComplaintVOS(false);
    }
  }

  const handleCheckboxChange = (e: any) => {
    setValue(e.target.name, e.target.checked ? '1' : '0');
  }

  const handleChangePrism = (e: any) => {
    let prism = undefined;
    prism = prismMapping.find((item) => item.name === e.target.name);
    if (prism) {
      if (prism.id === 1) {
        setPrism1(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 2) {
        setPrism2(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 3) {
        setPrism3(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 4) {
        setPrism4(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 5) {
        setPrism5(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 6) {
        setPrism6(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 7) {
        setPrism7(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 8) {
        setPrism8(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 9) {
        setPrism9(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 10) {
        setPrism10(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 11) {
        setPrism11(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 12) {
        setPrism12(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 13) {
        setPrism13(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 14) {
        setPrism14(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 15) {
        setPrism15(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 16) {
        setPrism16(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 17) {
        setPrism17(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 18) {
        setPrism18(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 19) {
        setPrism19(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 20) {
        setPrism20(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 21) {
        setPrism21(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 22) {
        setPrism22(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 23) {
        setPrism23(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 24) {
        setPrism24(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 25) {
        setPrism25(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 26) {
        setPrism26(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 27) {
        setPrism27(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 28) {
        setPrism28(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 29) {
        setPrism29(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 30) {
        setPrism30(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 31) {
        setPrism31(!!(e.target.value === 'Lain-lain'));
      }
      if (prism.id === 32) {
        setPrism32(!!(e.target.value === 'Lain-lain'));
      }

    }
  }

  const handleChangeCoverUncover = (e: any) => {
    let cover = undefined;
    cover = coverUncoverMapping.find((item) => item.name === e.target.name);
    if (cover) {
      if (cover.id === 1) {
        setCover1(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 2) {
        setCover2(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 3) {
        setCover3(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 4) {
        setCover4(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 5) {
        setCover5(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 6) {
        setCover6(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 7) {
        setCover7(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 8) {
        setCover8(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 9) {
        setCover9(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 10) {
        setCover10(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 11) {
        setCover11(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 12) {
        setCover12(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 13) {
        setCover13(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 14) {
        setCover14(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 15) {
        setCover15(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 16) {
        setCover16(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 17) {
        setCover17(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 18) {
        setCover18(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 19) {
        setCover19(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 20) {
        setCover20(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 21) {
        setCover21(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 22) {
        setCover22(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 23) {
        setCover23(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 24) {
        setCover24(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 25) {
        setCover25(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 26) {
        setCover26(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 27) {
        setCover27(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 28) {
        setCover28(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 29) {
        setCover29(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 30) {
        setCover30(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 31) {
        setCover31(!!(e.target.value === 'Lain-lain'));
      }
      if (cover.id === 32) {
        setCover32(!!(e.target.value === 'Lain-lain'));
      }

    }
  }

  return (
    <>
      <Input
        id="pediatric-submit"
        type="hidden"
        name="pediatric_submit"
        innerRef={register({ required: true })}
        invalid={errors.pediatric_submit && true}
      />
      {
        !showForm && (
          <Button style={{ padding: '4px' }} color='success' type='button' onClick={handleButtonClick}>
            <Plus size={15} />
            <span className="align-middle" style={{ fontSize: '7.5pt' }}>Pemeriksaan Pediatrik Ophthalmology</span>
          </Button>
        )
      }
      <Table responsive className={(showForm) ? '' : 'd-none'}>
        {
          !showForm &&
        <tr>
          <td>
          </td>
          <td></td>
          <td></td>
        </tr>
        }
        <thead>
          <tr style={{ textAlign: 'center' }}>
            <td></td>
            <td>
              <b>OD PEDIATRIK</b>
            </td>
            <td>
              <b>OS PEDIATRIK</b>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>Visual Aquity</b></td>
            <td>
              <Input
                type='select'
                id='pediatric.VOD'
                name='pediatric.VOD'
                innerRef={register({ required: true })}
                onChange={(e) => handleChangeComplaintVOD(e)}
                invalid={errors.VOD && true}
              >
                <option value="" disabled={false}>--</option>
                {
                  visualAquilities && visualAquilities.map((tdis, key) => {
                    return <option value={tdis} key={key}>{ tdis }</option>;
                  })
                }
                <option value="Lain-lain">Lain-Lain</option>
              </Input>
              {
                complaintVOD && (
                  <FormGroup className="form-group" row>
                    <Label for="pediatric.VOD_Text" />
                    <Col>
                      <Input
                        id="pediatric.VOD_Text"
                        name="pediatric.VOD_Text"
                        innerRef={register({ required: true })}
                        invalid={errors['pediatric.VOD_Text'] && true} />
                    </Col>
                    {errors && errors['pediatric.VOD_Text'] && <FormFeedback>{errors['pediatric.VOD_Text'].message}</FormFeedback>}
                  </FormGroup>
                )
              }
            </td>
            <td>
              <Input
                type='select'
                id='pediatric.VOS'
                name='pediatric.VOS'
                innerRef={register({ required: true })}
                onChange={(e) => handleChangeComplaintVOS(e)}
                invalid={errors.VOS && true}
              >
                <option value="" disabled={false}>--</option>
                {
                  visualAquilities && visualAquilities.map((tdis, key) => {
                    return <option value={tdis} key={key}>{ tdis }</option>;
                  })
                }
                <option value="Lain-lain">Lain-Lain</option>
              </Input>
              {
                complaintVOS && (
                  <FormGroup className="form-group" row>
                    <Label for="pediatric.VOS_Text" />
                    <Col>
                      <Input
                        id="pediatric.VOS_Text"
                        name="pediatric.VOS_Text"
                        innerRef={register({ required: true })}
                        invalid={errors['pediatric.VOS_Text'] && true} />
                    </Col>
                    {errors && errors['pediatric.VOS_Text'] && <FormFeedback>{errors['pediatric.VOS_Text'].message}</FormFeedback>}
                  </FormGroup>
                )
              }
            </td>
          </tr>
          <tr>
            <td><b>Cardif</b></td>
            <td>
              <Row>
                <Col>
                  <SelectInput name='pediatric.Cardif_OD_Test_Distance_1' label="Test Distance 1 M" {...{ register, errors }}>
                    <option value="" disabled={false}>--</option>
                    {
                      testDistance1m && testDistance1m.map((tdis, key) => {
                        return <option value={tdis} key={key}>{ tdis }</option>;
                      })
                    }
                    Dec
                  </SelectInput>
                </Col>
                <Col md={2} style={{ textAlign: 'left', marginTop: '50px', paddingLeft: '0px' }}>Dec</Col>
                <Col>
                  <SelectInput name='pediatric.Cardif_OD_Test_Distance_50' label="Test Distance 50 M" {...{ register, errors }}>
                    <option value="" disabled={false}>--</option>
                    {
                      testDistance50m && testDistance50m.map((tdis, key) => {
                        return <option value={tdis} key={key}>{ tdis }</option>;
                      })
                    }
                  </SelectInput>
                </Col>
                <Col md={2} style={{ textAlign: 'left', marginTop: '50px', paddingLeft: '0px' }}>Dec</Col>
              </Row>
            </td>
            <td>
              <Row>
                <Col>
                  <SelectInput name='pediatric.Cardif_OS_Test_Distance_1' label="Test Distance 1 M" {...{ register, errors }}>
                    <option value="" disabled={false}>--</option>
                    {
                      testDistance1m && testDistance1m.map((tdis, key) => {
                        return <option value={tdis} key={key}>{ tdis }</option>;
                      })
                    }
                  </SelectInput>
                </Col>
                <Col md={2} style={{ textAlign: 'left', marginTop: '50px', paddingLeft: '0px' }}>Dec</Col>
                <Col>
                  <SelectInput name='pediatric.Cardif_OS_Test_Distance_50' label="Test Distance 50 M" {...{ register, errors }}>
                    <option value="" disabled={false}>--</option>
                    {
                      testDistance50m && testDistance50m.map((tdis, key) => {
                        return <option value={tdis} key={key}>{ tdis }</option>;
                      })
                    }
                  </SelectInput>
                </Col>
                <Col md={2} style={{ textAlign: 'left', marginTop: '50px', paddingLeft: '0px' }}>Dec</Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td><b>Teller Accuity Card/TAC</b></td>
            <td>
              <Row>
                <Col>
                  <SelectInput name='pediatric.Tac_OD_At_38' label="AT 38 CM" {...{ register, errors }}>
                    <option value="" disabled={false}>--</option>
                    {
                      at38 && at38.map((tdis, key) => {
                        return <option value={tdis} key={key}>{ tdis }</option>;
                      })
                    }
                  </SelectInput>
                </Col>
                <Col>
                  <SelectInput name='pediatric.Tac_OD_At_55' label="AT 55 CM" {...{ register, errors }}>
                    <option value="" disabled={false}>--</option>
                    {
                      at55 && at55.map((tdis, key) => {
                        return <option value={tdis} key={key}>{ tdis }</option>;
                      })
                    }
                  </SelectInput>
                </Col>
                <Col>
                  <SelectInput name='pediatric.Tac_OD_At_84' label="AT 84 CM" {...{ register, errors }}>
                    <option value="" disabled={false}>--</option>
                    {
                      at84 && at84.map((tdis, key) => {
                        return <option value={tdis} key={key}>{ tdis }</option>;
                      })
                    }
                  </SelectInput>
                </Col>
              </Row>
            </td>
            <td>
              <Row>
                <Col>
                  <SelectInput name='pediatric.Tac_OS_At_38' label="AT 38 CM" {...{ register, errors }}>
                    <option value="" disabled={false}>--</option>
                    {
                      at38 && at38.map((tdis, key) => {
                        return <option value={tdis} key={key}>{ tdis }</option>;
                      })
                    }
                  </SelectInput>
                </Col>
                <Col>
                  <SelectInput name='pediatric.Tac_OS_At_55' label="AT 55 CM" {...{ register, errors }}>
                    <option value="" disabled={false}>--</option>
                    {
                      at55 && at55.map((tdis, key) => {
                        return <option value={tdis} key={key}>{ tdis }</option>;
                      })
                    }
                  </SelectInput>
                </Col>
                <Col>
                  <SelectInput name='pediatric.Tac_OS_At_84' label="AT 84 CM" {...{ register, errors }}>
                    <option value="" disabled={false}>--</option>
                    {
                      at84 && at84.map((tdis, key) => {
                        return <option value={tdis} key={key}>{ tdis }</option>;
                      })
                    }
                  </SelectInput>
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td className='form-group'>
              <b>RPL Streak Retinoscopy</b>
            </td>
            <td className='form-group'>
              <Row className='mb-2'>
                <Col>
                  <SphSelector name='pediatric.Rpl_Streak_OD_Streak_Sph' label='Sph RPL Streak OD' {...{ register, errors, setValue, getValues }} />
                </Col>
                <Col>
                  <CylSelector name='pediatric.Rpl_Streak_OD_Streak_Cyl' label='Cyl RPL Streak OD' {...{ register, errors, setValue, getValues }} />
                </Col>
                <Col>
                  <AxisSelector name='pediatric.Rpl_Streak_OD_Streak_Axis' label='Axis RPL Streak OD' {...{ register, errors, setValue, getValues }} />
                </Col>
                <Col>
                  <Label for='pediatric.Rpl_Streak_OD_Va' md={9} style={{ fontSize: '9pt' }}>Visus Akhir</Label>
                  <Input
                    type='select'
                    id='pediatric.Rpl_Streak_OD_Va'
                    name='pediatric.Rpl_Streak_OD_Va'
                    innerRef={register({ required: true })}
                    onChange={(e) => handleChangeComplaintVaOd(e)}
                    invalid={errors.Rpl_Streak_OD_Va && true}
                  >
                    <option value="" disabled={false}>--</option>
                    {
                      visualAquilities && visualAquilities.map((tdis, key) => {
                        return <option value={tdis} key={key}>{ tdis }</option>;
                      })
                    }
                    <option value="Lain-lain">Lain-Lain</option>
                  </Input>
                  {
                    complaintVisusOd && (
                      <FormGroup className="form-group" row>
                        <Label for="pediatric.Rpl_Streak_OD_Va_Text" />
                        <Col>
                          <Input
                            id="pediatric.Rpl_Streak_OD_Va_Text"
                            name="pediatric.Rpl_Streak_OD_Va_Text"
                            innerRef={register({ required: true })}
                            invalid={errors['pediatric.Rpl_Streak_OD_Va_Text'] && true} />
                        </Col>
                        {errors && errors['pediatric.Rpl_Streak_OD_Va_Text'] && <FormFeedback>{errors['pediatric.Rpl_Streak_OD_Va_Text'].message}</FormFeedback>}
                      </FormGroup>
                    )
                  }
                </Col>
              </Row>
              <Row className='mb-0'>
                <Col>
                  <FormGroup className='form-group'>
                    <Label for='pediatric.Rpl_Streak_OD_False' md={9} style={{ fontSize: '9pt' }}>False</Label>
                    <Input
                      type='select'
                      id='pediatric.Rpl_Streak_OD_False'
                      name='pediatric.Rpl_Streak_OD_False'
                      innerRef={register({ required: true })}
                      onChange={(e) => handleChangeComplaintFalseOd(e)}
                      invalid={errors.Rpl_Streak_OD_False && true}
                    >
                      <option value="" disabled={false}>--</option>
                      {
                        falses && falses.map((tdis, key) => {
                          return <option value={tdis} key={key}>{ tdis }</option>;
                        })
                      }
                      <option value="Lain-lain">Lain-Lain</option>
                    </Input>
                    {
                      complaintFalseOd && (
                        <FormGroup className="form-group" row>
                          <Label for="pediatric.Rpl_Streak_OD_False_Text" />
                          <Col>
                            <Input
                              id="pediatric.Rpl_Streak_OD_False_Text"
                              name="pediatric.Rpl_Streak_OD_False_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Rpl_Streak_OD_False_Text'] && true} />
                          </Col>
                          {errors && errors['pediatric.Rpl_Streak_OD_False_Text'] && <FormFeedback>{errors['pediatric.Rpl_Streak_OD_False_Text'].message}</FormFeedback>}
                        </FormGroup>
                      )
                    }
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup className='form-group'>
                    {/* <SelectInput name='pediatric.Rpl_Streak_OD_Pd_Jauh' label="PD Jauh" {...{ register, errors }}>
                      <option value="" disabled={false}>--</option> */}
                    <Label for='pediatric.Rpl_Streak_OD_Pd_Jauh' md={9} style={{ fontSize: '9pt' }}>PD Jauh</Label>
                    <Input
                      type='select'
                      id='pediatric.Rpl_Streak_OD_Pd_Jauh'
                      name='pediatric.Rpl_Streak_OD_Pd_Jauh'
                      innerRef={register({ required: true })}
                      onChange={(e) => handleChangeComplaintPdJauhOd(e)}
                      invalid={errors.Rpl_Streak_OD_Pd_Jauh && true}
                    >
                      <option value="" disabled={false}>--</option>
                      {
                        pd && pd.map((tdis, key) => {
                          return <option value={tdis} key={key}>{ tdis }</option>;
                        })
                      }
                      <option value="Lain-lain">Lain-Lain</option>
                    </Input>
                    {
                      complaintPdJauhOd && (
                        <FormGroup className="form-group" row>
                          <Label for="pediatric.Rpl_Streak_OD_Pd_Jauh_Text" />
                          <Col>
                            <Input
                              id="pediatric.Rpl_Streak_OD_Pd_Jauh_Text"
                              name="pediatric.Rpl_Streak_OD_Pd_Jauh_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Rpl_Streak_OD_Pd_Jauh_Text'] && true} />
                          </Col>
                          {errors && errors['pediatric.Rpl_Streak_OD_Pd_Jauh_Text'] && <FormFeedback>{errors['pediatric.Rpl_Streak_OD_Pd_Jauh_Text'].message}</FormFeedback>}
                        </FormGroup>
                      )
                    }
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup className='form-group'>
                    <Label for='pediatric.Rpl_Streak_OD_Adaptasi' md={9} style={{fontSize: '9pt'}}>Adaptasi</Label>
                    <Input
                      type='select'
                      id='pediatric.Rpl_Streak_OD_Adaptasi'
                      name='pediatric.Rpl_Streak_OD_Adaptasi'
                      innerRef={register({required: true})}
                      onChange={(e) => handleChangeComplaintAdaptasiOd(e)}
                      invalid={errors.Rpl_Streak_OD_Adaptasi && true}
                    >
                      <option value="" disabled={false}>--</option>
                      {
                        adaptasi && adaptasi.map((tdis, key) => {
                          return <option value={tdis} key={key}>{ tdis }</option>;
                        })
                      }
                      <option value="Lain-lain">Lain-Lain</option>
                    </Input>
                    {
                      complaintAdaptasiOd && (
                        <FormGroup className="form-group" row>
                          <Label for="pediatric.Rpl_Streak_OD_Adaptasi_Text" />
                          <Col>
                            <Input
                              id="pediatric.Rpl_Streak_OD_Adaptasi_Text"
                              name="pediatric.Rpl_Streak_OD_Adaptasi_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Rpl_Streak_OD_Adaptasi_Text'] && true} />
                          </Col>
                          {errors && errors['pediatric.Rpl_Streak_OD_Adaptasi_Text'] && <FormFeedback>{errors['pediatric.Rpl_Streak_OD_Adaptasi_Text'].message}</FormFeedback>}
                        </FormGroup>
                      )
                    }
                    {/* <SelectInput name='pediatric.Rpl_Streak_OD_Adaptasi' label="Adaptasi" {...{ register, errors }}>
                      <option value="" disabled={false}>--</option>
                      {
                        adaptasi && adaptasi.map((tdis, key) => {
                          return <option value={tdis} key={key}>{ tdis }</option>;
                        })
                      }
                    </SelectInput> */}
                  </FormGroup>
                </Col>
              </Row>
            </td>
            <td className='form-group'>
              <Row className='mb-2'>
                <Col>
                  <SphSelector name='pediatric.Rpl_Streak_OS_Streak_Sph' label='Sph RPL Streak OS' {...{ register, errors, setValue, getValues }} />
                </Col>
                <Col>
                  <CylSelector name='pediatric.Rpl_Streak_OS_Streak_Cyl' label='Cyl RPL Streak OS' {...{ register, errors, setValue, getValues }} />
                </Col>
                <Col>
                  <AxisSelector name='pediatric.Rpl_Streak_OS_Streak_Axis' label='Axis RPL Streak OS' {...{ register, errors, setValue, getValues }} />
                </Col>
                <Col className='form-group'>
                  <Label for='pediatric.Rpl_Streak_OS_Va' md={9} style={{ fontSize: '9pt' }}>Visus Akhir</Label>
                  <Input
                    type='select'
                    id='pediatric.Rpl_Streak_OS_Va'
                    name='pediatric.Rpl_Streak_OS_Va'
                    onChange={(e) => hanldleChangeComplaintVisusOs(e)}
                    innerRef={register({ required: true })}
                    invalid={errors.Rpl_Streak_OS_Va && true}
                  >
                    <option value="" disabled={false}>--</option>
                    {
                      visualAquilities && visualAquilities.map((tdis, key) => {
                        return <option value={tdis} key={key}>{ tdis }</option>;
                      })
                    }
                    <option value="Lain-lain">Lain-Lain</option>
                  </Input>
                  {
                    complaintVisusOS && (
                      <FormGroup className="form-group" row>
                        <Label for="pediatric.Rpl_Streak_OS_Va_Text" />
                        <Col>
                          <Input
                            id="pediatric.Rpl_Streak_OS_Va_Text"
                            name="pediatric.Rpl_Streak_OS_Va_Text"
                            innerRef={register({ required: true })}
                            invalid={errors['pediatric.Rpl_Streak_OS_Va_Text'] && true} />
                        </Col>
                        {errors && errors['pediatric.Rpl_Streak_OS_Va_Text'] && <FormFeedback>{errors['pediatric.Rpl_Streak_OS_Va_Text'].message}</FormFeedback>}
                      </FormGroup>
                    )
                  }
                </Col>
              </Row>
              <Row>
                <Col className='form-group'>
                  <FormGroup className='form-group'>
                    {/* <SelectInput name='pediatric.Rpl_Streak_OS_False' label="False" {...{ register, errors }}>
                      <option value="" disabled={false}>--</option>
                      {
                        falses && falses.map((tdis, key) => {
                          return <option value={tdis} key={key}>{ tdis }</option>;
                        })
                      }
                    </SelectInput> */}
                    <Label for='pediatric.Rpl_Streak_OS_False' md={9} style={{ fontSize: '9pt' }}>False</Label>
                    <Input
                      type='select'
                      id='pediatric.Rpl_Streak_OS_False'
                      name='pediatric.Rpl_Streak_OS_False'
                      onChange={(e) => handleChangeComplaintFalseOS(e)}
                      innerRef={register({ required: true })}
                      invalid={errors.Rpl_Streak_OS_False && true}
                    >
                      <option value="" disabled={false}>--</option>
                      {
                        falses && falses.map((tdis, key) => {
                          return <option value={tdis} key={key}>{ tdis }</option>;
                        })
                      }
                      <option value="Lain-lain">Lain-Lain</option>
                    </Input>
                    {
                      complaintFalseOS && (
                        <FormGroup className="form-group" row>
                          <Label for="pediatric.Rpl_Streak_OS_False_Text" />
                          <Col>
                            <Input
                              id="pediatric.Rpl_Streak_OS_False_Text"
                              name="pediatric.Rpl_Streak_OS_False_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Rpl_Streak_OS_False_Text'] && true} />
                          </Col>
                          {errors && errors['pediatric.Rpl_Streak_OS_False_Text'] && <FormFeedback>{errors['pediatric.Rpl_Streak_OS_False_Text'].message}</FormFeedback>}
                        </FormGroup>
                      )
                    }
                  </FormGroup>
                </Col>
                <Col className='form-group'>
                  <FormGroup className='form-group'>
                    <Label for='pediatric.Rpl_Streak_OS_Pd_Jauh' md={9} style={{ fontSize: '9pt' }}>Pd Jauh</Label>
                    <Input
                      type='select'
                      id='pediatric.Rpl_Streak_OS_Pd_Jauh'
                      name='pediatric.Rpl_Streak_OS_Pd_Jauh'
                      onChange={(e) => handleChangeComplaintPdJauhOs(e)}
                      innerRef={register({ required: true })}
                      invalid={errors.Rpl_Streak_OS_Pd_Jauh && true}
                    >
                      <option value="" disabled={false}>--</option>
                      {
                        pd && pd.map((tdis, key) => {
                          return <option value={tdis} key={key}>{ tdis }</option>;
                        })
                      }
                      <option value="Lain-lain">Lain-Lain</option>
                    </Input>
                    {
                      complaintPdJauhOS && (
                        <FormGroup className="form-group" row>
                          <Label for="pediatric.Rpl_Streak_OS_Pd_Jauh_Text" />
                          <Col>
                            <Input
                              id="pediatric.Rpl_Streak_OS_Pd_Jauh_Text"
                              name="pediatric.Rpl_Streak_OS_Pd_Jauh_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Rpl_Streak_OS_Pd_Jauh_Text'] && true} />
                          </Col>
                          {errors && errors['pediatric.Rpl_Streak_OS_Pd_Jauh_Text'] && <FormFeedback>{errors['pediatric.Rpl_Streak_OS_Pd_Jauh_Text'].message}</FormFeedback>}
                        </FormGroup>
                      )
                    }
                  </FormGroup>
                </Col>
                <Col className='form-group'>
                  <FormGroup className='form-group'>
                    <Label for='pediatric.Rpl_Streak_OS_Adaptasi' md={9} style={{fontSize: '9pt'}}>Adaptasi</Label>
                    <Input
                      type='select'
                      id='pediatric.Rpl_Streak_OS_Adaptasi'
                      name='pediatric.Rpl_Streak_OS_Adaptasi'
                      onChange={(e) => handleChangeComplaintAdaptasiOs(e)}
                      innerRef={register({required: true})}
                      invalid={errors.Rpl_Streak_OS_Adaptasi && true}
                    >
                      <option value="" disabled={false}>--</option>
                      {
                        adaptasi && adaptasi.map((tdis, key) => {
                          return <option value={tdis} key={key}>{tdis}</option>;
                        })
                      }
                      <option value="Lain-lain">Lain-Lain</option>
                    </Input>
                    {
                      complaintAdaptasiOs && (
                        <FormGroup className="form-group" row>
                          <Label for="pediatric.Rpl_Streak_OS_Adaptasi_Text" />
                          <Col>
                            <Input
                              id="pediatric.Rpl_Streak_OS_Adaptasi_Text"
                              name="pediatric.Rpl_Streak_OS_Adaptasi_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Rpl_Streak_OS_Adaptasi_Text'] && true} />
                          </Col>
                          {errors && errors['pediatric.Rpl_Streak_OS_Adaptasi_Text'] && <FormFeedback>{errors['pediatric.Rpl_Streak_OS_Adaptasi_Text'].message}</FormFeedback>}
                        </FormGroup>
                      )
                    }
                    {/* <SelectInput name='pediatric.Rpl_Streak_OS_Adaptasi' label="Adaptasi" {...{ register, errors }}>
                      <option value="" disabled={false}>--</option>
                      {
                        adaptasi && adaptasi.map((tdis, key) => {
                          return <option value={tdis} key={key}>{ tdis }</option>;
                        })
                      }
                    </SelectInput> */}
                  </FormGroup>
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <b>{`Ocular Motility`}</b>
            </td>
            <td style={{ padding: '0px', margin: '0px' }}>
              <Table borderless style={{ width: '100%', margin: 'auto' }}>
                <tr style={{ height: '50px' }}>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '200px', height: '50px', alignItems: 'center', justifyContent: 'center' }} className='p-0' colSpan={2}>
                    <Row style={{width:'150px'}}>
                      <Input
                        type="select"
                        id="pediatric.Cover_OD_Cover_1"
                        name="pediatric.Cover_OD_Cover_1"
                        innerRef={register({ required: true })}
                        onChange={(e) => handleChangeOcularOd1(e)}
                        invalid={errors.Cover_OD_Cover_1 && true}>
                        <option value="" disabled={false}>--</option>
                        {
                          coverUncover && coverUncover.map((item, key) => {
                            return <option value={item} key={key}>{ item }</option>;
                          })
                        }
                        <option value="Lain-lain">Lain-Lain</option>
                      </Input>
                      {
                        complaintOcularOd1 && (
                          <FormGroup className="form-group p-0" row>
                            <Label for="pediatric.Cover_OD_Cover_Text_1" />
                            <Col>
                              <Input
                                id="pediatric.Cover_OD_Cover_Text_1"
                                name="pediatric.Cover_OD_Cover_Text_1"
                                innerRef={register({ required: true })}
                                style={{width:'85px'}}
                                invalid={errors['pediatric.Cover_OD_Cover_Text_1'] && true} />
                            </Col>
                            {errors && errors['pediatric.Cover_OD_Cover_Text_1'] && <FormFeedback>{errors['pediatric.Cover_OD_Cover_Text_1'].message}</FormFeedback>}
                          </FormGroup>
                        )
                      }
                    </Row>
                  </td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '200px', height: '50px', alignItems: 'center', justifyContent: 'center' }} className='p-0' colSpan={2}>
                    <Row style={{width:'150px'}}>
                      <Input
                        type="select"
                        id="pediatric.Cover_OD_Cover_2"
                        name="pediatric.Cover_OD_Cover_2"
                        innerRef={register({ required: true })}
                        onChange={(e) => handleChangeOcularOd2(e)}
                        invalid={errors.Cover_OD_Cover_2 && true}>
                        <option value="" disabled={false}>--</option>
                        {
                          coverUncover && coverUncover.map((item, key) => {
                            return <option value={item} key={key}>{ item }</option>;
                          })
                        }
                        <option value="Lain-lain">Lain-Lain</option>
                      </Input>
                      {
                        complaintOcularOd2 && (
                          <FormGroup className="form-group p-0" row>
                            <Label for="pediatric.Cover_OD_Cover_Text_2" />
                            <Col>
                              <Input
                                id="pediatric.Cover_OD_Cover_Text_2"
                                name="pediatric.Cover_OD_Cover_Text_2"
                                innerRef={register({ required: true })}
                                style={{width:'85px'}}
                                invalid={errors['pediatric.Cover_OD_Cover_Text_2'] && true} />
                            </Col>
                            {errors && errors['pediatric.Cover_OD_Cover_Text_2'] && <FormFeedback>{errors['pediatric.Cover_OD_Cover_Text_2'].message}</FormFeedback>}
                          </FormGroup>
                        )
                      }
                    </Row>
                  </td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                </tr>
                <tr>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderLeft: '2px solid'}}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderLeft: '2px solid'}}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                </tr>
                <tr>
                  <td style={{ width: '100px', height: '50px', alignItems: 'center', justifyContent: 'center' }} rowSpan={2}>
                    <Row style={{width:'150px'}}>
                      <Input
                        type="select"
                        id="pediatric.Cover_OD_Cover_4"
                        name="pediatric.Cover_OD_Cover_4"
                        innerRef={register({ required: true })}
                        onChange={(e) => handleChangeOcularOd4(e)}
                        invalid={errors.Cover_OD_Cover_4 && true}>
                        <option value="" disabled={false}>--</option>
                        {
                          coverUncover && coverUncover.map((item, key) => {
                            return <option value={item} key={key}>{ item }</option>;
                          })
                        }
                        <option value="Lain-lain">Lain-Lain</option>
                      </Input>
                      {
                        complaintOcularOd4 && (
                          <FormGroup className="form-group p-0" row>
                            <Label for="pediatric.Cover_OD_Cover_Text_4" />
                            <Col>
                              <Input
                                id="pediatric.Cover_OD_Cover_Text_4"
                                name="pediatric.Cover_OD_Cover_Text_4"
                                innerRef={register({ required: true })}
                                style={{width:'85px'}}
                                invalid={errors['pediatric.Cover_OD_Cover_Text_4'] && true} />
                            </Col>
                            {errors && errors['pediatric.Cover_OD_Cover_Text_4'] && <FormFeedback>{errors['pediatric.Cover_OD_Cover_Text_4'].message}</FormFeedback>}
                          </FormGroup>
                        )
                      }
                    </Row>
                  </td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderLeft: '2px solid'}}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderLeft: '2px solid'}}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '100px', height: '50px', alignItems: 'center', justifyContent: 'center' }} rowSpan={2}>
                    <Row style={{width:'150px'}}>
                      <Input
                        type="select"
                        id="pediatric.Cover_OD_Cover_3"
                        name="pediatric.Cover_OD_Cover_3"
                        innerRef={register({ required: true })}
                        onChange={(e) => handleChangeOcularOd3(e)}
                        invalid={errors.Cover_OD_Cover_3 && true}>
                        <option value="" disabled={false}>--</option>
                        {
                          coverUncover && coverUncover.map((item, key) => {
                            return <option value={item} key={key}>{ item }</option>;
                          })
                        }
                        <option value="Lain-lain">Lain-Lain</option>
                      </Input>
                      {
                        complaintOcularOd3 && (
                          <FormGroup className="form-group p-0" row>
                            <Label for="pediatric.Cover_OD_Cover_Text_3" />
                            <Col>
                              <Input
                                id="pediatric.Cover_OD_Cover_Text_3"
                                name="pediatric.Cover_OD_Cover_Text_3"
                                innerRef={register({ required: true })}
                                style={{width:'85px'}}
                                invalid={errors['pediatric.Cover_OD_Cover_Text_3'] && true} />
                            </Col>
                            {errors && errors['pediatric.Cover_OD_Cover_Text_3'] && <FormFeedback>{errors['pediatric.Cover_OD_Cover_Text_3'].message}</FormFeedback>}
                          </FormGroup>
                        )
                      }
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid', borderLeft: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid', borderLeft: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid' }}>&nbsp;</td>
                </tr>
                <tr>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderLeft: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderLeft: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                </tr>
                <tr>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '85px', height: '50px' }} colSpan={2}>
                    <Row style={{width:'150px'}}>
                      <Input
                        type="select"
                        id="pediatric.Cover_OD_Cover_5"
                        name="pediatric.Cover_OD_Cover_5"
                        innerRef={register({ required: true })}
                        onChange={(e) => handleChangeOcularOd5(e)}
                        invalid={errors.Cover_OD_Cover_5 && true}>
                        <option value="" disabled={false}>--</option>
                        {
                          coverUncover && coverUncover.map((item, key) => {
                            return <option value={item} key={key}>{ item }</option>;
                          })
                        }
                        <option value="Lain-lain">Lain-Lain</option>
                      </Input>
                      {
                        complaintOcularOd5 && (
                          <FormGroup className="form-group p-0" row>
                            <Label for="pediatric.Cover_OD_Cover_Text_5" />
                            <Col>
                              <Input
                                id="pediatric.Cover_OD_Cover_Text_5"
                                name="pediatric.Cover_OD_Cover_Text_5"
                                innerRef={register({ required: true })}
                                style={{width:'85px'}}
                                invalid={errors['pediatric.Cover_OD_Cover_Text_5'] && true} />
                            </Col>
                            {errors && errors['pediatric.Cover_OD_Cover_Text_5'] && <FormFeedback>{errors['pediatric.Cover_OD_Cover_Text_5'].message}</FormFeedback>}
                          </FormGroup>
                        )
                      }
                    </Row>
                  </td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }} colSpan={2}>
                    <Row style={{width:'150px'}}>
                      <Input
                        type="select"
                        id="pediatric.Cover_OD_Cover_6"
                        name="pediatric.Cover_OD_Cover_6"
                        innerRef={register({ required: true })}
                        onChange={(e) => handleChangeOcularOd6(e)}
                        invalid={errors.Cover_OD_Cover_6 && true}>
                        <option value="" disabled={false}>--</option>
                        {
                          coverUncover && coverUncover.map((item, key) => {
                            return <option value={item} key={key}>{ item }</option>;
                          })
                        }
                        <option value="Lain-lain">Lain-Lain</option>
                      </Input>
                      {
                        complaintOcularOd6 && (
                          <FormGroup className="form-group p-0" row>
                            <Label for="pediatric.Cover_OD_Cover_Text_6" />
                            <Col>
                              <Input
                                id="pediatric.Cover_OD_Cover_Text_6"
                                name="pediatric.Cover_OD_Cover_Text_6"
                                innerRef={register({ required: true })}
                                style={{width:'85px'}}
                                invalid={errors['pediatric.Cover_OD_Cover_Text_6'] && true} />
                            </Col>
                            {errors && errors['pediatric.Cover_OD_Cover_Text_6'] && <FormFeedback>{errors['pediatric.Cover_OD_Cover_Text_6'].message}</FormFeedback>}
                          </FormGroup>
                        )
                      }
                    </Row>
                  </td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                </tr>
              </Table>
            </td>
            <td style={{ padding: '0px', margin: '0px' }}>
              <Table borderless style={{ width: '100%', margin: 'auto' }}>
                <tr style={{ height: '50px' }}>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '200px', height: '50px', alignItems: 'center', justifyContent: 'center' }} colSpan={2}>
                    <Row style={{width:'150px'}}>
                      <Input
                        type="select"
                        id="pediatric.Cover_OS_Cover_1"
                        name="pediatric.Cover_OS_Cover_1"
                        innerRef={register({ required: true })}
                        onChange={(e) => handleChangeOcularOs1(e)}
                        invalid={errors.Cover_OS_Cover_1 && true}>
                        <option value="" disabled={false}>--</option>
                        {
                          coverUncover && coverUncover.map((item, key) => {
                            return <option value={item} key={key}>{ item }</option>;
                          })
                        }
                        <option value="Lain-lain">Lain-Lain</option>
                      </Input>
                      {
                        complaintOcularOs1 && (
                          <FormGroup className="form-group p-0" row>
                            <Label for="pediatric.Cover_OS_Cover_Text_1" />
                            <Col>
                              <Input
                                id="pediatric.Cover_OS_Cover_Text_1"
                                name="pediatric.Cover_OS_Cover_Text_1"
                                innerRef={register({ required: true })}
                                style={{width:'85px'}}
                                invalid={errors['pediatric.Cover_OS_Cover_Text_1'] && true} />
                            </Col>
                            {errors && errors['pediatric.Cover_OS_Cover_Text_1'] && <FormFeedback>{errors['pediatric.Cover_OS_Cover_Text_1'].message}</FormFeedback>}
                          </FormGroup>
                        )
                      }
                    </Row>
                  </td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '200px', height: '50px', alignItems: 'center', justifyContent: 'center' }} colSpan={2}>
                    <Row style={{width:'150px'}}>
                      <Input
                        type="select"
                        id="pediatric.Cover_OS_Cover_2"
                        name="pediatric.Cover_OS_Cover_2"
                        innerRef={register({ required: true })}
                        onChange={(e) => handleChangeOcularOs2(e)}
                        invalid={errors.Cover_OS_Cover_2 && true}>
                        <option value="" disabled={false}>--</option>
                        {
                          coverUncover && coverUncover.map((item, key) => {
                            return <option value={item} key={key}>{ item }</option>;
                          })
                        }
                        <option value="Lain-lain">Lain-Lain</option>
                      </Input>
                      {
                        complaintOcularOs2 && (
                          <FormGroup className="form-group p-0" row>
                            <Label for="pediatric.Cover_OS_Cover_Text_2" />
                            <Col>
                              <Input
                                id="pediatric.Cover_OS_Cover_Text_2"
                                name="pediatric.Cover_OS_Cover_Text_2"
                                innerRef={register({ required: true })}
                                style={{width:'85px'}}
                                invalid={errors['pediatric.Cover_OS_Cover_Text_2'] && true} />
                            </Col>
                            {errors && errors['pediatric.Cover_OS_Cover_Text_2'] && <FormFeedback>{errors['pediatric.Cover_OS_Cover_Text_2'].message}</FormFeedback>}
                          </FormGroup>
                        )
                      }
                    </Row>
                  </td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                </tr>
                <tr>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderLeft: '2px solid'}}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderLeft: '2px solid'}}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                </tr>
                <tr>
                  <td style={{ width: '100px', height: '50px', alignItems: 'center', justifyContent: 'center' }} rowSpan={2}>
                    <Row style={{width:'150px'}}>
                      <Input
                        type="select"
                        id="pediatric.Cover_OS_Cover_4"
                        name="pediatric.Cover_OS_Cover_4"
                        innerRef={register({ required: true })}
                        onChange={(e) => handleChangeOcularOs4(e)}
                        invalid={errors.Cover_OS_Cover_4 && true}>
                        <option value="" disabled={false}>--</option>
                        {
                          coverUncover && coverUncover.map((item, key) => {
                            return <option value={item} key={key}>{ item }</option>;
                          })
                        }
                        <option value="Lain-lain">Lain-Lain</option>
                      </Input>
                      {
                        complaintOcularOs4 && (
                          <FormGroup className="form-group p-0" row>
                            <Label for="pediatric.Cover_OS_Cover_Text_4" />
                            <Col>
                              <Input
                                id="pediatric.Cover_OS_Cover_Text_4"
                                name="pediatric.Cover_OS_Cover_Text_4"
                                innerRef={register({ required: true })}
                                style={{width:'85px'}}
                                invalid={errors['pediatric.Cover_OS_Cover_Text_4'] && true} />
                            </Col>
                            {errors && errors['pediatric.Cover_OS_Cover_Text_4'] && <FormFeedback>{errors['pediatric.Cover_OS_Cover_Text_4'].message}</FormFeedback>}
                          </FormGroup>
                        )
                      }
                    </Row>
                  </td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderLeft: '2px solid'}}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderLeft: '2px solid'}}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '100px', height: '50px', alignItems: 'center', justifyContent: 'center' }} rowSpan={2}>
                    <Row style={{width:'150px'}}>
                      <Input
                        type="select"
                        id="pediatric.Cover_OS_Cover_3"
                        name="pediatric.Cover_OS_Cover_3"
                        innerRef={register({ required: true })}
                        onChange={(e) => handleChangeOcularOs3(e)}
                        invalid={errors.Cover_OS_Cover_3 && true}>
                        <option value="" disabled={false}>--</option>
                        {
                          coverUncover && coverUncover.map((item, key) => {
                            return <option value={item} key={key}>{ item }</option>;
                          })
                        }
                        <option value="Lain-lain">Lain-Lain</option>
                      </Input>
                      {
                        complaintOcularOs3 && (
                          <FormGroup className="form-group p-0" row>
                            <Label for="pediatric.Cover_OS_Cover_Text_3" />
                            <Col>
                              <Input
                                id="pediatric.Cover_OS_Cover_Text_3"
                                name="pediatric.Cover_OS_Cover_Text_3"
                                innerRef={register({ required: true })}
                                style={{width:'85px'}}
                                invalid={errors['pediatric.Cover_OS_Cover_Text_3'] && true} />
                            </Col>
                            {errors && errors['pediatric.Cover_OS_Cover_Text_3'] && <FormFeedback>{errors['pediatric.Cover_OS_Cover_Text_3'].message}</FormFeedback>}
                          </FormGroup>
                        )
                      }
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid', borderLeft: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid', borderLeft: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid' }}>&nbsp;</td>
                </tr>
                <tr>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderLeft: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderLeft: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                </tr>
                <tr>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '85px', height: '50px' }} colSpan={2}>
                    <Row style={{width:'150px'}}>
                      <Input
                        type="select"
                        id="pediatric.Cover_OS_Cover_5"
                        name="pediatric.Cover_OS_Cover_5"
                        innerRef={register({ required: true })}
                        onChange={(e) => handleChangeOcularOs5(e)}
                        invalid={errors.Cover_OS_Cover_5 && true}>
                        <option value="" disabled={false}>--</option>
                        {
                          coverUncover && coverUncover.map((item, key) => {
                            return <option value={item} key={key}>{ item }</option>;
                          })
                        }
                        <option value="Lain-lain">Lain-Lain</option>
                      </Input>
                      {
                        complaintOcularOs5 && (
                          <FormGroup className="form-group p-0" row>
                            <Label for="pediatric.Cover_OS_Cover_Text_5" />
                            <Col>
                              <Input
                                id="pediatric.Cover_OS_Cover_Text_5"
                                name="pediatric.Cover_OS_Cover_Text_5"
                                innerRef={register({ required: true })}
                                style={{width:'85px'}}
                                invalid={errors['pediatric.Cover_OS_Cover_Text_5'] && true} />
                            </Col>
                            {errors && errors['pediatric.Cover_OS_Cover_Text_5'] && <FormFeedback>{errors['pediatric.Cover_OS_Cover_Text_5'].message}</FormFeedback>}
                          </FormGroup>
                        )
                      }
                    </Row>
                  </td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }} colSpan={2}>
                    <Row style={{width:'150px'}}>
                      <Input
                        type="select"
                        id="pediatric.Cover_OS_Cover_6"
                        name="pediatric.Cover_OS_Cover_6"
                        innerRef={register({ required: true })}
                        onChange={(e) => handleChangeOcularOs6(e)}
                        invalid={errors.Cover_OS_Cover_6 && true}>
                        <option value="" disabled={false}>--</option>
                        {
                          coverUncover && coverUncover.map((item, key) => {
                            return <option value={item} key={key}>{ item }</option>;
                          })
                        }
                        <option value="Lain-lain">Lain-Lain</option>
                      </Input>
                      {
                        complaintOcularOs6 && (
                          <FormGroup className="form-group p-0" row>
                            <Label for="pediatric.Cover_OS_Cover_Text_6" />
                            <Col>
                              <Input
                                id="pediatric.Cover_OS_Cover_Text_6"
                                name="pediatric.Cover_OS_Cover_Text_6"
                                innerRef={register({ required: true })}
                                style={{width:'85px'}}
                                invalid={errors['pediatric.Cover_OS_Cover_Text_6'] && true} />
                            </Col>
                            {errors && errors['pediatric.Cover_OS_Cover_Text_6'] && <FormFeedback>{errors['pediatric.Cover_OS_Cover_Text_6'].message}</FormFeedback>}
                          </FormGroup>
                        )
                      }
                    </Row>
                  </td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                </tr>
              </Table>
            </td>
          </tr>
          <tr>
            <td colSpan={3} className='fs-5'>
              <b>Cover - Uncover</b>
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>
              <b>Ortho</b>
            </td>
            <td>
              <FormGroup row className='form-group'>
                <Col md='3'>
                  <Label>Without glasses</Label>
                </Col>
                <Col md='2'>
                  <Input
                    type='checkbox'
                    name='pediatric.Cover_Uncover_OD_Ortho_Without_Check'
                    onChange={(e) => handleCheckboxChange(e)}
                    defaultChecked={!!(data && data.Cover_Uncover_OD_Ortho_Without_Check && data.Cover_Uncover_OD_Ortho_Without_Check === '1')}
                    innerRef={register('pediatric.Cover_Uncover_OD_Ortho_Without_Check') as any}
                  />
                </Col>
              </FormGroup>
            </td>
            <td>
              <FormGroup row className='form-group'>
                <Col md='2'>
                  <Input
                    type='checkbox'
                    name='pediatric.Cover_Uncover_OS_Ortho_Without_Check'
                    onChange={(e) => handleCheckboxChange(e)}
                    defaultChecked={!!(data && data.Cover_Uncover_OS_Ortho_Without_Check && data.Cover_Uncover_OS_Ortho_Without_Check === '1')}
                    innerRef={register('pediatric.Cover_Uncover_OS_Ortho_Without_Check') as any}
                  />
                </Col>
              </FormGroup>
            </td>
          </tr>
          <tr>
            <td>
              <FormGroup row className='form-group'>
                <Col md='3'>
                  <Label>With glasses</Label>
                </Col>
                <Col md='2'>
                  <Input
                    type='checkbox'
                    name='pediatric.Cover_Uncover_OD_Ortho_With_Check'
                    onChange={(e) => handleCheckboxChange(e)}
                    defaultChecked={!!(data && data.Cover_Uncover_OD_Ortho_With_Check && data.Cover_Uncover_OD_Ortho_With_Check === '1')}
                    innerRef={register('pediatric.Cover_Uncover_OD_Ortho_With_Check') as any}
                  />
                </Col>
              </FormGroup>
            </td>
            <td>
              <FormGroup row className='form-group'>
                <Col md='2'>
                  <Input
                    type='checkbox'
                    name='pediatric.Cover_Uncover_OS_Ortho_With_Check'
                    onChange={(e) => handleCheckboxChange(e)}
                    defaultChecked={!!(data && data.Cover_Uncover_OS_Ortho_With_Check && data.Cover_Uncover_OS_Ortho_With_Check === '1')}
                    innerRef={register('pediatric.Cover_Uncover_OS_Ortho_With_Check') as any}
                  />
                </Col>
              </FormGroup>
            </td>
          </tr>
          <tr>
            <td rowSpan={4}>
              <b>Prisma</b>
            </td>
            <td>
              <FormGroup className='form-group' row>
                <Col md='3'>
                  <Label>Without Glasses</Label>
                </Col>
                <Col>
                  <Label>- Near</Label>
                  <Row>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OD_Prisma_Without_Xt_Near'
                        label='XT'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism1 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OD_Prisma_Without_Xt_Near_Lain_Text"
                              name="pediatric.Prisma_OD_Prisma_Without_Xt_Near_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OD_Prisma_Without_Xt_Near_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OD_Prisma_Without_Et_Near'
                        label='ET'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism2 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OD_Prisma_Without_Et_Near_Lain_Text"
                              name="pediatric.Prisma_OD_Prisma_Without_Et_Near_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OD_Prisma_Without_Et_Near_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OD_Prisma_Without_Hi_Near'
                        label='HI'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism3 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OD_Prisma_Without_Hi_Near_Lain_Text"
                              name="pediatric.Prisma_OD_Prisma_Without_Hi_Near_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OD_Prisma_Without_Hi_Near_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OD_Prisma_Without_Ho_Near'
                        label='HO'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism4 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OD_Prisma_Without_Ho_Near_Lain_Text"
                              name="pediatric.Prisma_OD_Prisma_Without_Ho_Near_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OD_Prisma_Without_Ho_Near_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                  </Row>
                </Col>
              </FormGroup>
            </td>
            <td>
              <FormGroup className='form-group' row>
                <Col md='3'></Col>
                <Col>
                  <Label>- Near</Label>
                  <Row>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OS_Prisma_Without_Xt_Near'
                        label='XT'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism5 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OS_Prisma_Without_Xt_Near_Lain_Text"
                              name="pediatric.Prisma_OS_Prisma_Without_Xt_Near_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OS_Prisma_Without_Xt_Near_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OS_Prisma_Without_Et_Near'
                        label='ET'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism6 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OS_Prisma_Without_Et_Near_Lain_Text"
                              name="pediatric.Prisma_OS_Prisma_Without_Et_Near_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OS_Prisma_Without_Et_Near_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OS_Prisma_Without_Hi_Near'
                        label='HI'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism7 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OS_Prisma_Without_Hi_Near_Lain_Text"
                              name="pediatric.Prisma_OS_Prisma_Without_Hi_Near_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OS_Prisma_Without_Hi_Near_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OS_Prisma_Without_Ho_Near'
                        label='HO'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism8 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OS_Prisma_Without_Ho_Near_Lain_Text"
                              name="pediatric.Prisma_OS_Prisma_Without_Ho_Near_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OS_Prisma_Without_Ho_Near_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                  </Row>
                </Col>
              </FormGroup>
            </td>
          </tr>
          <tr>
            <td>
              <FormGroup className='form-group' row>
                <Col md='3'></Col>
                <Col>
                  <Label>- Distance</Label>
                  <Row>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OD_Prisma_Without_Xt_Distance'
                        label='XT'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism9 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OD_Prisma_Without_Xt_Distance_Lain_Text"
                              name="pediatric.Prisma_OD_Prisma_Without_Xt_Distance_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OD_Prisma_Without_Xt_Distance_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OD_Prisma_Without_Et_Distance'
                        label='ET'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism10 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OD_Prisma_Without_Et_Distance_Lain_Text"
                              name="pediatric.Prisma_OD_Prisma_Without_Et_Distance_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OD_Prisma_Without_Et_Distance_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OD_Prisma_Without_Hi_Distance'
                        label='HI'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism11 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OD_Prisma_Without_Hi_Distance_Lain_Text"
                              name="pediatric.Prisma_OD_Prisma_Without_Hi_Distance_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OD_Prisma_Without_Hi_Distance_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OD_Prisma_Without_Ho_Distance'
                        label='HO'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism12 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OD_Prisma_Without_Ho_Distance_Lain_Text"
                              name="pediatric.Prisma_OD_Prisma_Without_Ho_Distance_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OD_Prisma_Without_Ho_Distance_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                  </Row>
                </Col>
              </FormGroup>
            </td>
            <td>
              <FormGroup className='form-group' row>
                <Col md='3'></Col>
                <Col>
                  <Label>- Distance</Label>
                  <Row>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OS_Prisma_Without_Xt_Distance'
                        label='XT'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism13 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OS_Prisma_Without_Xt_Distance_Lain_Text"
                              name="pediatric.Prisma_OS_Prisma_Without_Xt_Distance_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OS_Prisma_Without_Xt_Distance_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OS_Prisma_Without_Et_Distance'
                        label='ET'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism14 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OS_Prisma_Without_Et_Distance_Lain_Text"
                              name="pediatric.Prisma_OS_Prisma_Without_Et_Distance_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OS_Prisma_Without_Et_Distance_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OS_Prisma_Without_Hi_Distance'
                        label='HI'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism15 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OS_Prisma_Without_Hi_Distance_Lain_Text"
                              name="pediatric.Prisma_OS_Prisma_Without_Hi_Distance_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OS_Prisma_Without_Hi_Distance_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OS_Prisma_Without_Ho_Distance'
                        label='HO'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism16 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OS_Prisma_Without_Ho_Distance_Lain_Text"
                              name="pediatric.Prisma_OS_Prisma_Without_Ho_Distance_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OS_Prisma_Without_Ho_Distance_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                  </Row>
                </Col>
              </FormGroup>
            </td>
          </tr>
          <tr>
            <td>
              <FormGroup className='form-group' row>
                <Col md='3'>
                  <Label>With Glasses</Label>
                </Col>
                <Col>
                  <Label>- Near</Label>
                  <Row>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OD_Prisma_With_Xt_Near'
                        label='XT'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism17 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OD_Prisma_With_Xt_Near_Lain_Text"
                              name="pediatric.Prisma_OD_Prisma_With_Xt_Near_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OD_Prisma_With_Xt_Near_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OD_Prisma_With_Et_Near'
                        label='ET'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism18 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OD_Prisma_With_Et_Near_Lain_Text"
                              name="pediatric.Prisma_OD_Prisma_With_Et_Near_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OD_Prisma_With_Et_Near_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OD_Prisma_With_Hi_Near'
                        label='HI'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism19 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OD_Prisma_With_Hi_Near_Lain_Text"
                              name="pediatric.Prisma_OD_Prisma_With_Hi_Near_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OD_Prisma_With_Hi_Near_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OD_Prisma_With_Ho_Near'
                        label='HO'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism20 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OD_Prisma_With_Ho_Near_Lain_Text"
                              name="pediatric.Prisma_OD_Prisma_With_Ho_Near_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OD_Prisma_With_Ho_Near_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                  </Row>
                </Col>
              </FormGroup>
            </td>
            <td>
              <FormGroup className='form-group' row>
                <Col md='3'></Col>
                <Col>
                  <Label>- Near</Label>
                  <Row>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OS_Prisma_With_Xt_Near'
                        label='XT'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism21 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OS_Prisma_With_Xt_Near_Lain_Text"
                              name="pediatric.Prisma_OS_Prisma_With_Xt_Near_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OS_Prisma_With_Xt_Near_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OS_Prisma_With_Et_Near'
                        label='ET'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism22 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OS_Prisma_With_Et_Near_Lain_Text"
                              name="pediatric.Prisma_OS_Prisma_With_Et_Near_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OS_Prisma_With_Et_Near_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OS_Prisma_With_Hi_Near'
                        label='HI'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism23 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OS_Prisma_With_Hi_Near_Lain_Text"
                              name="pediatric.Prisma_OS_Prisma_With_Hi_Near_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OS_Prisma_With_Hi_Near_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OS_Prisma_With_Ho_Near'
                        label='HO'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism24 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OS_Prisma_With_Ho_Near_Lain_Text"
                              name="pediatric.Prisma_OS_Prisma_With_Ho_Near_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OS_Prisma_With_Ho_Near_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                  </Row>
                </Col>
              </FormGroup>
            </td>
          </tr>
          <tr>
            <td>
              <FormGroup className='form-group' row>
                <Col md='3'></Col>
                <Col>
                  <Label>- Distance</Label>
                  <Row>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OD_Prisma_With_Xt_Distance'
                        label='XT'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism25 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OD_Prisma_With_Xt_Distance_Lain_Text"
                              name="pediatric.Prisma_OD_Prisma_With_Xt_Distance_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OD_Prisma_With_Xt_Distance_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OD_Prisma_With_Et_Distance'
                        label='ET'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism26 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OD_Prisma_With_Et_Distance_Lain_Text"
                              name="pediatric.Prisma_OD_Prisma_With_Et_Distance_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OD_Prisma_With_Et_Distance_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OD_Prisma_With_Hi_Distance'
                        label='HI'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism27 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OD_Prisma_With_Hi_Distance_Lain_Text"
                              name="pediatric.Prisma_OD_Prisma_With_Hi_Distance_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OD_Prisma_With_Hi_Distance_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OD_Prisma_With_Ho_Distance'
                        label='HO'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism28 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OD_Prisma_With_Ho_Distance_Lain_Text"
                              name="pediatric.Prisma_OD_Prisma_With_Ho_Distance_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OD_Prisma_With_Ho_Distance_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                  </Row>
                </Col>
              </FormGroup>
            </td>
            <td>
              <FormGroup className='form-group' row>
                <Col md='3'></Col>
                <Col>
                  <Label>- Distance</Label>
                  <Row>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OS_Prisma_With_Xt_Distance'
                        label='XT'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism29 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OS_Prisma_With_Xt_Distance_Lain_Text"
                              name="pediatric.Prisma_OS_Prisma_With_Xt_Distance_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OS_Prisma_With_Xt_Distance_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OS_Prisma_With_Et_Distance'
                        label='ET'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism30 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OS_Prisma_With_Et_Distance_Lain_Text"
                              name="pediatric.Prisma_OS_Prisma_With_Et_Distance_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OS_Prisma_With_Et_Distance_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OS_Prisma_With_Hi_Distance'
                        label='HI'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism31 && (
                          <Col>
                            <Input
                              id="pediatric.Prisma_OS_Prisma_With_Hi_Distance_Lain_Text"
                              name="pediatric.Prisma_OS_Prisma_With_Hi_Distance_Lain_Text"
                              innerRef={register({ required: true })}
                              invalid={errors['pediatric.Prisma_OS_Prisma_With_Hi_Distance_Lain_Text'] && true} />
                          </Col>
                        )
                      }
                    </Col>
                    <Col>
                      <SelectInput
                        name='pediatric.Prisma_OS_Prisma_With_Ho_Distance'
                        label='HO'
                        onChange={(e: any) => handleChangePrism(e)}
                        {...{ register, errors }}>
                        <option value="" disabled={false}>--</option>
                        {
                          prism && prism.map((tdis, key) => {
                            return <option value={tdis} key={key}>{ tdis }</option>;
                          })
                        }
                      </SelectInput>
                      {
                        prism32 && (
                          <FormGroup className="form-group p-0" row>
                            <Label for="pediatric.Prisma_OS_Prisma_With_Ho_Distance_Lain_Text" />
                            <Col>
                              <Input
                                id="pediatric.Prisma_OS_Prisma_With_Ho_Distance_Lain_Text"
                                name="pediatric.Prisma_OS_Prisma_With_Ho_Distance_Lain_Text"
                                innerRef={register({ required: true })}
                                invalid={errors['pediatric.Prisma_OS_Prisma_With_Ho_Distance_Lain_Text'] && true} />
                            </Col>
                          </FormGroup>
                        )
                      }
                    </Col>
                  </Row>
                </Col>
              </FormGroup>
            </td>
          </tr>
          <tr>
            <td><b>Randot Stereoskopis</b></td>
            <td>
              <Table borderless style={{ width: '100%' }}>
                <tr>
                  <td style={{ textAlign: 'left', height: '30px' }}><b>Circles</b></td>
                  <td style={{ paddingBottom: '20px' }}>
                    <SelectInput style={{ width: '80px', marginTop: 'auto' }} name='pediatric.Randot_OD_Circles' {...{ register, errors }}>
                      <option value="" disabled={false}>--</option>
                      {
                        randotCircles && randotCircles.map((tdis, key) => {
                          return <option value={tdis} key={key}>{ tdis }</option>;
                        })
                      }
                    </SelectInput>
                  </td>
                  <td>Sec of Arc</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'left', height: '30px' }}><b>Randot Form</b></td>
                  <td style={{ paddingBottom: '20px' }}>
                    <SelectInput style={{ marginTop: 'auto' }} name='pediatric.Randot_OD_Randot_Form' {...{ register, errors }}>
                      <option value="" disabled={false}>--</option>
                      {
                        randotForm && randotForm.map((tdis, key) => {
                          return <option value={tdis} key={key}>{ tdis }</option>;
                        })
                      }
                    </SelectInput>
                  </td>
                  <td>Sec of Arc</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'left', width: '160px', height: '30px', paddingBottom: '2px' }}><b>Animal</b></td>
                  <td style={{ paddingBottom: '20px' }}>
                    <SelectInput style={{ marginTop: 'auto' }} name='pediatric.Randot_OD_Animal' {...{ register, errors }}>
                      <option value="" disabled={false}>--</option>
                      {
                        randotAnimal && randotAnimal.map((tdis, key) => {
                          return <option value={tdis} key={key}>{ tdis }</option>;
                        })
                      }
                    </SelectInput>
                  </td>
                  <td>Sec of Arc</td>
                </tr>
              </Table>
            </td>
            <td>
              <Table borderless style={{ width: '100%' }}>
                <tr>
                  <td style={{ textAlign: 'left', height: '30px' }}><b>Circles</b></td>
                  <td style={{ paddingBottom: '20px' }}>
                    <SelectInput style={{ width: '80px', marginTop: 'auto' }} name='pediatric.Randot_OS_Circles' {...{ register, errors }}>
                      <option value="" disabled={false}>--</option>
                      {
                        randotCircles && randotCircles.map((tdis, key) => {
                          return <option value={tdis} key={key}>{ tdis }</option>;
                        })
                      }
                    </SelectInput>
                  </td>
                  <td>Sec of Arc</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'left', height: '30px' }}><b>Randot Form</b></td>
                  <td style={{ paddingBottom: '20px' }}>
                    <SelectInput style={{ marginTop: 'auto' }} name='pediatric.Randot_OS_Randot_Form' {...{ register, errors }}>
                      <option value="" disabled={false}>--</option>
                      {
                        randotForm && randotForm.map((tdis, key) => {
                          return <option value={tdis} key={key}>{ tdis }</option>;
                        })
                      }
                    </SelectInput>
                  </td>
                  <td>Sec of Arc</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'left', width: '160px', height: '30px', paddingBottom: '2px' }}><b>Animal</b></td>
                  <td style={{ paddingBottom: '20px' }}>
                    <SelectInput style={{ marginTop: 'auto' }} name='pediatric.Randot_OS_Animal' {...{ register, errors }}>
                      <option value="" disabled={false}>--</option>
                      {
                        randotAnimal && randotAnimal.map((tdis, key) => {
                          return <option value={tdis} key={key}>{ tdis }</option>;
                        })
                      }
                    </SelectInput>
                  </td>
                  <td>Sec of Arc</td>
                </tr>
              </Table>
            </td>
          </tr>
          <tr>
            <td><b>OKN Drum</b></td>
            <td colSpan={2}>
              <TextInput
                name='pediatric.Okn_ODS_Okn'
                {...{ register, errors }}
              />
            </td>
          </tr>
          <tr>
            <td><b>RAF Ruler</b></td>
            <td colSpan={2} >
              <Row className='align-items-center'>
                <Col md='11'>
                  <SelectInput style={{ marginTop: 'auto' }} name='pediatric.Raf_ODS_Raf' {...{ register, errors }}>
                    <option value="" disabled={false}>--</option>
                    {
                      rafRuler && rafRuler.map((tdis, key) => {
                        return <option value={tdis} key={key}>{ tdis }</option>;
                      })
                    }
                  </SelectInput>
                </Col>
                <Col>
                  CM
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td><b>TNO stereoskopis</b></td>
            <td colSpan={2} >
              <Table borderless style={{ width: '100%' }}>
                <tr>
                  <td style={{  width: '3%' }} ><b>I</b></td>
                  <td style={{  width: '97%' }}>
                    <TextInput
                      name='pediatric.TNO_Stereoskopis_ODS_1'
                      {...{ register, errors }}
                    />
                  </td>
                </tr>
                <tr>
                  <td ><b>II</b></td>
                  <td >
                    <TextInput
                      name='pediatric.TNO_Stereoskopis_ODS_2'
                      {...{ register, errors }}
                    />
                  </td>
                </tr>
                <tr>
                  <td ><b>III</b></td>
                  <td >
                    <TextInput
                      name='pediatric.TNO_Stereoskopis_ODS_3'
                      {...{ register, errors }}
                    />
                  </td>
                </tr>
                <tr>
                  <td ><b>IV</b></td>
                  <td >
                    <TextInput
                      name='pediatric.TNO_Stereoskopis_ODS_4'
                      {...{ register, errors }}
                    />
                  </td>
                </tr>
                <tr>
                  <td ><b>V</b></td>
                  <td >
                    <TextInput
                      name='pediatric.TNO_Stereoskopis_ODS_5'
                      {...{ register, errors }}
                    />
                  </td>
                </tr>
              </Table>
            </td>
          </tr>
          <tr>
            <td><b>Goniometer</b></td>
            <td colSpan={2} >
              <TextInput
                name='pediatric.Goniometer_ODS_Goniometer'
                {...{ register, errors }}
              />
              <Input
                type='checkbox'
                name='pediatric.Goniometer_ODS_Right_Check'
                onChange={(e) => handleCheckboxChange(e)}
                defaultChecked={!!(data && data.Goniometer_ODS_Right_Check && data.Goniometer_ODS_Right_Check === '1')}
                innerRef={register('pediatric.Goniometer_ODS_Right_Check') as any}
              /><b>Right   </b>

              <Input
                type='checkbox'
                name='pediatric.Goniometer_ODS_Left_Check'
                onChange={(e) => handleCheckboxChange(e)}
                defaultChecked={!!(data && data.Goniometer_ODS_Left_Check && data.Goniometer_ODS_Left_Check === '1')}
                innerRef={register('pediatric.Goniometer_ODS_Left_Check') as any}
              /><b>Left</b>
            </td>
          </tr>

          {/*
          <tr>
            <td><b>Goniometer</b></td>
            <td>
              <GonioMeterSelector name='pediatric.Goniometer_OD_Goniometer' {...{ register, errors, setValue, getValues }} />
            </td>
            <td>
              <GonioMeterSelector name='pediatric.Goniometer_OS_Goniometer' {...{ register, errors, setValue, getValues }} />
            </td>
          </tr>

          <tr>
            <td><b>Hes Green</b></td>
            <td>
              <TextInput
                name='pediatric.Hes_OD_Hes'
                {...{ register, errors }}
              />
            </td>
            <td>
              <TextInput
                name='pediatric.Hes_OS_Hes'
                {...{ register, errors }}
              />
            </td>
        </tr> */}
          <tr>
            <td><b>Near Vision</b></td>
            <td>
              {/* <TextInput
                name='pediatric.Nearvision_OD_Nearvision'
                {...{ register, errors }}
              /> */}
              <Input
                type="select"
                id="pediatric.Nearvision_OD_Select"
                name="pediatric.Nearvision_OD_Select"
                innerRef={register({ required: true })}
                onChange={(e) => handleChangeComplaintOd(e)}
                invalid={errors['pediatric.Nearvision_OD_Select'] && true}>
                <option value="" disabled={false}>--</option>
                {
                  nearvision && nearvision.map((nearvision, key) => {
                    return <option value={nearvision} key={key}>{ nearvision }</option>;
                  })
                }
                <option value="Lain-lain">Lain-lain</option>
              </Input>
              {
                complaintNearvisionOd && (
                  <FormGroup className="form-group" row>
                    <Label for="pediatric.Nearvision_OD_Nearvision" />
                    <Col>
                      <Input
                        id="pediatric.Nearvision_OD_Nearvision"
                        name="pediatric.Nearvision_OD_Nearvision"
                        innerRef={register({ required: true })}
                        invalid={errors['pediatric.Nearvision_OD_Nearvision'] && true} />
                    </Col>
                    {errors && errors['pediatric.Nearvision_OD_Nearvision'] && <FormFeedback>{errors['pediatric.Nearvision_OD_Nearvision'].message}</FormFeedback>}
                  </FormGroup>
                )
              }
            </td>
            <td>
              {/* <TextInput
                name='pediatric.Nearvision_OS_Nearvision'
                {...{ register, errors }}
              /> */}
              <Input
                type="select"
                id="pediatric.Nearvision_OS_Select"
                name="pediatric.Nearvision_OS_Select"
                innerRef={register({ required: true })}
                onChange={(e) => handleChangeComplaintOs(e)}
                invalid={errors['pediatric.Nearvision_OS_Select'] && true}>
                <option value="" disabled={false}>--</option>
                {
                  nearvision && nearvision.map((nearvision, key) => {
                    return <option value={nearvision} key={key}>{ nearvision }</option>;
                  })
                }
                <option value="Lain-lain">Lain-lain</option>
              </Input>
              {
                complaintNearvisionOs && (
                  <FormGroup className="form-group" row>
                    <Label for="pediatric.Nearvision_OS_Nearvision" />
                    <Col>
                      <Input
                        id="pediatric.Nearvision_OS_Nearvision"
                        name="pediatric.Nearvision_OS_Nearvision"
                        innerRef={register({ required: true })}
                        invalid={errors['pediatric.Nearvision_OS_Nearvision'] && true} />
                    </Col>
                    {errors && errors['pediatric.Nearvision_OS_Nearvision'] && <FormFeedback>{errors['pediatric.Nearvision_OS_Nearvision'].message}</FormFeedback>}
                  </FormGroup>
                )
              }
            </td>
          </tr>

          <tr>
            <td><b>Ptosis FIP</b></td>
            <td>
              <SelectInput style={{ marginTop: 'auto' }} name='pediatric.Ptosis_OD_FIP' {...{ register, errors }}>
                <option value="" disabled={false}>--</option>
                {
                  ptosisFip && ptosisFip.map((tdis, key) => {
                    return <option value={tdis} key={key}>{ tdis }</option>;
                  })
                }
              </SelectInput>
            </td>
            <td>
              <SelectInput style={{ marginTop: 'auto' }} name='pediatric.Ptosis_OS_FIP' {...{ register, errors }}>
                <option value="" disabled={false}>--</option>
                {
                  ptosisFip && ptosisFip.map((tdis, key) => {
                    return <option value={tdis} key={key}>{ tdis }</option>;
                  })
                }
              </SelectInput>
            </td>
          </tr>
          <tr>
            <td><b>Ptosis MRD</b></td>
            <td>
              <SelectInput style={{ marginTop: 'auto' }} name='pediatric.Ptosis_OD_MRD' {...{ register, errors }}>
                <option value="" disabled={false}>--</option>
                {
                  ptosisMrd && ptosisMrd.map((tdis, key) => {
                    return <option value={tdis} key={key}>{ tdis }</option>;
                  })
                }
              </SelectInput>
            </td>
            <td>
              <SelectInput style={{ marginTop: 'auto' }} name='pediatric.Ptosis_OS_MRD' {...{ register, errors }}>
                <option value="" disabled={false}>--</option>
                {
                  ptosisMrd && ptosisMrd.map((tdis, key) => {
                    return <option value={tdis} key={key}>{ tdis }</option>;
                  })
                }
              </SelectInput>
            </td>
          </tr>
          <tr>
            <td><b>Ptosis LA</b></td>
            <td>
              <SelectInput style={{ marginTop: 'auto' }} name='pediatric.Ptosis_OD_LA' {...{ register, errors }}>
                <option value="" disabled={false}>--</option>
                {
                  ptosisLa && ptosisLa.map((tdis, key) => {
                    return <option value={tdis} key={key}>{ tdis }</option>;
                  })
                }
              </SelectInput>
            </td>
            <td>
              <SelectInput style={{ marginTop: 'auto' }} name='pediatric.Ptosis_OS_LA' {...{ register, errors }}>
                <option value="" disabled={false}>--</option>
                {
                  ptosisLa && ptosisLa.map((tdis, key) => {
                    return <option value={tdis} key={key}>{ tdis }</option>;
                  })
                }
              </SelectInput>
            </td>
          </tr>

          <tr>
            <td></td>
            <td>
              <Button style={{ padding: '6px' }} color='danger' type='button' onClick={handleButtonHide}>
                <Minus size={15} />
                <span className="align-middle" style={{ fontSize: '8pt' }}>Hide Pemeriksaan Pediatrik Ophthalmology</span>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default PediatricForm;
