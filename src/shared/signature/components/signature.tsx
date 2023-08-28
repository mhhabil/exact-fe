import { useEffect, useState } from 'react';
import Image from 'next/image';
import { SignatureModel } from '@shared/signature/models/signature.model';
import dynamic from 'next/dynamic';
import { useAppSelector } from '@hooks/useAppSelector';

const SignatureDrawer = dynamic(() => import('./signature-drawer'), { ssr: false });
const SignaturePicker = dynamic(() => import('./signature-picker'), { ssr: false });

const Signature = (props: {
  label: string,
  type?: string,
  onSigned: any,
  persons?: Array<any>,
  initialImage?: string,
  additionalLabel?: string,
  formName?: string,
  component?: string,
  pickerTitle?: string,
  disabled?: boolean,
  defaultPerson?: string,
  unit?: string,
  id?: string,
}) => {

  const {
    label,
    type = 'drawer',
    onSigned,
    persons = [],
    initialImage = '/assets/default/ttd.png',
    additionalLabel,
    formName,
    component,
    pickerTitle = 'Petugas',
    disabled = false,
    defaultPerson,
    unit,
    id,
  } = props;

  const { officers } = useAppSelector(state => state.officer);

  const [image, setImage] = useState<string | SignatureModel>(initialImage);
  const [addLabel, setAddLabel] = useState(additionalLabel);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setImage(initialImage);
  }, [initialImage]);

  useEffect(() => {
    if (typeof image === 'object') {
      if (officers && Array.isArray(officers)) {
        const officer = officers.find(o => o.ID_Karyawan === image.ID_Karyawan);
        if (officer) {
          setAddLabel(officer.Nama);
        } else {
          setAddLabel(undefined)
        }
      }
    }
  }, [image]);

  const handleSigned = (image: string | SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setImage(image);
      onSigned(image, isFormDoctor);
    }
    if (!isFormDoctor) {
      setImage(image);
      onSigned(image);
    }
  }

  const getImage = () => {
    if (typeof image === 'string' || typeof image === 'undefined') {
      return image;
    } else {
      return (image.Signature !== '') ? image.Signature : '/assets/default/ttd.png';
    }
  }

  if (!image) {
    return null;
  }
  return (
    <>
      <div onClick={() => setIsOpen(true)} id={id} className="d-flex flex-column align-items-center">
        <div className="border-1 border-dark rounded-3 p-1 mb-1">
          <Image className="img-thumbnail" src={getImage()} height="150rem" width="150rem" objectFit="contain" />
        </div>
        <div className="d-flex justify-content-center fw-bolder">
          { label }
          {
            addLabel && <>: {addLabel}</>
          }
        </div>
      </div>
      {
        type && (type === 'drawer') && !disabled && (
          <SignatureDrawer
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title="Pasien"
            formName={formName}
            component={component}
            onImageSubmit={(image: string) => handleSigned(image)} />
        )
      }
      {
        type && (type === 'picker') && !disabled && (
          <SignaturePicker
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title={pickerTitle}
            persons={persons}
            defaultPerson={defaultPerson}
            unit={unit}
            onPicked={(assigner: SignatureModel, isFormDoctor?: boolean) => handleSigned(assigner, isFormDoctor)} />
        )
      }
    </>
  );
}

export default Signature;
