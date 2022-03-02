// @flow
import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

// components
//import HyperDatepicker from '../../../components/Datepicker';



import Asignaturas from './Asignaturas';
import Actividades from './Actividades';
const EcommerceDashboard = (): React$Element<React$FragmentType> => {
    const [selectedDate, setSelectedDate] = useState(0);

 
    const onDatosChange = (e) => {
        if (e) {
          setSelectedDate(e);
          
        }
        //alert(e);
    };

    return (
 
        <>
     
            <Row>
            <Col>
                    <div className="page-title-box">
                        <div className="page-title-right">
                            <form className="d-flex">
                                <div className="input-group">
                                {(() => {
                                    switch (selectedDate) {
                                      case "0":   return <Asignaturas  value={selectedDate} inputClass="form-control-light"  onClick={(data) => { onDatosChange(data);   }}/>;
                                      case "2": return <Actividades  value={selectedDate} inputClass="form-control-light"  onClick={(data) => { onDatosChange(data);   }}/>;
                                      default:      return <Asignaturas  value={selectedDate} inputClass="form-control-light"  onClick={(data) => { onDatosChange(data);   }}/>;
                                    }
                                  })()}
                    
                                 
                                </div>
                               </form>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default EcommerceDashboard;
