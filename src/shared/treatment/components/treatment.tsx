import { TreatmentService } from '@shared/treatment';
import { handleTreatment } from '@modules/site/patient-list/stores/patient.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useEffect } from 'react';

const Treatment = (props: { children: any }) => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    const treatment = TreatmentService().get();
    dispatch(handleTreatment(treatment));
  }, []);

  return (
    <>
      {props.children}
    </>
  );

}

export default Treatment;
