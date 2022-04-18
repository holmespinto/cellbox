// @flow
import { Row, Col} from 'react-bootstrap';
//import React, { useState } from 'react';
// components
import PageTitle from '../../../../components/PageTitle';


const Tecnicos = (): React$Element<React$FragmentType> => {
  
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Dashboard' },
                    { label: 'Taller Tecnicos', path: '/dashboard/taller/tecnicos', active: true },
                ]}
                title={'Taller Tecnicos'}
            />
            <Row>
                <Col lg={12}>
                <h4 className="page-title">administrador de Taller Tecnicos</h4>
                </Col>
            </Row>
       </>
    );
};

export default Tecnicos;