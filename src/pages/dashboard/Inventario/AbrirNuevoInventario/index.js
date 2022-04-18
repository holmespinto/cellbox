// @flow
import { Row, Col} from 'react-bootstrap';
//import React, { useState } from 'react';
// components
import PageTitle from '../../../../components/PageTitle';


const AbrirNuevoInventario = (): React$Element<React$FragmentType> => {
  
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Dashboard' },
                    { label: 'Abrir Nuevo Inventario', path: '/dashboard/inventario/abrirnuevoinventario', active: true },
                ]}
                title={'Abrir nuevo inventario'}
            />
            <Row>
                <Col lg={12}>
                <h4 className="page-title">administrador de Abrir Nuevo Inventario</h4>
                </Col>
            </Row>
       </>
    );
};

export default AbrirNuevoInventario;