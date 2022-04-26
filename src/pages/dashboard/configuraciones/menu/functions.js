import { environment } from '../../environments/environments';
/* status column render */
import { APICore } from '../../../../helpers/api/apiCore';
const api = new APICore();

function usersearch() {
    const users = [];
    const user = api.getLoggedInUser();
    const url = `${environment.baseURL}?&accion=${environment.Search}&id=${user.id}&opcion=${environment.opConsultar}`;
    const datos = api.setLista(`${url}`);
    datos.then(function (resp) {
        if (resp) {
            (resp || []).map((record, index) => {
                if (record.label) {
                    const parents = {
                        id: record.id,
                        label: record.label,
                        value: record.value,
                        type: record.type,
                        userDetails: {
                            firstname: record.firstname,
                            lastname: record.lastname,
                            position: record.value,
                            avatar: '',
                        },
                    };

                    users.push(parents);
                }
            });
        }
    });
    return users;
}

const users = usersearch();

export { users };
