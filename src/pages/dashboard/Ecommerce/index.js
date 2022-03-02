// @flow
import React, { useState } from 'react';
import { Card,Row,Col} from 'react-bootstrap';
import cardImg3 from '../../../assets/images/waves.png';
import ImgPokemon from '../../../assets/images/users/Pokemon.jpg';
// components
import PageTitle from '../../../components/PageTitle';
import CantidadPokemon from './components/CantidadPokemon';
import ComprarPokemon from './components/ComprarPokemon';
import store from './redux/store';
import {Provider} from 'react-redux';

const EcommerceDashboard = (): React$Element<React$FragmentType> => {
    const [cantidad, setcantidad] = useState(0);
    const [Compra, setcompra] = useState('Compra');
    const onDatosChange = (e) => {
        if (e) {
          //setSelectedDate(e);
          setcantidad(e.payload.cant);
          setcompra('Comprado');
          console.log(e.payload);
          //alert(e.payload.cant);
        }
        //
    };
    
     return (
         <Provider store={store}>
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/' },
                    { label: 'Projects', path: '/dashboard/project', active: true },
                ]}
                title={'Proyecto Pokemon'}
            />
        <Row>
                <Col>
              
                </Col>
            </Row>

            <Row>
                <Col xl={5}>
                <Card className="d-block">
            
            
            <Card.Body>
              
           </Card.Body>
       
        </Card>
                </Col>
                <Col xl={7}>                  {/* Contact information */}
             
                </Col>
            </Row>

        </React.Fragment>
        </Provider>
    );
};

export default EcommerceDashboard;
