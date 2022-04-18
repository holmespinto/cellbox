// @flow
import { Row, Col} from 'react-bootstrap';
//import React, { useState } from 'react';
// components
import PageTitle from '../../../../components/PageTitle';


const RealizarCompras = (): React$Element<React$FragmentType> => {
  
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Dashboard' },
                    { label: 'RealizarCompras', path: '/dashboard/compras/realizarcompras', active: true },
                ]}
                title={'Realizar Compras'}
            />
            <Row>
                <Col lg={12}>
                <h4 className="page-title">administrador de Realizar Compras</h4>
                </Col>
            </Row>
       </>
    );
};

export default RealizarCompras;
