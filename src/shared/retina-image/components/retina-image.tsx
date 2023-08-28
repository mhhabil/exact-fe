import { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const RetinaImageModal = dynamic(() => import('./retina-image-modal'), { ssr: false });

const RetinaImage = (props: { onSaved: any, initialImage?: string, type: string, formName: string, component: string }) => {

  const { onSaved, initialImage, type, formName, component } = props;

  const initImage = (!initialImage && type && type === 'right') ? '/assets/default/retina-right.jpg' : '/assets/default/retina-left.jpg'

  const [image, setImage] = useState<string>((initialImage && initialImage !== '') ? initialImage : initImage);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (initialImage) {
      setImage((initialImage && initialImage !== '') ? initialImage : initImage);
    }
  }, [initialImage]);

  const handleSaved = (image: string) => {
    setImage(image);
    onSaved(image);
  }

  const getImage = () => {
    if (typeof image === 'string' || typeof image === 'undefined') {
      return image;
    } else {
      return '';
    }
  }

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="d-flex flex-column align-items-center">
        <div className="border-1 border-dark rounded-3 p-1 mb-1">
          <Image className="img-thumbnail" src={getImage()} height="300rem" width="300rem" objectFit="contain" />
        </div>
      </div>
      <RetinaImageModal
        type={type}
        image={image}
        isOpen={isOpen}
        formName={formName}
        component={component}
        onClose={() => setIsOpen(false)}
        title="Retina"
        onImageSubmit={(image: string) => handleSaved(image)} />
    </>
  );
}

export default RetinaImage;
