import { APICore } from '../helpers/api/apiCore';
const api = new APICore();
const user = sessionStorage.getItem('hyper_user');
const MENU_ITEMS = api.MenuPrincipal('menu', '' + user.id + '');
export default MENU_ITEMS;
