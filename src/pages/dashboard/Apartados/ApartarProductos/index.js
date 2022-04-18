// @flow
import { Row, Col} from 'react-bootstrap';
//import React, { useState } from 'react';
// components
import PageTitle from '../../../../components/PageTitle';


const ApartarProductos = (): React$Element<React$FragmentType> => {
  
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Dashboard' },
                    { label: 'Apartar Productos', path: '/dashboard/apartados/apartarproductos', active: true },
                ]}
                title={'Apartar Productos'}
            />
            <Row>
                <Col lg={12}>
                <h4 className="page-title">administrador de Apartar Productos</h4>
                </Col>
            </Row>
       </>
    );
};

export default ApartarProductos;