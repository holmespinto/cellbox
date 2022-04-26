import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { APICore } from './api/apiCore';

const api = new APICore();

var jwt = require('jsonwebtoken');
function generateToken(user) {
    let token = '';
    var u = {
        username: user.username,
        id: user.id,
    };
    token = jwt.sign(u, user.password, {
        expiresIn: 60 * 60 * 24, // expires in 24 hours
    });
    return token;
}

var mock = new MockAdapter(axios);

export function configureFakeBackend() {
    mock.onPost('/login/').reply(function (config) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                // get parameters from post request
                let params = JSON.parse(config.data);
                let CryptoJS = require('crypto-js');
                // find if any user matches login credentials
                //  var ciphertext = CryptoJS.AES.encrypt('123456789', 'secret key 123').toString();

                ///CARGAR PERIODO
                const url = `https://api.compucel.co/v1/?&accion=usuarios&operacion=sindoc&opcion=consultar&username=${params.username}`;
                const Usuarios = api.setConsultas(`${url}`);
                Usuarios.then(function (response) {
                    // let paramus = JSON.parse(response);
                    let user = response[0];
                    //console.log(response);
                    if (!user || user.username === 'null') {
                        // else return error
                        //sessionStorage.removeItem('user_asignaturas');
                        resolve([401, { message: 'Username or password is incorrect' }]);
                    } else {
                        let usuario = () => {
                            var bytes = CryptoJS.AES.decrypt(user.password, 'secret key 123');
                            var password = bytes.toString(CryptoJS.enc.Utf8);
                            return user.username === params.username && password === params.password;
                        };
                        if (usuario) {
                            // if login details are valid return user details and fake jwt

                            const TOKEN = generateToken(user);
                            let usuario = {
                                id: user.id,
                                primer_nombre: user.primer_nombre,
                                segundo_nombre: user.segundo_nombre,
                                numero_documento: user.numero_documento,
                                Nombre: user.Nombre,
                                Apellido: user.Apellido,
                                email_personal: user.email_personal,
                                username: user.username,
                                password: user.password,
                                role: user.rol,
                                token: TOKEN,
                            };

                            resolve([200, usuario]);
                        } else {
                            sessionStorage.removeItem('user_asignaturas');
                            resolve([401, { message: 'Username or password is incorrect' }]);
                        }
                    }
                });
            }, 1000);
        });
    });
    mock.onPost('/register/').reply(function (config) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                // get parameters from post request
                let CryptoJS = require('crypto-js');
                let params = JSON.parse(config.data);
                const url = `https://api.compucel.co/v1/?&accion=usuarios&opcion=registrar`;
                const Usuarios = api.setConsultas(`${url}?username=${params.username}`);
                Usuarios.then(function (response) {
                    let paramus = JSON.parse(response);
                    let user = paramus.Data[0];
                    if (!user) {
                        // else return error
                        resolve([401, { message: 'Username or password is incorrect' }]);
                    } else {
                        const arr = JSON.stringify(user);
                        const users = JSON.parse(arr);
                        let usuario = () => {
                            var password = CryptoJS.AES.encrypt(params.password, 'secret key 123').toString();
                            return users.username === params.username && password === params.password;
                        };
                        if (usuario) {
                            // if login details are valid return user details and fake jwt
                            const TOKEN = '';
                            let newUser = {
                                id: users.length + 1,
                                primer_nombre: params.primer_nombre,
                                segundo_nombre: params.segundo_nombre,
                                numero_documento: params.numero_documento,
                                Nombre: params.Nombre,
                                Apellido: params.Apellido,
                                email_personal: params.email_personal,
                                username: params.username,
                                password: params.password,
                                role: params.rol,
                                token: TOKEN,
                            };
                            users.push({ newUser });

                            resolve([200, newUser]);
                        } else {
                            resolve([401, { message: 'Username or password is incorrect' }]);
                        }
                    }
                });

                // add new users
                //let [firstName, lastName] = params.fullname.split(' ');
            }, 1000);
        });
    });

    mock.onPost('/forget-password/').reply(function (config) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                /*
                const [usuarios, setUsuarios] = useState([]);
                // get parameters from post request
                let params = JSON.parse(config.data);
                // find if any user matches login credentials
                let filteredUsers = usuarios.filter((user) => {
                    return user.username === params.username;
                });

                if (filteredUsers.length) {
                    // if login details are valid return user details and fake jwt token
                    let responseJson = {
                        message: "We've sent you a link to reset password to your registered email.",
                    };
                    resolve([200, responseJson]);
                } else {
                    // else return error
                    resolve([401, { message: 'Sorry, we could not find any registered user with entered username' }]);
                }
                */
            }, 1000);
        });
    });
}
