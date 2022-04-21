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
        cliente: row.cells[2].value ? row.cells[2].value : row.cells[2].value,
        dni: row.cells[3].value ? row.cells[3].value : row.cells[3].value,
        celular: row.cells[4].value ? row.cells[4].value : row.cells[4].value,
        email: row.cells[5].value ? row.cells[5].value : row.cells[5].value,
        giro: row.cells[6].value ? row.cells[6].value : row.cells[6].value,
        limitecrediticio: row.cells[7].value ? row.cells[7].value : row.cells[7].value,
        direccion: row.cells[8].value ? row.cells[8].value : row.cells[8].value,
        status: row.cells[9].value ? row.cells[9].value : row.cells[9].value,
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
                const url = `https://api.compucel.co/v1/?&accion=clientes&opcion=eliminar&${response}`;
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

            const url = `https://api.compucel.co/v1/?&accion=clientes&opcion=actualizar&${response}`;
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
                        <Row>
                            <Col sm={6}>
                                <Form.Group className="mb-3" controlId="cliente">
                                    <Form.Label>Cliente</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="cliente"
                                        placeholder="Digite el cliente"
                                        value={temas.cliente}
                                        onChange={(e) => setTemas({ ...temas, cliente: e.target.value })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, digite el cliente.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col sm={6}>
                                <Form.Group className="mb-3" controlId="dni">
                                    <Form.Label>Dni</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="dni"
                                        placeholder="Digite el Dni"
                                        value={temas.dni}
                                        onChange={(e) => setTemas({ ...temas, dni: e.target.value })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, digite el Dni.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col sm={6}>
                                <Form.Group className="mb-3" controlId="celular">
                                    <Form.Label>Celular</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="celular"
                                        placeholder="Digite el Celular"
                                        value={temas.celular}
                                        onChange={(e) => setTemas({ ...temas, celular: e.target.value })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, digite el Celular.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col sm={6}>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="email"
                                        placeholder="Digite el Email"
                                        value={temas.email}
                                        onChange={(e) => setTemas({ ...temas, email: e.target.value })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, digite el Email.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col sm={6}>
                                <Form.Group className="mb-3" controlId="giro">
                                    <Form.Label>Giro</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="giro"
                                        placeholder="Digite el Giro"
                                        value={temas.giro}
                                        onChange={(e) => setTemas({ ...temas, giro: e.target.value })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, digite el Giro.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col sm={6}>
                                <Form.Group className="mb-3" controlId="limitecrediticio">
                                    <Form.Label>Limite Crediticio</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="limitecrediticio"
                                        placeholder="Digite Limite Crediticio"
                                        value={temas.limitecrediticio}
                                        onChange={(e) => setTemas({ ...temas, limitecrediticio: e.target.value })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, digite el Limite Crediticio.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col sm={12}>
                                <Form.Group className="mb-3" controlId="direccion">
                                    <Form.Label>Direccion</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="direccion"
                                        placeholder="Digite la Direccion"
                                        value={temas.direccion}
                                        onChange={(e) => setTemas({ ...temas, direccion: e.target.value })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, digite la Direccion.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="button-list">
                            <Button type="button" disabled={temas.message ? 'true' : ''} onClick={actualizar}>
                                ✓
                            </Button>
                            {temas.message && (
                                <Button type="button" className="btn-icon" onClick={Close}>
                                    <i className={classNames('mdi', ['mdi-window-close'], 'ms-1', 'me-1')}></i>
                                </Button>
                            )}
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
        Header: 'Cliente',
        accessor: 'cliente',
        sort: true,
    },

    {
        Header: 'Dni',
        accessor: 'dni',
        sort: true,
    },

    {
        Header: 'Celular',
        accessor: 'celular',
        sort: true,
    },

    {
        Header: 'Email',
        accessor: 'email',
        sort: true,
    },

    {
        Header: 'Giro',
        accessor: 'giro',
        sort: true,
    },

    {
        Header: 'Limite Crediticio',
        accessor: 'limitecrediticio',
        sort: true,
    },

    {
        Header: 'Direccion',
        accessor: 'direccion',
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

const FormClientes = (props) => {
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

            const url = `https://api.compucel.co/v1/?&accion=clientes&opcion=guardar&${response}`;
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
                                <Col sm={6}>
                                    <Form.Group className="mb-3" controlId="cliente">
                                        <Form.Label>Cliente</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="cliente"
                                            placeholder="Digite el cliente"
                                            value={temas.cliente}
                                            onChange={(e) => setTemas({ ...temas, cliente: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, digite el cliente.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col sm={6}>
                                    <Form.Group className="mb-3" controlId="dni">
                                        <Form.Label>Dni</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="dni"
                                            placeholder="Digite el Dni"
                                            value={temas.dni}
                                            onChange={(e) => setTemas({ ...temas, dni: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, digite el Dni.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col sm={6}>
                                    <Form.Group className="mb-3" controlId="celular">
                                        <Form.Label>Celular</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="celular"
                                            placeholder="Digite el Celular"
                                            value={temas.celular}
                                            onChange={(e) => setTemas({ ...temas, celular: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, digite el Celular.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col sm={6}>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="email"
                                            placeholder="Digite el Email"
                                            value={temas.email}
                                            onChange={(e) => setTemas({ ...temas, email: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, digite email.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col sm={6}>
                                    <Form.Group className="mb-3" controlId="giro">
                                        <Form.Label>Giro</Form.Label>
                                        <Form.Control
                                            required
                                            type="number"
                                            name="giro"
                                            placeholder="Digite el giro"
                                            value={temas.giro}
                                            onChange={(e) => setTemas({ ...temas, giro: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, digite el Giro.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col sm={6}>
                                    <Form.Group className="mb-3" controlId="limitecrediticio">
                                        <Form.Label>Limite De Credito</Form.Label>
                                        <Form.Control
                                            required
                                            type="number"
                                            name="limitecrediticio"
                                            placeholder="Digite el Limite Crediticio"
                                            value={temas.limitecrediticio}
                                            onChange={(e) => setTemas({ ...temas, limitecrediticio: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, digite el Limite Crediticios.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col sm={6}>
                                    <Form.Group className="mb-3" controlId="direccion">
                                        <Form.Label>Direccion</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="direccion"
                                            placeholder="Digite el direccion"
                                            value={temas.direccion}
                                            onChange={(e) => setTemas({ ...temas, direccion: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, digite la direccion.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <div className="button-list">
                                <Button type="button" disabled={temas.message ? 'true' : ''} onClick={guardar}>
                                    ✓
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
type clientes = {
    selected: number,
    id: number,
    marca: string,
    onClick: (date: any) => void,
    onState: (date: Array) => void,
};
const ComponentClientes = (props: clientes): React$Element<any> => {
    const [records, openClientes] = useState([]);
    const [data, cargarClientes] = useState([]);
    const [signUpModal, setSignUpModal] = useState(false);

    useEffect(() => {
        const url = `https://api.compucel.co/v1/?&accion=clientes&opcion=consultar`;
        const syllab = api.getDatos(`${url}`);
        syllab.then(function (resp) {
            if (resp) {
                //console.log(resp);
                openClientes(resp);
            } else {
                const records = [
                    {
                        id: 1,
                        marca: 'No existen la marca',
                        status: 'null',
                    },
                ];
                cargarClientes(records);
            }
        });
    }, [props]);

    useEffect(() => {
        if (records && records.length > 0) {
            //const cur = JSON.parse(records);
            const mapped = [];
            mapped.push(records);
            cargarClientes(mapped[0]);
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
                                    <FormClientes
                                        data_marca={props.data_marca}
                                        data_presentacion={props.data_presentacion}
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

export default ComponentClientes;
