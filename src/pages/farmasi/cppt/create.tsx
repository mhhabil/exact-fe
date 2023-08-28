import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AuthorizedPage } from '@shared/guardian';
import CpptRoForm from '@modules/ro/cppt/components/cppt-ro-form';
import { PageTitleLabel } from '@shared/label';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@hooks/useAppSelector';
import { fetchPreliminaryStudy } from '@modules/ro/preliminary-study/stores/preliminary-study.store';
import { AppRequest } from '@shared/request';
import { useAppDispatch } from '@hooks/useAppDispatch';
import getConfig from 'next/config';
import { fetchCpptRoPdf } from '@modules/ro/cppt/stores/cppt-ro.store';
import { FindPdfRequest } from '@shared/pdf';
import AES from 'crypto-js/aes';

const CreateCpptFarmasi = () => {

  const [isShow, setIsShow] = useState(true);
  const { treatment } = useAppSelector(state => state.patient);
  const { preliminaryStudy } = useAppSelector(state => state.preliminaryStudy);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchPreliminaryStudy(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  const { pdf } = useAppSelector(state => state.cpptRo);
  const [pdfData, setPdfData] = useState<string | undefined>(undefined);
  const { publicRuntimeConfig } = getConfig();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchCpptRoPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'common_cppt' })));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
    }
    // if (pdf && pdf.Sort_Path && publicRuntimeConfig.env.secretKey) {
    //   let url = AES.encrypt(pdf.Sort_Path, publicRuntimeConfig.env.secretKey).toString();
    //   url = url.replace(/\+/g, 'pluss');
    //   setPdfData(url);
    // }
  }, [pdf])

  return (
    <AuthorizedPage to="read" a="EMR.Farmasi">
      {/*<PatientIdentityInfo />*/}
      <Card>
        <CardHeader>
          <PageTitleLabel>Tambah Catatan Perkembangan Pasien Terintegrasi (CPPT)</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col>
              <div className="d-flex justify-content-end mb-1">
                <Button color="secondary" type="button" onClick={() => setIsShow(!isShow)}>Toggle PDF</Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="mb-1">
              {
                preliminaryStudy && treatment && (treatment.No_MR === preliminaryStudy.nomor_mr) && <CpptRoForm preliminaryStudy={preliminaryStudy} />
              }
            </Col>
            {
              isShow && (
                <Col sm="12" md="5" xxl="5" className="mb-1">
                  {

                    pdfData && publicRuntimeConfig.env && (
                      <iframe name="pdf_iframe" src={`${publicRuntimeConfig.env.baseUrl}/api/pdf/view?idCetak=${pdfData}`} width="100%" height="800px" />
                    )
                  }
                </Col>
              )
            }
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  )
}

export default CreateCpptFarmasi;
