// @flow
import  React  from 'react';
import { Row, Col, Card } from 'react-bootstrap';

//import classNames from 'classnames';
// components
import PageTitle from '../../../components/PageTitle';
import {GlobalAsinaturas} from './Context/GlobalAsinaturas'
import HyperAsignaturas from '../../../components/Asignaturas';
import { useDispatch } from 'react-redux';
const Asignaturas = (props): React$Element<React$FragmentType> => {
    const dispatch=useDispatch();
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
                                {GlobalAsinaturas.map((record, index) => {
                                    return (
                                    <HyperAsignaturas key={index} variant={'outline-' + record.color} name={record.materia} value={props.value} onClick={() => props.onClick(dispatch(record.selected))} />     
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
export default Asignaturas;
