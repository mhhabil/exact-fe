import { Button, Col, Form, FormFeedback, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { Chart as ChartJS, Legend, LineElement, LinearScale, PointElement, Tooltip } from 'chart.js';
import { GridChartRequest, IGridChartRequest } from '@src/modules/operating-room/surgery-report/requests/surgery-report-general.request';
import { Line, Scatter } from 'react-chartjs-2';
import { useEffect, useRef, useState } from 'react';
import { ChartImageService } from '../services';
import Compressor from 'compressorjs';
import { ErrorMessage } from "@hookform/error-message";
import { Plus } from 'react-feather';
import { UploadToCloudService } from '@src/shared/upload-cloud-storage/services';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useForm } from 'react-hook-form';

const GridChart = (props: { initialData: any, anesthesiaScale: string, onSavedData: any, onSavedImage: any, onSavedScale: any, component: string, formName: string }) => {
  const { initialData, anesthesiaScale, onSavedData, onSavedImage, onSavedScale, component, formName } = props;

  const { treatment } = useAppSelector(state => state.patient)

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [minTime, setMinTime] = useState<number>(5);
  const [maxTime, setMaxTime] = useState<number>(300);
  const [steps, setSteps] = useState<number>(parseInt(anesthesiaScale));
  const [scale, setScale] = useState<number | undefined>(parseInt(anesthesiaScale));

  const [dummy, setDummy] = useState(false);
  const [allowUpload, setAllowUpload] = useState(false);

  const [editSistol, setEditSistol] = useState<any>(undefined);
  const [editDiastol, setEditDiastol] = useState<any>(undefined);
  const [editR, setEditR] = useState<any>(undefined);
  const [editN, setEditN] = useState<any>(undefined);
  const [editId, setEditId] = useState<any>(undefined);

  const [sistol, setSistol] = useState<any>([]);
  const [diastol, setDiastol] = useState<any>([]);
  const [rchart, setRchart] = useState<any>([]);
  const [nchart, setNchart] = useState<any>([]);
  const [label, setLabel] = useState<any>([]);

  const sis = new Image();
  sis.src = '/assets/default/chevron-down.svg';

  const dis = new Image();
  dis.src = '/assets/default/chevron-up.svg';

  const r = new Image();
  r.src = '/assets/default/plus.svg';

  const tvs = new Image();
  tvs.src = '';

  const getInitialData = () => {
    if (initialData) {
      if (typeof initialData === 'string' && initialData.includes('&#34;')) {
        const escapedData = initialData.replaceAll('&#34;', '"');
        return JSON.parse(escapedData);
      } else {
        return JSON.parse(initialData);
      }
    }
    if (!initialData) {
      return undefined;
    }
  }
  const fixedData = getInitialData();

  const sisVal = (fixedData && fixedData.sis && Array.isArray(fixedData.sis)) ? fixedData.sis.filter((val: any) => val !== null) : [];
  const disVal = (fixedData && fixedData.dis && Array.isArray(fixedData.dis)) ? fixedData.dis.filter((val: any) => val !== null) : [];
  const rVal = (fixedData && fixedData.r && Array.isArray(fixedData.r)) ? fixedData.r.filter((val: any) => val !== null) : [];
  const nVal = (fixedData && fixedData.n && Array.isArray(fixedData.n)) ? fixedData.n.filter((val: any) => val !== null) : [];

  const chartRef: any = useRef(null)
  const { register: registerChart, handleSubmit: handleSubmitChart, errors: errorsChart, setValue: setValueChart, getValues: getValuesChart } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
    defaultValues: {
      r_chart: 18,
      n_chart: 120,
      sis_chart: 120,
      dis_chart: 80,
    },
  })

  useEffect(() => {

    if (anesthesiaScale && anesthesiaScale === '5') {
      setScale(5);
    }
    if (anesthesiaScale && anesthesiaScale === '10') {
      setScale(10);
    }
    if (anesthesiaScale && anesthesiaScale === '15') {
      setScale(15);
    }
    if (anesthesiaScale && anesthesiaScale === '20') {
      setScale(20);
    }
    if (anesthesiaScale && anesthesiaScale === '25') {
      setScale(25);
    }
    if (label && label.length === 0 && anesthesiaScale) {
      if (anesthesiaScale === '5') {
        setLabel(Array.from({ length: sisVal.length }, (_, i) => (i + 1) * 5))
      }
      if (anesthesiaScale === '10') {
        setLabel(Array.from({ length: sisVal.length }, (_, i) => (i + 1) * 10))
      }
      if (anesthesiaScale === '15') {
        setLabel(Array.from({ length: sisVal.length }, (_, i) => (i + 1) * 15))
      }
      if (anesthesiaScale === '20') {
        setLabel(Array.from({ length: sisVal.length }, (_, i) => (i + 1) * 20))
      }
      if (anesthesiaScale === '25') {
        setLabel(Array.from({ length: sisVal.length }, (_, i) => (i + 1) * 25))
      }
    }
  }, [anesthesiaScale])

  useEffect(() => {
    if (fixedData && sistol && sistol.length === 0) {
      setSistol([...sistol, ...sisVal])
      setDiastol([...diastol, ...disVal])
      setRchart([...rchart, ...rVal])
      setNchart([...nchart, ...nVal])
    }
  }, [fixedData])

  useEffect(() => {
    if (scale && scale === 5) {
      if (label && label.length > 0 && label[0] !== 5) {
        setLabel(Array.from({ length: sisVal.length }, (_, i) => (i + 1) * 5))
      }
      setMinTime(5);
      setMaxTime(150);
      setSteps(5);
    }

    if (scale && scale === 10) {
      if (label && label.length > 0 && label[0] !== 10) {
        setLabel(Array.from({ length: sisVal.length }, (_, i) => (i + 1) * 10))
      }
      setMinTime(10);
      setMaxTime(300);
      setSteps(10);
    }

    if (scale && scale === 15) {
      if (label && label.length > 0 && label[0] !== 15) {
        setLabel(Array.from({ length: sisVal.length }, (_, i) => (i + 1) * 15))
      }
      setMinTime(15);
      setMaxTime(450);
      setSteps(15);
    }

    if (scale && scale === 20) {
      if (label && label.length > 0 && label[0] === 1) {
        setLabel(Array.from({ length: sisVal.length }, (_, i) => (i + 1) * 20))
      }
      setMinTime(20);
      setMaxTime(600);
      setSteps(20);
    }
    if (scale && scale === 25) {
      if (label && label.length > 0 && label[0] === 1) {
        setLabel(Array.from({ length: sisVal.length }, (_, i) => (i + 1) * 25))
      }
      setMinTime(25);
      setMaxTime(750);
      setSteps(25);
    }

  }, [scale])

  const data1 = {
    labels: label,
    datasets: [
      {
        pointStyle: sis,
        label: 'Sis',
        data: sistol,
        borderColor: 'black',
        backgroundColor: 'black',
        yAxisID: 'y',
        pointHitRadius: 20,
      },
      {
        pointStyle: dis,
        label: 'Dis',
        data: diastol,
        borderColor: 'black',
        backgroundColor: 'black',
        yAxisID: 'y',
        pointHitRadius: 20,
      },
      {
        label: 'N',
        data: nchart,
        borderColor: 'black',
        backgroundColor: 'black',
        yAxisID: 'y1',
        pointHitRadius: 20,
      },
      {
        pointStyle: r,
        label: 'R',
        data: rchart,
        borderColor: 'black',
        backgroundColor: 'black',
        yAxisID: 'y2',
        pointHitRadius: 20,
      },
      {
        pointStyle: tvs,
        label: 'TVS',
        data: rchart,
        borderColor: 'black',
        backgroundColor: 'black',
        yAxisID: 'y3',
        pointHitRadius: 20,
      },
    ],
  }

  const changeTimeScale = (e: any) => {
    if (e && e === '5') {
      setScale(5);
    }

    if (e && e === '10') {
      setScale(10);
    }
    if (e && e === '15') {
      setScale(15);
    }

    if (e && e === '20') {
      setScale(20);
    }
    if (e && e === '25') {
      setScale(25);
    }
    onSavedScale(e ?? '')
    setAllowUpload(true);
    setDummy(!dummy);
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

  const uploadImage = () => {
    if (!treatment) return;
    if (chartRef && chartRef.current) {
      const file = base64toFile(chartRef.current.toBase64Image(), '');
      new Compressor(file, {
        mimeType: 'image/jpeg',
        quality: 0.8,
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
            onSavedImage(data.signUrl);
          });
        },
        error(err) {
          console.log(err);
        },
      });
    }
  }

  useEffect(() => {
    if (chartRef && chartRef.current && allowUpload) {
      uploadImage();
    }
  }, [dummy])

  const setChart = (val: any) => {
    if (label && label.length === 0) {
      if (minTime === 5) {
        setLabel([5])
      }
      if (minTime === 10) {
        setLabel([10])
      }
      if (minTime === 15) {
        setLabel([15])
      }
      if (minTime === 20) {
        setLabel([20])
      }
      if (minTime === 25) {
        setLabel([25])
      }

    } else if (label && label.length > 0) {
      if (minTime === 5) {
        setLabel([...label, label[label.length - 1] + 5])
      }
      if (minTime === 10) {
        setLabel([...label, label[label.length - 1] + 10])
      }
      if (minTime === 15) {
        setLabel([...label, label[label.length - 1] + 15])
      }
      if (minTime === 20) {
        setLabel([...label, label[label.length - 1] + 20])
      }
      if (minTime === 25) {
        setLabel([...label, label[label.length - 1] + 25])
      }
    }
    sistol.push(val.target.form[2].value);
    diastol.push(val.target.form[3].value);
    rchart.push(val.target.form[0].value);
    nchart.push(val.target.form[1].value);
    const gridChartData: IGridChartRequest = GridChartRequest.createFromJson({ sis: sistol, dis: diastol, r: rchart, n: nchart })
    onSavedData(JSON.stringify(gridChartData));
    setAllowUpload(true);
    setDummy(!dummy);
    setIsOpen(false);
  }

  ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);
  ChartJS.defaults.font.family = 'Montserrat';

  const options: any = {
    animation: false,
    animations: {
      colors: false,
      x: false,
    },
    transitions: {
      active: {
        animation: {
          duration: 0,
        },
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      y: {
        position: 'left',
        beginAtZero: true,
        type: 'linear',
        max: 220,
        ticks: {
          stepSize: 20,
        },
        grid: {
          color: 'black',
        },
      },
      y1: {
        position: 'left',
        beginAtZero: false,
        type: 'linear',
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
        },
      },
      y2: {
        position: 'left',
        beginAtZero: false,
        type: 'linear',
        min: 8,
        max: 28,
        ticks: {
          stepSize: 4,
        },
      },
      y3: {
        position: 'left',
        beginAtZero: false,
        type: 'linear',
        min: 5,
        max: 25,
        ticks: {
          stepSize: 5,
        },
      },
      x: {
        position: 'bottom',
        beginAtZero: false,
        min: minTime,
        max: maxTime,
        ticks: {
          stepSize: steps,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'left',
        labels: {
          usePointStyle: true,
          font: {
            family: 'Montserrat',
            weight: '700',
          },
          padding: 15,
        },
      },
      tooltip: {
        mode: 'index',
        intersect: true,
        callbacks: {
          title: (tooltipItem: any, data: any) => {
            return `Pengukuran ke-${tooltipItem[0].label}`
          },
          label: (context: any) => {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
        displayColors: false,
      },
      hover: {
        mode: 'index',
        intersect: true,
      },
    },
  };

  const handleOpenEditModal = (elements: any, event: any) => {
    if (elements && elements.length > 0) {
      const sis = data1.datasets[elements[0].datasetIndex].data[elements[0].index];
      const dis = data1.datasets[elements[1].datasetIndex].data[elements[1].index];
      const n = data1.datasets[elements[2].datasetIndex].data[elements[2].index];
      const r = data1.datasets[elements[3].datasetIndex].data[elements[3].index];

      setEditSistol(sis);
      setEditDiastol(dis);
      setEditN(n);
      setEditR(r);
      setEditId(elements[0].index)
      setIsEditOpen(true);
    }
  }

  const editChart = (e: any) => {
    sistol.splice(editId, 1, e.target.form[2].value);
    diastol.splice(editId, 1, e.target.form[3].value);
    rchart.splice(editId, 1, e.target.form[0].value);
    nchart.splice(editId, 1, e.target.form[1].value);
    const gridChartData: IGridChartRequest = GridChartRequest.createFromJson({ sis: sistol, dis: diastol, r: rchart, n: nchart })
    onSavedData(JSON.stringify(gridChartData));
    setIsEditOpen(false);
    setAllowUpload(true);
    setDummy(!dummy);
  }

  const deleteChart = () => {
    sistol.splice(editId, 1);
    diastol.splice(editId, 1);
    rchart.splice(editId, 1);
    nchart.splice(editId, 1);
    label.splice(editId, 1);
    const gridChartData: IGridChartRequest = GridChartRequest.createFromJson({ sis: sistol, dis: diastol, r: rchart, n: nchart })
    onSavedData(JSON.stringify(gridChartData));
    setIsEditOpen(false);
    setAllowUpload(true);
    setDummy(!dummy);
  }

  return (
    <div className='bg-white rounded mt-3'>
      <div style={{ marginLeft: '70px' }} className='flex'>
        <label
          style={{
            fontSize: '9pt',
            fontWeight: 'normal',
            fontFamily: 'monospace',
            color: 'black',
          }}
        >
          TVS
        </label>
        <label
          style={{
            fontSize: '9pt',
            fontWeight: 'normal',
            fontFamily: 'monospace',
            color: 'black',
            marginLeft: '8px',
          }}
        >
          R
        </label>
        <label
          style={{
            fontSize: '9pt',
            fontWeight: 'normal',
            color: 'black',
            marginLeft: '20px',
            fontFamily: 'monospace',
          }}
        >
          N
        </label>
        <label
          style={{
            fontSize: '9pt',
            fontWeight: 'normal',
            color: 'black',
            marginLeft: '14px',
            fontFamily: 'monospace',
          }}
        >
          TD
        </label>
        <div style={{ float: 'right', alignItems: 'center' }} className='d-flex'>
          <label style={{ fontSize: '13pt', fontWeight: 'bolder', color: 'black', marginRight: '20px' }}>Skala</label>
          <Input
            style={{ width: '100px', fontWeight: 'bolder' }}
            type='select'
            className='bg-white text-black'
            value={scale}
            onChange={(e) => changeTimeScale(e.target.value)}
          >
            <option value={5}>5 Menit</option>
            <option value={10}>10 Menit</option>
            <option value={15}>15 Menit</option>
            <option value={20}>20 Menit</option>
            <option value={25}>25 Menit</option>
          </Input>
        </div>
      </div>
      <Scatter
        ref={chartRef}
        getElementsAtEvent={(elements, event) => handleOpenEditModal(elements, event)}
        options={options}
        data={data1}
      />
      <Button
        className='mt-2'
        color='primary'
        size='sm'
        onClick={() => setIsOpen(true)}
      >
        <Plus
          size={15}
          style={{ marginRight: '5px' }}
        />
        Tambah Data
      </Button>
      <Modal
        isOpen={isOpen}
        className="modal-dialog rounded"
      >
        <ModalHeader
          className='rounded'
          toggle={() => setIsOpen(false)}
        >
          Tambah Data Anestesi
        </ModalHeader>
        <ModalBody className='rounded'>
          <Form>
            <Row className='mb-2'>
              <Col>
                <Label>R</Label>
              </Col>
              <Col>
                <Input
                  name='r_chart'
                  type='number'
                  innerRef={registerChart({
                    required: {
                      value: true,
                      message: 'Harus Diisi',
                    },
                    min: {
                      value: 8,
                      message: 'Angka minimum 8',
                    },
                    max: {
                      value: 28,
                      message: 'Angka maksimal 28',
                    },
                  })}
                  invalid={errorsChart.r_chart && true}
                />
                <ErrorMessage
                  errors={errorsChart}
                  name="r_chart"
                  render={({ messages }) => {
                    return messages ? Object.entries(messages).map(([type, message]) => (
                      <p key={type}>{message}</p>
                    )) : null;
                  }}
                />
              </Col>
            </Row>
            <Row className='mb-2'>
              <Col>
                <Label>N</Label>
              </Col>
              <Col>
                <Input
                  name='n_chart'
                  type='number'
                  innerRef={registerChart({
                    required: {
                      value: true,
                      message: 'Harus Diisi',
                    },
                    min: {
                      value: 60,
                      message: 'Angka minimum 60',
                    },
                    max: {
                      value: 180,
                      message: 'Angka maksimal 180',
                    },
                  })}
                  invalid={errorsChart.n_chart && true}
                />
                <ErrorMessage
                  errors={errorsChart}
                  name="n_chart"
                  render={({ messages }) => {
                    return messages ? Object.entries(messages).map(([type, message]) => (
                      <p key={type}>{message}</p>
                    )) : null;
                  }}
                />
              </Col>
            </Row>
            <Row className='mb-2'>
              <Col>
                <Label>Sis</Label>
              </Col>
              <Col>
                <Input
                  name='sis_chart'
                  type='number'
                  innerRef={registerChart({
                    required: {
                      value: true,
                      message: 'Harus Diisi',
                    },
                    min: {
                      value: 0,
                      message: 'Angka minimum 0',
                    },
                    max: {
                      value: 220,
                      message: 'Angka maksimal 220',
                    },
                  })}
                  invalid={errorsChart.sis_chart && true}
                />
                <ErrorMessage
                  errors={errorsChart}
                  name="sis_chart"
                  render={({ messages }) => {
                    return messages ? Object.entries(messages).map(([type, message]) => (
                      <p key={type}>{message}</p>
                    )) : null;
                  }}
                />
              </Col>
            </Row>
            <Row className='mb-2'>
              <Col>
                <Label>Dis</Label>
              </Col>
              <Col>
                <Input
                  name='dis_chart'
                  type='number'
                  innerRef={registerChart({
                    required: {
                      value: true,
                      message: 'Harus Diisi',
                    },
                    min: {
                      value: 0,
                      message: 'Angka minimum 0',
                    },
                    max: {
                      value: 220,
                      message: 'Angka maksimal 220',
                    },
                  })}
                  invalid={errorsChart.dis_chart && true}
                />
                <ErrorMessage
                  errors={errorsChart}
                  name="dis_chart"
                  render={({ messages }) => {
                    return messages ? Object.entries(messages).map(([type, message]) => (
                      <p key={type}>{message}</p>
                    )) : null;
                  }}
                />
              </Col>
            </Row>
            <Row className='mx-auto'>
              <Button onClick={(e) => setChart(e)} className='btn btn-primary btn-sm' color='primary'>
                Add
              </Button>
            </Row>
          </Form>
        </ModalBody>
      </Modal>

      {/* Modal Edit */}
      <Modal isOpen={isEditOpen} className="modal-dialog rounded">
        <ModalHeader className='rounded' toggle={() => setIsEditOpen(false)}>Edit Data Anestesi</ModalHeader>
        <ModalBody className='rounded'>
          <Form>
            <Row className='mb-2'>
              <Col>
                <Label>R</Label>
              </Col>
              <Col>
                <Input
                  name='r_edit'
                  type='number'
                  defaultValue={editR}
                  innerRef={registerChart({
                    required: {
                      value: true,
                      message: 'Harus Diisi',
                    },
                    min: {
                      value: 8,
                      message: 'Angka minimum 8',
                    },
                    max: {
                      value: 28,
                      message: 'Angka maksimal 28',
                    },
                  })}
                />
              </Col>
            </Row>
            <Row className='mb-2'>
              <Col>
                <Label>N</Label>
              </Col>
              <Col>
                <Input
                  name='n_edit'
                  type='number'
                  defaultValue={editN}
                  innerRef={registerChart({
                    required: {
                      value: true,
                      message: 'Harus Diisi',
                    },
                    min: {
                      value: 60,
                      message: 'Angka minimum 60',
                    },
                    max: {
                      value: 180,
                      message: 'Angka maksimal 180',
                    },
                  })}
                />
              </Col>
            </Row>
            <Row className='mb-2'>
              <Col>
                <Label>Sis</Label>
              </Col>
              <Col>
                <Input
                  name='sis_edit'
                  type='number'
                  defaultValue={editSistol}
                  innerRef={registerChart({
                    required: {
                      value: true,
                      message: 'Harus Diisi',
                    },
                    min: {
                      value: 0,
                      message: 'Angka minimum 0',
                    },
                    max: {
                      value: 220,
                      message: 'Angka maksimal 220',
                    },
                  })}
                />
              </Col>
            </Row>
            <Row className='mb-2'>
              <Col>
                <Label>Dis</Label>
              </Col>
              <Col>
                <Input
                  name='dis_edit'
                  type='number'
                  defaultValue={editDiastol}
                  innerRef={registerChart({
                    required: {
                      value: true,
                      message: 'Harus Diisi',
                    },
                    min: {
                      value: 0,
                      message: 'Angka minimum 0',
                    },
                    max: {
                      value: 220,
                      message: 'Angka maksimal 220',
                    },
                  })}
                />
              </Col>
            </Row>
            <Row className='mx-auto'>
              <Col>
                <Button onClick={(e) => editChart(e)} className='btn btn-success btn-sm' color='success'>
                  Edit
                </Button>
              </Col>
              <Col>
                <Button onClick={() => deleteChart()} className='btn btn-danger btn-sm' color='danger'>
                  Hapus
                </Button>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default GridChart;
