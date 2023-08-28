import { Button, Col, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { Layer, Line, Stage } from 'react-konva';
import { useEffect, useRef, useState } from 'react';
import BaseImage from './image';
import Compressor from 'compressorjs';
import { SignatureService } from '@shared/signature/services';
import { UploadToCloudService } from '@src/shared/upload-cloud-storage/services';
import { useAppSelector } from '@hooks/useAppSelector';

const SignatureDrawer = (props: { isOpen: boolean, onClose: any, title: string, onImageSubmit: any, formName?: string, component?: string }) => {

  const { isOpen, title, onClose, onImageSubmit, formName, component } = props;
  const [strokeWidth, setStrokeWidth] = useState<number>(8);

  const { treatment } = useAppSelector(state => state.patient);

  const [lines, setLines] = useState<any>([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const ref = useRef<any>(null);

  const handleChangeStroke = (e: any) => {
    if (e.target.value === 'normal') {
      setStrokeWidth(5);
    }
    if (e.target.value === 'bold') {
      setStrokeWidth(8);
    }
    if (e.target.value === 'bolder') {
      setStrokeWidth(11);
    }
  }

  const handleMouseDown = (e: any) => {
    setIsDrawing(true);
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool: 'pen', points: [pos.x, pos.y], strokeWidth }])
  }

  const handleMouseUp = () => {
    setIsDrawing(false);
  }

  const handleMouseMove = (e: any) => {
    if (!isDrawing) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    const lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  }

  const handleReset = () => {
    setLines([]);
  }

  const handleCancel = () => {
    // setLines([]);
    onClose();
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
    if (!treatment || !component || !formName) return;
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
          const base64String = await newBase64;
          UploadToCloudService().uploadImageCloud({
            emr_id: treatment.EMR_ID,
            component_id: component,
            form_name: formName,
            image: base64String,
          }).then(response => {
            const { data } = response.data;
            onImageSubmit(data.signUrl);
            onClose();
            setLines([]);
          });
        },
        error(err) {
          console.log(err);
        },
      });
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
    return window.innerHeight - 100;
  }

  return (
    <Modal isOpen={isOpen} className="modal-dialog modal-fullscreen overflow-hidden">
      <ModalHeader toggle={() => onClose()}>{ title }</ModalHeader>
      <ModalBody>
        <Row>
          <Col sm="12" md="8" xxl="9" className="overflow-hidden panel order-sm-1 order-md-0">
            <div className="signature-canvas overflow-hidden">
              <Stage
                ref={ref}
                className="bg-white rounded-2 border-1 border-dark overflow-hidden"
                width={getDrawerWidth()}
                height={getDrawerHeight()}
                onTouchStart={handleMouseDown}
                onTouchEnd={handleMouseUp}
                onTouchMove={handleMouseMove}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}>
                <Layer width={getDrawerWidth()} height={getDrawerHeight()}>
                  <BaseImage image={'/assets/default/white-bg.png'} width={getDrawerWidth()} height={getDrawerHeight()} x={0} y={0}/>
                  {
                    lines.map((line: any, i: number) => (
                      <Line
                        key={i}
                        points={line.points}
                        stroke="#000000"
                        strokeWidth={line.strokeWidth}
                        tension={0.5}
                        lineCap="round"
                        globalCompositeOperation={
                          line.tool === 'eraser' ? 'destination-out' : 'source-over'
                        }
                      />
                    ),
                    )}
                </Layer>
              </Stage>
            </div>
          </Col>
          <Col sm="12" md="4" xxl="3" className="order-sm-0 order-md-1">
            <Row className="mb-1 pe-md-1 pe-xxl-2">
              <Button color="primary" onClick={() => handleSubmit()}>Simpan</Button>
            </Row>
            <Row className="mb-1 pe-md-1 pe-xxl-2">
              <Button color="secondary" onClick={() => handleCancel()}>Batal</Button>
            </Row>
            <Row className="pe-md-1 pe-xxl-2">
              <hr/>
            </Row>
            <Row className="mb-1 pe-md-1 pe-xxl-2">
              <Button color="danger" onClick={() => handleReset()}>Ulangi</Button>
            </Row>
            <Row style={{ marginTop: '40px' }}>
              <div className='d-flex me-1 justify-content-start align-items-center'>
                <Label style={{ marginTop: '3px', fontSize: '10pt' }}>
                  {`Ukuran Pen:  `}
                </Label>
                <Input
                  type='select'
                  name='pen_size'
                  className='ms-2'
                  style={{ width: '100px', padding: '5px' }}
                  defaultValue='bold'
                  onChange={(e) => handleChangeStroke(e)}
                >
                  <option value="normal">Normal</option>
                  <option value='bold'>Bold</option>
                  <option value="bolder">Bolder</option>
                </Input>
              </div>
            </Row>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
}

export default SignatureDrawer;
