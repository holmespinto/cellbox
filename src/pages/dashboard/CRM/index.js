// @flow
import { Row, Col, Card } from 'react-bootstrap';
import React, { useState } from 'react';
// components
import PageTitle from '../../../components/PageTitle';
import Statistics from './Statistics';
import Inventario from './Components/Inventario';

const CRMDashboardPage = (): React$Element<React$FragmentType> => {
    const INIT_STATE = {selected: 0};
    const [state, setState] = useState(INIT_STATE);

    const onState = (e) => {
        if (e) {
            setState({
                ...state,
                selected: e.selected,
            });
        //    alert('selected:' + e.selected);
        }
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/crm' },
                    { label: 'CRM', path: '/dashboard/crm', active: true },
                ]}
                title={'CRM'}
            />
       
         <Statistics state={state}  onState={onState} />
               
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            {(() => {
                                switch (state.selected) {
                                    case 0:
                                        return (
                                            <Row>
                                                <Col lg={4}>
                                                    
                                                </Col>
                                                Este es el 0
                                                <Col lg={8}>
                                                </Col>
                                            </Row>
                                        );
                                        case 1:
                                            return (
                                                <Row>
                                                    <Col lg={12}>

                                                   <Inventario/>

                                                    </Col>

                                                </Row>
                                            );
                                            case 2:
                                                return (
                                                    <Row>
                                                        <Col lg={4}>
                                                        Este es el 1
                                                        </Col>
        
                                                        <Col lg={8}>
                                                        </Col>
                                                    </Row>
                                                );    
                                            case 3:
                                                return (
                                                 <Row>
                                                       <Col lg={4}>
                                                       Este es el 2
                                                       </Col>
            
                                                       <Col lg={8}>
                                                         </Col>
                                                        </Row>
                                                    );    
                                                    case 4:
                                                        return (
                                                         <Row>
                                                               <Col lg={4}>
                                                               Este es el 3
                                                               </Col>
                    
                                                               <Col lg={8}>
                                                                 </Col>
                                                                </Row>
                                                            );          
                                    default:
                                        return (
                                            <Row>
                                                <Col sm={12}> </Col>
                                            </Row>
                                        );
                                }
                            })()}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={5}>
                   
                </Col>
                <Col lg={7}>
                    
                </Col>
            </Row>

            <Row>
                <Col xl={4} lg={12}>
                   
                </Col>
                <Col xl={4} lg={6}>
                   
                </Col>
                <Col xl={4} lg={6}>
                
                </Col>
            </Row>
        </>
    );
};

export default CRMDashboardPage;
