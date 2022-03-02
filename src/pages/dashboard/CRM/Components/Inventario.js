// @flow
import React, { useState } from 'react';
import { Row, Col, Card, Table,Button,Modal } from 'react-bootstrap';
import classNames from 'classnames';
import FormInventario from './FormInventario';
// components
// import logodark from '../../../assets/images/logo-dark.png';

// dummy records
const records = [
    { id: 1, firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
    { id: 2, firstName: 'Jacob', lastName: 'Thornton', username: '@fat' },
    { id: 3, firstName: 'Dave', lastName: 'G', username: '@dave' },
    { id: 4, firstName: 'Nik', lastName: 'N', username: '@nikn' },
    { id: 5, firstName: 'Shreyu', lastName: 'Navadiya', username: '@sn' },
];




 
    /**
     * Show/hide the modal
     */

const BasicTable = () => {
    const [modal, setModal] = useState(false);
    
    const toggle = () => {
        
        setModal(!modal);
    };

    return (
        
        <Card>
            <Card.Body>
                
                <h4 className="header-title">Invetario</h4>
                <Button type="button" variant="info" onClick={toggle}>
                        <i className="dripicons-plus me-1"></i> <span></span>
                    </Button>

                   <Modal show={modal} onHide={toggle}>
                        <Modal.Header
                            onHide={toggle}
                            closeButton
                            className={classNames('modal-filled')}>
                            <h4 className="modal-title">Filled Modal</h4>
                        </Modal.Header>
                        <Modal.Body className={classNames('modal-filled')}>
                       
                            <p>
                            <FormInventario/>
                            </p>
                        </Modal.Body>
                        <Modal.Footer className={classNames('modal-filled')}>
                            <Button variant="light" onClick={toggle}>
                                Close
                            </Button>{' '}
                            <Button variant="outline-light" onClick={toggle}>
                                Save changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    
                <Table className="mb-0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{record.id}</th>
                                    <td>{record.firstName}</td>
                                    <td>{record.lastName}</td>
                                    <td>{record.username}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
        
            </Card.Body>
        </Card>
    );
};


const Inventario = (props): React$Element<React$FragmentType> => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={12}>
                    <BasicTable/>
                 
                </Col>
            </Row>

        </React.Fragment>
    );
};


export default Inventario;
