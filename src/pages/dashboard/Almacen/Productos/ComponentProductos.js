// @flow
import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
//import {logodark} from '../../../../assets/images/logo-dark.png';
import Select from 'react-select';
import swal from 'sweetalert';
// components

import Table from '../../../../components/Table';
//import swal from 'sweetalert';
import { APICore } from '../../../../helpers/api/apiCore';
const api = new APICore();
/* status column render */
const StatusColumn = ({ row }) => {
    return (
        <React.Fragment>
            <span
                className={classNames('badge', {
                    'bg-success': row.original.status,
                    'bg-danger': !row.original.status,
                })}>
                {row.original.status ? 'Active' : 'Deactivated'}
            </span>
        </React.Fragment>
    );
};
/* action column render */
const ActionColumn = ({ row }) => {
    const INIT_TEMAS = {
        id: row.cells[1].value ? row.cells[1].value : row.cells[1].value,
        codigo: row.cells[2].value ? row.cells[2].value : row.cells[2].value,
        producto: row.cells[3].value ? row.cells[3].value : row.cells[3].value,
        marca: row.cells[4].value ? row.cells[4].value : row.cells[4].value,
        presentacion: row.cells[5].value ? row.cells[5].value : row.cells[5].value,
        stockminimo: row.cells[6].value ? row.cells[6].value : row.cells[6].value,
        stock: row.cells[7].value ? row.cells[7].value : row.cells[7].value,
        preciocompra: row.cells[8].value ? row.cells[8].value : row.cells[8].value,
        precioventa: row.cells[9].value ? row.cells[9].value : row.cells[9].value,
        status: row.cells[10].value ? row.cells[10].value : row.cells[10].value,
    };

    const [signUpModal, setSignUpModal] = useState(false);
    const [validated, setValidated] = useState(false);
    const [temas, setTemas] = useState(INIT_TEMAS);

    const toggleSignUp = () => {
        setSignUpModal(!signUpModal);
    };

    const eliminar = () => {};

    const actualizar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        if (validated) {
            let response;
            if (temas) {
                var queryString = temas
                    ? Object.keys(temas)
                          .map((key) => key + '=' + temas[key])
                          .join('&')
                    : '';
            }
            response = queryString;

            const url = `https://api.compucel.co/v1/?&accion=productos&opcion=actualizar&${response}`;
            const respuesta = api.getDatos(`${url}`);
            respuesta.then(function (resp) {
                if (resp) {
                    swal('' + resp[0].menssage + '');
                }
            });
        }
    };

    const Close = (e) => {
        e.preventDefault();
        setSignUpModal(false);
        setTemas([]);
    };
    //console.log(row);
    return (
        <React.Fragment>
            <Modal show={signUpModal} onHide={toggleSignUp}>
                <Modal.Body>
                    <Form validated={validated}>
                        <Form.Group className="mb-3" controlId="categoria">
                            <Form.Label>Categoria</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="categoria"
                                placeholder="Digite la categoria"
                                value={temas.categoria}
                                onChange={(e) => setTemas({ ...temas, categoria: e.target.value })}
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor, digite la categoria.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="status">
                            <Form.Label>Periodo</Form.Label>
                            <Select
                                type="select"
                                name="status"
                                required
                                className="react-select"
                                classNamePrefix="react-select"
                                onChange={(e) => setTemas({ ...temas, status: e.value })}
                                options={[
                                    { value: temas.status, label: 'Estado: ' + temas.status + '' },
                                    { value: 'Active', label: 'Activo' },
                                    { value: 'Deactivated', label: 'Inactivo' },
                                ]}
                                placeholder="Selecione el periodo..."
                                selected={temas.status}
                            />
                            <Form.Control.Feedback type="invalid">Por favor, digite el status.</Form.Control.Feedback>
                        </Form.Group>
                        <div className="button-list">
                            <Button type="button" onClick={actualizar}>
                                +
                            </Button>

                            <Button type="button" className="btn-icon" onClick={Close}>
                                <i className={classNames('mdi', ['mdi-window-close'], 'ms-1', 'me-1')}></i>
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            <Link to="#" className="action-icon" onClick={() => toggleSignUp()}>
                {' '}
                <i className="mdi mdi-square-edit-outline"></i>
            </Link>
            <Link to="#" className="action-icon" onClick={() => eliminar()}>
                {' '}
                <i className="mdi mdi-delete"></i>
            </Link>
        </React.Fragment>
    );
};
const columns = [
    {
        Header: 'Action',
        accessor: 'action',
        sort: false,
        classes: 'table-action',
        Cell: ActionColumn,
    },
    {
        Header: 'ID',
        accessor: 'id',
        sort: true,
    },
    {
        Header: 'Código',
        accessor: 'codigo',
        sort: true,
    },
    {
        Header: 'Productos',
        accessor: 'productos',
        sort: true,
    },
    {
        Header: 'Marcas',
        accessor: 'marca',
        sort: true,
    },
    {
        Header: 'Presentacion',
        accessor: 'presentacion',
        sort: true,
    },
    {
        Header: 'S.Minimo',
        accessor: 'stockminimo',
        sort: true,
    },
    {
        Header: 'Stock',
        accessor: 'stock',
        sort: true,
    },
    {
        Header: 'P.Compra',
        accessor: 'preciocompra',
        sort: true,
    },
    {
        Header: 'Precio',
        accessor: 'precioventa',
        sort: true,
    },
    {
        Header: 'Status',
        accessor: 'status',
        sort: true,
        Cell: StatusColumn,
    },
];
const sizePerPageList = [
    {
        text: '5',
        value: 5,
    },
    {
        text: '10',
        value: 10,
    },
    {
        text: '25',
        value: 25,
    },
];

const FormProductos = (props) => {
    const [validated, setValidated] = useState(false);
    const [temas, setTemas] = useState([]);

    const guardar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        if (validated) {
            let response;
            if (temas) {
                var queryString = temas
                    ? Object.keys(temas)
                          .map((key) => key + '=' + temas[key])
                          .join('&')
                    : '';
            }
            response = queryString;

            const url = `https://api.compucel.co/v1/?&accion=productos&opcion=guardar&${response}`;
            const respuesta = api.getDatos(`${url}`);
            respuesta.then(function (resp) {
                if (resp) {
                    swal('' + resp[0].menssage + '');
                }
            });
        }
    };

    return (
        <Card>
            <Card.Body>
                {/* Sign up Modal */}
                <Modal show={props.signUpModal} onHide={props.toggleSignUp}>
                    <Modal.Body>
                        <div className="text-center mt-2 mb-4">
                            <a href="/">
                                <span></span>
                                <span></span>
                            </a>
                        </div>
                        <Form validated={validated}>
                            <Row>
                                <Col sm={12}>
                                    <Form.Group className="mb-3" controlId="categoria">
                                        <Form.Label>Nombre del Producto</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="producto"
                                            placeholder="Digite el producto"
                                            value={temas.producto}
                                            onChange={(e) => setTemas({ ...temas, producto: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, digite el producto.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <Form.Group className="mb-3" controlId="categoria">
                                        <Form.Label>Categoria</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="categoria"
                                            placeholder="Digite la categoria"
                                            value={temas.categoria}
                                            onChange={(e) => setTemas({ ...temas, categoria: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, digite la categoria.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col sm={6}>
                                    {' '}
                                    <Form.Group className="mb-3" controlId="categoria">
                                        <Form.Label>Categoria</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="categoria"
                                            placeholder="Digite la categoria"
                                            value={temas.categoria}
                                            onChange={(e) => setTemas({ ...temas, categoria: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, digite la categoria.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <Form.Group className="mb-3" controlId="status">
                                        <Form.Label>Periodo</Form.Label>
                                        <Select
                                            type="select"
                                            name="status"
                                            required
                                            className="react-select"
                                            classNamePrefix="react-select"
                                            onChange={(e) => setTemas({ ...temas, status: e.value })}
                                            options={[
                                                { value: temas.status, label: 'Estado: ' + temas.status + '' },
                                                { value: 'Active', label: 'Activo' },
                                                { value: 'Deactivated', label: 'Inactivo' },
                                            ]}
                                            placeholder="Selecione el periodo..."
                                            selected={temas.status}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, digite el status.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group className="mb-3" controlId="status">
                                        <Form.Label>Periodo</Form.Label>
                                        <Select
                                            type="select"
                                            name="status"
                                            required
                                            className="react-select"
                                            classNamePrefix="react-select"
                                            onChange={(e) => setTemas({ ...temas, status: e.value })}
                                            options={[
                                                { value: temas.status, label: 'Estado: ' + temas.status + '' },
                                                { value: 'Active', label: 'Activo' },
                                                { value: 'Deactivated', label: 'Inactivo' },
                                            ]}
                                            placeholder="Selecione el periodo..."
                                            selected={temas.status}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, digite el status.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="button-list">
                                <Button type="button" disabled={temas.message ? 'true' : ''} onClick={guardar}>
                                    +
                                </Button>
                                {temas.message && (
                                    <Button type="button" className="btn-icon" onClick={props.Close}>
                                        <i className={classNames('mdi', ['mdi-window-close'], 'ms-1', 'me-1')}></i>
                                    </Button>
                                )}
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal>
            </Card.Body>
        </Card>
    );
};
type productos = {
    selected: number,
    id: number,
    categoria: string,
    onClick: (date: any) => void,
    onState: (date: Array) => void,
};
const ComponetProductos = (props: productos): React$Element<any> => {
    const [records, openProductos] = useState([]);
    const [data, cargarProductos] = useState([]);
    const [signUpModal, setSignUpModal] = useState(false);

    useEffect(() => {
        const url = `https://api.compucel.co/v1/?&accion=productos&opcion=consultar`;
        const syllab = api.getDatos(`${url}`);
        syllab.then(function (resp) {
            if (resp) {
                //console.log(resp);
                openProductos(resp);
            } else {
                const records = [
                    {
                        id: 1,
                        categoria: 'No existen Productos cargadas a este  curso',
                        status: 'null',
                    },
                ];
                cargarProductos(records);
            }
        });
    }, [props]);

    useEffect(() => {
        if (records && records.length > 0) {
            //const cur = JSON.parse(records);
            const mapped = [];
            mapped.push(records);
            cargarProductos(mapped[0]);
        }
    }, [records]);

    const toggleSignUp = () => {
        setSignUpModal(!signUpModal);
    };
    const Close = (e) => {
        e.preventDefault();
        setSignUpModal(false);
        // agregarsetTemas([]);
    };
    //const data =[{id: '1', categoria:'SIN CATEGORIA'}];
    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Productos:</h4>

                            <Row>
                                <Col sm={4}>
                                    <FormProductos
                                        signUpModal={signUpModal}
                                        Close={Close}
                                        toggleSignUp={toggleSignUp}
                                    />
                                </Col>
                                <Col sm={8}>
                                    <div className="text-sm-end">
                                        <Button className="btn btn-success mb-2 me-1" onClick={toggleSignUp}>
                                            <i className="mdi mdi-cog-outline"></i>
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                            <Table
                                columns={columns}
                                data={data}
                                pageSize={5}
                                sizePerPageList={sizePerPageList}
                                isSortable={true}
                                pagination={true}
                                theadClass="table-light"
                                searchBoxClass="mt-2 mb-3"
                                isSearchable={true}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ComponetProductos;
