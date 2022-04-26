import { Card } from 'react-bootstrap';
import classNames from 'classnames';

type fichaProps = {
    color: string,
    label: string,
    nombre: string,
    apellidos: string,
    email: string,
    show?: boolean,
};
const style = {
    height: 'auto',
    margin: 6,
    padding: 3,
    fonfSize: '14px',
};
const FichaUser = (props: fichaProps): React$Element<React$FragmentType> => {
    return (
        <Card className="ribbon-box">
            <Card.Body>
                <div className={classNames('ribbon', 'ribbon-' + props.color, 'float-start')}>
                    <i className="mdi mdi-access-point me-1"></i> Datos del Usuario
                </div>
                <h5 className={classNames('text-' + props.color, 'float-end', 'mt-0')}> </h5>
                <div className="ribbon-content" style={style}>
                    <p className="mb-0">
                        <span className={classNames('text-' + props.textcolor)}>Nombres: </span>
                        {props.stateficha.label}
                    </p>
                    <p className="mb-0">
                        <span className={classNames('text-' + props.textcolor)}>Apellidos: </span>
                        {props.stateficha.userDetails.firstname}
                    </p>
                    <p className="mb-0">
                        <span className={classNames('text-' + props.textcolor)}>Email: </span>
                        {props.stateficha.userDetails.lastname}
                    </p>
                </div>
            </Card.Body>
        </Card>
    );
};
export default FichaUser;
