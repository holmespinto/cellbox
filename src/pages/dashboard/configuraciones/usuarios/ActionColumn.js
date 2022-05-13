// @flow
import React, { useState, useEffect } from 'react';
//import { Button, Form, Modal } from 'react-bootstrap';
//import classNames from 'classnames';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
//import Select from 'react-select';
//import swal from 'sweetalert';
import { APICore } from '../../../../helpers/api/apiCore';
import { environment } from '../../environments/environments';
import Forms from './Forms';
import { INIT_CAMPOS, patrones } from './constants';
const accion = 'usuarios';
const api = new APICore();

const ActionColumn = ({ row }) => {
    const INIT_VALUES = {
        form: {
            id: row.cells[1].value ? row.cells[1].value : row.cells[1].value,
            numero_documento: row.cells[2].value ? row.cells[2].value : row.cells[2].value,
            username: row.cells[3].value ? row.cells[3].value : row.cells[3].value,
            primer_nombre: row.cells[4].value ? row.cells[4].value : row.cells[4].value,
            segundo_nombre: row.cells[5].value ? row.cells[5].value : row.cells[5].value,
            primer_apellido: row.cells[6].value ? row.cells[6].value : row.cells[6].value,
            segundo_apellido: row.cells[7].value ? row.cells[7].value : row.cells[7].value,
            email_personas: row.cells[8].value ? row.cells[8].value : row.cells[8].value,
            celular: row.cells[9].value ? row.cells[9].value : row.cells[9].value,
            direccion: row.cells[10].value ? row.cells[10].value : row.cells[10].value,
            sexo: row.cells[11].value ? row.cells[11].value : row.cells[11].value,
            idRol: row.cells[12].value ? row.cells[12].value : row.cells[12].value,
            id_empresa: row.cells[13].value ? row.cells[13].value : row.cells[13].value,
            status: row.cells[14].value ? row.cells[14].value : row.cells[14].value,
        },
        alerts: {
            now: 0,
            textcolor: 'success',
            mensalert: '',
            validated: false,
            disabled: false,
            key: null,
        },
    };

    const [signUpModal, setSignUpModal] = useState(false);
    const [values, setValues] = useState(INIT_VALUES);
    const [alert, setAlerts] = useState([]);
    const [btndisabled, setBtnGuardar] = useState(false);
    /*
     * validar  Campo
     */

    const onValideCampo = (e, value, campo, key, typecampo, maxcaract, type) => {
        let nombre = type === 'select' ? e.value : e.target.value;
        const num = type === 'select' ? Number.parseInt(nombre) : Number.parseInt(nombre.length);

        const patron = patrones(typecampo);
        if (num <= maxcaract) {
            if (!patron.exec(nombre) < 1) {
                const alerts = {
                    textcolor: 'success',
                    validated: true,
                    mensalert: 'null',
                    now: 25,
                    disabled: false,
                    key: key,
                };

                //1.GUARDAMOS EN NOMBRE DEL CAMPO Y  SU VALOR
                //EN ARRAY DIFERENTES
                var gcam = [];
                var gnom = [];
                gcam.push(`${campo}`);
                gnom.push(`${nombre}`);

                //2.UNIMOS LOS DOS ARRAY
                const values = gcam.concat(gnom);

                //3. CONDICIONAMOS QUE SEA LA PRIMERA VEZ
                //CADA VEZ QUE EL ARRAY SEA DE 2 ELEMENTOS
                if (values.length === 2) {
                    const arr = JSON.parse(JSON.stringify(values));
                    //4. ARMAMOS EL OBJETO ACTUAL CON SU NOMBRE:VALOR
                    var valores = arr.reduce(function (acc, cur, i) {
                        if (i === 0) {
                            acc[cur] = nombre;
                        }
                        return acc;
                    }, {});
                    //4. ASIGNAMOS LOS DOS OBJETOS PARA
                    //CREAR EL PRINCIPAL
                    const form = Object.assign(value.form[0], valores);
                    setValues({ form, alerts: [alerts] });
                }
            } else {
                const alerts = [
                    {
                        textcolor: 'danger',
                        validated: false,
                        mensalert: 'El Campo ' + campo + ' tiene un cáracter no validado',
                        now: 25,
                        disabled: true,
                        key: key,
                    },
                ];
                setValues({ alerts });
            }
        } else {
            const alerts = [
                {
                    textcolor: 'danger',
                    validated: false,
                    mensalert:
                        'El Campo ' + campo + ' excede el máximo de caracteres requerido:  hasta' + maxcaract + ' ',
                    now: 25,
                    disabled: true,
                    key: key,
                },
            ];
            setValues({ alerts });
        }
    };

    useEffect(() => {
        if (values.alerts && values.alerts.length > 0) {
            setAlerts(values.alerts[0]);
        }
    }, [values]);

    const eliminar = () => {};

    const toggleSignUp = () => {
        setSignUpModal(!signUpModal);
        setBtnGuardar(false);
    };
    const Close = (e) => {
        e.preventDefault();
        setSignUpModal(false);
        setValues([]);
        setBtnGuardar(!btndisabled);
    };
    //console.log(row);
    return (
        <React.Fragment>
            <Forms
                campos={INIT_CAMPOS}
                onValideCampo={onValideCampo}
                values={values}
                alerts={alert}
                signUpModal={signUpModal}
                toggleSignUp={toggleSignUp}
                Close={Close}
                accion={'actualizar'}
            />
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
export default ActionColumn;
