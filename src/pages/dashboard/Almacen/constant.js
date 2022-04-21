import { environment } from '../environments/environments';
import { APICore } from '../../../helpers/api/apiCore';

const api = new APICore();
function listas(params) {
    const options = [];
    const url = `${environment.baseURL}?&accion=${params}&opcion=${environment.opConsultar}`;
    const datos = api.setLista(`${url}`);
    datos.then(function (resp) {
        if (resp) {
            resp &&
                resp.length > 0 &&
                resp.map((record: any, index) => {
                    switch (params) {
                        case 'categorias':
                            const categorias = {
                                value: record.id,
                                label: record.categoria,
                            };
                            options.push(categorias);
                            break;
                        case 'marcas':
                            const marcas = {
                                value: record.id,
                                label: record.marcas,
                            };
                            options.push(marcas);
                            break;
                        case 'presentaciones':
                            const presentaciones = {
                                value: record.id,
                                label: record.presentacion,
                            };
                            options.push(presentaciones);
                            break;
                        default:
                    }
                });
        }
    });
    return options;
}

const options_marcas = {
    options: listas('marcas'),
};

const options_categorias = {
    options: listas('categorias'),
};

const options_presentacion = {
    options: listas('presentaciones'),
};
export { options_marcas, options_categorias, options_presentacion };
