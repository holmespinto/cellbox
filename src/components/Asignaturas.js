// @flow
import classNames from 'classnames';
import { Button } from 'react-bootstrap';



type HyperAsignaturaProps = {
    value: string,
    onClick: (date: any) => void,
    hideAddon?: boolean,
    inputClass?: string,
    inline?: boolean,
    name:string,
    variant:string,
    selected:string,
};

const HyperAsignaturas = (props: HyperAsignaturaProps): React$Element<any> => {
    // handle custom input
    //const button = (props.hideAddon || false) === true ? <AsignaturasInput /> : <AsignaturaInputWithAddon />;

    return (
        <>
            {/* date picker control */}
            <Button
                //customInput={button}
                value={props.value}
                className={classNames('form-control', props.inputClass)}
                selected={props.selected}
                onClick={(date) => props.onClick(date)}
                inline={props.inline}
                name={props.name}
                variant={props.variant}
            >
            <p className="text font-14">
            {props.name}
        </p>
        </Button>
        </>
    );
};

export default HyperAsignaturas;