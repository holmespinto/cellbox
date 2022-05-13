// @flow
import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import classNames from 'classnames';

//import {logodark} from '../../../../assets/images/logo-dark.png';

// components

import Form from './Forms';
import ActionColumn from './ActionColumn';

import Table from '../../../../components/Table';

//import swal from 'sweetalert';
import { APICore } from '../../../../helpers/api/apiCore';
import { environment } from '../../environments/environments';
const accion = 'usuarios';
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
        Header: 'No. Documento',
        accessor: 'numero_documento',
        sort: true,
    },
    {
        Header: 'Username',
        accessor: 'username',
        sort: true,
    },
    {
        Header: '1er. Nombre',
        accessor: 'primer_nombre',
        sort: true,
    },
    {
        Header: '2er. Nombre',
        accessor: 'segundo_nombre',
        sort: true,
    },
    {
        Header: '1er. Apellido',
        accessor: 'primer_apellido',
        sort: true,
    },
    {
        Header: '2er. Apellido',
        accessor: 'segundo_apellido',
        sort: true,
    },
    {
        Header: 'Email',
        accessor: 'email_personas',
        sort: true,
    },
    {
        Header: 'Celular',
        accessor: 'celular',
        sort: true,
    },
    {
        Header: 'Direccion',
        accessor: 'direccion',
        sort: true,
    },
    {
        Header: 'Sexo',
        accessor: 'sexo',
        sort: true,
    },
    {
        Header: 'Rol',
        accessor: 'idRol',
        sort: true,
    },
    {
        Header: 'Empresa',
        accessor: 'id_empresa',
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

type schema = {
    selected: number,
    btndisabled: boolean,
    key: number,
    campos: Array,
    values: Array,
    categoria: string,
    onValideCampo: (date: any) => void,
};

const Grid = (props: schema): React$Element<any> => {
    const [records, openUsuarios] = useState([]);
    const [data, cargarUsuarios] = useState([]);
    const [values, setValues] = useState(props.values);

    useEffect(() => {
        const url = `${environment.baseURL}?&accion=${accion}&opcion=listar`;
        const syllab = api.getDatos(`${url}`);
        syllab.then(function (resp) {
            if (resp) {
                openUsuarios(resp);
            }
        });
    }, [props]);

    useEffect(() => {
        if (records && records.length > 0) {
            //const cur = JSON.parse(records);
            const mapped = [];
            mapped.push(records);
            cargarUsuarios(mapped[0]);
        }
    }, [records]);

    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Usuarios:</h4>
                            <Row>
                                <Col sm={4}>
                                    <Form
                                        campos={props.campos}
                                        records={records}
                                        signUpModal={props.signUpModal}
                                        Close={props.Close}
                                        toggleSignUp={props.toggleSignUp}
                                        onValideCampo={props.onValideCampo}
                                        values={values}
                                        alerts={props.alerts}
                                        mensalert={props.mensalert}
                                        btndisabled={props.btndisabled}
                                        accion={'guardar'}
                                    />
                                </Col>
                                <Col sm={8}>
                                    <div className="text-sm-end">
                                        <Button className="btn btn-success mb-2 me-1" onClick={props.toggleSignUp}>
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

export default Grid;
