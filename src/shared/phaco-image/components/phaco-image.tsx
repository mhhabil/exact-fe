import { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const PhacoImageModal = dynamic(() => import('./phaco-image-modal'), { ssr: false });

const PhacoImage = (props: { onSaved: any, initialImage?: string, formName: string, component: string }) => {

  const { onSaved, initialImage = '/assets/default/phaco-clean.jpg', formName, component } = props;

  const [image, setImage] = useState<string>(initialImage);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setImage(initialImage);
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
      <PhacoImageModal
        image={image}
        isOpen={isOpen}
        formName={formName}
        component={component}
        onClose={() => setIsOpen(false)}
        title="Phaco"
        onImageSubmit={(image: string) => handleSaved(image)} />
    </>
  );
}

export default PhacoImage;
