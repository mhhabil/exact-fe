import { Fragment, useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import HaisInfectionSurveillanceForm from "./hais-infection-surveillance-form";
import HaisInfectionSurveillanceTable from "./hais-infection-surveillance-table";
import { HaisSurveillanceInfectionForm } from "../models/hais-infection-surveillance-form.model";
import { HaisSurveillanceInfectionList } from "../models/hais-infection-surveillance-list.model";

const HaisInfectionSurveillance = (props: { formData: HaisSurveillanceInfectionForm, listData: HaisSurveillanceInfectionList }) => {
  const { formData, listData } = props;
  const [activeTab, setActiveTab] = useState('1')

  const toggle = (tab: string) => {
    if (activeTab && activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <Fragment>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={(activeTab && activeTab === '1') ? 'active' : ''}
            onClick={() => toggle('1')}
          >
            Formulir Surveilans Infeksi HAIs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={(activeTab && activeTab === '2') ? 'active' : ''}
            onClick={() => toggle('2')}
          >
            Formulir Infeksi Daerah Operasi
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId='1'>
          <HaisInfectionSurveillanceForm
            data={formData}
          />
        </TabPane>
      </TabContent>
      <TabContent activeTab={activeTab}>
        <TabPane tabId='2'>
          <HaisInfectionSurveillanceTable
            data={listData}
          />
        </TabPane>
      </TabContent>
    </Fragment>
  )
}

export default HaisInfectionSurveillance;
