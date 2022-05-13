// @flow
import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Modal } from 'react-bootstrap';
import classNames from 'classnames';
import swal from 'sweetalert';
// components
import Inputs from './Inputs';
import Alerta from './Alerta';
//import swal from 'sweetalert';
import { APICore } from '../../../../helpers/api/apiCore';
import { environment } from '../../environments/environments';
const accion = 'usuarios';
const api = new APICore();

type schema = {
    selected: number,
    disabled: boolean,
    btndisabled: boolean,
    key: number,
    campos: Array,
    alerts: Array,
    color: string,
    accion: string,
    onValideCampo: (date: any) => void,
    Close: (date: any) => void,
};

const Forms = (props: schema) => {
    const [validated, setValidated] = useState(false);
    const [items, setForm] = useState([props.values.form]);
    const [btndisabled, setBtnGuardar] = useState(props.btndisabled);
    const [alerts, setAlerta] = useState({
        color: 'success',
        mensaje: null,
        key: null,
        disabled: false,
    });

    const guardar = (event) => {
        const form = event.currentTarget;
        const urlItems = items[0];
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        if (validated) {
            setBtnGuardar(false);
            let response;
            if (urlItems) {
                var queryString = urlItems
                    ? Object.keys(urlItems)
                          .map((key) => key + '=' + urlItems[key])
                          .join('&')
                    : '';
            }
            response = queryString;
            setBtnGuardar(true);
            let CryptoJS = require('crypto-js');
            var password = CryptoJS.AES.encrypt('123456789', 'secret key 123').toString();
            const url = `${environment.baseURL}?&accion=${accion}&opcion=${environment.opGuardar}&${response}&password=${password}`;
            const respuesta = api.getDatos(`${url}`);
            respuesta.then(function (resp) {
                if (resp) {
                    swal('' + resp[0].menssage + '');
                    setForm([]);
                }
            });
        }
    };

    const actualizar = (event) => {
        const form = event.currentTarget;
        const urlItems = items[0];
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        if (validated) {
            setBtnGuardar(false);
            let response;
            if (urlItems) {
                var queryString = urlItems
                    ? Object.keys(urlItems)
                          .map((key) => key + '=' + urlItems[key])
                          .join('&')
                    : '';
            }
            response = queryString;
            const url = `${environment.baseURL}?&accion=${accion}&opcion=${environment.opActualizar}&${response}`;
            const respuesta = api.getDatos(`${url}`);
            respuesta.then(function (resp) {
                if (resp) {
                    swal('' + resp[0].menssage + '');
                }
            });
        }
    };
    useEffect(() => {
        if (props.alerts && props.alerts.length > 0) {
            const alerts = {
                color: props.values.alert[0].textcolor,
                mensaje: props.values.alert[0].mensalert,
                key: props.values.alert[0].key,
                disabled: props.values.alert[0].key,
            };
            setAlerta(alerts);
        }
    }, [props]);

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
                            <Alerta
                                color={props.alerts.textcolor}
                                mensaje={props.alerts.mensalert}
                                nombre={props.alerts.key}
                            />
                        </div>
                        <Form validated={validated}>
                            <Inputs
                                campos={props.campos}
                                onValideCampo={props.onValideCampo}
                                values={props.values}
                                keys={props.alerts.key}
                                color={props.alerts.textcolor}
                            />
                            <div className="button-list">
                                <Button
                                    type="button"
                                    disabled={!props.alerts.validated}
                                    onClick={props.accion === 'guardar' ? guardar : actualizar}>
                                    {props.accion}
                                </Button>
                                {!btndisabled && (
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
export default Forms;
