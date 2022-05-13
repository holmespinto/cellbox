import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
//import classNames from 'classnames';

import Select from 'react-select';
import { formateOptions } from './constants';
import FormInput from '../../../../components/FormInput';

type forms = {
    selected: number,
    keys: number,
    color: string,
    disabled: boolean,
    id: number,
    categoria: string,
    onClick: (date: any) => void,
    onValideCampo: (date: Array) => void,
};

const Inputs = (props: forms): React$Element<any> => {
    const form = [props.values.form];
    const [values, setValues] = useState({ form: form });
    const [arrays, setArrayValores] = useState([]);
    const inputs = props.campos;

    useEffect(() => {
        if (values.form && values.form.length > 0) {
            const mapped = [];
            (values.form || []).map((items, index) => {
                mapped.push(items);
            });
            setArrayValores(mapped[0]);
        }
    }, [values]);

    // console.log('props.values', arrays);
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <ListGroup>
                                {(inputs || []).map((items, index) => {
                                    const key = index + 1;
                                    const error = 'bg-danger';
                                    const ok = 'bg-success';
                                    const style = props.color === 'danger' && key === props.keys ? error : ok;
                                    const nomcampo = items.accessor;
                                    return items.type === 'text' || items.type === 'hidden' ? (
                                        <ListGroup.Item key={index}>
                                            <FormInput
                                                id={`id-${key}`}
                                                label={items.Header}
                                                type={items.type}
                                                name={nomcampo}
                                                placeholder={arrays[nomcampo]}
                                                containerClass={`mb-3 ${style}`}
                                                onChange={(() => {
                                                    switch (items.validated) {
                                                        case 'onValideCampo':
                                                            return (e) =>
                                                                props.onValideCampo(
                                                                    e,
                                                                    values,
                                                                    nomcampo,
                                                                    key,
                                                                    items.typecampo,
                                                                    items.maxcaract,
                                                                    items.type
                                                                );
                                                        default:
                                                            return (e) =>
                                                                props.onValideCampo(
                                                                    e,
                                                                    values,
                                                                    nomcampo,
                                                                    key,
                                                                    items.typecampo,
                                                                    items.maxcaract,
                                                                    items.type
                                                                );
                                                    }
                                                })()}
                                            />
                                        </ListGroup.Item>
                                    ) : (
                                        <ListGroup.Item key={index}>
                                            {items.Header}
                                            <Select
                                                id={`id-${index}`}
                                                defaultValue={props.selectedOption}
                                                options={formateOptions(items.option)}
                                                onChange={(e) =>
                                                    props.onValideCampo(
                                                        e,
                                                        values,
                                                        items.accessor,
                                                        key,
                                                        items.typecampo,
                                                        items.maxcaract,
                                                        items.type
                                                    )
                                                }
                                            />
                                        </ListGroup.Item>
                                    );
                                })}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};
export default Inputs;
