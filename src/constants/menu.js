import { APICore } from '../helpers/api/apiCore';
const api = new APICore();
const MENU_ITEMS = api.MenuPrincipal('menu');
console.log(MENU_ITEMS);

/*
    {
        key: 'almacen',
        label: 'Almacen',
        isTitle: false,
        icon: 'uil-archive',
        badge: { variant: 'success', text: '5' },
        children: [
            { key: 'ds-categorias', label: 'Categorias', url: '/dashboard/almacen/categorias', parentKey: 'almacen' },
            {
                key: 'ds-presentacion',
                label: 'Presentacion',
                url: '/dashboard/almacen/presentacion',
                parentKey: 'almacen',
            },
            { key: 'ds-marcas', label: 'Marcas', url: '/dashboard/almacen/marcas', parentKey: 'almacen' },
            { key: 'ds-productos', label: 'Productos', url: '/dashboard/almacen/productos', parentKey: 'almacen' },
            {
                key: 'ds-perecederos',
                label: 'Perecederos',
                url: '/dashboard/almacen/perecederos',
                parentKey: 'almacen',
            },
        ],
    },
 
const MENU_ITEMS = [
    { key: 'navigation', label: 'Me', isTitle: true },
    {
        key: 'almacen',
        label: 'Almacen',
        isTitle: false,
        icon: 'uil-archive',
        badge: { variant: 'success', text: '5' },
        children: [
            { key: 'ds-categorias', label: 'Categorias', url: '/dashboard/almacen/categorias', parentKey: 'almacen' },
            {
                key: 'ds-presentacion',
                label: 'Presentacion',
                url: '/dashboard/almacen/presentacion',
                parentKey: 'almacen',
            },
            { key: 'ds-marcas', label: 'Marcas', url: '/dashboard/almacen/marcas', parentKey: 'almacen' },
            { key: 'ds-productos', label: 'Productos', url: '/dashboard/almacen/productos', parentKey: 'almacen' },
            {
                key: 'ds-perecederos',
                label: 'Perecederos',
                url: '/dashboard/almacen/perecederos',
                parentKey: 'almacen',
            },
        ],
    },
    {
        key: 'cotizaciones',
        label: 'Cotizaciones',
        isTitle: 'false',
        icon: 'uil-clipboard-alt',
        badge: {
            variant: 'error',
            text: 2,
        },
        children: [
            {
                key: 'ds-generar',
                label: 'Generar Cotización',
                url: '/dashboard/cotizaciones/generarcotizacion',
                parentKey: 'cotizaciones',
                icon: '',
            },
            {
                key: 'ds-ver',
                label: 'Ver Cotización',
                url: '/dashboard/cotizaciones/vercotizacion',
                parentKey: 'cotizaciones',
                icon: '',
            },
        ],
    },
    {
        key: 'compras',
        label: 'Compras',
        isTitle: 'false',
        icon: 'uil-shopping-cart-alt',
        badge: {
            variant: 'error',
            text: 3,
        },
        children: [
            {
                key: 'ds-historialdeprecios',
                label: 'Historial De Precios',
                url: '/dashboard/compras/historialdeprecios',
                parentKey: 'compras',
                icon: '',
            },
            {
                key: 'ds-consultarcompras',
                label: 'Consultar Compras',
                url: '/dashboard/compras/consultarcompras',
                parentKey: 'compras',
                icon: '',
            },
            {
                key: 'ds-realizarcompras',
                label: 'Realizar Compras',
                url: '/dashboard/compras/realizarcompras',
                parentKey: 'compras',
                icon: '',
            },
        ],
    },
    {
        key: 'caja',
        label: 'Caja',
        isTitle: 'false',
        icon: 'uil-usd-square',
        badge: {
            variant: 'error',
            text: 2,
        },
        children: [
            {
                key: 'ds-administrarcaja',
                label: 'Administrar Caja',
                url: '/dashboard/caja/administrarcaja',
                parentKey: 'caja',
                icon: '',
            },
            {
                key: 'ds-historialdecaja',
                label: 'Historial De Caja',
                url: '/dashboard/caja/historialdecaja',
                parentKey: 'caja',
                icon: '',
            },
        ],
    },
    {
        key: 'ventas',
        label: 'Ventas',
        isTitle: 'false',
        icon: 'uil-truck-loading',
        badge: {
            variant: 'error',
            text: 2,
        },
        children: [
            {
                key: 'ds-realizarventas',
                label: 'Realizar Ventas',
                url: '/dashboard/ventas/realizarventas',
                parentKey: 'ventas',
                icon: '',
            },
            {
                key: 'ds-consultarventas',
                label: 'Consultar Ventas',
                url: '/dashboard/ventas/consultarventas',
                parentKey: 'ventas',
                icon: '',
            },
        ],
    },
    {
        key: 'apartados',
        label: 'Apartados',
        isTitle: 'false',
        icon: 'uil-clipboard-notes',
        badge: {
            variant: 'error',
            text: 2,
        },
        children: [
            {
                key: 'ds-apartarproductos',
                label: 'Apartar Productos',
                url: '/dashboard/apartados/apartarproductos',
                parentKey: 'apartados',
                icon: '',
            },
            {
                key: 'ds-consultarapartados',
                label: 'Consultar Apartados',
                url: '/dashboard/apartados/consultarapartados',
                parentKey: 'apartados',
                icon: '',
            },
        ],
    },
    {
        key: 'ventasalcredito',
        label: 'Ventas Al Crédito',
        isTitle: 'false',
        icon: 'uil-money-withdrawal',
        badge: {
            variant: 'error',
            text: 1,
        },
        children: [
            {
                key: 'ds-administrarcreditos',
                label: 'Administrar Créditos',
                url: '/dashboard/ventasalcredito/administrarcreditos',
                parentKey: 'ventasalcredito',
                icon: '',
            },
        ],
    },
    {
        key: 'inventario',
        label: 'Inventario',
        isTitle: 'false',
        icon: 'uil-box',
        badge: {
            variant: 'error',
            text: 1,
        },
        children: [
            {
                key: 'ds-abrirnuevoinventario',
                label: 'Abrir Nuevo Inventario',
                url: '/dashboard/inventario/abrirnuevoinventario',
                parentKey: 'inventario',
                icon: '',
            },
        ],
    },
    {
        key: 'parametros',
        label: 'Parametros',
        isTitle: 'false',
        icon: 'uil-box',
        badge: {
            variant: 'error',
            text: 2,
        },
        children: [
            {
                key: 'ds-empresa',
                label: 'Registrar Empresa',
                url: '/dashboard/parametros/empresas',
                parentKey: 'parametros',
                icon: '',
            },
            {
                key: 'ds-moneda',
                label: 'Monedas',
                url: '/dashboard/parametros/moneda',
                parentKey: 'parametros',
                icon: '',
            },
        ],
    },
    {
        key: 'adminusuarios',
        label: 'Admin de Usuarios',
        isTitle: 'false',
        icon: 'dripicons-user',
        badge: {
            variant: 'error',
            text: 2,
        },
        children: [
            {
                key: 'ds-usuarios',
                label: 'Usuarios',
                url: '/dashboard/configuraciones/usuarios',
                parentKey: 'adminusuarios',
            },
            {
                key: 'ds-menu',
                label: 'Menú Principal',
                url: '/dashboard/configuraciones/menu',
                parentKey: 'adminusuarios',
            },
        ],
    },
];
/*
const MENU_ITEMS = [
    { key: 'navigation', label: 'Me', isTitle: true },
    {
        key: 'almacen',
        label: 'Almacen',
        isTitle: false,
        icon: 'uil-archive',
        badge: { variant: 'success', text: '5' },
        children: [
            { key: 'ds-categorias', label: 'Categorias', url: '/dashboard/almacen/categorias', parentKey: 'almacen' },
            {
                key: 'ds-presentacion',
                label: 'Presentacion',
                url: '/dashboard/almacen/presentacion',
                parentKey: 'almacen',
            },
            { key: 'ds-marcas', label: 'Marcas', url: '/dashboard/almacen/marcas', parentKey: 'almacen' },
            { key: 'ds-productos', label: 'Productos', url: '/dashboard/almacen/productos', parentKey: 'almacen' },
            {
                key: 'ds-perecederos',
                label: 'Perecederos',
                url: '/dashboard/almacen/perecederos',
                parentKey: 'almacen',
            },
        ],
    },
    {
        key: 'cotizaciones',
        label: 'Cotizaciones',
        isTitle: false,
        icon: 'uil-clipboard-alt',
        badge: { variant: 'success', text: '2' },
        children: [
            {
                key: 'ds-generar',
                label: 'Generar Cotización',
                url: '/dashboard/cotizaciones/generarcotizacion',
                parentKey: 'cotizaciones',
            },
            {
                key: 'ds-ver',
                label: 'Ver Cotización',
                url: '/dashboard/cotizaciones/vercotizacion',
                parentKey: 'cotizaciones',
            },
        ],
    },
    {
        key: 'compras',
        label: 'Compras',
        isTitle: false,
        icon: 'uil-shopping-cart-alt',
        badge: { variant: 'success', text: '4' },
        children: [
            {
                key: 'ds-proveedores',
                label: 'Proveedores',
                url: '/dashboard/compras/proveedores',
                parentKey: 'compras',
            },
            {
                key: 'ds-realizarcompras',
                label: 'Realizar Compras',
                url: '/dashboard/compras/realizarcompras',
                parentKey: 'compras',
            },
            {
                key: 'ds-consultarcompras',
                label: 'Consultar Compras',
                url: '/dashboard/compras/consultarcompras',
                parentKey: 'compras',
            },
            {
                key: 'ds-historialdeprecios',
                label: 'Historial De Precios',
                url: '/dashboard/compras/historialdeprecios',
                parentKey: 'compras',
            },
        ],
    },
    {
        key: 'caja',
        label: 'Caja',
        isTitle: false,
        icon: 'uil-usd-square',
        badge: { variant: 'success', text: '2' },
        children: [
            {
                key: 'ds-administrarcaja',
                label: 'Administrar Caja',
                url: '/dashboard/caja/administrarcaja',
                parentKey: 'caja',
            },
            {
                key: 'ds-historialdecaja',
                label: 'Historial De Caja',
                url: '/dashboard/caja/historialdecaja',
                parentKey: 'caja',
            },
        ],
    },
    {
        key: 'ventas',
        label: 'Ventas',
        isTitle: false,
        icon: 'uil-truck-loading',
        badge: { variant: 'success', text: '3' },
        children: [
            { key: 'ds-clientes', label: 'Clientes', url: '/dashboard/ventas/clientes', parentKey: 'ventas' },
            {
                key: 'ds-realizarventas',
                label: 'Realizar Ventas',
                url: '/dashboard/ventas/realizarventas',
                parentKey: 'ventas',
            },
            {
                key: 'ds-consultarventas',
                label: 'Consultar Ventas',
                url: '/dashboard/ventas/consultarventas',
                parentKey: 'ventas',
            },
        ],
    },
    {
        key: 'apartados',
        label: 'Apartados',
        isTitle: false,
        icon: 'uil-clipboard-notes',
        badge: { variant: 'success', text: '2' },
        children: [
            {
                key: 'ds-apartarproductos',
                label: 'Apartar Productos',
                url: '/dashboard/apartados/apartarproductos',
                parentKey: 'apartados',
            },
            {
                key: 'ds-consultarapartados',
                label: 'Consultar Apartados',
                url: '/dashboard/apartados/consultarapartados',
                parentKey: 'apartados',
            },
        ],
    },
    {
        key: 'ventasalcredito',
        label: 'Ventas Al Credito',
        isTitle: false,
        icon: 'uil-money-withdrawal',
        badge: { variant: 'success', text: '1' },
        children: [
            {
                key: 'ds-administrarcreditos',
                label: 'Administrar Créditos',
                url: '/dashboard/ventasalcredito/administrarcreditos',
                parentKey: 'ventasalcredito',
            },
        ],
    },

    {
        key: 'inventario',
        label: 'Inventario',
        isTitle: false,
        icon: 'uil-box',
        badge: { variant: 'success', text: '2' },
        children: [
            {
                key: 'ds-abrirnuevoinventario',
                label: 'Abrir Nuevo Inventario',
                url: '/dashboard/inventario/abrirnuevoinventario',
                parentKey: 'inventario',
            },
            { key: 'ds-kardex', label: 'Kardex', url: '/dashboard/inventario/kardex', parentKey: 'inventario' },
        ],
    },
    {
        key: 'parametros',
        label: 'Parametros',
        isTitle: false,
        icon: 'uil-box',
        badge: { variant: 'success', text: '2' },
        children: [
            {
                key: 'ds-empresa',
                label: 'Registrar Empresa',
                url: '/dashboard/parametros/empresas',
                parentKey: 'parametros',
            },
            {
                key: 'ds-moneda',
                label: 'Monedas',
                url: '/dashboard/parametros/moneda',
                parentKey: 'parametros',
            },
        ],
    },
];
*/
export default MENU_ITEMS;
