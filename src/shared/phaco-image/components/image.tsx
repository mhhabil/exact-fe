import { Image, Layer } from "react-konva";
import getConfig from 'next/config';
import useImage from "use-image";

const BaseImage = (props: { image: string, width: any, height: any, x: any, y: any }) => {
  const { image, width, height, x, y } = props;
  const { publicRuntimeConfig } = getConfig();

  const getUrl = () => {
    if (image && !image.includes('http')) {
      return image;
    } else {
      const url = `${publicRuntimeConfig.env.baseUrl}/api/image/view?urlImage=${encodeURIComponent(image)}`
      return url;
    }
  }
  const [pics] = useImage(getUrl(), 'anonymous')

  return (
    <Image image={pics} width={width} height={height} x={x} y={y}/>
  )
}

export default BaseImage;
