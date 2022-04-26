import { Card, ListGroup } from 'react-bootstrap';
import classNames from 'classnames';
import React, { useState } from 'react';
type ItemsProps = {
    title: string,
    icon: string,
    Active?: boolean,
    guardarPermisos: (date: any) => void,
    children?: any,
};

const ItemsMenus = (props: ItemsProps): React$Element<React$FragmentType> => {
    const [checkedState, setCheckedState] = useState(new Array(props.children.children.length).fill(false));
    const handleOnChange = (position, id_items, id_user) => {
        const updatedCheckedState = checkedState.map((item, index) => (index === position ? !item : item));
        //
        setCheckedState(updatedCheckedState);
        props.guardarPermisos(id_items, id_user);
    };
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">
                        <i className={classNames('mdi', props.icon, 'mb-2', 'me-1')}></i>
                        {props.title}
                    </h4>

                    <ListGroup>
                        {(props.children.children || []).map((items, index) => {
                            return (
                                <>
                                    <ListGroup.Item key={index}>
                                        <input
                                            className="form-check-input me-1"
                                            type="checkbox"
                                            id={`custom-checkbox-${index}`}
                                            // name={items.label}
                                            checked={items.isChecked ? items.isChecked : checkedState[index]}
                                            aria-label="..."
                                            onChange={() => handleOnChange(index, items.id, props.id_user)}
                                        />
                                        {items.label}
                                    </ListGroup.Item>
                                </>
                            );
                        })}
                    </ListGroup>
                </Card.Body>
            </Card>
        </>
    );
};
export default ItemsMenus;
