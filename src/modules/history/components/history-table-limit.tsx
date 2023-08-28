import * as yup from 'yup';
import { Form, Input, Row } from 'reactstrap';
import { HistoryRequest } from '@modules/history/requests';
import { handleFilter } from '@modules/history/stores/history.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

const limits = [10, 25, 50, 100];

const HistoryTableLimit = () => {

  const { filter } = useAppSelector(state => state.histories);
  const dispatch = useAppDispatch();

  const { register, errors } = useForm({
    mode: 'onChange',
    resolver: yupResolver(yup.object().shape({
      limit: yup.number(),
    })),
    defaultValues: {
      limit: (filter && filter.limit) ? filter.limit : '',
    },
  });

  const handleChangeLimit = (e: any) => {
    dispatch(handleFilter(HistoryRequest.createFromJson({ ...filter, limit: e.target.value, offset: 0 })));
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

export default HistoryTableLimit;
