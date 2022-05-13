import { groupByFields } from '../../../../utils';

/*
 * Patrones de validaciones para cada campo
 */
function patrones(params) {
    switch (params) {
        case 'letras':
            return /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
        case 'numeros':
            return /^([0-9])*$/;
        case 'email':
            return /^([da-z_.-]+)@([da-z.-]+).([a-z.]{2,6})$/;
        case 'letrasnumeros':
            return /^([A-Za-z0-9])*$/;
        case 'sexo':
            return /^([F,M]{1})*$/;
        case 'direccion':
            return /^[a-zA-ZÀ-ÿ-0-9-#\u00f1\u00d1\s]+(\s*[a-zA-ZÀ-ÿ-0-9-#\u00f1\u00d1\s]*)*[a-zA-ZÀ-ÿ-0-9-#\u00f1\u00d1\s]+$/g;
        case 'celular':
            return /^([0-9])*$/;
        default:
            return /^([A-Za-z0-9])*$/;
    }
}

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

/*
 * Asignacion de los campos para el formulario guardar y actualizar
 */
const INIT_CAMPOS = [
    {
        key: 1,
        disabled: false,
        Header: 'ID',
        accessor: 'id',
        type: 'hidden',
        option: [{ value: null, label: null }],
        validated: 'onValideCampo',
        typecampo: 'numeros',
        maxcaract: 2,
    },
    {
        key: 2,
        disabled: false,
        Header: 'No. Documento',
        accessor: 'numero_documento',
        type: 'text',
        option: [{ value: null, label: null }],
        validated: 'onValideCampo',
        typecampo: 'numeros',
        maxcaract: 10,
    },
    {
        key: 3,
        disabled: false,
        Header: 'Username',
        accessor: 'username',
        type: 'text',
        option: [{ value: null, label: null }],
        validated: 'onValideCampo',
        typecampo: 'letrasnumeros',
        maxcaract: 15,
    },
    {
        key: 4,
        disabled: false,
        Header: '1er. Nombre',
        accessor: 'primer_nombre',
        type: 'text',
        option: [{ value: null, label: null }],
        validated: 'onValideCampo',
        typecampo: 'letras',
        maxcaract: 20,
    },
    {
        key: 5,
        disabled: false,
        Header: '2er. Nombre',
        accessor: 'segundo_nombre',
        type: 'text',
        option: [{ value: null, label: null }],
        validated: 'onValideCampo',
        typecampo: 'letras',
        maxcaract: 20,
    },
    {
        key: 6,
        disabled: false,
        Header: '1er. Apellido',
        accessor: 'primer_apellido',
        type: 'text',
        option: [{ value: null, label: null }],
        validated: 'onValideCampo',
        typecampo: 'letras',
        maxcaract: 20,
    },
    {
        key: 7,
        disabled: false,
        Header: '2er. Apellido',
        accessor: 'segundo_apellido',
        type: 'text',
        option: [{ value: null, label: null }],
        validated: 'onValideCampo',
        typecampo: 'letras',
        maxcaract: 20,
    },
    {
        key: 8,
        disabled: false,
        Header: 'Email',
        accessor: 'email_personas',
        type: 'text',
        option: [{ value: null, label: null }],
        validated: 'onValideCampo',
        typecampo: 'email',
        maxcaract: 30,
    },
    {
        key: 9,
        disabled: false,
        Header: 'Celular',
        accessor: 'celular',
        type: 'text',
        option: [{ value: null, label: null }],
        validated: 'onValideCampo',
        typecampo: 'numeros',
        maxcaract: 15,
    },
    {
        key: 10,
        disabled: false,
        Header: 'Direccion',
        accessor: 'direccion',
        type: 'text',
        option: [{ value: null, label: null }],
        validated: 'onValideCampo',
        typecampo: 'direccion',
        maxcaract: 30,
    },
    {
        key: 11,
        disabled: false,
        Header: 'Sexo',
        accessor: 'sexo',
        type: 'text',
        option: [{ value: null, label: null }],
        validated: 'onValideCampo',
        typecampo: 'sexo',
        maxcaract: 3,
    },
    {
        key: 12,
        disabled: false,
        Header: 'Rol',
        accessor: 'idRol',
        type: 'select',
        option: [
            { value: 1, label: 'Admin' },
            { value: 2, label: 'AdminEmpresa' },
            { value: 3, label: 'Cajero' },
            { value: 4, label: 'Técnico' },
        ],
        validated: 'onValideCampo',
        typecampo: 'letrasnumeros',
        maxcaract: 2,
    },
    {
        key: 13,
        disabled: false,
        Header: 'Empresa',
        accessor: 'id_empresa',
        type: 'select',
        option: [{ value: 1, label: 'Sinted' }],
        validated: 'onValideCampo',
        typecampo: 'letrasnumeros',
        maxcaract: 2,
    },
];
/*
 * Objeto form de los campos para el formulario guardar y actualizar
 * Objeto alerts de los campos para el formulario guardar y actualizar
 */
const INIT_VALUES = {
    form: {
        numero_documento: null,
        username: null,
        primer_nombre: null,
        segundo_nombre: null,
        primer_apellido: null,
        segundo_apellido: null,
        email_personas: null,
        celular: null,
        idRol: null,
        id_empresa: null,
    },
    alerts: {
        now: 0,
        textcolor: 'success',
        mensalert: '',
        validated: false,
        disabled: false,
        key: null,
    },
};
export { INIT_CAMPOS, INIT_VALUES, formateOptions, patrones };
