import { Button, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane, Table, ListGroup, ListGroupItem, Form, FormGroup, Input, Label } from "reactstrap";
import { ArrowDown, ArrowUp, DownloadCloud, FileText, X } from 'react-feather';
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { IDicomSearch, IModality, DicomSearch, Modality, IModalityDetail } from "../models/tool-inspection-result.model";
import { IPacsRequest, IUploadPacsRequest, PacsRequest, UploadPacsRequest } from "../requests";
import { AppRequest } from "@src/shared/request";
import { ITreatmentModel } from "@src/modules/site/patient-list/models";
import { ToolInspectionResultService } from "../services";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useDropzone } from 'react-dropzone';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';

import Compressor from 'compressorjs';
import { IDoctorModel } from "@src/shared/doctor";
import { INurseModel } from "@src/shared/nurse";
import Image from 'next/image';
import InspectionResult from "./inspection-result";
import ResultUpload from "./result-upload";
import { SubmitButton } from "@src/shared/button";
import getConfig from 'next/config';
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { fetchDicom } from "../stores/tool-inspection-result.store";

const ToolInspectionForm = (props: { data: IDicomSearch | undefined, modality: IModality | undefined }) => {
  const { publicRuntimeConfig } = getConfig();
  const dispatch = useAppDispatch();
  const { data, modality } = props;

  const router = useRouter();

  const [activeTab, setActiveTab] = useState<string>('1')
  const { treatment} = useAppSelector(state => state.patient);
  const [sort, setSort] = useState<string>('DESC');

  const toggle = (tab: string) => {
    if (activeTab && activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const handleSort = (sortDir: string) => {
    if (!treatment) {
      return;
    }
    const appRequest = AppRequest.createFromStore(treatment);
    dispatch(fetchDicom({ ...appRequest, sort: sortDir }))
    setSort(sortDir);
  }
  return (
    <>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={(activeTab && activeTab === '1') ? 'active' : ''}
            onClick={() => toggle('1')}>
            Daftar Unggahan
            {
              sort && sort === 'DESC' && (
                <a className='ms-1' onClick={() => handleSort('ASC')}>
                  <ArrowDown size={14} color='black'/>
                </a>
              )
            }
            {
              sort && sort === 'ASC' && (
                <a className='ms-1' onClick={() => handleSort('DESC')}>
                  <ArrowUp size={14} color='black'/>
                </a>
              )
            }
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={(activeTab && activeTab === '2') ? 'active' : ''}
            onClick={() => toggle('2')}>
            Unggah Pemeriksaan
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId='1'>
          <InspectionResult data={data} />
        </TabPane>
        <TabPane tabId='2'>
          <ResultUpload modality={modality}/>
        </TabPane>
      </TabContent>
    </>
  )
}

export default ToolInspectionForm;
