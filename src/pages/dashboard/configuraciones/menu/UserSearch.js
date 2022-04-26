// @flow
import React from 'react';
//import { useState, useEffect } from 'react';
//import classNames from 'classnames';
import Search from './Search';

const UserSearch = (props): React$Element<any> => {
    return (
        <>
            <Search options={props.options} onStateFicha={props.onStateFicha} />
        </>
    );
};
export default UserSearch;
