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
        codigobarra: row.cells[2].value ? row.cells[2].value : row.cells[2].value,
        producto: row.cells[3].value ? row.cells[3].value : row.cells[3].value,
        marca: row.cells[4].value ? row.cells[4].value : row.cells[4].value,
        presentacion: row.cells[5].value ? row.cells[5].value : row.cells[5].value,
        vence: row.cells[6].value ? row.cells[6].value : row.cells[6].value,
        cantidad: row.cells[7].value ? row.cells[7].value : row.cells[7].value,
        status: row.cells[8].value ? row.cells[8].value : row.cells[8].value,
    };

    const [signUpModal, setSignUpModal] = useState(false);
    const [validated, setValidated] = useState(false);
    const [temas, setTemas] = useState(INIT_TEMAS);

    const toggleSignUp = () => {
        setSignUpModal(!signUpModal);
    };

    const eliminar = () => {
        let response;
        if (temas) {
            var queryString = temas
                ? Object.keys(temas)
                      .map((key) => key + '=' + temas[key])
                      .join('&')
                : '';
        }
        response = queryString;
        swal({
            title: 'Esta seguro que desea eliminar el registro?',
            text: '',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then((d) => {
            if (d) {
                const url = `https://api.compucel.co/v1/?&accion=perecederos&opcion=eliminar&${response}`;
                const respuesta = api.getDatos(`${url}`);
                respuesta.then(function (resp) {
                    const records = resp;
                    if (records) {
                        swal('' + records[0].menssage + '');
                    }
                });
            } else {
                //swal('Your imaginary file is safe!');
            }
        });
    };

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

            const url = `https://api.compucel.co/v1/?&accion=perecederos&opcion=actualizar&${response}`;
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
                        <Form.Group className="mb-3" controlId="barra">
                            <Form.Label>Barra</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="barra"
                                placeholder="Digite la barra"
                                value={temas.barra}
                                onChange={(e) => setTemas({ ...temas, barra: e.target.value })}
                            />
                            <Form.Control.Feedback type="invalid">Por favor, digite la barra.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="producto">
                            <Form.Label>Producto</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="producto"
                                placeholder="Digite el producto"
                                value={temas.producto}
                                onChange={(e) => setTemas({ ...temas, producto: e.target.value })}
                            />
                            <Form.Control.Feedback type="invalid">Por favor, digite el producto.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="producto">
                            <Form.Label>Producto</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="producto"
                                placeholder="Digite el producto"
                                value={temas.producto}
                                onChange={(e) => setTemas({ ...temas, producto: e.target.value })}
                            />
                            <Form.Control.Feedback type="invalid">Por favor, digite el producto.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="marca">
                            <Form.Label>Marca</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="marca"
                                placeholder="Digite la marca"
                                value={temas.marca}
                                onChange={(e) => setTemas({ ...temas, marca: e.target.value })}
                            />
                            <Form.Control.Feedback type="invalid">Por favor, digite la marca.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="presentacion">
                            <Form.Label>Presentacion</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="presentacion"
                                placeholder="Digite la presentacion"
                                value={temas.presentacion}
                                onChange={(e) => setTemas({ ...temas, presentacion: e.target.value })}
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor, digite la presentacion.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="vence">
                            <Form.Label>Vence</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="vence"
                                placeholder="Digite cuando Vence"
                                value={temas.vence}
                                onChange={(e) => setTemas({ ...temas, vence: e.target.value })}
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor, digite cuando Vence.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="cantidad">
                            <Form.Control
                                required
                                type="text"
                                name="cantidad"
                                placeholder="Digite cuanta cantidad"
                                value={temas.cantidad}
                                onChange={(e) => setTemas({ ...temas, cantidad: e.target.value })}
                            />
                            <Form.Control.Feedback type="invalid">Por favor, digite la cantidad.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="status">
                            <Form.Label>Status</Form.Label>
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
                                placeholder="Selecione el status..."
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
        accessor: 'codigobarra',
        sort: true,
    },
    {
        Header: 'Producto',
        accessor: 'producto',
        sort: true,
    },
    {
        Header: 'Marca',
        accessor: 'marca',
        sort: true,
    },
    {
        Header: 'Presentacion',
        accessor: 'presentacion',
        sort: true,
    },

    {
        Header: 'Vence',
        accessor: 'vence',
        sort: true,
    },

    {
        Header: 'Cantidad',
        accessor: 'cantidad',
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

const FormPerecedero = (props) => {
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

            const url = `https://api.compucel.co/v1/?&accion=perecederos&opcion=guardar&${response}`;
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
                            <Form.Group className="mb-3" controlId="marca">
                                <Form.Label>Nombre de la Marca</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="marca"
                                    placeholder="Digite la marca"
                                    value={temas.marca}
                                    onChange={(e) => setTemas({ ...temas, marca: e.target.value })}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Por favor, digite la marca.
                                </Form.Control.Feedback>
                            </Form.Group>
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
type perecederos = {
    selected: number,
    id: number,
    marca: string,
    onClick: (date: any) => void,
    onState: (date: Array) => void,
};
const ComponentPerecederos = (props: perecederos): React$Element<any> => {
    const [records, openPerecederos] = useState([]);
    const [data, cargarPerecederos] = useState([]);
    const [signUpModal, setSignUpModal] = useState(false);

    useEffect(() => {
        const url = `https://api.compucel.co/v1/?&accion=perecederos&opcion=consultar`;
        const syllab = api.getDatos(`${url}`);
        syllab.then(function (resp) {
            if (resp) {
                //console.log(resp);
                openPerecederos(resp);
            } else {
                const records = [
                    {
                        id: 1,
                        marca: 'No existen la marca',
                        status: 'null',
                    },
                ];
                cargarPerecederos(records);
            }
        });
    }, [props]);

    useEffect(() => {
        if (records && records.length > 0) {
            //const cur = JSON.parse(records);
            const mapped = [];
            mapped.push(records);
            cargarPerecederos(mapped[0]);
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
                            <h4 className="header-title">Perecederos:</h4>

                            <Row>
                                <Col sm={4}>
                                    <FormPerecedero
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

export default ComponentPerecederos;
