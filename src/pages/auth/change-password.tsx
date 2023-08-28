import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { ChangePassword } from '@src/modules/auth/components';
import { Fragment } from 'react';
import { PageTitleLabel } from '@shared/label';
import dynamic from 'next/dynamic';

export const config = {
  unstable_runtimeJS: false,
}

const ChangePasswordPage = dynamic(() => import('@modules/auth/components/change-password-page'), {
  ssr: true,
});

export default ChangePasswordPage;
