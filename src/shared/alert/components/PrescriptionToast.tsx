import { Fragment } from "react";

const PrescriptionToast = (props: { message: string, error: boolean }) => {
  const { message, error } = props;

  return (
    <Fragment>
      <div className='toastify-header'>
        <div className='title-wrapper'>
          <h6 className='toast-title font-weight-bold, ms-0' style={{fontSize:'21px'}}>{error ? 'Resep Gagal Terkirim' : 'Resep Berhasil Terkirim'}</h6>
        </div>
      </div>
      <div className='toastify-body, ms-0'>
        <span style={{fontSize:'18px'}}>{message}</span>
      </div>
    </Fragment>
  )
};

export default PrescriptionToast;
