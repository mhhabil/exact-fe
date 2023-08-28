import { useEffect, useState } from 'react';
import Image from 'next/image';
import { SignatureModel } from '@shared/signature/models/signature.model';
import dynamic from 'next/dynamic';

const SignatureDrawer = dynamic(() => import('./signature-drawer'), { ssr: false });

const SignaturePin = (props: { label: string, onSigned: any, persons?: Array<any>, initialImage?: string, additionalLabel?: string, formName?: string, component?: string }) => {

  const { label, onSigned, initialImage = '/assets/default/ttd.png', formName, component } = props;

  const [image, setImage] = useState<string | SignatureModel>(initialImage);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setImage(initialImage);
  }, [initialImage]);

  const handleSigned = (image: string | SignatureModel) => {
    setImage(image);
    onSigned(image);
  }

  const getImage = () => {
    if (typeof image === 'string' || typeof image === 'undefined') {
      return image;
    } else {
      return (image.Signature !== '') ? image.Signature : '/assets/default/ttd.png';
    }
  }

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="d-flex flex-column align-items-center">
        <div className="border-1 border-dark rounded-3 p-1 mb-1">
          <Image className="img-thumbnail" src={getImage()} height="150rem" width="150rem" objectFit="contain" />
        </div>
        <div className="d-flex justify-content-center">
          { label }
        </div>
      </div>
      <SignatureDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="PIN TTD"
        formName={formName}
        component={component}
        onImageSubmit={(image: string) => handleSigned(image)} />
    </>
  );
}

export default SignaturePin;
