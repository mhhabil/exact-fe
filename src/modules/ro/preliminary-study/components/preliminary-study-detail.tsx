const PreliminaryStudyDetail = (props: { preliminaryStudy: any }) => {

  const { preliminaryStudy } = props;

  const showRow = (key: any) => {
    return ((key.Add && key.Add !== '') ||
      (key.Axis && key.Axis !== '') ||
      (key.Cyl && key.Cyl !== '') ||
      (key.False && key.False !== '') ||
      (key.Jagger && key.Jagger !== '') ||
      (key.Pd_Dekat && key.Pd_Dekat !== '') ||
      (key.Pd_Jauh && key.Pd_Jauh !== '') ||
      (key.Select && key.Select !== '') ||
      (key.Sph && key.Sph !== '') ||
      (key.Va && key.Va !== '')
    );
  }

  return (
    <table className="table table-cppt table-data-o">
      <tbody>
        <tr>
          <td> </td>
          <td>
            <div  className="d-flex justify-content-center">
              OD
            </div>
          </td>
          <td>
            <div  className="d-flex justify-content-center">
              OS
            </div>
          </td>
        </tr>
        {
          (preliminaryStudy.form.OD?.VA || preliminaryStudy.form.OS?.VA) ? (
            <tr>
              <td>Visual Aquility</td>
              <td>{ preliminaryStudy.form.OD?.VA }</td>
              <td>{ preliminaryStudy.form.OS?.VA }</td>
            </tr>
          ) : null
        }
        {
          (preliminaryStudy.form.OD?.False || preliminaryStudy.form.OS?.False) ? (
            <tr>
              <td>False</td>
              <td>{ preliminaryStudy.form.OD?.False }</td>
              <td>{ preliminaryStudy.form.OS?.False }</td>
            </tr>
          ) : null
        }
        {
          (preliminaryStudy.form.OD?.PH || preliminaryStudy.form.OS?.PH) ? (
            <tr>
              <td>PH</td>
              <td>{ preliminaryStudy.form.OD?.PH }</td>
              <td>{ preliminaryStudy.form.OS?.PH }</td>
            </tr>
          ) : null
        }
        {
          (preliminaryStudy.form.OD?.Add || preliminaryStudy.form.OS?.Add) ? (
            <tr>
              <td>Add</td>
              <td>{ preliminaryStudy.form.OD?.Add }</td>
              <td>{ preliminaryStudy.form.OS?.Add }</td>
            </tr>
          ) : null
        }
        {
          (preliminaryStudy.form.OD?.Jagger || preliminaryStudy.form.OS?.Jagger) ? (
            <tr>
              <td>Jagger</td>
              <td>{ preliminaryStudy.form.OD?.Jagger }</td>
              <td>{ preliminaryStudy.form.OS?.Jagger }</td>
            </tr>
          ) : null
        }
        {
          ((preliminaryStudy.form.OD?.KML && showRow(preliminaryStudy.form.OD?.KML)) || (preliminaryStudy.form.OS?.KML && showRow(preliminaryStudy.form.OS?.KML))) ? (
            <>
              <tr>
                <td className="fw-bolder pt-1">KML</td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td>KML</td>
                <td>
                  { preliminaryStudy.form.OD?.KML?.Sph ? `Sph: ${ preliminaryStudy.form.OD?.KML?.Sph } ` : '' }
                  { preliminaryStudy.form.OD?.KML?.Cyl ? `Cyl: ${ preliminaryStudy.form.OD?.KML?.Cyl } x ${ preliminaryStudy.form.OD?.KML?.Axis }` : '' }
                </td>
                <td>
                  { preliminaryStudy.form.OS?.KML?.Sph ? `Sph: ${ preliminaryStudy.form.OS?.KML?.Sph } ` : '' }
                  { preliminaryStudy.form.OS?.KML?.Cyl ? `Cyl: ${ preliminaryStudy.form.OS?.KML?.Cyl } x ${ preliminaryStudy.form.OS?.KML?.Axis }` : '' }
                </td>
              </tr>
              {
                (preliminaryStudy.form.OD?.KML?.VA || preliminaryStudy.form.OS?.KML?.VA || preliminaryStudy.form.OD?.KML?.Va || preliminaryStudy.form.OS?.KML?.Va) ? (
                  <tr>
                    <td>Visus</td>
                    <td>{ preliminaryStudy.form.OD?.KML?.VA ? preliminaryStudy.form.OD?.KML?.VA : preliminaryStudy.form.OD?.KML?.Va ? preliminaryStudy.form.OD?.KML?.Va : '' }</td>
                    <td>{ preliminaryStudy.form.OS?.KML?.VA ? preliminaryStudy.form.OS?.KML?.VA : preliminaryStudy.form.OS?.KML?.Va ? preliminaryStudy.form.OS?.KML?.Va : '' }</td>
                  </tr>
                ) : null
              }
              {/* {
                (preliminaryStudy.form.OD?.KML?.Va || preliminaryStudy.form.OS?.KML?.Va) ? (
                  <tr>
                    <td>Visus</td>
                    <td>{ preliminaryStudy.form.OD?.KML?.Va }</td>
                    <td>{ preliminaryStudy.form.OS?.KML?.Va }</td>
                  </tr>
                ) : null
              } */}
              {
                (preliminaryStudy.form.OD?.KML?.Pd_Jauh || preliminaryStudy.form.OS?.KML?.Pd_Jauh) ? (
                  <tr>
                    <td>PD Jauh</td>
                    <td>{ preliminaryStudy.form.OD?.KML?.Pd_Jauh }</td>
                    <td>{ preliminaryStudy.form.OS?.KML?.Pd_Jauh }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.KML?.Pd_Dekat || preliminaryStudy.form.OS?.KML?.Pd_Dekat) ? (
                  <tr>
                    <td>PD Dekat</td>
                    <td>{ preliminaryStudy.form.OD?.KML?.Pd_Dekat }</td>
                    <td>{ preliminaryStudy.form.OS?.KML?.Pd_Dekat }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.KML?.False || preliminaryStudy.form.OS?.KML?.False) ? (
                  <tr>
                    <td>False</td>
                    <td>{ preliminaryStudy.form.OD?.KML?.False }</td>
                    <td>{ preliminaryStudy.form.OS?.KML?.False }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.KML?.Add || preliminaryStudy.form.OS?.KML?.Add) ? (
                  <tr>
                    <td>Addisi</td>
                    <td>{ preliminaryStudy.form.OD?.KML?.Add }</td>
                    <td>{ preliminaryStudy.form.OS?.KML?.Add }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.KML?.Axis || preliminaryStudy.form.OS?.KML?.Axis) ? (
                  <tr>
                    <td>Axis</td>
                    <td>{ preliminaryStudy.form.OD?.KML?.Axis }</td>
                    <td>{ preliminaryStudy.form.OS?.KML?.Axis }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.KML?.Jagger || preliminaryStudy.form.OS?.KML?.Jagger) ? (
                  <tr>
                    <td>Jagger</td>
                    <td>{ preliminaryStudy.form.OD?.KML?.Jagger }</td>
                    <td>{ preliminaryStudy.form.OS?.KML?.Jagger }</td>
                  </tr>
                ) : null
              }
            </>
          ) : null
        }
        {
          ((preliminaryStudy.form.OD?.Koreksi_1 && showRow(preliminaryStudy.form.OD?.Koreksi_1)) || (preliminaryStudy.form.OS?.Koreksi_1 && showRow(preliminaryStudy.form.OS?.Koreksi_1))) ? (
            <>
              <tr>
                <td className="fw-bolder pt-1">Koreksi 1</td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td>Koreksi 1</td>
                <td>
                  { preliminaryStudy.form.OD?.Koreksi_1?.Sph ? `Sph: ${ preliminaryStudy.form.OD?.Koreksi_1?.Sph } ` : '' }
                  { preliminaryStudy.form.OD?.Koreksi_1?.Cyl ? `Cyl: ${ preliminaryStudy.form.OD?.Koreksi_1?.Cyl } x ${ preliminaryStudy.form.OD?.Koreksi_1?.Axis }` : '' }
                </td>
                <td>
                  { preliminaryStudy.form.OS?.Koreksi_1?.Sph ? `Sph: ${ preliminaryStudy.form.OS?.Koreksi_1?.Sph } ` : '' }
                  { preliminaryStudy.form.OS?.Koreksi_1?.Cyl ? `Cyl: ${ preliminaryStudy.form.OS?.Koreksi_1?.Cyl } x ${ preliminaryStudy.form.OS?.Koreksi_1?.Axis }` : '' }
                </td>
              </tr>
              {/* {
                (preliminaryStudy.form.OD?.Koreksi_1?.Va || preliminaryStudy.form.OS?.Koreksi_1?.Va) ? (
                  <tr>
                    <td>Visus</td>
                    <td>{ preliminaryStudy.form.OD?.Koreksi_1?.Va }</td>
                    <td>{ preliminaryStudy.form.OS?.Koreksi_1?.Va }</td>
                  </tr>
                ) : null
              } */}
              {
                (preliminaryStudy.form.OD?.Koreksi_1?.VA || preliminaryStudy.form.OS?.Koreksi_1?.VA || preliminaryStudy.form.OD?.Koreksi_1?.Va || preliminaryStudy.form.OS?.Koreksi_1?.Va) ? (
                  <tr>
                    <td>BCVA</td>
                    <td>{ preliminaryStudy.form.OD?.Koreksi_1?.VA ? preliminaryStudy.form.OD?.Koreksi_1?.VA : preliminaryStudy.form.OD?.Koreksi_1?.Va ? preliminaryStudy.form.OD?.Koreksi_1?.Va : '' }</td>
                    <td>{ preliminaryStudy.form.OS?.Koreksi_1?.VA ? preliminaryStudy.form.OS?.Koreksi_1?.VA : preliminaryStudy.form.OS?.Koreksi_1?.Va ? preliminaryStudy.form.OS?.Koreksi_1?.Va : '' }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.Koreksi_1?.Pd_Jauh || preliminaryStudy.form.OS?.Koreksi_1?.Pd_Jauh) ? (
                  <tr>
                    <td>PD Jauh</td>
                    <td>{ preliminaryStudy.form.OD?.Koreksi_1?.Pd_Jauh }</td>
                    <td>{ preliminaryStudy.form.OS?.Koreksi_1?.Pd_Jauh }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.Koreksi_1?.Pd_Dekat || preliminaryStudy.form.OS?.Koreksi_1?.Pd_Dekat) ? (
                  <tr>
                    <td>PD Dekat</td>
                    <td>{ preliminaryStudy.form.OD?.Koreksi_1?.Pd_Dekat }</td>
                    <td>{ preliminaryStudy.form.OS?.Koreksi_1?.Pd_Dekat }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.Koreksi_1?.False || preliminaryStudy.form.OS?.Koreksi_1?.False) ? (
                  <tr>
                    <td>False</td>
                    <td>{ preliminaryStudy.form.OD?.Koreksi_1?.False }</td>
                    <td>{ preliminaryStudy.form.OS?.Koreksi_1?.False }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.Koreksi_1?.Add || preliminaryStudy.form.OS?.Koreksi_1?.Add) ? (
                  <tr>
                    <td>Addisi</td>
                    <td>{ preliminaryStudy.form.OD?.Koreksi_1?.Add }</td>
                    <td>{ preliminaryStudy.form.OS?.Koreksi_1?.Add }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.Koreksi_1?.Axis || preliminaryStudy.form.OS?.Koreksi_1?.Axis) ? (
                  <tr>
                    <td>Axis</td>
                    <td>{ preliminaryStudy.form.OD?.Koreksi_1?.Axis }</td>
                    <td>{ preliminaryStudy.form.OS?.Koreksi_1?.Axis }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.Koreksi_1?.Jagger || preliminaryStudy.form.OS?.Koreksi_1?.Jagger) ? (
                  <tr>
                    <td>Jagger</td>
                    <td>{ preliminaryStudy.form.OD?.Koreksi_1?.Jagger }</td>
                    <td>{ preliminaryStudy.form.OS?.Koreksi_1?.Jagger }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.Koreksi_1?.Adaptasi || preliminaryStudy.form.OS?.Koreksi_1?.Adaptasi) ? (
                  <tr>
                    <td>Adaptasi</td>
                    <td className={(preliminaryStudy.form.OD?.Koreksi_1?.Adaptasi === 'Pusing / Tidak Nyaman') ? 'text-warning' : 'text-success'}>{ preliminaryStudy.form.OD?.Koreksi_1?.Adaptasi }</td>
                    <td className={(preliminaryStudy.form.OS?.Koreksi_1?.Adaptasi === 'Pusing / Tidak Nyaman') ? 'text-warning' : 'text-success'}>{ preliminaryStudy.form.OS?.Koreksi_1?.Adaptasi }</td>
                  </tr>
                ) : null
              }
            </>
          ) : null
        }
        {
          ((preliminaryStudy.form.OD?.Koreksi_2 && showRow(preliminaryStudy.form.OD?.Koreksi_2)) || (preliminaryStudy.form.OS?.Koreksi_2 && showRow(preliminaryStudy.form.OS?.Koreksi_2))) ? (
            <>
              <tr>
                <td className="fw-bolder pt-1">Koreksi 2</td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td>Koreksi 2</td>
                <td>
                  { preliminaryStudy.form.OD?.Koreksi_2?.Sph ? `Sph: ${ preliminaryStudy.form.OD?.Koreksi_2?.Sph } ` : '' }
                  { preliminaryStudy.form.OD?.Koreksi_2?.Cyl ? `Cyl: ${ preliminaryStudy.form.OD?.Koreksi_2?.Cyl } x ${ preliminaryStudy.form.OD?.Koreksi_2?.Axis }` : '' }
                </td>
                <td>
                  { preliminaryStudy.form.OS?.Koreksi_2?.Sph ? `Sph: ${ preliminaryStudy.form.OS?.Koreksi_2?.Sph } ` : '' }
                  { preliminaryStudy.form.OS?.Koreksi_2?.Cyl ? `Cyl: ${ preliminaryStudy.form.OS?.Koreksi_2?.Cyl } x ${ preliminaryStudy.form.OS?.Koreksi_2?.Axis }` : '' }
                </td>
              </tr>
              {/* {
                (preliminaryStudy.form.OD?.Koreksi_2?.Va || preliminaryStudy.form.OS?.Koreksi_2?.Va) ? (
                  <tr>
                    <td>Visus</td>
                    <td>{ preliminaryStudy.form.OD?.Koreksi_2?.Va }</td>
                    <td>{ preliminaryStudy.form.OS?.Koreksi_2?.Va }</td>
                  </tr>
                ) : null
              } */}
              {
                (preliminaryStudy.form.OD?.Koreksi_2?.VA || preliminaryStudy.form.OS?.Koreksi_2?.VA || preliminaryStudy.form.OD?.Koreksi_2?.Va || preliminaryStudy.form.OS?.Koreksi_2?.Va) ? (
                  <tr>
                    <td>BCVA</td>
                    <td>{ preliminaryStudy.form.OD?.Koreksi_2?.VA ? preliminaryStudy.form.OD?.Koreksi_2?.VA : preliminaryStudy.form.OD?.Koreksi_2?.Va ? preliminaryStudy.form.OD?.Koreksi_2?.Va : '' }</td>
                    <td>{ preliminaryStudy.form.OS?.Koreksi_2?.VA ? preliminaryStudy.form.OS?.Koreksi_2?.VA : preliminaryStudy.form.OS?.Koreksi_2?.Va ? preliminaryStudy.form.OS?.Koreksi_2?.Va : '' }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.Koreksi_2?.Pd_Jauh || preliminaryStudy.form.OS?.Koreksi_2?.Pd_Jauh) ? (
                  <tr>
                    <td>PD Jauh</td>
                    <td>{ preliminaryStudy.form.OD?.Koreksi_2?.Pd_Jauh }</td>
                    <td>{ preliminaryStudy.form.OS?.Koreksi_2?.Pd_Jauh }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.Koreksi_2?.Pd_Dekat || preliminaryStudy.form.OS?.Koreksi_2?.Pd_Dekat) ? (
                  <tr>
                    <td>PD Dekat</td>
                    <td>{ preliminaryStudy.form.OD?.Koreksi_2?.Pd_Dekat }</td>
                    <td>{ preliminaryStudy.form.OS?.Koreksi_2?.Pd_Dekat }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.Koreksi_2?.False || preliminaryStudy.form.OS?.Koreksi_2?.False) ? (
                  <tr>
                    <td>False</td>
                    <td>{ preliminaryStudy.form.OD?.Koreksi_2?.False }</td>
                    <td>{ preliminaryStudy.form.OS?.Koreksi_2?.False }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.Koreksi_2?.Add || preliminaryStudy.form.OS?.Koreksi_2?.Add) ? (
                  <tr>
                    <td>Addisi</td>
                    <td>{ preliminaryStudy.form.OD?.Koreksi_2?.Add }</td>
                    <td>{ preliminaryStudy.form.OS?.Koreksi_2?.Add }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.Koreksi_2?.Axis || preliminaryStudy.form.OS?.Koreksi_2?.Axis) ? (
                  <tr>
                    <td>Axis</td>
                    <td>{ preliminaryStudy.form.OD?.Koreksi_2?.Axis }</td>
                    <td>{ preliminaryStudy.form.OS?.Koreksi_2?.Axis }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.Koreksi_2?.Jagger || preliminaryStudy.form.OS?.Koreksi_2?.Jagger) ? (
                  <tr>
                    <td>Jagger</td>
                    <td>{ preliminaryStudy.form.OD?.Koreksi_2?.Jagger }</td>
                    <td>{ preliminaryStudy.form.OS?.Koreksi_2?.Jagger }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.Koreksi_2?.Adaptasi || preliminaryStudy.form.OS?.Koreksi_2?.Adaptasi) ? (
                  <tr>
                    <td>Adaptasi</td>
                    <td className={(preliminaryStudy.form.OD?.Koreksi_2?.Adaptasi === 'Pusing / Tidak Nyaman') ? 'text-warning' : 'text-success'}>{ preliminaryStudy.form.OD?.Koreksi_2?.Adaptasi }</td>
                    <td className={(preliminaryStudy.form.OS?.Koreksi_2?.Adaptasi === 'Pusing / Tidak Nyaman') ? 'text-warning' : 'text-success'}>{ preliminaryStudy.form.OS?.Koreksi_2?.Adaptasi }</td>
                  </tr>
                ) : null
              }
            </>
          ) : null
        }
        {
          ((preliminaryStudy.form.OD?.KMB && showRow(preliminaryStudy.form.OD?.KMB)) || (preliminaryStudy.form.OS?.KMB && showRow(preliminaryStudy.form.OS?.KMB))) ? (
            <>
              <tr>
                <td className="fw-bolder pt-1">KMB</td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td>KMB</td>
                <td>
                  { preliminaryStudy.form.OD?.KMB?.Sph ? `Sph: ${ preliminaryStudy.form.OD?.KMB?.Sph } ` : '' } { preliminaryStudy.form.OD?.KMB?.Cyl ? `Cyl: ${ preliminaryStudy.form.OD?.KMB?.Cyl } x ${ preliminaryStudy.form.OD?.KMB?.Axis }` : '' }
                </td>
                <td>
                  { preliminaryStudy.form.OS?.KMB?.Sph ? `Sph: ${ preliminaryStudy.form.OS?.KMB?.Sph } ` : '' } { preliminaryStudy.form.OS?.KMB?.Cyl ? `Cyl: ${ preliminaryStudy.form.OS?.KMB?.Cyl } x ${ preliminaryStudy.form.OS?.KMB?.Axis }` : '' }
                </td>
              </tr>
              {/* {
                (preliminaryStudy.form.OD?.KMB?.Va || preliminaryStudy.form.OS?.KMB?.Va) ? (
                  <tr>
                    <td>Visus</td>
                    <td>{ preliminaryStudy.form.OD?.KMB?.Va }</td>
                    <td>{ preliminaryStudy.form.OS?.KMB?.Va }</td>
                  </tr>
                ) : null
              } */}
              {
                (preliminaryStudy.form.OD?.KMB?.Pd_Jauh || preliminaryStudy.form.OS?.KMB?.Pd_Jauh) ? (
                  <tr>
                    <td>PD Jauh</td>
                    <td>{ preliminaryStudy.form.OD?.KMB?.Pd_Jauh }</td>
                    <td>{ preliminaryStudy.form.OS?.KMB?.Pd_Jauh }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.KMB?.Pd_Dekat || preliminaryStudy.form.OS?.KMB?.Pd_Dekat) ? (
                  <tr>
                    <td>PD Dekat</td>
                    <td>{ preliminaryStudy.form.OD?.KMB?.Pd_Dekat }</td>
                    <td>{ preliminaryStudy.form.OS?.KMB?.Pd_Dekat }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.KMB?.False || preliminaryStudy.form.OD?.KMB?.False) ? (
                  <tr>
                    <td>False</td>
                    <td>{ preliminaryStudy.form.OD?.KMB?.False }</td>
                    <td>{ preliminaryStudy.form.OS?.KMB?.False }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.KMB?.Add || preliminaryStudy.form.OS?.KMB?.Add) ? (
                  <tr>
                    <td>Addisi</td>
                    <td>{ preliminaryStudy.form.OD?.KMB?.Add }</td>
                    <td>{ preliminaryStudy.form.OS?.KMB?.Add }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.KMB?.Axis || preliminaryStudy.form.OS?.KMB?.Axis) ? (
                  <tr>
                    <td>Axis</td>
                    <td>{ preliminaryStudy.form.OD?.KMB?.Axis }</td>
                    <td>{ preliminaryStudy.form.OS?.KMB?.Axis }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.KMB?.Jagger || preliminaryStudy.form.OS?.KMB?.Jagger) ? (
                  <tr>
                    <td>Jagger</td>
                    <td>{ preliminaryStudy.form.OD?.KMB?.Jagger }</td>
                    <td>{ preliminaryStudy.form.OS?.KMB?.Jagger }</td>
                  </tr>
                ) : null
              }
            </>
          ) : null
        }

        {
          ((preliminaryStudy.form.OD?.RPL_Streak && showRow(preliminaryStudy.form.OD?.RPL_Streak)) || (preliminaryStudy.form.OS?.RPL_Streak && showRow(preliminaryStudy.form.OS?.RPL_Streak))) ? (
            <>
              <tr>
                <td className="fw-bolder pt-1">RPL Streak Retinascopy</td>
                <td> </td>
                <td> </td>
              </tr>
              {
                (preliminaryStudy.form.OD?.RPL_Streak?.Va_Aquity || preliminaryStudy.form.OS?.RPL_Streak?.Va_Aquity) ? (
                  <tr>
                    <td>Visual Aquility</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_Streak?.Va_Aquity }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_Streak?.Va_Aquity }</td>
                  </tr>
                ) : null
              }
              <tr>
                <td>RPL Streak Retinascopy</td>
                <td>
                  { preliminaryStudy.form.OD?.RPL_Streak?.Sph ? `Sph: ${ preliminaryStudy.form.OD?.RPL_Streak?.Sph } ` : '' }
                  { preliminaryStudy.form.OD?.RPL_Streak?.Cyl ? `Cyl: ${ preliminaryStudy.form.OD?.RPL_Streak?.Cyl } x ${ preliminaryStudy.form.OD?.RPL_Streak?.Axis }` : '' }
                </td>
                <td>
                  { preliminaryStudy.form.OS?.RPL_Streak?.Sph ? `Sph: ${ preliminaryStudy.form.OS?.RPL_Streak?.Sph } ` : '' }
                  { preliminaryStudy.form.OS?.RPL_Streak?.Cyl ? `Cyl: ${ preliminaryStudy.form.OS?.RPL_Streak?.Cyl } x ${ preliminaryStudy.form.OS?.RPL_Streak?.Axis }` : '' }
                </td>
              </tr>
              {
                (preliminaryStudy.form.OD?.RPL_Streak?.VA || preliminaryStudy.form.OD?.RPL_Streak?.VA || preliminaryStudy.form.OD?.RPL_Streak?.Va || preliminaryStudy.form.OS?.RPL_Streak?.Va) ? (
                  <tr>
                    <td>BCVA</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_Streak?.VA ? preliminaryStudy.form.OD?.RPL_Streak?.VA : preliminaryStudy.form.OD?.RPL_Streak?.Va ? preliminaryStudy.form.OD?.RPL_Streak?.Va : '' }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_Streak?.VA ? preliminaryStudy.form.OS?.RPL_Streak?.VA : preliminaryStudy.form.OS?.RPL_Streak?.Va ? preliminaryStudy.form.OS?.RPL_Streak?.Va : '' }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL_Streak?.Pd_Jauh || preliminaryStudy.form.OD?.RPL_Streak?.Pd_Jauh) ? (
                  <tr>
                    <td>PD Jauh</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_Streak?.Pd_Jauh }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_Streak?.Pd_Jauh }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL_Streak?.Pd_Dekat || preliminaryStudy.form.OS?.RPL_Streak?.Pd_Dekat) ? (
                  <tr>
                    <td>PD Dekat</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_Streak?.Pd_Dekat }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_Streak?.Pd_Dekat }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL_Streak?.False || preliminaryStudy.form.OS?.RPL_Streak?.False) ? (
                  <tr>
                    <td>False</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_Streak?.False }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_Streak?.False }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL_Streak?.Axis || preliminaryStudy.form.OD?.RPL_Streak?.Axis) ? (
                  <tr>
                    <td>Axis</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_Streak?.Axis }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_Streak?.Axis }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL_Streak?.Adaptasi || preliminaryStudy.form.OS?.RPL_Streak?.Adaptasi) ? (
                  <tr>
                    <td>Adaptasi</td>
                    <td className={(preliminaryStudy.form.OD?.RPL_Streak?.Adaptasi === 'Pusing / Tidak Nyaman') ? 'text-warning' : 'text-success'}>{ preliminaryStudy.form.OD?.RPL_Streak?.Adaptasi }</td>
                    <td className={(preliminaryStudy.form.OS?.RPL_Streak?.Adaptasi === 'Pusing / Tidak Nyaman') ? 'text-warning' : 'text-success'}>{ preliminaryStudy.form.OS?.RPL_Streak?.Adaptasi }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL_Streak?.Add || preliminaryStudy.form.OS?.RPL_Streak?.Add) ? (
                  <tr>
                    <td>Add</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_Streak?.Add }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_Streak?.Add }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL_Streak?.Jagger || preliminaryStudy.form.OS?.RPL_Streak?.Jagger) ? (
                  <tr>
                    <td>Jagger</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_Streak?.Jagger }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_Streak?.Jagger }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL_Streak?.PH || preliminaryStudy.form.OS?.RPL_Streak?.PH) ? (
                  <tr>
                    <td>PH</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_Streak?.PH }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_Streak?.PH }</td>
                  </tr>
                ) : null
              }
            </>
          ) : null
        }

        {
          ((preliminaryStudy.form.OD?.RPL_Streak_2 && showRow(preliminaryStudy.form.OD?.RPL_Streak_2)) || (preliminaryStudy.form.OS?.RPL_Streak_2 && showRow(preliminaryStudy.form.OS?.RPL_Streak_2))) ? (
            <>
              <tr>
                <td className="fw-bolder pt-1">RPL Streak Retinascopy 2</td>
                <td> </td>
                <td> </td>
              </tr>
              {
                (preliminaryStudy.form.OD?.RPL_Streak_2?.Va_Aquity || preliminaryStudy.form.OS?.RPL_Streak_2?.Va_Aquity) ? (
                  <tr>
                    <td>Visual Aquility</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_Streak_2?.Va_Aquity }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_Streak_2?.Va_Aquity }</td>
                  </tr>
                ) : null
              }
              <tr>
                <td>RPL Streak Retinascopy</td>
                <td>
                  { preliminaryStudy.form.OD?.RPL_Streak_2?.Sph ? `Sph: ${ preliminaryStudy.form.OD?.RPL_Streak_2?.Sph } ` : '' }
                  { preliminaryStudy.form.OD?.RPL_Streak_2?.Cyl ? `Cyl: ${ preliminaryStudy.form.OD?.RPL_Streak_2?.Cyl } x ${ preliminaryStudy.form.OD?.RPL_Streak_2?.Axis }` : '' }
                </td>
                <td>
                  { preliminaryStudy.form.OS?.RPL_Streak_2?.Sph ? `Sph: ${ preliminaryStudy.form.OS?.RPL_Streak_2?.Sph } ` : '' }
                  { preliminaryStudy.form.OS?.RPL_Streak_2?.Cyl ? `Cyl: ${ preliminaryStudy.form.OS?.RPL_Streak_2?.Cyl } x ${ preliminaryStudy.form.OS?.RPL_Streak_2?.Axis }` : '' }
                </td>
              </tr>
              {
                (preliminaryStudy.form.OD?.RPL_Streak_2?.VA || preliminaryStudy.form.OD?.RPL_Streak_2?.VA || preliminaryStudy.form.OD?.RPL_Streak_2?.Va || preliminaryStudy.form.OS?.RPL_Streak_2?.Va) ? (
                  <tr>
                    <td>BCVA</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_Streak_2?.VA ? preliminaryStudy.form.OD?.RPL_Streak_2?.VA : preliminaryStudy.form.OD?.RPL_Streak_2?.Va ? preliminaryStudy.form.OD?.RPL_Streak_2?.Va : '' }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_Streak_2?.VA ? preliminaryStudy.form.OS?.RPL_Streak_2?.VA : preliminaryStudy.form.OS?.RPL_Streak_2?.Va ? preliminaryStudy.form.OS?.RPL_Streak_2?.Va : '' }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL_Streak_2?.Pd_Jauh || preliminaryStudy.form.OD?.RPL_Streak_2?.Pd_Jauh) ? (
                  <tr>
                    <td>PD Jauh</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_Streak_2?.Pd_Jauh }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_Streak_2?.Pd_Jauh }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL_Streak_2?.Pd_Dekat || preliminaryStudy.form.OS?.RPL_Streak_2?.Pd_Dekat) ? (
                  <tr>
                    <td>PD Dekat</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_Streak_2?.Pd_Dekat }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_Streak_2?.Pd_Dekat }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL_Streak_2?.False || preliminaryStudy.form.OS?.RPL_Streak_2?.False) ? (
                  <tr>
                    <td>False</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_Streak_2?.False }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_Streak_2?.False }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL_Streak_2?.Axis || preliminaryStudy.form.OD?.RPL_Streak_2?.Axis) ? (
                  <tr>
                    <td>Axis</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_Streak_2?.Axis }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_Streak_2?.Axis }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL_Streak_2?.Adaptasi || preliminaryStudy.form.OS?.RPL_Streak_2?.Adaptasi) ? (
                  <tr>
                    <td>Adaptasi</td>
                    <td className={(preliminaryStudy.form.OD?.RPL_Streak_2?.Adaptasi === 'Pusing / Tidak Nyaman') ? 'text-warning' : 'text-success'}>{ preliminaryStudy.form.OD?.RPL_Streak_2?.Adaptasi }</td>
                    <td className={(preliminaryStudy.form.OS?.RPL_Streak_2?.Adaptasi === 'Pusing / Tidak Nyaman') ? 'text-warning' : 'text-success'}>{ preliminaryStudy.form.OS?.RPL_Streak_2?.Adaptasi }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL_Streak_2?.Add || preliminaryStudy.form.OS?.RPL_Streak_2?.Add) ? (
                  <tr>
                    <td>Add</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_Streak_2?.Add }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_Streak_2?.Add }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL_Streak_2?.Jagger || preliminaryStudy.form.OS?.RPL_Streak_2?.Jagger) ? (
                  <tr>
                    <td>Jagger</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_Streak_2?.Jagger }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_Streak_2?.Jagger }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL_Streak_2?.PH || preliminaryStudy.form.OS?.RPL_Streak_2?.PH) ? (
                  <tr>
                    <td>PH</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_Streak_2?.PH }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_Streak_2?.PH }</td>
                  </tr>
                ) : null
              }
            </>
          ) : null
        }

        {
          ((preliminaryStudy.form.OD?.RPL && showRow(preliminaryStudy.form.OD?.RPL)) || (preliminaryStudy.form.OS?.RPL && showRow(preliminaryStudy.form.OS?.RPL))) ? (
            <>
              <tr>
                <td className="fw-bolder pt-1">RPL Ref Subjektif</td>
                <td> </td>
                <td> </td>
              </tr>
              {
                (preliminaryStudy.form.OD?.RPL?.Va_Aquity || preliminaryStudy.form.OS?.RPL?.Va_Aquity) ? (
                  <tr>
                    <td>Visual Aquility</td>
                    <td>{ preliminaryStudy.form.OD?.RPL?.Va_Aquity }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL?.Va_Aquity }</td>
                  </tr>
                ) : null
              }
              <tr>
                <td>RPL Ref Subjektif</td>
                <td>
                  { preliminaryStudy.form.OD?.RPL?.Sph ? `Sph: ${ preliminaryStudy.form.OD?.RPL?.Sph } ` : '' }
                  { preliminaryStudy.form.OD?.RPL?.Cyl ? `Cyl: ${ preliminaryStudy.form.OD?.RPL?.Cyl } x ${ preliminaryStudy.form.OD?.RPL?.Axis }` : '' }
                </td>
                <td>
                  { preliminaryStudy.form.OS?.RPL?.Sph ? `Sph: ${ preliminaryStudy.form.OS?.RPL?.Sph } ` : '' }
                  { preliminaryStudy.form.OS?.RPL?.Cyl ? `Cyl: ${ preliminaryStudy.form.OS?.RPL?.Cyl } x ${ preliminaryStudy.form.OS?.RPL?.Axis }` : '' }
                </td>
              </tr>
              {
                (preliminaryStudy.form.OD?.RPL?.VA || preliminaryStudy.form.OS?.RPL?.VA || preliminaryStudy.form.OD?.RPL?.Va || preliminaryStudy.form.OS?.RPL?.Va) ? (
                  <tr>
                    <td>BCVA</td>
                    <td>{ preliminaryStudy.form.OD?.RPL?.VA ? preliminaryStudy.form.OD?.RPL?.VA : preliminaryStudy.form.OD?.RPL?.Va ? preliminaryStudy.form.OD?.RPL?.Va : '' }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL?.VA ? preliminaryStudy.form.OS?.RPL?.VA : preliminaryStudy.form.OS?.RPL?.Va ? preliminaryStudy.form.OS?.RPL?.Va : '' }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL?.Pd_Jauh || preliminaryStudy.form.OS?.RPL?.Pd_Jauh) ? (
                  <tr>
                    <td>PD Jauh</td>
                    <td>{ preliminaryStudy.form.OD?.RPL?.Pd_Jauh }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL?.Pd_Jauh }</td>
                  </tr>
                ) : null
              }
              {/* {
                (preliminaryStudy.form.OD?.RPL?.Va || preliminaryStudy.form.OS?.RPL?.Va) ? (
                  <tr>
                    <td>Visus</td>
                    <td>{ preliminaryStudy.form.OD?.RPL?.Va }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL?.Va }</td>
                  </tr>
                ) : null
              } */}
              {
                (preliminaryStudy.form.OD?.RPL?.False || preliminaryStudy.form.OS?.RPL?.False) ? (
                  <tr>
                    <td>False</td>
                    <td>{ preliminaryStudy.form.OD?.RPL?.False }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL?.False }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL?.Axis || preliminaryStudy.form.OS?.RPL?.Axis) ? (
                  <tr>
                    <td>Axis</td>
                    <td>{ preliminaryStudy.form.OD?.RPL?.Axis }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL?.Axis }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL?.Adaptasi || preliminaryStudy.form.OS?.RPL?.Adaptasi) ? (
                  <tr>
                    <td>Adaptasi</td>
                    <td className={(preliminaryStudy.form.OD?.RPL?.Adaptasi === 'Pusing / Tidak Nyaman') ? 'text-warning' : 'text-success'}>{ preliminaryStudy.form.OD?.RPL?.Adaptasi }</td>
                    <td className={(preliminaryStudy.form.OS?.RPL?.Adaptasi === 'Pusing / Tidak Nyaman') ? 'text-warning' : 'text-success'}>{ preliminaryStudy.form.OS?.RPL?.Adaptasi }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL?.Pd_Dekat || preliminaryStudy.form.OS?.RPL?.Pd_Dekat) ? (
                  <tr>
                    <td>PD Dekat</td>
                    <td>{ preliminaryStudy.form.OD?.RPL?.Pd_Dekat }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL?.Pd_Dekat }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL?.Add || preliminaryStudy.form.OS?.RPL?.Add) ? (
                  <tr>
                    <td>Add</td>
                    <td>{ preliminaryStudy.form.OD?.RPL?.Add }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL?.Add }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL?.Jagger || preliminaryStudy.form.OS?.RPL?.Jagger) ? (
                  <tr>
                    <td>Jagger</td>
                    <td>{ preliminaryStudy.form.OD?.RPL?.Jagger }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL?.Jagger }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL?.PH || preliminaryStudy.form.OS?.RPL?.PH) ? (
                  <tr>
                    <td>PH</td>
                    <td>{ preliminaryStudy.form.OD?.RPL?.PH }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL?.PH }</td>
                  </tr>
                ) : null
              }
            </>
          ) : null
        }
        
        {
          ((preliminaryStudy.form.OD?.RPL_2 && showRow(preliminaryStudy.form.OD?.RPL_2)) || (preliminaryStudy.form.OS?.RPL_2 && showRow(preliminaryStudy.form.OS?.RPL_2))) ? (
            <>
              <tr>
                <td className="fw-bolder pt-1">RPL Ref Subjektif 2</td>
                <td> </td>
                <td> </td>
              </tr>
              {
                (preliminaryStudy.form.OD?.RPL_2?.Va_Aquity || preliminaryStudy.form.OS?.RPL_2?.Va_Aquity) ? (
                  <tr>
                    <td>Visual Aquility</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_2?.Va_Aquity }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_2?.Va_Aquity }</td>
                  </tr>
                ) : null
              }
              <tr>
                <td>RPL Ref Subjektif</td>
                <td>
                  { preliminaryStudy.form.OD?.RPL_2?.Sph ? `Sph: ${ preliminaryStudy.form.OD?.RPL_2?.Sph } ` : '' }
                  { preliminaryStudy.form.OD?.RPL_2?.Cyl ? `Cyl: ${ preliminaryStudy.form.OD?.RPL_2?.Cyl } x ${ preliminaryStudy.form.OD?.RPL_2?.Axis }` : '' }
                </td>
                <td>
                  { preliminaryStudy.form.OS?.RPL_2?.Sph ? `Sph: ${ preliminaryStudy.form.OS?.RPL_2?.Sph } ` : '' }
                  { preliminaryStudy.form.OS?.RPL_2?.Cyl ? `Cyl: ${ preliminaryStudy.form.OS?.RPL_2?.Cyl } x ${ preliminaryStudy.form.OS?.RPL_2?.Axis }` : '' }
                </td>
              </tr>
              {
                (preliminaryStudy.form.OD?.RPL_2?.VA || preliminaryStudy.form.OS?.RPL_2?.VA || preliminaryStudy.form.OD?.RPL_2?.Va || preliminaryStudy.form.OS?.RPL_2?.Va) ? (
                  <tr>
                    <td>BCVA</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_2?.VA ? preliminaryStudy.form.OD?.RPL_2?.VA : preliminaryStudy.form.OD?.RPL_2?.Va ? preliminaryStudy.form.OD?.RPL_2?.Va : '' }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_2?.VA ? preliminaryStudy.form.OS?.RPL_2?.VA : preliminaryStudy.form.OS?.RPL_2?.Va ? preliminaryStudy.form.OS?.RPL_2?.Va : '' }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL_2?.Pd_Jauh || preliminaryStudy.form.OS?.RPL_2?.Pd_Jauh) ? (
                  <tr>
                    <td>PD Jauh</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_2?.Pd_Jauh }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_2?.Pd_Jauh }</td>
                  </tr>
                ) : null
              }
              {/* {
                (preliminaryStudy.form.OD?.RPL_2?.Va || preliminaryStudy.form.OS?.RPL_2?.Va) ? (
                  <tr>
                    <td>Visus</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_2?.Va }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_2?.Va }</td>
                  </tr>
                ) : null
              } */}
              {
                (preliminaryStudy.form.OD?.RPL_2?.False || preliminaryStudy.form.OS?.RPL_2?.False) ? (
                  <tr>
                    <td>False</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_2?.False }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_2?.False }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL_2?.Axis || preliminaryStudy.form.OS?.RPL_2?.Axis) ? (
                  <tr>
                    <td>Axis</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_2?.Axis }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_2?.Axis }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL?.Adaptasi || preliminaryStudy.form.OS?.RPL_2?.Adaptasi) ? (
                  <tr>
                    <td>Adaptasi</td>
                    <td className={(preliminaryStudy.form.OD?.RPL_2?.Adaptasi === 'Pusing / Tidak Nyaman') ? 'text-warning' : 'text-success'}>{ preliminaryStudy.form.OD?.RPL_2?.Adaptasi }</td>
                    <td className={(preliminaryStudy.form.OS?.RPL_2?.Adaptasi === 'Pusing / Tidak Nyaman') ? 'text-warning' : 'text-success'}>{ preliminaryStudy.form.OS?.RPL_2?.Adaptasi }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL_2?.Pd_Dekat || preliminaryStudy.form.OS?.RPL_2?.Pd_Dekat) ? (
                  <tr>
                    <td>PD Dekat</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_2?.Pd_Dekat }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_2?.Pd_Dekat }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL_2?.Add || preliminaryStudy.form.OS?.RPL_2?.Add) ? (
                  <tr>
                    <td>Add</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_2?.Add }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_2?.Add }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL_2?.Jagger || preliminaryStudy.form.OS?.RPL_2?.Jagger) ? (
                  <tr>
                    <td>Jagger</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_2?.Jagger }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_2?.Jagger }</td>
                  </tr>
                ) : null
              }
              {
                (preliminaryStudy.form.OD?.RPL_2?.PH || preliminaryStudy.form.OS?.RPL_2?.PH) ? (
                  <tr>
                    <td>PH</td>
                    <td>{ preliminaryStudy.form.OD?.RPL_2?.PH }</td>
                    <td>{ preliminaryStudy.form.OS?.RPL_2?.PH }</td>
                  </tr>
                ) : null
              }
            </>
          ) : null
        }

        <tr>
          <td className="fw-bolder pt-1">Tonometri</td>
          <td> </td>
          <td> </td>
        </tr>
        {
          (preliminaryStudy.form.OD?.Non_Contact || preliminaryStudy.form.OS?.Non_Contact) ? (
            <tr>
              <td>Non-contact</td>
              <td className={(preliminaryStudy.form.OD?.Non_Contact && parseInt(preliminaryStudy.form.OD?.Non_Contact) < 10) ? 'text-warning' : (preliminaryStudy.form.OD?.Non_Contact && parseInt(preliminaryStudy.form.OD?.Non_Contact) > 20) ? 'text-danger' : ''}>{ preliminaryStudy.form.OD?.Non_Contact } mmHg</td>
              <td className={(preliminaryStudy.form.OS?.Non_Contact && parseInt(preliminaryStudy.form.OS?.Non_Contact) < 10) ? 'text-warning' : (preliminaryStudy.form.OS?.Non_Contact && parseInt(preliminaryStudy.form.OS?.Non_Contact) > 20) ? 'text-danger' : ''}>{ preliminaryStudy.form.OS?.Non_Contact } mmHg</td>
            </tr>
          ) : null
        }
        {
          (preliminaryStudy.form.OD?.Tanam_Lensa || preliminaryStudy.form.OS?.Tanam_Lensa) ? (
            <tr>
              <td>Keterangan</td>
              <td>{ preliminaryStudy.form.OD?.Tanam_Lensa }</td>
              <td>{ preliminaryStudy.form.OS?.Tanam_Lensa }</td>
            </tr>
          ) : null
        }
        {
          (preliminaryStudy.form.OD?.Schiotz || preliminaryStudy.form.OS?.Schiotz) ? (
            <tr>
              <td>Schiotz</td>
              <td className={(preliminaryStudy.form.OD?.Schiotz && parseInt(preliminaryStudy.form.OD?.Schiotz) < 10) ? 'text-warning' : (preliminaryStudy.form.OD?.Schiotz && parseInt(preliminaryStudy.form.OD?.Schiotz) > 20) ? 'text-danger' : ''}>{ preliminaryStudy.form.OD?.Schiotz } mmHg</td>
              <td className={(preliminaryStudy.form.OS?.Schiotz && parseInt(preliminaryStudy.form.OS?.Schiotz) < 10) ? 'text-warning' : (preliminaryStudy.form.OS?.Schiotz && parseInt(preliminaryStudy.form.OS?.Schiotz) > 20) ? 'text-danger' : ''}>{ preliminaryStudy.form.OS?.Schiotz } mmHg</td>
            </tr>
          ) : null
        }
        {
          (preliminaryStudy.form.OD?.Keterangan_Tono || preliminaryStudy.form.OS?.Keterangan_Tono) ? (
            <tr>
              <td>Keterangan Tono</td>
              <td>{ preliminaryStudy.form.OD?.Keterangan_Tono }</td>
              <td>{ preliminaryStudy.form.OS?.Keterangan_Tono }</td>
            </tr>
          ) : null
        }
        {
          (preliminaryStudy.form.Catatan_Lain) ? (
            <tr>
              <td>Catatan Lainnya</td>
              <td>{ preliminaryStudy.form.Catatan_Lain } </td>
              {/* <td>{ preliminaryStudy.form.OS?.Schiotz } </td> */}
            </tr>
          ) : null
        }
      </tbody>
    </table>
  );
}

export default PreliminaryStudyDetail;
