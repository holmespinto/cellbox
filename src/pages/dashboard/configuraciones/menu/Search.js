// @flow
import React from 'react';
import Select from 'react-select';

import { groupByFields } from '../../../../utils';
//import Avatar2 from '../assets/images/users/avatar-2.jpg';
//import Avatar5 from '../assets/images/users/avatar-5.jpg';

/*
 * filter options
 */
const formateOptions = (options) => {
    const grouppedData = groupByFields(options, (item) => {
        return [item.type];
    });

    let formattedOptions = [];
    let count = 0;

    for (let i = 0; i < grouppedData.length; i++) {
        for (let j = 0; j < grouppedData[i].length; j++) {
            if (grouppedData[i][j].type === 'Admin' && count === 0) {
                //grouppedData[i].splice(j, 0, { label: 'Admin', value: 'title', type: 'title' });
                count = 1;
            }
            formattedOptions.push(grouppedData[i][j]);
        }
    }
    return formattedOptions;
};

/* custom menu list */
const MenuList = (props) => {
    return (
        <div className="dropdown-header noti-title">
            <h5 className="text-overflow mb-2">
                <span className="text-danger">{props.options.length}</span> Registros encontrados
            </h5>
        </div>
        // {props.children}
    );
};

type SearchResultItem = {
    id: number,
    title: string,
    redirectTo: string,
    icon: string,
    onStateFicha: (date: any) => void,
};

type Searchs = {
    items: Array<SearchResultItem>,
    onStateFicha: (date: any) => void,
    options: Array<SearchResultItem>,
};

const Search = (props: Searchs): React$Element<any> => {
    return (
        <React.Fragment>
            <MenuList options={props.options} />
            <Select
                defaultValue={props.selectedOption}
                options={formateOptions(props.options)}
                onChange={(e) => props.onStateFicha(e)}
            />
        </React.Fragment>
    );
};

export default Search;
