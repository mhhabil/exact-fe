import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";
import { useForm } from "react-hook-form";
import { DateTimeInput, TextInput } from "@shared/input";
import { FindPdfRequest, IPdfModel } from "@shared/pdf";
import { useEffect, useState } from "react";
import { AppRequest } from "@shared/request";
import { Signature } from "@shared/signature/components";
import { SignatureModel } from "@shared/signature/models/signature.model";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { DrugSideEffects } from "@modules/pharmacy/drug-side-effects/models/drug-side-effects.model";
import DrugSideEffectsService from "@modules/pharmacy/drug-side-effects/services";


//AlgoritmaNarajoForm
const AlgoritmaNarajoForm = (props: { data: DrugSideEffects,  register: any,  errors: any, processing: boolean, setValue: any}) => {
  const {  data, register, errors, processing, setValue} = props;
  const dispatch = useAppDispatch();
  const { officers } = useAppSelector((state) => state.officer);
  const [algoritmaNaranjo1, setAlgoritmaNaranjo1] = useState(data && data.form && data.form.Algoritma_Naranjo_1 ? data.form.Algoritma_Naranjo_1 : "");
  const [algoritmaNaranjo2, setAlgoritmaNaranjo2] = useState(data && data.form && data.form.Algoritma_Naranjo_2 ? data.form.Algoritma_Naranjo_2 : "");
  const [algoritmaNaranjo3, setAlgoritmaNaranjo3] = useState(data && data.form && data.form.Algoritma_Naranjo_3 ? data.form.Algoritma_Naranjo_3 : "");
  const [algoritmaNaranjo4, setAlgoritmaNaranjo4] = useState(data && data.form && data.form.Algoritma_Naranjo_4 ? data.form.Algoritma_Naranjo_4 : "");
  const [algoritmaNaranjo5, setAlgoritmaNaranjo5] = useState(data && data.form && data.form.Algoritma_Naranjo_5 ? data.form.Algoritma_Naranjo_5 : "");
  const [algoritmaNaranjo6, setAlgoritmaNaranjo6] = useState(data && data.form && data.form.Algoritma_Naranjo_6 ? data.form.Algoritma_Naranjo_6 : "");
  const [algoritmaNaranjo7, setAlgoritmaNaranjo7] = useState(data && data.form && data.form.Algoritma_Naranjo_7 ? data.form.Algoritma_Naranjo_7 : "");
  const [algoritmaNaranjo8, setAlgoritmaNaranjo8] = useState(data && data.form && data.form.Algoritma_Naranjo_8 ? data.form.Algoritma_Naranjo_8 : "");
  const [algoritmaNaranjo9, setAlgoritmaNaranjo9] = useState(data && data.form && data.form.Algoritma_Naranjo_9 ? data.form.Algoritma_Naranjo_9 : "");
  const [algoritmaNaranjo10, setAlgoritmaNaranjo10] = useState(data && data.form && data.form.Algoritma_Naranjo_10 ? data.form.Algoritma_Naranjo_10 : "");

  const [naranjo, setNaranjo] = useState<string>();

  useEffect(() => {
    let totalScore = 0;
    let totalScore1 = 0;
    let totalScore2 = 0;
    let totalScore3 = 0;
    let totalScore4 = 0;
    let totalScore5 = 0;
    let totalScore6 = 0;
    let totalScore7 = 0;
    let totalScore8 = 0;
    let totalScore9 = 0;
    let totalScore10 = 0;

    if (algoritmaNaranjo1 !== "") {
      if (algoritmaNaranjo1 === "ya") {
        totalScore1 = 1;
      }
    }

    if (algoritmaNaranjo2 !== "") {
      if (algoritmaNaranjo2 === "ya") {
        totalScore2 = 2;
      } else if (algoritmaNaranjo2 === "tidak") {
        totalScore2 = -1;
      }
    }

    if (algoritmaNaranjo3 !== "") {
      if (algoritmaNaranjo3 === "ya") {
        totalScore3 = 1;
      }
    }

    if (algoritmaNaranjo4 !== "") {
      if (algoritmaNaranjo4 === "ya") {
        totalScore4 = 2;
      } else if (algoritmaNaranjo4 === "tidak") {
        totalScore4 = -1;
      }
    }

    if (algoritmaNaranjo5 !== "") {
      if (algoritmaNaranjo5 === "ya") {
        totalScore5 = -1;
      } else if (algoritmaNaranjo5 === "tidak") {
        totalScore5 = 2;
      }
    }

    if (algoritmaNaranjo6 !== "") {
      if (algoritmaNaranjo6 === "ya") {
        totalScore6 = -1;
      } else if (algoritmaNaranjo6 === "tidak") {
        totalScore6 = -1;
      }
    }

    if (algoritmaNaranjo7 !== "") {
      if (algoritmaNaranjo7 === "ya") {
        totalScore7 = 1;
      }
    }

    if (algoritmaNaranjo8 !== "") {
      if (algoritmaNaranjo8 === "ya") {
        totalScore8 = 1;
      }
    }

    if (algoritmaNaranjo9 !== "") {
      if (algoritmaNaranjo9 === "ya") {
        totalScore9 = 1;
      }
    }

    if (algoritmaNaranjo10 !== "") {
      if (algoritmaNaranjo10 === "ya") {
        totalScore10 = 1;
      }
    }
    totalScore = totalScore1 + totalScore2 + totalScore3 + totalScore4 + totalScore5 + totalScore6 + totalScore7 + totalScore8 + totalScore9 + totalScore10;

    setValue('total_skor', totalScore);

  }, [algoritmaNaranjo1, algoritmaNaranjo2, algoritmaNaranjo3, algoritmaNaranjo4, algoritmaNaranjo5, algoritmaNaranjo6, algoritmaNaranjo7, algoritmaNaranjo8, algoritmaNaranjo9, algoritmaNaranjo10])

 
  const handleRadioCheck = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleTandaTangan = (image: SignatureModel) => {
    setValue("ttd_pelapor", image.Signature);
    setValue("id_pelapor", image.ID_Karyawan);
  };

  return (
    <Row>
      <Card className="border-1">
        <CardHeader style={{  boxAlign: "center" }}>
          <Label> ALGORITMA NARANJO</Label>
        </CardHeader>

        <Table bordered responsive>
          <thead>
            <tr>
              <td rowSpan={2} style={{  padding: "50px", textAlign:"center" }}>No</td>
              <td rowSpan={2} style={{  padding: "50px", textAlign:"center" }}>Pertanyaan</td>
              <td colSpan={3} style={{  padding: "10px", textAlign:"center" }}>Skala</td>
            </tr>
            <tr>
              <td >Ya</td>
              <td >Tidak</td>
              <td >Tidak Diketahui</td>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td  style={{ width: "4%" }} >1</td>
              <td  style={{ width: "60%" }} >Apakah ada laporan efek samping Obat yang serupa?</td>
              <td  style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_1"
                  value='ya'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo1(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_1 && data?.form?.Algoritma_Naranjo_1 === 'ya')}
                  innerRef={register({ required: false })}
                />
                <Label>1</Label>
              </td>
              <td style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_1"
                  value='tidak'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo1(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_1 && data?.form?.Algoritma_Naranjo_1 === 'tidak')}
                  innerRef={register({ required: false })}
                />
                <Label>0</Label>
              </td>
              <td style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_1"
                  value='tidak_diketahui'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo1(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_1 && data?.form?.Algoritma_Naranjo_1 === 'tidak_diketahui')}
                  innerRef={register({ required: false })}
                />
                <Label>0</Label>
              </td>
            </tr>

            <tr>
              <td  style={{ width: "4%" }} >2</td>
              <td  style={{ width: "60%" }} >Apakah efek samping Obat terjadi setelah pemberian Obat yang dicurigai?</td>
              <td  style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_2"
                  value='ya'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo2(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_2 && data?.form?.Algoritma_Naranjo_2 === 'ya')}
                  innerRef={register({ required: false })}
                />
                <Label>2</Label>
              </td>
              <td style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_2"
                  value='tidak'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo2(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_2 && data?.form?.Algoritma_Naranjo_2 === 'tidak')}
                  innerRef={register({ required: false })}
                />
                <Label>-1</Label>
              </td>
              <td style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_2"
                  value='tidak_diketahui'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo2(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_2 && data?.form?.Algoritma_Naranjo_2 === 'tidak_diketahui')}
                  innerRef={register({ required: false })}
                />
                <Label>0</Label>
              </td>
            </tr>

            <tr>
              <td  style={{ width: "4%" }} >3</td>
              <td  style={{ width: "60%" }} >Apakah efek samping Obat membaik setelah Obat dihentikan atau Obat antagonis khusus diberikan?</td>
              <td  style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_3"
                  value='ya'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo3(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_3 && data?.form?.Algoritma_Naranjo_3 === 'ya')}
                  innerRef={register({ required: false })}
                />
                <Label>1</Label>
              </td>
              <td style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_3"
                  value='tidak'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo3(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_3 && data?.form?.Algoritma_Naranjo_3 === 'tidak')}
                  innerRef={register({ required: false })}
                />
                <Label>0</Label>
              </td>
              <td style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_3"
                  value='tidak_diketahui'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo3(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_3 && data?.form?.Algoritma_Naranjo_3 === 'tidak_diketahui')}
                  innerRef={register({ required: false })}
                />
                <Label>0</Label>
              </td>
            </tr>

            <tr>
              <td  style={{ width: "4%" }} >4</td>
              <td  style={{ width: "60%" }} >Apakah efek samping Obat terjadi berulang setelah obat diberikan kembali?</td>
              <td  style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_4"
                  value='ya'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo4(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_4 && data?.form?.Algoritma_Naranjo_4 === 'ya')}
                  innerRef={register({ required: false })}
                />
                <Label>2</Label>
              </td>
              <td style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_4"
                  value='tidak'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo4(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_4 && data?.form?.Algoritma_Naranjo_4 === 'tidak')}
                  innerRef={register({ required: false })}
                />
                <Label>-1</Label>
              </td>
              <td style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_4"
                  value='tidak_diketahui'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo4(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_4 && data?.form?.Algoritma_Naranjo_4 === 'tidak_diketahui')}
                  innerRef={register({ required: false })}
                />
                <Label>0</Label>
              </td>
            </tr>

            <tr>
              <td  style={{ width: "4%" }} >5</td>
              <td  style={{ width: "60%" }} >Apakah ada alternative penyebab yang dapat menjelaskan kemungkinan terjadinya efek samping Obat?</td>
              <td  style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_5"
                  value='ya'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo5(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_5 && data?.form?.Algoritma_Naranjo_5 === 'ya')}
                  innerRef={register({ required: false })}
                />
                <Label>-1</Label>
              </td>
              <td style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_5"
                  value='tidak'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo5(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_5 && data?.form?.Algoritma_Naranjo_5 === 'tidak')}
                  innerRef={register({ required: false })}
                />
                <Label>2</Label>
              </td>
              <td style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_5"
                  value='tidak_diketahui'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo5(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_5 && data?.form?.Algoritma_Naranjo_5 === 'tidak_diketahui')}
                  innerRef={register({ required: false })}
                />
                <Label>0</Label>
              </td>
            </tr>


            <tr>
              <td  style={{ width: "4%" }} >6</td>
              <td  style={{ width: "60%" }} >Apakah efek samping Obat muncul kembali ketika placebo diberikan?</td>
              <td  style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_6"
                  value='ya'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo6(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_6 && data?.form?.Algoritma_Naranjo_6 === 'ya')}
                  innerRef={register({ required: false })}
                />
                <Label>-1</Label>
              </td>
              <td style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_6"
                  value='tidak'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo6(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_6 && data?.form?.Algoritma_Naranjo_6 === 'tidak')}
                  innerRef={register({ required: false })}
                />
                <Label>-1</Label>
              </td>
              <td style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_6"
                  value='tidak_diketahui'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo6(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_6 && data?.form?.Algoritma_Naranjo_6 === 'tidak_diketahui')}
                  innerRef={register({ required: false })}
                />
                <Label>0</Label>
              </td>
            </tr>


            <tr>
              <td  style={{ width: "4%" }} >7</td>
              <td  style={{ width: "60%" }} >Apakah Obat yang dicurigai terdeteksi di dalam darah atau cairan tubuh lainnya dengan konsentrasi yang toksik?</td>
              <td  style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_7"
                  value='ya'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo7(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_7 && data?.form?.Algoritma_Naranjo_7 === 'ya')}
                  innerRef={register({ required: false })}
                />
                <Label>1</Label>
              </td>
              <td style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_7"
                  value='tidak'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo7(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_7 && data?.form?.Algoritma_Naranjo_7 === 'tidak')}
                  innerRef={register({ required: false })}
                />
                <Label>0</Label>
              </td>
              <td style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_7"
                  value='tidak_diketahui'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo7(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_7 && data?.form?.Algoritma_Naranjo_7 === 'tidak_diketahui')}
                  innerRef={register({ required: false })}
                />
                <Label>0</Label>
              </td>
            </tr>


            <tr>
              <td  style={{ width: "4%" }} >8</td>
              <td  style={{ width: "60%" }} >Apakah efek samping Obat bertambah parah ketika dosis Obat ditingkatkan atau bertambah ringan ketika Obat diturunkan dosisnya?</td>
              <td  style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_8"
                  value='ya'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo8(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_8 && data?.form?.Algoritma_Naranjo_8 === 'ya')}
                  innerRef={register({ required: false })}
                />
                <Label>1</Label>
              </td>
              <td style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_8"
                  value='tidak'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo8(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_8 && data?.form?.Algoritma_Naranjo_8 === 'tidak')}
                  innerRef={register({ required: false })}
                />
                <Label>0</Label>
              </td>
              <td style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_8"
                  value='tidak_diketahui'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo8(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_8 && data?.form?.Algoritma_Naranjo_8 === 'tidak_diketahui')}
                  innerRef={register({ required: false })}
                />
                <Label>0</Label>
              </td>
            </tr>


            <tr>
              <td  style={{ width: "4%" }} >9</td>
              <td  style={{ width: "60%" }} >Apakah pasien pernah mengalami efek samping Obat yang sama atau dengan Obat yang mirip sebelumnya?</td>
              <td  style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_9"
                  value='ya'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo9(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_9 && data?.form?.Algoritma_Naranjo_9 === 'ya')}
                  innerRef={register({ required: false })}
                />
                <Label>1</Label>
              </td>
              <td style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_9"
                  value='tidak'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo9(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_9 && data?.form?.Algoritma_Naranjo_9 === 'tidak')}
                  innerRef={register({ required: false })}
                />
                <Label>0</Label>
              </td>
              <td style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_9"
                  value='tidak_diketahui'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo9(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_9 && data?.form?.Algoritma_Naranjo_9 === 'tidak_diketahui')}
                  innerRef={register({ required: false })}
                />
                <Label>0</Label>
              </td>
            </tr>

            <tr>
              <td  style={{ width: "4%" }} >10</td>
              <td  style={{ width: "60%" }} >Apakah efek samping Obat dapat dikonfirmasi dengan bukti yang obyektif?</td>
              <td  style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_10"
                  value='ya'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo10(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_10 && data?.form?.Algoritma_Naranjo_10 === 'ya')}
                  innerRef={register({ required: false })}
                />
                <Label>1</Label>
              </td>
              <td style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_10"
                  value='tidak'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo10(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_10 && data?.form?.Algoritma_Naranjo_10 === 'tidak')}
                  innerRef={register({ required: false })}
                />
                <Label>0</Label>
              </td>
              <td style={{ width: "12%" }}>
                <Input
                  type="radio"
                  className="me-1"
                  name="algoritma_naranjo_10"
                  value='tidak_diketahui'
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      setAlgoritmaNaranjo10(e.target.value)
                    }
                    handleRadioCheck(e);
                  }}
                  defaultChecked={!!(data && data?.form?.Algoritma_Naranjo_10 && data?.form?.Algoritma_Naranjo_10 === 'tidak_diketahui')}
                  innerRef={register({ required: false })}
                />
                <Label>0</Label>
              </td>
            </tr>
            <tr>
              <td colSpan={2} >Total</td>
              <td colSpan={3} >
                <Input
                  style={{ marginTop: '10px' }}
                  className="mb-1"
                  type="text"
                  id="total_skor"
                  name="total_skor"
                  innerRef={register({ required: false })}
                  invalid={errors.total_skor && true}
                  readOnly
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <Row>
          <Col md="4">
            <Table >
              <tr>
                <td  colSpan={2}>Naranjo Probability Scale</td>
              </tr>
              <tr>
                <td >Score</td>
                <td >Category</td>
              </tr>
              <tr>
                <td >9+</td>
                <td >High Probable</td>
              </tr>
              <tr>
                <td >5-8</td>
                <td >Probable</td>
              </tr>
              <tr>
                <td >1-4</td>
                <td >Possible</td>
              </tr>
              <tr>
                <td >0</td>
                <td >Doubtful</td>
              </tr>
            </Table >
          </Col>
          <Col md="8">
            <Col>
              <Label>Tanggal Pelapor :</Label>
            </Col>
            <Col>
              <DateTimeInput
                name="waktu"
                defaultValue="date"
                {...{ register, errors }}
              />
            </Col>

            <Signature
              label="Petugas"
              type="picker"
              additionalLabel={ data && data.form && data.form.Nama_Pelapor ? data.form.Nama_Pelapor : ""}
              initialImage={ data && data.form && data.form.TTD_Pelapor && data.form.TTD_Pelapor !== "" ? data.form.TTD_Pelapor : undefined}
              persons={officers}
              onSigned={(assigner: SignatureModel) => handleTandaTangan(assigner)}
            />
            <Input
              type="hidden"
              name="ttd_pelapor"
              innerRef={register({ required: false })}
              invalid={errors["ttd_pelapor"] && true}
            />
            <Input
              type="hidden"
              name="id_pelapor"
              innerRef={register({ required: false })}
              invalid={errors["id_pelapor"] && true}
            />

          </Col>

        </Row>

      </Card>
    </Row>
  );
};

export default AlgoritmaNarajoForm;
