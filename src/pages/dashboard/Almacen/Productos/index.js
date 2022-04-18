// @flow
import { Row, Col } from 'react-bootstrap';
import React, { useState,useEffect } from 'react';

// components
import PageTitle from '../../../../components/PageTitle';
import ComponentProductos from './ComponentProductos';
import { APICore } from '../../../../helpers/api/apiCore';
const api = new APICore();

const Productos = (): React$Element<React$FragmentType> => {
    const [records_marca, openMarcas] = useState([]);
    const [data_marca, cargarMarcas] = useState([]);
    const [records_categoria, openCategorias] = useState([]);
    const [data_categoria, cargarCategorias] = useState([]);
    const [records_presentacion, openPresentacion] = useState([]);
    const [data_presentacion, cargarPresentacion] = useState([]);
    useEffect(() => {
        const url = `https://api.compucel.co/v1/?&accion=categorias&opcion=consultar`;
        const categ = api.getDatos(`${url}`);
        categ.then(function (resp) {
            if (resp) {
                //console.log(resp);
                openCategorias(resp);
            } else {
                const cate = [
                    {
                        id: 1,
                        categoria: 'No existen categorias',
                        status: 'null',
                    },
                ];
                cargarCategorias(cate);
            }
        });
    }, []);

    useEffect(() => {
        if (records_categoria && records_categoria.length > 0) {
            //const cur = JSON.parse(records);
            const mapped = [];
            mapped.push(records_categoria);
            cargarCategorias(mapped[0]);
        }
    }, [records_categoria]);

    useEffect(() => {
        const url = `https://api.compucel.co/v1/?&accion=marcas&opcion=consultar`;
        const marc = api.getDatos(`${url}`);
        marc.then(function (resp) {
            if (resp) {
                //console.log(resp);
                openMarcas(resp);
            } else {
                const marca = [
                    {
                        id: 1,
                        marca: 'No existen la marca',
                        status: 'null',
                    },
                ];
                cargarMarcas(marca);
            }
        });
    }, []);

    useEffect(() => {
        if (records_marca && records_marca.length > 0) {
            //const cur = JSON.parse(records);
            const mapped = [];
            mapped.push(records_marca);
            cargarMarcas(mapped[0]);
        }
    }, [records_marca]);


    useEffect(() => {
        const url = `https://api.compucel.co/v1/?&accion=presentaciones&opcion=consultar`;
        const pre = api.getDatos(`${url}`);
        pre.then(function (resp) {
            if (resp) {
                //console.log(resp);
                openPresentacion(resp);
            } else {
                const presen = [
                    {
                        id: 1,
                        marca: 'No existen la presentacion',
                        Siglas:'null',
                        status: 'null',
                    },
                ];
                cargarPresentacion(presen);
            }
        });
    }, []);

    useEffect(() => {
        if (records_presentacion && records_presentacion.length > 0) {
            //const cur = JSON.parse(records);
            const mapped = [];
            mapped.push(records_presentacion);
            cargarPresentacion(mapped[0]);
        }
    }, [records_presentacion]);
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Dashboard' },
                    { label: 'Categorias', path: '/dashboard/almacen/productos', active: true },
                ]}
                title={'Productos'}
            />
            <Row>
                <Col lg={12}>
                    <ComponentProductos data_marca={data_marca} data_categoria={data_categoria} data_presentacion={data_presentacion}/>
                </Col>
            </Row>
        </>
    );
};

export default Productos;
