// @flow
import { Row, Col, Card } from 'react-bootstrap';
//import React, { useState } from 'react';
// components
import PageTitle from '../../../../components/PageTitle';
import ComponentProductos from './ComponentProductos';
const Productos = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Dashboard' },
                    { label: 'Categorias', path: '/dashboard/almacen/productos', active: true },
                ]}
                title={'Productos'}
            />
            <Row>
                <Col lg={12}>
                    <ComponentProductos />
                </Col>
            </Row>
        </>
    );
};

export default Productos;
