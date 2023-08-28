import { Image, Layer } from "react-konva";
import useImage from "use-image";

const ChecklistImage = (props: { image: string, width: any, height: any, x: any, y: any }) => {
  const { image, width, height, x, y } = props;
  const [pics] = useImage(image)

  return (
    <Image image={pics} width={width} height={height} x={x} y={y}/>
  )
}

export default ChecklistImage;
