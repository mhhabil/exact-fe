import { Button } from "reactstrap";
import { IHowToUse, IMedicine } from "@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model";
import { IMedsPackage } from "../models/meds-package.model";
import { MedsPackageModal } from "@shared/meds-package/components";
import { Plus } from "react-feather";
import { useState } from "react";

const MedsPackage = (props: { data: Array<IMedsPackage> | undefined, allMeds: Array<IMedicine> | undefined, allHtu: Array<IHowToUse> | undefined, onSelectPackage: any, disabled?: boolean }) => {
  const { data, allMeds, allHtu, onSelectPackage, disabled } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        type="button"
        style={{ padding: '4px', marginTop: '8px' }}
        disabled={disabled}
        onClick={() => setIsOpen(true)}
      >
        <Plus style={{ marginRight: '5px' }} size={15} />
        <span className="align-middle ml-50">Paket Obat</span>
      </Button>
      {
        data && allMeds && allHtu && (
          <MedsPackageModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onSelect={(selected: any) => onSelectPackage(selected)}
            {...{ data, allMeds, allHtu }}
          />
        )
      }
    </>
  )
}

export default MedsPackage;
