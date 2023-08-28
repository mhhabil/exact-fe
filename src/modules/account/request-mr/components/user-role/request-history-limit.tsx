import * as yup from 'yup';
import { Form, Input, Row } from 'reactstrap';
import { BaseRecordRequest } from '@modules/account/request-mr/requests';
import { handleFilterRequest } from '@modules/account/request-mr/stores/request-mr.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

const limits = [10, 25, 50, 100];

const RequestHistoryLimit = () => {

  const { filterRequests } = useAppSelector(state => state.requestMr);
  const dispatch = useAppDispatch();

  const { register, errors } = useForm({
    mode: 'onChange',
    resolver: yupResolver(yup.object().shape({
      limit: yup.number(),
    })),
    defaultValues: {
      limit: (filterRequests && filterRequests.limit) ? filterRequests.limit : '',
    },
  });

  const handleChangeLimit = (e: any) => {
    dispatch(handleFilterRequest(BaseRecordRequest.createFromJson({ ...filterRequests, limit: e.target.value, offset: 0 })));
  }

  return (
    <Form className="mb-1">
      <Row>
        <div className="ml-1 d-flex align-items-center">
          Show
          <Input
            className="w-6rem mx-1"
            type="select"
            id="limit"
            name="limit"
            innerRef={register({ required: true })}
            invalid={errors.limit && true}
            onChange={(e) => handleChangeLimit(e)}>
            {
              limits && limits.map((limit, key) => {
                return <option key={key} value={limit}>{ limit }</option>
              })
            }
          </Input>
          entries
        </div>
      </Row>
    </Form>
  )
}

export default RequestHistoryLimit;
