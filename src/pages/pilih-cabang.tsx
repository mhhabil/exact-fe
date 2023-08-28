import { fetchCompanies, handleAuthorizedCompany } from '@src/modules/select-company/stores/select-company.store';
import { Fragment, useEffect, useState } from "react";
import { ICompanyDetail } from '@src/modules/select-company/models/companies.model';
import { SelectCompany } from '@src/modules/select-company/components';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';

const PilihCabang = () => {

  const { userData } = useAppSelector(state => state.auth);
  const { authorizedCompany, companies } = useAppSelector(state => state.selectCompany);
  const [userCompanies, setUserCompanies] = useState<Array<ICompanyDetail> | undefined>(undefined);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!companies) {
      dispatch(fetchCompanies());
    }
  })

  useEffect(() => {
    if (!authorizedCompany && userData) {
      dispatch(handleAuthorizedCompany(userData.companyList));
    }
  })

  useEffect(() => {
    if (companies && authorizedCompany) {
      const authorized = companies.filter((val: ICompanyDetail) => {
        return authorizedCompany.includes(val.code);
      })
      setUserCompanies(authorized);
    }
  }, [authorizedCompany, companies])
  return (
    <Fragment>
      {
        userCompanies && (
          <SelectCompany
            userCompanies={userCompanies}
          />
        )
      }
    </Fragment>
  )
}

export default PilihCabang;
