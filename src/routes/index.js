import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

// lazy load all the views

// auth
const Login = React.lazy(() => import('../pages/account/Login'));
const Logout = React.lazy(() => import('../pages/account/Logout'));
const Register = React.lazy(() => import('../pages/account/Register'));
// agregar le el reto const Confirm = React.lazy(() => import('../pages/account/Confirm'));
const ForgetPassword = React.lazy(() => import('../pages/account/ForgetPassword'));
const LockScreen = React.lazy(() => import('../pages/account/LockScreen'));

const Login2 = React.lazy(() => import('../pages/account2/Login2'));
const Logout2 = React.lazy(() => import('../pages/account2/Logout2'));
const Register2 = React.lazy(() => import('../pages/account2/Register2'));
const Confirm2 = React.lazy(() => import('../pages/account2/Confirm2'));
const ForgetPassword2 = React.lazy(() => import('../pages/account2/ForgetPassword2'));
const LockScreen2 = React.lazy(() => import('../pages/account2/LockScreen2'));

// dashboard
const Categorias = React.lazy(() => import('../pages/dashboard/Almacen/Categorias'));
const Presentacion = React.lazy(() => import('../pages/dashboard/Almacen/Presentacion'));
const Marcas = React.lazy(() => import('../pages/dashboard/Almacen/Marcas'));
const Productos = React.lazy(() => import('../pages/dashboard/Almacen/Productos'));
const Perecederos = React.lazy(() => import('../pages/dashboard/Almacen/Perecederos'));
const GenerarCotizacion = React.lazy(() => import('../pages/dashboard/Cotizaciones/GenerarCotizacion'));
const VerCotizacion = React.lazy(() => import('../pages/dashboard/Cotizaciones/VerCotizacion'));
const Proveedores = React.lazy(() => import('../pages/dashboard/Compras/Proveedores'));
const RealizarCompras = React.lazy(() => import('../pages/dashboard/Compras/RealizarCompras'));
const ConsultarCompras = React.lazy(() => import('../pages/dashboard/Compras/ConsultarCompras'));
const HistorialDePrecios = React.lazy(() => import('../pages/dashboard/Compras/HistorialDePrecios'));
const AdministrarCaja = React.lazy(() => import('../pages/dashboard/Caja/AdministrarCaja'));
const HistorialDeCaja = React.lazy(() => import('../pages/dashboard/Caja/HistorialDeCaja'));
const Clientes = React.lazy(() => import('../pages/dashboard/Ventas/Clientes'));
const RealizarVentas = React.lazy(() => import('../pages/dashboard/Ventas/RealizarVentas'));
const ConsultarVentas = React.lazy(() => import('../pages/dashboard/Ventas/ConsultarVentas'));
const ApartarProductos = React.lazy(() => import('../pages/dashboard/Apartados/ApartarProductos'));
const ConsultarApartados = React.lazy(() => import('../pages/dashboard/Apartados/ConsultarApartados'));
const AdministrarCreditos = React.lazy(() => import('../pages/dashboard/VentasAlCredito/AdministrarCreditos'));
const AbrirNuevoInventario = React.lazy(() => import('../pages/dashboard/Inventario/AbrirNuevoInventario'));
const Kardex = React.lazy(() => import('../pages/dashboard/Inventario/Kardex'));

//configuraciones
const menu = React.lazy(() => import('../pages/dashboard/configuraciones/menu'));
const usuarios = React.lazy(() => import('../pages/dashboard/configuraciones/usuarios'));
// root routes
const rootRoute = {
    path: '/',
    exact: true,
    component: () => <Redirect to="/dashboard/" />,
    route: PrivateRoute,
};

// dashboards
const dashboardRoutes = {
    path: '/dashboard',
    name: 'Dashboards',
    icon: 'uil-home-alt',
    header: 'Navigation',
    children: [
        {
            path: '/dashboard/almacen/categorias',
            name: 'Almacen',
            component: Categorias,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/almacen/presentacion',
            name: 'Presentación',
            component: Presentacion,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/almacen/marcas',
            name: 'Marcas',
            component: Marcas,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/almacen/productos',
            name: 'Productos',
            component: Productos,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/almacen/perecederos',
            name: 'Perecederos',
            component: Perecederos,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/cotizaciones/generarcotizacion',
            name: 'GenerarCotizacion',
            component: GenerarCotizacion,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/cotizaciones/vercotizacion',
            name: 'VerCotizacion',
            component: VerCotizacion,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/compras/proveedores',
            name: 'Proveedores',
            component: Proveedores,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/compras/realizarcompras',
            name: 'RealizarCompras',
            component: RealizarCompras,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/compras/consultarcompras',
            name: 'ConsultarCompras',
            component: ConsultarCompras,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/compras/historialdeprecios',
            name: 'HistorialDePrecios',
            component: HistorialDePrecios,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/caja/administrarcaja',
            name: 'AdministrarCaja',
            component: AdministrarCaja,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/caja/historialdecaja',
            name: 'HistorialDeCaja',
            component: HistorialDeCaja,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/ventas/clientes',
            name: 'Clientes',
            component: Clientes,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/ventas/realizarventas',
            name: 'RealizarVentas',
            component: RealizarVentas,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/ventas/consultarventas',
            name: 'ConsultarVentas',
            component: ConsultarVentas,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/apartados/apartarproductos',
            name: 'ApartarProductos',
            component: ApartarProductos,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/apartados/consultarapartados',
            name: 'ConsultarApartados',
            component: ConsultarApartados,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/ventasalcredito/administrarcreditos',
            name: 'AdministrarCreditos',
            component: AdministrarCreditos,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/inventario/abrirnuevoinventario',
            name: 'abrirnuevoinventario',
            component: AbrirNuevoInventario,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/inventario/kardex',
            name: 'kardex',
            component: Kardex,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/configuraciones/menu',
            name: 'menu',
            component: menu,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/configuraciones/usuarios',
            name: 'usuarios',
            component: usuarios,
            route: PrivateRoute,
        },
    ],
};

// flatten the list of all nested routes
const flattenRoutes = (routes) => {
    let flatRoutes = [];

    routes = routes || [];
    routes.forEach((item) => {
        flatRoutes.push(item);

        if (typeof item.children !== 'undefined') {
            flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
        }
    });
    return flatRoutes;
};

// auth
const authRoutes = [
    {
        path: '/account/login',
        name: 'Login',
        component: Login,
        route: Route,
    },
    {
        path: '/account/logout',
        name: 'Logout',
        component: Logout,
        route: Route,
    },
    {
        path: '/account/register',
        name: 'Register',
        component: Register,
        route: Route,
    },
    {
        path: '/account/forget-password',
        name: 'Forget Password',
        component: ForgetPassword,
        route: Route,
    },
    {
        path: '/account/lock-screen',
        name: 'Lock Screen',
        component: LockScreen,
        route: Route,
    },
    {
        path: '/account/login2',
        name: 'Login2',
        component: Login2,
        route: Route,
    },
    {
        path: '/account/logout2',
        name: 'Logout2',
        component: Logout2,
        route: Route,
    },
    {
        path: '/account/register2',
        name: 'Register2',
        component: Register2,
        route: Route,
    },
    {
        path: '/account/confirm2',
        name: 'Confirm2',
        component: Confirm2,
        route: Route,
    },
    {
        path: '/account/forget-password2',
        name: 'Forget Password2',
        component: ForgetPassword2,
        route: Route,
    },
    {
        path: '/account/lock-screen2',
        name: 'Lock Screen2',
        component: LockScreen2,
        route: Route,
    },
];

// All routes
const authProtectedRoutes = [rootRoute, dashboardRoutes];
const publicRoutes = [...authRoutes];

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes]);
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes]);

export { publicRoutes, authProtectedRoutes, authProtectedFlattenRoutes, publicProtectedFlattenRoutes };
