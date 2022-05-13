// @flow
import { Row, Col, Card, Alert } from 'react-bootstrap';
import classNames from 'classnames';

// components

const AlertsWithIcon = (props) => {
    const icons = ['dripicons-warning'];
    return (
        props.color === 'danger' && (
            <Card>
                <Card.Body>
                    <Alert variant={props.color} key={props.nombre}>
                        <i className={classNames(icons[0], 'me-2')}></i>
                        <strong>Advertencia:</strong> {props.mensaje}
                    </Alert>
                </Card.Body>
            </Card>
        )
    );
};

const Alerta = (props): React$Element<React$FragmentType> => {
    return (
        <>
            <Row>
                <Col>
                    <AlertsWithIcon color={props.color} mensaje={props.mensaje} nombre={props.nombre} />
                </Col>
            </Row>
        </>
    );
};

export default Alerta;
