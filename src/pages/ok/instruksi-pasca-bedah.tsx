import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { fetchPostoperativeInstructions } from '@src/modules/operating-room/Postoperative Instructions/stores/postoperative-instructions.store';
import { AppRequest } from '@src/shared/request';
import { useEffect } from 'react';
import PostoperativeInstructionsForm from '@src/modules/operating-room/Postoperative Instructions/components/postoperative-intructions-form';

const PostoperativeInstructions = () => {

  const {treatment} = useAppSelector(state => state.patient);
  const {postoperativeInstructions} = useAppSelector(state => state.postoperativeInstructionsStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchPostoperativeInstructions(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to='read' a='EMR.KamarBedah'>
      <Card>
        <CardHeader>
          <PageTitleLabel>Instruksi Pasca Bedah Rajal</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm='12' md='12' xxl='12' className='mb-1'>
              {/* <PostoperativeInstructionsForm /> */}
              {
                postoperativeInstructions && postoperativeInstructions.EMR_ID === treatment?.EMR_ID && (
                  <PostoperativeInstructionsForm data={postoperativeInstructions}/>
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  )
}

export default PostoperativeInstructions;
