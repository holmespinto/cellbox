// @flow
import { Row, Col} from 'react-bootstrap';
//import React, { useState } from 'react';
// components
import PageTitle from '../../../../components/PageTitle';


const OrdenarTaller = (): React$Element<React$FragmentType> => {
  
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Dashboard' },
                    { label: 'Ordenar Taller', path:'/dashboard/taller/ordenartaller', active: true },
                ]}
                title={'Ordenar Taller'}
            />
            <Row>
                <Col lg={12}>
                <h4 className="page-title">administrador de Ordenar Talleres</h4>
                </Col>
            </Row>
       </>
    );
};

export default OrdenarTaller;