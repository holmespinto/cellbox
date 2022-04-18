// @flow
import { Row, Col} from 'react-bootstrap';
//import React, { useState } from 'react';
// components
import PageTitle from '../../../../components/PageTitle';


const ConsultarApartados = (): React$Element<React$FragmentType> => {
  
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Dashboard' },
                    { label: 'Consultar Apartados', path: '/dashboard/apartados/consultarapartados', active: true },
                ]}
                title={'Consultar Apartados'}
            />
            <Row>
                <Col lg={12}>
                <h4 className="page-title">administrador de Consultar Apartados</h4>
                </Col>
            </Row>
       </>
    );
};

export default ConsultarApartados;