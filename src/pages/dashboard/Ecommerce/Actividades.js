// @flow
import { Row, Col, Card } from 'react-bootstrap';
import  React from 'react';
//import classNames from 'classnames';
// components
import PageTitle from '../../../components/PageTitle';
import {GlobalActividades} from './Context/GlobalActividades';

import HyperActividades from '../../../components/Actividades';
const Actividades = (props): React$Element<React$FragmentType> => {
    //const [selectedDate, setSelectedDate] = useState(props.selected);
    // setSelectedDate(selectedDate);
    return (
        <React.Fragment>
                    <PageTitle
                breadCrumbItems={[
                    { label: 'Ménu Academico', path: '/Ecommerce/', active: true  },
                    //{ label: 'Buttons', path: '/ui/buttons', active: true },
            ]}
                title={''}
            />
            <Row>

           
                        <Col lg={4} >
                        <Card>
                        <Card.Body>
                            <div className="button-list">
                                {GlobalActividades.map((record, index) => {
 

                                    return (
                                    <HyperActividades key={index} variant={'outline-' + record.color} name={record.materia} value={props.value} onClick={() => props.onClick(record.selected)} />     
                                    );
                                })}
                                
                            </div>
                        </Card.Body>
                    </Card>
                        </Col>
                   
                
            </Row>
        </React.Fragment>
        );
};
export default Actividades;
