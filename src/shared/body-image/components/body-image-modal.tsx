import { Button, Col, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { Circle, Ellipse, Layer, Line, Stage, Text, Transformer } from 'react-konva';
import { CornerUpLeft, RefreshCw, Save, X } from 'react-feather';
import { useEffect, useRef, useState } from 'react';
import BaseImage from './image';
import ChecklistImage from '@src/shared/eye-image/components/checklist-image';
import Compressor from 'compressorjs';
import { IconButton } from '@src/shared/button';
import StarImage from '@src/shared/eye-image/components/star-image';
import { UploadToCloudService } from '@src/shared/upload-cloud-storage/services';
import { useAppSelector } from '@hooks/useAppSelector';

const BodyImageModal = (props: { isOpen: boolean, onClose: any, title: string, onImageSubmit: any, image: any, formName: string, component: string }) => {

  const { image, isOpen, title, onClose, onImageSubmit, formName, component } = props;

  const { treatment } = useAppSelector(state => state.patient);

  const [drawer, setDrawer] = useState<string>('1')
  const [lines, setLines] = useState<any>([]);
  const [ellipse, setEllipse] = useState<any>([]);
  const [textX, setTextX] = useState<any>(0);
  const [textY, setTextY] = useState<any>(0);
  const [visible, setVisible] = useState<boolean | undefined>(false);
  const [text, setText] = useState<any>([]);
  const [textArea, setTextArea] = useState<string>('');
  const [stars, setStars] = useState<any>([]);
  const [checklist, setChecklist] = useState<any>([]);
  const [step, setStep] = useState<any>([]);
  const [pic, setPic] = useState<any>(image);
  const [dots, setDots] = useState<any>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [color, setColor] = useState<string>('#000000')
  const starWidth = 250;
  const starHeight = 225;
  const checklistWidth = 60;
  const checklistHeight = 60;

  const ref = useRef<any>(null);

  useEffect(() => {
    if (visible) {
      setVisible(false);
    }
    setIsDrawing(false);
  }, [drawer])

  useEffect(() => {
    if (isOpen) {
      setWidth(1380);
      setHeight(1380);
    }
    if (!isOpen) {
      setWidth(0);
      setHeight(0);
    }
  }, [isOpen])

  useEffect(() => {
    if (image) {
      setPic(image);
    }
  }, [image])

  const handleMouseDown = (e: any) => {
    setIsDrawing(true);
    if (drawer === '1') {
      const pos = e.target.getStage().getPointerPosition();
      setLines([...lines, { tool: 'pen', points: [pos.x, pos.y], color }])
    } else if (drawer === '2') {
      const pos = e.target.getStage().getPointerPosition();
      setEllipse([...ellipse, { tool: 'pen', pointX: pos.x, pointY: pos.y, radiusX: 0, radiusY: 0, color }])
    } else if (drawer === '3') {
      if (textArea && textArea !== '') {
        step.push(3);
        setText([...text, { value: textArea, pointX: textX, pointY: textY, color }]);
        setTextArea('');
      }
      const pos = e.target.getStage().getPointerPosition();
      setTextX(pos.x);
      setTextY(pos.y);
      setVisible(true);
    } else if (drawer === '4') {
      step.push(4);
      const pos = e.target.getStage().getPointerPosition();
      setStars([...stars, { imgX: pos.x, imgY: pos.y }]);
    } else if (drawer === '5') {
      step.push(5);
      const pos = e.target.getStage().getPointerPosition();
      setDots([...dots, { dotX: pos.x, dotY: pos.y, color }]);
    } else {
      step.push(6);
      const pos = e.target.getStage().getPointerPosition();
      setChecklist([...checklist, { imgX: pos.x, imgY: pos.y }]);
    }
  }

  const handleMouseUp = () => {
    if (drawer === '1') {
      step.push(1)
    } else if (drawer === '2') {
      step.push(2)
    }
    setIsDrawing(false);
  }

  const handleMouseMove = (e: any) => {
    if (!isDrawing) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    if (isDrawing && drawer && drawer === '1') {
      const lastLine = lines[lines.length - 1];
      lastLine.points = lastLine.points.concat([point.x, point.y]);

      lines.splice(lines.length - 1, 1, lastLine);
      setLines(lines.concat());
    } else if (isDrawing && drawer && drawer === '2') {
      const lastEllipse = ellipse[ellipse.length - 1];
      const newRadiusX = Math.abs(point.x - lastEllipse.pointX) / 2;
      const newRadiusY = Math.abs(point.y - lastEllipse.pointY) / 2;

      lastEllipse.radiusX = newRadiusX;
      lastEllipse.radiusY = newRadiusY;

      ellipse.splice(ellipse.length - 1, 1, lastEllipse);
      setEllipse(ellipse.concat());
    }
  }

  const handleReset = () => {
    setStep([]);
    setLines([]);
    setEllipse([]);
    setText([]);
    setStars([]);
    setDots([]);
    setChecklist([]);
    if (visible) {
      setVisible(false);
    }
    setPic('/assets/default/body.png');
  }

  const handleTextEdit = (e: any) => {
    setIsDrawing(true);
    setTextArea(e.target.value);
  }

  const handleChangeColor = (e: any) => {
    setColor(e.target.value);
  }

  const handleTextareaKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      step.push(3);
      setText([...text, { value: textArea, pointX: textX, pointY: textY, color }]);
      setTextArea('');
      setVisible(false);
      setTextX(0);
      setTextY(0);
      setIsDrawing(false);
    }
  }

  const handleCancel = () => {
    onClose();
  }

  const handleChangeDrawer = (e: any) => {
    setDrawer(e.target.value);
  }

  const base64toFile = (dataUrl: string, fileName: string) => {
    const base64data = dataUrl.replace('data:image/png;base64,', '');
    const bs = atob(base64data);
    const buffer = new ArrayBuffer(bs.length);
    const ba = new Uint8Array(buffer);
    for (let i = 0; i < bs.length; i += 1) {
      ba[i] = bs.charCodeAt(i);
    }
    const file = new File([ba], fileName, { type: 'image/png' });
    return file;
  }

  const handleSubmit = () => {
    if (!treatment) return;
    if (ref && ref.current) {
      const file = base64toFile(ref.current.toDataURL(), '');
      new Compressor(file, {
        mimeType: 'image/jpeg',
        async success(res) {
          const newBase64 = new Promise((resolve: any, reject: any) => {
            const reader = new FileReader();
            reader.readAsDataURL(res);
            reader.onload = () => resolve(reader.result);
            reader.onerror = err => reject(err);
          });
          const base64String = await newBase64
          UploadToCloudService().uploadImageCloud({
            emr_id: treatment.EMR_ID,
            component_id: component,
            form_name: formName,
            image: base64String,
          }).then(response => {
            const { data } = response.data;
            onImageSubmit(data.signUrl);
            onClose();
          });
        },
        error(err) {
          console.log(err);
        },
      });
    }
    setLines([]);
    setEllipse([]);
    setText([]);
    setStars([]);
    setChecklist([]);
    setDots([]);
    setWidth(0);
    setHeight(0);
  }

  const handleUndo = () => {
    if (step && step.length > 0 && step[step.length - 1] === 1) {
      const count = lines.length;
      const lastLayer = lines.slice(0, count - 1);
      setLines(lastLayer);

      const cutStep = step.slice(0, step.length - 1);
      setStep(cutStep);
    } else if (step && step.length > 0 && step[step.length - 1] === 2) {
      const count = ellipse.length;
      const lastLayer = ellipse.slice(0, count - 1);
      setEllipse(lastLayer);

      const cutStep = step.slice(0, step.length - 1);
      setStep(cutStep);
    } else if (step && step.length > 0 && step[step.length - 1] === 3) {
      const count = text.length;
      const lastLayer = text.slice(0, count - 1);
      setText(lastLayer);

      const cutStep = step.slice(0, step.length - 1);
      setStep(cutStep);
    } else if (step && step.length > 0 && step[step.length - 1] === 4) {
      const count = stars.length;
      const lastLayer = stars.slice(0, count - 1);
      setStars(lastLayer);

      const cutStep = step.slice(0, step.length - 1);
      setStep(cutStep);
    } else if (step && step.length > 0 && step[step.length - 1] === 5) {
      const count = dots.length;
      const lastLayer = dots.slice(0, count - 1);
      setDots(lastLayer);

      const cutStep = step.slice(0, step.length - 1);
      setStep(cutStep);
    } else if (step && step.length > 0 && step[step.length - 1] === 6) {
      const count = checklist.length;
      const lastLayer = checklist.slice(0, count - 1);
      setChecklist(lastLayer);

      const cutStep = step.slice(0, step.length - 1);
      setStep(cutStep);
    }
  }

  const handleClickOutside = () => {
    if (drawer && drawer === '3' && visible && textArea && textArea !== '') {
      step.push(3);
      setText([...text, { value: textArea, pointX: textX, pointY: textY, color }]);
      setTextArea('');
      setVisible(false)
    } else {
      setVisible(false);
    }
  }

  const getDrawerWidth = () => {
    if (typeof window === 'undefined') {
      return 0;
    }
    const fullWidth = window.innerWidth;
    if (fullWidth >= 1440) {
      return (75 / 100) * fullWidth;
    }
    if (fullWidth >= 768) {
      return (66 / 100) * fullWidth;
    }
    return fullWidth;
  }

  const getDrawerHeight = () => {
    if (typeof window === 'undefined') {
      return 0;
    }
    return window.innerHeight + (getDrawerWidth() / 3);
  }

  return (
    <Modal isOpen={isOpen} className="modal-dialog modal-fullscreen">
      <ModalHeader toggle={() => onClose()}>{ title }</ModalHeader>
      <ModalBody>
        <Row>
          <Col sm="12" md="8" xxl="9" className="overflow-hidden panel order-sm-1 order-md-0">
            <div className="signature-canvas">
              <Stage
                ref={ref}
                className="bg-white rounded-2 border-1 border-dark"
                width={getDrawerWidth()}
                height={getDrawerHeight()}
                onTouchStart={handleMouseDown}
                onTouchEnd={handleMouseUp}
                onTouchMove={handleMouseMove}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}>
                <Layer width={getDrawerWidth()} height={getDrawerHeight()}>
                  <BaseImage image={pic} width={getDrawerWidth()} height={getDrawerHeight()} x={0} y={0}/>
                  {
                    (drawer === '1' || lines.length > 0) && lines.map((line: any, i: number) => (
                      <Line
                        key={i}
                        points={line.points}
                        stroke={line.color}
                        strokeWidth={5}
                        tension={0.5}
                        lineCap="round"
                        globalCompositeOperation={
                          line.tool === 'eraser' ? 'destination-out' : 'source-over'
                        }
                      />
                    ),
                    )}
                  {
                    (drawer === '2' || ellipse.length > 0) && ellipse.map((shape: any, i: number) => (
                      <Ellipse
                        key={i}
                        x={shape.pointX}
                        y={shape.pointY}
                        radiusX={shape.radiusX}
                        radiusY={shape.radiusY}
                        strokeWidth={5}
                        globalCompositeOperation='source-over'
                        fillEnabled={false}
                        draggable={true}
                        stroke={shape.color}
                      />
                    ))
                  }
                  {
                    (drawer === '3' || text.length > 0) && text.map((txt: any, i: number) => (
                      <Text
                        key={i}
                        text={txt.value}
                        fontSize={20}
                        x={txt.pointX}
                        y={txt.pointY}
                        wrap='word'
                        width={400}
                        fill={txt.color}
                        draggable={true}
                      />
                    ))
                  }
                  {
                    (drawer === '4' || stars.length > 0) && stars.map((star: any, i: number) => (
                      <StarImage
                        key={i}
                        image={'/assets/default/clean-bintang.png'}
                        width={starWidth}
                        height={starHeight}
                        x={star.imgX - (starWidth / 2)}
                        y={star.imgY - (starHeight / 2)}
                      />
                    ))
                  }
                  {
                    (drawer === '5' || dots.length > 0) && dots.map((dot: any, i: number) => (
                      <Circle
                        key={i}
                        x={dot.dotX}
                        y={dot.dotY}
                        fill={dot.color}
                        stroke={dot.color}
                        strokeWidth={4}
                        radius={5}
                        globalCompositeOperation= 'source-over'
                      />
                    ))
                  }
                  {
                    (drawer === '6' || checklist.length > 0) && checklist.map((check: any, i: number) => (
                      <ChecklistImage
                        key={i}
                        image='/assets/default/checklist.png'
                        width={checklistWidth}
                        height={checklistHeight}
                        x={check.imgX - (checklistWidth / 2)}
                        y={check.imgY - (checklistHeight / 2)}
                      />
                    ))
                  }
                </Layer>
              </Stage>
              <textarea
                value={textArea}
                style={{
                  display: (visible) ? 'block' : 'none',
                  position: 'absolute',
                  top: `${textY}px`,
                  left: `${textX}px`,
                }}
                onChange={(e) => handleTextEdit(e)}
                onKeyDown={(e) => handleTextareaKeyDown(e)}
              />
            </div>
          </Col>
          <Col sm="12" md="4" xxl="3" className="order-sm-0 order-md-1" onClick={handleClickOutside}>
            <Row className="mb-1 pe-md-1 pe-xxl-2">
              <Button color='primary' onClick={() => handleSubmit()}>
                <Save style={{ marginRight: '5px' }}/>
                <span className="align-middle ml-50">Simpan</span>
              </Button>
            </Row>
            <Row className="mb-1 pe-md-1 pe-xxl-2">
              <Button color='secondary' onClick={() => handleCancel()}>
                <X style={{ marginRight: '5px' }}/>
                <span className="align-middle ml-50">Batal</span>
              </Button>
            </Row>
            <Row className="pe-md-1 pe-xxl-2">
              <hr/>
            </Row>
            <Row className="mb-1 pe-md-1 pe-xxl-2">
              <Button color='warning' onClick={() => handleUndo()}>
                <CornerUpLeft style={{ marginRight: '5px' }}/>
                <span className="align-middle ml-50">Undo</span>
              </Button>
            </Row>
            <Row className="mb-1 pe-md-1 pe-xxl-2">
              <Button color='danger' onClick={() => handleReset()}>
                <RefreshCw style={{ marginRight: '5px' }}/>
                <span className="align-middle ml-50">Ulangi</span>
              </Button>
            </Row>
            <Row style={{ marginTop: '40px' }}>
              <div className='d-flex me-1 justify-content-start'>
                <Label style={{ marginTop: '3px' }}>
                  {`Pilih Warna:  `}
                </Label>
                <Input
                  type='color'
                  name='color'
                  className='ms-2'
                  style={{ width: '100px', padding: '5px' }}
                  defaultValue={color}
                  onChange={(e) => handleChangeColor(e)}
                />
              </div>
              <div className='me-1'>
                <Label>
                  {color}
                </Label>
              </div>
            </Row>
            <Row style={{ marginTop: '50px' }}>
              <div className="me-1">
                <Input
                  type='radio'
                  name='drawer'
                  value='1'
                  defaultChecked={drawer === '1'}
                  onChange={(e) => handleChangeDrawer(e)}
                />
                <Label style={{ marginLeft: '10px' }}>Pulpen</Label>
              </div>
            </Row>
            <Row style={{ marginTop: '10px' }}>
              <div className="me-1">
                <Input
                  type='radio'
                  name='drawer'
                  value='2'
                  defaultChecked={drawer === '2'}
                  onChange={(e) => handleChangeDrawer(e)}
                />
                <Label style={{ marginLeft: '10px' }}>Lingkaran</Label>
              </div>
            </Row>
            <Row style={{ marginTop: '10px' }}>
              <div className="me-1">
                <Input
                  type='radio'
                  name='drawer'
                  value='3'
                  defaultChecked={drawer === '3'}
                  onChange={(e) => handleChangeDrawer(e)}
                />
                <Label style={{ marginLeft: '10px' }}>Teks</Label>
              </div>
            </Row>
            <Row style={{ marginTop: '10px' }}>
              <div className="me-1">
                <Input
                  type='radio'
                  name='drawer'
                  value='4'
                  defaultChecked={drawer === '4'}
                  onChange={(e) => handleChangeDrawer(e)}
                />
                <Label style={{ marginLeft: '10px' }}>Bintang</Label>
              </div>
            </Row>
            <Row style={{ marginTop: '10px' }}>
              <div className="me-1">
                <Input
                  type='radio'
                  name='drawer'
                  value='5'
                  defaultChecked={drawer === '5'}
                  onChange={(e) => handleChangeDrawer(e)}
                />
                <Label style={{ marginLeft: '10px' }}>Titik</Label>
              </div>
            </Row>
            <Row style={{ marginTop: '10px' }}>
              <div className="me-1">
                <Input
                  type='radio'
                  name='drawer'
                  value='6'
                  defaultChecked={drawer === '6'}
                  onChange={(e) => handleChangeDrawer(e)}
                />
                <Label style={{ marginLeft: '10px' }}>Checklist</Label>
              </div>
            </Row>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
}

export default BodyImageModal;
