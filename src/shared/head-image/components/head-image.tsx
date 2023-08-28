import { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const HeadImageModal = dynamic(() => import('./head-image-modal'), { ssr: false });

const HeadImage = (props: { onSaved: any, initialImage?: string, formName: string, component: string }) => {

  const { onSaved, initialImage = '/assets/default/head.jpg', formName, component } = props;

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
          <Image className="img-thumbnail" src={getImage()} height="500rem" width="500rem" objectFit="contain" />
        </div>
      </div>
      <HeadImageModal
        image={image}
        isOpen={isOpen}
        formName={formName}
        component={component}
        onClose={() => setIsOpen(false)}
        title="Gambar Kepala"
        onImageSubmit={(image: string) => handleSaved(image)} />
    </>
  );
}

export default HeadImage;
