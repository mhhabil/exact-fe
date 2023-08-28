import { Image, Layer } from "react-konva";
import getConfig from 'next/config';
import useImage from "use-image";

const StarImage = (props: { image: string, width: any, height: any, x: any, y: any }) => {
  const { image, width, height, x, y } = props;
  const [pics] = useImage(image)

  return (
    <Image image={pics} width={width} height={height} x={x} y={y}/>
  )
}

export default StarImage;
