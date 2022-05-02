import { Row, Col } from 'react-bootstrap';
import React, { Suspense, useState, useEffect } from 'react';
import { environment } from '../../environments/environments';

// components
import UserSearch from './UserSearch';
import ItemsMenus from './ItemsMenus';
import FichaUser from './FichaUser';
import { users } from './functions';

import { APICore } from '../../../../helpers/api/apiCore';
const api = new APICore();
/* funcion permite cargar el menu de la base de datos*/

const INIT_STATE_FICHA = {
    label: 'No existen usuarios seleccionados',
    value: null,
    type: null,
    userDetails: {
        firstname: null,
        lastname: null,
        position: null,
        avatar: '',
    },
};
const Menu = (): React$Element<any> => {
    const [mtems, openPermisos] = useState([]);
    const [id_user, setIdUser] = useState(0);
    const [selectedOption, setSelectedOption] = useState(INIT_STATE_FICHA);
    const [options, setusers] = useState([]);
    const [textcolor, setcolortext] = useState('danger');
    const [fichaOpen, setFichaOpen] = useState(false);
    const loading = () => <div className=""></div>;
    useEffect(() => {
        if (users && users.length > 0) {
            setusers(users);
        }
    }, []);

    useEffect(() => {
        if (mtems && mtems.length > 0) {
            openPermisos(mtems);
        }
    }, [mtems]);

    const onStateFicha = (e) => {
        //console.log(e.id);
        setSelectedOption(e);
        setcolortext('success');
        setFichaOpen(true);
        const url = `${environment.baseURL}?&accion=${environment.Configurar}&id_user=${e.id}&opcion=${environment.opConsultar}`;
        const datos = api.setLista(`${url}`);
        datos.then(function (resp) {
            if (resp) {
                openPermisos(resp);
                setIdUser(e.id);
            }
        });
    };
    const guardarPermisos = (id_items, id_user) => {
        const url = `${environment.baseURL}?&accion=${environment.Configurar}&id_items=${id_items}&id_user=${id_user}&opcion=${environment.opGuardar}`;
        const datos = api.setLista(`${url}`);
        datos.then(function (resp) {
            if (resp) {
                openPermisos(resp);
            }
        });
    };

    return (
        <React.Fragment>
            <br />
            <Row>
                <Col lg={12}>
                    <Suspense fallback={loading()}>
                        <UserSearch options={options} onStateFicha={onStateFicha} selectedOption={selectedOption} />
                    </Suspense>
                </Col>
            </Row>
            <br />
            <Row>
                <Col lg={4}>
                    <Suspense fallback={loading()}>
                        <FichaUser
                            label={'Primary'}
                            color={'primary'}
                            stateficha={selectedOption}
                            textcolor={textcolor}
                        />
                    </Suspense>
                </Col>
                {fichaOpen &&
                    mtems &&
                    mtems.length > 0 &&
                    mtems.map((arrs: any, index) => {
                        if (arrs.label)
                            return (
                                <>
                                    <Col xl={4} key={index}>
                                        <Suspense fallback={loading()}>
                                            <ItemsMenus
                                                toppings={mtems}
                                                title={arrs.label}
                                                icon={arrs.icon}
                                                id_user={id_user}
                                                children={mtems[index + 1]}
                                                guardarPermisos={guardarPermisos}
                                            />
                                        </Suspense>
                                    </Col>
                                </>
                            );
                    })}
            </Row>
        </React.Fragment>
    );
};

export default Menu;
