import { PreliminaryStudyForm } from "@src/modules/ro/preliminary-study/models/preliminary-study.model";
import { Table } from "reactstrap";
import { useState } from "react";

const RoPreliminaryStudyView = (props: { data: PreliminaryStudyForm | undefined }) => {
  const { data } = props;

  return (
    <Table borderless style={{ textAlign: 'left', width: '100%' }} className="fw-bold">
      <thead>
        <tr>
          <th style={{ width: '19%' }}></th>
          <th style={{ width: '1%' }}></th>
          <th style={{ width: '40%' }}>OD</th>
          <th style={{ width: '40%' }}>OS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Visual Aquity</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.VA) ? data.OD.VA : ''}</td>
          <td>{(data && data.OS && data.OS.VA) ? data.OS.VA : ''}</td>
        </tr>
        <tr>
          <td>False</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.False) ? data.OD.False : ''}</td>
          <td>{(data && data.OS && data.OS.False) ? data.OS.False : ''}</td>
        </tr>
        <tr>
          <td>PH</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.PH) ? data.OD.PH : ''}</td>
          <td>{(data && data.OS && data.OS.PH) ? data.OS.PH : ''}</td>
        </tr>
        <tr>
          <td>Addisi</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.Add) ? data.OD.Add : ''}</td>
          <td>{(data && data.OS && data.OS.Add) ? data.OS.Add : ''}</td>
        </tr>
        <tr>
          <td>Jagger</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.Jagger) ? data.OD.Jagger : ''}</td>
          <td>{(data && data.OS && data.OS.Jagger) ? data.OS.Jagger : ''}</td>
        </tr>
        <tr>
          <td colSpan={4} style={{ fontSize: '12pt' }}><b>KML</b></td>
        </tr>
        <tr>
          <td>KML</td>
          <td>:</td>
          <td>Sph: {(data && data.OD && data.OD.KML && data.OD.KML.Sph) ? data.OD.KML.Sph : ''} Cyl. {(data && data.OD && data.OD.KML && data.OD.KML.Cyl) ? data.OD.KML.Cyl : ''} x {(data && data.OD && data.OD.KML && data.OD.KML.Axis) ? data.OD.KML.Axis : ''}</td>
          <td>Sph: {(data && data.OS && data.OS.KML && data.OS.KML.Sph) ? data.OS.KML.Sph : ''} Cyl. {(data && data.OS && data.OS.KML && data.OS.KML.Cyl) ? data.OS.KML.Cyl : ''} x {(data && data.OS && data.OS.KML && data.OS.KML.Axis) ? data.OS.KML.Axis : ''}</td>
        </tr>
        <tr>
          <td>Visus</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.KML && data.OD.KML.Va) ? data.OD.KML.Va : ''} PD</td>
          <td>{(data && data.OS && data.OS.KML && data.OS.KML.Va) ? data.OS.KML.Va : ''} PD</td>
        </tr>
        <tr>
          <td>False</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.KML && data.OD.KML.False) ? data.OD.KML.False : ''}</td>
          <td>{(data && data.OS && data.OS.KML && data.OS.KML.False) ? data.OS.KML.False : ''}</td>
        </tr>
        <tr>
          <td>Addisi</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.KML && data.OD.KML.Add) ? data.OD.KML.Add : ''}</td>
          <td>{(data && data.OS && data.OS.KML && data.OS.KML.Add) ? data.OS.KML.Add : ''}</td>
        </tr>
        <tr>
          <td>Axis</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.KML && data.OD.KML.Axis) ? data.OD.KML.Axis : ''}</td>
          <td>{(data && data.OS && data.OS.KML && data.OS.KML.Axis) ? data.OS.KML.Axis : ''}</td>
        </tr>
        <tr>
          <td>Jagger</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.KML && data.OD.KML.Jagger) ? data.OD.KML.Jagger : ''}</td>
          <td>{(data && data.OS && data.OS.KML && data.OS.KML.Jagger) ? data.OS.KML.Jagger : ''}</td>
        </tr>
        <tr>
          <td style={{ fontSize: '12pt' }}><b>Koreksi-1</b></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Koreksi-1</td>
          <td>:</td>
          <td>Sph: {(data && data.OD && data.OD.Koreksi_1 && data.OD.Koreksi_1.Sph) ? data.OD.Koreksi_1.Sph : ''} Cyl. {(data && data.OD && data.OD.Koreksi_1 && data.OD.Koreksi_1.Cyl) ? data.OD.Koreksi_1.Cyl : ''} x {(data && data.OD && data.OD.Koreksi_1 && data.OD.Koreksi_1.Axis) ? data.OD.Koreksi_1.Axis : ''}</td>
          <td>Sph: {(data && data.OS && data.OS.Koreksi_1 && data.OS.Koreksi_1.Sph) ? data.OS.Koreksi_1.Sph : ''} Cyl. {(data && data.OS && data.OS.Koreksi_1 && data.OS.Koreksi_1.Cyl) ? data.OS.Koreksi_1.Cyl : ''} x {(data && data.OS && data.OS.Koreksi_1 && data.OS.Koreksi_1.Axis) ? data.OS.Koreksi_1.Axis : ''}</td>
        </tr>
        <tr>
          <td>Visus</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.Koreksi_1 && data.OD.Koreksi_1.Va) ? data.OD.Koreksi_1.Va : ''} PD</td>
          <td>{(data && data.OS && data.OS.Koreksi_1 && data.OS.Koreksi_1.Va) ? data.OS.Koreksi_1.Va : ''} PD</td>
        </tr>
        <tr>
          <td>False</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.Koreksi_1 && data.OD.Koreksi_1.False) ? data.OD.Koreksi_1.False : ''}</td>
          <td>{(data && data.OS && data.OS.Koreksi_1 && data.OS.Koreksi_1.False) ? data.OS.Koreksi_1.False : ''}</td>
        </tr>
        <tr>
          <td>Addisi</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.Koreksi_1 && data.OD.Koreksi_1.Add) ? data.OD.Koreksi_1.Add : ''}</td>
          <td>{(data && data.OS && data.OS.Koreksi_1 && data.OS.Koreksi_1.Add) ? data.OS.Koreksi_1.Add : ''}</td>
        </tr>
        <tr>
          <td>Axis</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.Koreksi_1 && data.OD.Koreksi_1.Axis) ? data.OD.Koreksi_1.Axis : ''}</td>
          <td>{(data && data.OS && data.OS.Koreksi_1 && data.OS.Koreksi_1.Axis) ? data.OS.Koreksi_1.Axis : ''}</td>
        </tr>
        <tr>
          <td>Jagger</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.Koreksi_1 && data.OD.Koreksi_1.Jagger) ? data.OD.Koreksi_1.Jagger : ''}</td>
          <td>{(data && data.OS && data.OS.Koreksi_1 && data.OS.Koreksi_1.Jagger) ? data.OS.Koreksi_1.Jagger : ''}</td>
        </tr>
        <tr>
          <td>Adaptasi</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.Koreksi_1 && data.OD.Koreksi_1.Adaptasi) ? data.OD.Koreksi_1.Adaptasi : ''}</td>
          <td>{(data && data.OS && data.OS.Koreksi_1 && data.OS.Koreksi_1.Adaptasi) ? data.OS.Koreksi_1.Adaptasi : ''}</td>
        </tr>
        <tr>
          <td>PD Jauh</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.Koreksi_1 && data.OD.Koreksi_1.Pd_Jauh) ? data.OD.Koreksi_1.Pd_Jauh : ''}</td>
          <td>{(data && data.OS && data.OS.Koreksi_1 && data.OS.Koreksi_1.Pd_Jauh) ? data.OS.Koreksi_1.Pd_Jauh : ''}</td>
        </tr>
        <tr>
          <td>PD Dekat</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.Koreksi_1 && data.OD.Koreksi_1.Pd_Dekat) ? data.OD.Koreksi_1.Pd_Dekat : ''}</td>
          <td>{(data && data.OS && data.OS.Koreksi_1 && data.OS.Koreksi_1.Pd_Dekat) ? data.OS.Koreksi_1.Pd_Dekat : ''}</td>
        </tr>
        <tr>
          <td style={{ fontSize: '12pt' }}><b>Koreksi-2</b></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Koreksi-2</td>
          <td>:</td>
          <td>Sph: {(data && data.OD && data.OD.Koreksi_2 && data.OD.Koreksi_2.Sph) ? data.OD.Koreksi_2.Sph : ''} Cyl. {(data && data.OD && data.OD.Koreksi_2 && data.OD.Koreksi_2.Cyl) ? data.OD.Koreksi_2.Cyl : ''} x {(data && data.OD && data.OD.Koreksi_2 && data.OD.Koreksi_2.Axis) ? data.OD.Koreksi_2.Axis : ''}</td>
          <td>Sph: {(data && data.OS && data.OS.Koreksi_2 && data.OS.Koreksi_2.Sph) ? data.OS.Koreksi_2.Sph : ''} Cyl. {(data && data.OS && data.OS.Koreksi_2 && data.OS.Koreksi_2.Cyl) ? data.OS.Koreksi_2.Cyl : ''} x {(data && data.OS && data.OS.Koreksi_2 && data.OS.Koreksi_2.Axis) ? data.OS.Koreksi_2.Axis : ''}</td>
        </tr>
        <tr>
          <td>Visus</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.Koreksi_2 && data.OD.Koreksi_2.Va) ? data.OD.Koreksi_2.Va : ''} PD</td>
          <td>{(data && data.OS && data.OS.Koreksi_2 && data.OS.Koreksi_2.Va) ? data.OS.Koreksi_2.Va : ''} PD</td>
        </tr>
        <tr>
          <td>False</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.Koreksi_2 && data.OD.Koreksi_2.False) ? data.OD.Koreksi_2.False : ''}</td>
          <td>{(data && data.OS && data.OS.Koreksi_2 && data.OS.Koreksi_2.False) ? data.OS.Koreksi_2.False : ''}</td>
        </tr>
        <tr>
          <td>Addisi</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.Koreksi_2 && data.OD.Koreksi_2.Add) ? data.OD.Koreksi_2.Add : ''}</td>
          <td>{(data && data.OS && data.OS.Koreksi_2 && data.OS.Koreksi_2.Add) ? data.OS.Koreksi_2.Add : ''}</td>
        </tr>
        <tr>
          <td>Axis</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.Koreksi_2 && data.OD.Koreksi_2.Axis) ? data.OD.Koreksi_2.Axis : ''}</td>
          <td>{(data && data.OS && data.OS.Koreksi_2 && data.OS.Koreksi_2.Axis) ? data.OS.Koreksi_2.Axis : ''}</td>
        </tr>
        <tr>
          <td>Jagger</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.Koreksi_2 && data.OD.Koreksi_2.Jagger) ? data.OD.Koreksi_2.Jagger : ''}</td>
          <td>{(data && data.OS && data.OS.Koreksi_2 && data.OS.Koreksi_2.Jagger) ? data.OS.Koreksi_2.Jagger : ''}</td>
        </tr>
        <tr>
          <td>Adaptasi</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.Koreksi_2 && data.OD.Koreksi_2.Adaptasi) ? data.OD.Koreksi_2.Adaptasi : ''}</td>
          <td>{(data && data.OS && data.OS.Koreksi_2 && data.OS.Koreksi_2.Adaptasi) ? data.OS.Koreksi_2.Adaptasi : ''}</td>
        </tr>
        <tr>
          <td style={{ fontSize: '12pt' }}><b>KMB</b></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>KMB</td>
          <td>:</td>
          <td>Sph: {(data && data.OD && data.OD.KMB && data.OD.KMB.Sph) ? data.OD.KMB.Sph : ''} Cyl. {(data && data.OD && data.OD.KMB && data.OD.KMB.Cyl) ? data.OD.KMB.Cyl : ''} x {(data && data.OD && data.OD.KMB && data.OD.KMB.Axis) ? data.OD.KMB.Axis : ''}</td>
          <td>Sph: {(data && data.OS && data.OS.KMB && data.OS.KMB.Sph) ? data.OS.KMB.Sph : ''} Cyl. {(data && data.OS && data.OS.KMB && data.OS.KMB.Cyl) ? data.OS.KMB.Cyl : ''} x {(data && data.OS && data.OS.KMB && data.OS.KMB.Axis) ? data.OS.KMB.Axis : ''}</td>
        </tr>
        <tr>
          <td>Visus</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.KMB && data.OD.KMB.Va) ? data.OD.KMB.Va : ''} PD</td>
          <td>{(data && data.OS && data.OS.KMB && data.OS.KMB.Va) ? data.OS.KMB.Va : ''} PD</td>
        </tr>
        <tr>
          <td>False</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.KMB && data.OD.KMB.False) ? data.OD.KMB.False : ''}</td>
          <td>{(data && data.OS && data.OS.KMB && data.OS.KMB.False) ? data.OS.KMB.False : ''}</td>
        </tr>
        <tr>
          <td>Addisi</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.KMB && data.OD.KMB.Add) ? data.OD.KMB.Add : ''}</td>
          <td>{(data && data.OS && data.OS.KMB && data.OS.KMB.Add) ? data.OS.KMB.Add : ''}</td>
        </tr>
        <tr>
          <td>Axis</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.KMB && data.OD.KMB.Axis) ? data.OD.KMB.Axis : ''}</td>
          <td>{(data && data.OS && data.OS.KMB && data.OS.KMB.Axis) ? data.OS.KMB.Axis : ''}</td>
        </tr>
        <tr>
          <td>Jagger</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.KMB && data.OD.KMB.Jagger) ? data.OD.KMB.Jagger : ''}</td>
          <td>{(data && data.OS && data.OS.KMB && data.OS.KMB.Jagger) ? data.OS.KMB.Jagger : ''}</td>
        </tr>
        <tr>
          <td style={{ fontSize: '12pt' }}><b>RPL</b></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>RPL Streak Retinascopy</td>
          <td>:</td>
          <td>Sph: {(data && data.OD && data.OD.RPL_Streak && data.OD.RPL_Streak.Sph) ? data.OD.RPL_Streak.Sph : ''} Cyl. {(data && data.OD && data.OD.RPL_Streak && data.OD.RPL_Streak.Cyl) ? data.OD.RPL_Streak.Cyl : ''} x {(data && data.OD && data.OD.RPL_Streak && data.OD.RPL_Streak.Axis) ? data.OD.RPL_Streak.Axis : ''}</td>
          <td>Sph: {(data && data.OS && data.OS.RPL_Streak && data.OS.RPL_Streak.Sph) ? data.OS.RPL_Streak.Sph : ''} Cyl. {(data && data.OS && data.OS.RPL_Streak && data.OS.RPL_Streak.Cyl) ? data.OS.RPL_Streak.Cyl : ''} x {(data && data.OS && data.OS.RPL_Streak && data.OS.RPL_Streak.Axis) ? data.OS.RPL_Streak.Axis : ''}</td>
        </tr>
        <tr>
          <td>Visus</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.RPL_Streak && data.OD.RPL_Streak.Va) ? data.OD.RPL_Streak.Va : ''} PD</td>
          <td>{(data && data.OS && data.OS.RPL_Streak && data.OS.RPL_Streak.Va) ? data.OS.RPL_Streak.Va : ''} PD</td>
        </tr>
        <tr>
          <td>False</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.RPL_Streak && data.OD.RPL_Streak.False) ? data.OD.RPL_Streak.False : ''}</td>
          <td>{(data && data.OS && data.OS.RPL_Streak && data.OS.RPL_Streak.False) ? data.OS.RPL_Streak.False : ''}</td>
        </tr>
        <tr>
          <td>Addisi</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.RPL_Streak && data.OD.RPL_Streak.Add) ? data.OD.RPL_Streak.Add : ''}</td>
          <td>{(data && data.OS && data.OS.RPL_Streak && data.OS.RPL_Streak.Add) ? data.OS.RPL_Streak.Add : ''}</td>
        </tr>
        <tr>
          <td>Axis</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.RPL_Streak && data.OD.RPL_Streak.Axis) ? data.OD.RPL_Streak.Axis : ''}</td>
          <td>{(data && data.OS && data.OS.RPL_Streak && data.OS.RPL_Streak.Axis) ? data.OS.RPL_Streak.Axis : ''}</td>
        </tr>
        <tr>
          <td>Jagger</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.RPL_Streak && data.OD.RPL_Streak.Jagger) ? data.OD.RPL_Streak.Jagger : ''}</td>
          <td>{(data && data.OS && data.OS.RPL_Streak && data.OS.RPL_Streak.Jagger) ? data.OS.RPL_Streak.Jagger : ''}</td>
        </tr>
        <tr>
          <td>Adaptasi</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.RPL_Streak && data.OD.RPL_Streak.Adaptasi) ? data.OD.RPL_Streak.Adaptasi : ''}</td>
          <td>{(data && data.OS && data.OS.RPL_Streak && data.OS.RPL_Streak.Adaptasi) ? data.OS.RPL_Streak.Adaptasi : ''}</td>
        </tr>
        <tr>
          <td>RPL Ref Subjektif</td>
          <td>:</td>
          <td>Sph: {(data && data.OD && data.OD.RPL && data.OD.RPL.Sph) ? data.OD.RPL.Sph : ''} Cyl. {(data && data.OD && data.OD.RPL && data.OD.RPL.Cyl) ? data.OD.RPL.Cyl : ''} x {(data && data.OD && data.OD.RPL && data.OD.RPL.Axis) ? data.OD.RPL.Axis : ''}</td>
          <td>Sph: {(data && data.OS && data.OS.RPL && data.OS.RPL.Sph) ? data.OS.RPL.Sph : ''} Cyl. {(data && data.OS && data.OS.RPL && data.OS.RPL.Cyl) ? data.OS.RPL.Cyl : ''} x {(data && data.OS && data.OS.RPL && data.OS.RPL.Axis) ? data.OS.RPL.Axis : ''}</td>
        </tr>
        <tr>
          <td>Visus</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.RPL && data.OD.RPL.Va) ? data.OD.RPL.Va : ''} PD</td>
          <td>{(data && data.OS && data.OS.RPL && data.OS.RPL.Va) ? data.OS.RPL.Va : ''} PD</td>
        </tr>
        <tr>
          <td>False</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.RPL && data.OD.RPL.False) ? data.OD.RPL.False : ''}</td>
          <td>{(data && data.OS && data.OS.RPL && data.OS.RPL.False) ? data.OS.RPL.False : ''}</td>
        </tr>
        <tr>
          <td>Addisi</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.RPL && data.OD.RPL.Add) ? data.OD.RPL.Add : ''}</td>
          <td>{(data && data.OS && data.OS.RPL && data.OS.RPL.Add) ? data.OS.RPL.Add : ''}</td>
        </tr>
        <tr>
          <td>Axis</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.RPL && data.OD.RPL.Axis) ? data.OD.RPL.Axis : ''}</td>
          <td>{(data && data.OS && data.OS.RPL && data.OS.RPL.Axis) ? data.OS.RPL.Axis : ''}</td>
        </tr>
        <tr>
          <td>Jagger</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.RPL && data.OD.RPL.Jagger) ? data.OD.RPL.Jagger : ''}</td>
          <td>{(data && data.OS && data.OS.RPL && data.OS.RPL.Jagger) ? data.OS.RPL.Jagger : ''}</td>
        </tr>
        <tr>
          <td>Adaptasi</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.RPL && data.OD.RPL.Adaptasi) ? data.OD.RPL.Adaptasi : ''}</td>
          <td>{(data && data.OS && data.OS.RPL && data.OS.RPL.Adaptasi) ? data.OS.RPL.Adaptasi : ''}</td>
        </tr>
        <tr>
          <td style={{ fontSize: '12pt' }}><b>Tonometri</b></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Non-contact</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.Non_Contact) ? data.OD.Non_Contact : ''} mmHg</td>
          <td>{(data && data.OS && data.OS.Non_Contact) ? data.OS.Non_Contact : ''} mmHg</td>
        </tr>
        <tr>
          <td>Keterangan</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.Tanam_Lensa) ? data.OD.Tanam_Lensa : ''}</td>
          <td>{(data && data.OS && data.OS.Tanam_Lensa) ? data.OS.Tanam_Lensa : ''}</td>
        </tr>
        <tr>
          <td>Schiotz</td>
          <td>:</td>
          <td>{(data && data.OD && data.OD.Schiotz) ? data.OD.Schiotz : ''} mmHg</td>
          <td>{(data && data.OS && data.OS.Schiotz) ? data.OS.Schiotz : ''} mmHg</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default RoPreliminaryStudyView;
