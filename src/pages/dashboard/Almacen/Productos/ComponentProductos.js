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
import { environment } from '../../environments/environments';
import { options_categorias, options_marcas, options_presentacion } from '../constant';
//import swal from 'sweetalert';
import { APICore } from '../../../../helpers/api/apiCore';
const api = new APICore();
const accion = 'productos';

console.log(options_marcas);
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
        codigobarra: row.cells[3].value ? row.cells[3].value : row.cells[3].value,
        nombreproducto: row.cells[4].value ? row.cells[4].value : row.cells[4].value,
        marca: row.cells[5].value ? row.cells[5].value : row.cells[5].value,
        presentacion: row.cells[6].value ? row.cells[6].value : row.cells[6].value,
        stockminimo: row.cells[7].value ? row.cells[7].value : row.cells[7].value,
        stock: row.cells[8].value ? row.cells[8].value : row.cells[8].value,
        preciocompra: row.cells[9].value ? row.cells[9].value : row.cells[9].value,
        precioventa: row.cells[10].value ? row.cells[10].value : row.cells[10].value,
        categoria: row.cells[11].value ? row.cells[11].value : row.cells[11].value,
        status: row.cells[11].value ? row.cells[11].value : row.cells[11].value,
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
                const url = `${environment.baseURL}?&accion=${accion}&opcion=${environment.opEliminar}&${response}`;
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

            const url = `${environment.baseURL}?&accion=${accion}&opcion=${environment.opActualizar}${response}`;
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
    return (
        <React.Fragment>
            <Modal show={signUpModal} onHide={toggleSignUp}>
                <Modal.Body>
                    <Form validated={validated}>
                        <Row>
                            <Col sm={6}>
                                <Form.Group className="mb-3" controlId="codigo">
                                    <Form.Label>Codigo</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="codigo"
                                        placeholder="Digite el codigo"
                                        value={temas.codigo}
                                        onChange={(e) => setTemas({ ...temas, codigo: e.target.value })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, digite el codigo.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col sm={6}>
                                <Form.Group className="mb-3" controlId="codigobarra">
                                    <Form.Label>Codigo de Barra</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="codigobarra"
                                        placeholder="Digite el codigo de barra"
                                        value={temas.codigobarra}
                                        onChange={(e) => setTemas({ ...temas, codigobarra: e.target.value })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, digite el codigo de barra.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group className="mb-3" controlId="nombreproducto">
                                    <Form.Label>Nombre Producto</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="nombreproducto"
                                        placeholder="Digite el codigo de barra"
                                        value={temas.codigobarra}
                                        onChange={(e) => setTemas({ ...temas, nombreproducto: e.target.value })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, digite el nombre producto.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col sm={6}>
                                {' '}
                                <Form.Group className="mb-3" controlId="stockminimo">
                                    <Form.Label>Stock Minimo</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="stockminimo"
                                        placeholder="Digite el stock minimo"
                                        value={temas.stockminimo}
                                        onChange={(e) => setTemas({ ...temas, stockminimo: e.target.value })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, digite el stock minimo.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col sm={6}>
                                {' '}
                                <Form.Group className="mb-3" controlId="stock">
                                    <Form.Label>Stock</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="stock"
                                        placeholder="Digite cuantos estan en stock"
                                        value={temas.stock}
                                        onChange={(e) => setTemas({ ...temas, stock: e.target.value })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, digite cuantos en stock.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col sm={6}>
                                {' '}
                                <Form.Group className="mb-3" controlId="preciocompra">
                                    <Form.Label>Precio Compra</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="preciocompra"
                                        placeholder="Digite el precio compra"
                                        value={temas.preciocompra}
                                        onChange={(e) => setTemas({ ...temas, preciocompra: e.target.value })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, digite Precio de Compra.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col sm={6}>
                                {' '}
                                <Form.Group className="mb-3" controlId="precioventa">
                                    <Form.Label>Precio Venta</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="precioventa"
                                        placeholder="Digite el precio venta"
                                        value={temas.precioventa}
                                        onChange={(e) => setTemas({ ...temas, precioventa: e.target.value })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, digite Precio de Venta.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col sm={6}>
                                {' '}
                                <Form.Group className="mb-3" controlId="precioventamayor">
                                    <Form.Label>Precio Venta Mayor</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="precioventamayor"
                                        placeholder="Digite el precio venta mayor"
                                        value={temas.precioventamayor}
                                        onChange={(e) => setTemas({ ...temas, precioventamayor: e.target.value })}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, digite Precio de Venta.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col sm={6}>
                                <Form.Group className="mb-3" controlId="categoria">
                                    <Form.Label>Categoria</Form.Label>

                                    <Select
                                        type="select"
                                        name="categoria"
                                        required
                                        className="react-select"
                                        classNamePrefix="react-select"
                                        onChange={(e) => setTemas({ ...temas, categoria: e.value })}
                                        options={options_categorias.options}
                                        placeholder={temas.categoria}
                                        selected={temas.categoria}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        Por favor, seleccione la categoria.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col sm={6}>
                                <Form.Group className="mb-3" controlId="marca">
                                    <Form.Label>Marca</Form.Label>
                                    <Select
                                        type="marca"
                                        name="perecedero"
                                        required
                                        className="react-select"
                                        classNamePrefix="react-select"
                                        onChange={(e) => setTemas({ ...temas, marca: e.value })}
                                        options={options_marcas.options}
                                        placeholder={temas.marca}
                                        selected={temas.marca}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, seleccione la marca.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col sm={6}>
                                {' '}
                                <Form.Group className="mb-3" controlId="presentacion">
                                    <Form.Label>Presentación</Form.Label>
                                    <Select
                                        type="select"
                                        name="presentacion"
                                        required
                                        className="react-select"
                                        classNamePrefix="react-select"
                                        onChange={(e) => setTemas({ ...temas, presentacion: e.value })}
                                        options={options_presentacion.options}
                                        placeholder={temas.presentacion}
                                        selected={temas.presentacion}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, seleccione la presentacion.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <div className="button-list">
                                    <Button type="button" onClick={actualizar}>
                                        +
                                    </Button>

                                    <Button type="button" className="btn-icon" onClick={Close}>
                                        <i className={classNames('mdi', ['mdi-window-close'], 'ms-1', 'me-1')}></i>
                                    </Button>
                                </div>
                            </Col>
                        </Row>
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
        Header: 'Codigo',
        accessor: 'codigo',
        sort: true,
    },
    {
        Header: 'Codigo Barra',
        accessor: 'codigobarra',
        sort: true,
    },
    {
        Header: 'Nombre',
        accessor: 'nombreproducto',
        sort: true,
    },
    {
        Header: 'Marcas',
        accessor: 'marcas',
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
        Header: 'PV.Mayor',
        accessor: 'precioventamayor',
        sort: true,
    },
    {
        Header: 'Categoria',
        accessor: 'categoria',
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

            const url = `${environment.baseURL}?&accion=${accion}&opcion=${environment.opGuardar}${response}`;
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
                                    <Form.Group className="mb-3" controlId="codigo">
                                        <Form.Label>Codigo</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="codigo"
                                            placeholder="Digite el codigo"
                                            value={temas.codigo}
                                            onChange={(e) => setTemas({ ...temas, codigo: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, digite el codigo.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col sm={6}>
                                    <Form.Group className="mb-3" controlId="codigobarra">
                                        <Form.Label>Codigo Barra</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="codigobarra"
                                            placeholder="Digite el codigo de barra"
                                            value={temas.codigobarra}
                                            onChange={(e) => setTemas({ ...temas, codigobarra: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, digite el codigo de barra.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={12}>
                                    <Form.Group className="mb-3" controlId="nombreproducto">
                                        <Form.Label>Nombre Producto</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="nombreproducto"
                                            placeholder="Digite el producto"
                                            value={temas.nombreproducto}
                                            onChange={(e) => setTemas({ ...temas, nombreproducto: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, digite el producto.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={6}>
                                    {' '}
                                    <Form.Group className="mb-3" controlId="stockminimo">
                                        <Form.Label>Stock Minimo</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="stockminimo"
                                            placeholder="Digite el stock minimo"
                                            value={temas.stockminimo}
                                            onChange={(e) => setTemas({ ...temas, stockminimo: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, digite el stock minimo.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col sm={6}>
                                    {' '}
                                    <Form.Group className="mb-3" controlId="stock">
                                        <Form.Label>Stock</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="stock"
                                            placeholder="Digite cantidad en stock"
                                            value={temas.stock}
                                            onChange={(e) => setTemas({ ...temas, stock: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, digite cuantos en stock.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col sm={6}>
                                    {' '}
                                    <Form.Group className="mb-3" controlId="preciocompra">
                                        <Form.Label>Precio Compra</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="preciocompra"
                                            placeholder="Digite el precio compra"
                                            value={temas.preciocompra}
                                            onChange={(e) => setTemas({ ...temas, preciocompra: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, digite Precio de Compra.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col sm={6}>
                                    {' '}
                                    <Form.Group className="mb-3" controlId="precioventa">
                                        <Form.Label>Precio Venta</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="precioventa"
                                            placeholder="Digite el precio en venta"
                                            value={temas.precioventa}
                                            onChange={(e) => setTemas({ ...temas, precioventa: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, digite Precio de Venta.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col sm={6}>
                                    {' '}
                                    <Form.Group className="mb-3" controlId="precioventamayor">
                                        <Form.Label>Precio Venta Mayor</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="precioventamayor"
                                            placeholder="Digite el precio venta mayor"
                                            value={temas.precioventamayor}
                                            onChange={(e) => setTemas({ ...temas, precioventamayor: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, digite Precio de Venta.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col sm={6}>
                                    <Form.Group className="mb-3" controlId="categoria">
                                        <Form.Label>Categoria</Form.Label>

                                        <Select
                                            type="select"
                                            name="categoria"
                                            required
                                            className="react-select"
                                            classNamePrefix="react-select"
                                            onChange={(e) => setTemas({ ...temas, categoria: e.value })}
                                            options={options_categorias.options}
                                            placeholder="Seleccione..."
                                            //selected={options_categorias}
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            Por favor, seleccione la categoria.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col sm={6}>
                                    <Form.Group className="mb-3" controlId="marca">
                                        <Form.Label>Marca</Form.Label>
                                        <Select
                                            type="marca"
                                            name="perecedero"
                                            required
                                            className="react-select"
                                            classNamePrefix="react-select"
                                            onChange={(e) => setTemas({ ...temas, marca: e.value })}
                                            options={options_marcas.options}
                                            placeholder="Seleccione..."
                                            selected={options_marcas.options}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, seleccione la marca.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col sm={6}>
                                    {' '}
                                    <Form.Group className="mb-3" controlId="presentacion">
                                        <Form.Label>Presentacion</Form.Label>
                                        <Select
                                            type="select"
                                            name="presentacion"
                                            required
                                            className="react-select"
                                            classNamePrefix="react-select"
                                            onChange={(e) => setTemas({ ...temas, presentacion: e.value })}
                                            options={options_presentacion.options}
                                            placeholder="Seleccione..."
                                            selected={options_presentacion.options}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, seleccione la presentacion.
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
        const url = `${environment.baseURL}?&accion=${accion}&opcion=${environment.opConsultar}`;
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
                                        data_categoria={props.data_categoria}
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
                                props={props}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ComponetProductos;
