
import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Select from 'react-select';
import 'react-bootstrap-typeahead/css/Typeahead.css';


const ReactSelect = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">
                    <a rel="noreferrer" href="https://github.com/JedWatson/react-select" target="_blank">
                        React select
                    </a>
                </h4>
                <p className="mb-1 mt-3 fw-bold text-muted">Single Selection</p>
                <p className="text-muted font-14">React-Select based Select element</p>
                <Select
                    className="react-select"
                    classNamePrefix="react-select"
                    options={[
                        { value: 'chocolate', label: 'Chocolate' },
                        { value: 'strawberry', label: 'Strawberry' },
                        { value: 'vanilla', label: 'Vanilla' },
                    ]}></Select>

                <p className="mb-1 mt-3 fw-bold text-muted">Multiple Selection</p>
                <p className="text-muted font-14">React-Select based Select (Multiple) element</p>
                <Select
                    isMulti={true}
                    options={[
                        { value: 'chocolate', label: 'Chocolate' },
                        { value: 'strawberry', label: 'Strawberry' },
                        { value: 'vanilla', label: 'Vanilla' },
                    ]}
                    className="react-select"
                    classNamePrefix="react-select"></Select>
            </Card.Body>
        </Card>
    );
};

const FormInventario = (): React$Element<React$FragmentType> => {
    return (
        <React.Fragment>
           

            <Row>
                <Col lg={12}>
                    <ReactSelect />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FormInventario;

// components
