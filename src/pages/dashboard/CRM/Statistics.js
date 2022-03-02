// @flow
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import StatisticsChartWidget from '../../../components/StatisticsChartWidget';

const Statistics = (props): React$Element<React$FragmentType> => {

    return (
        <React.Fragment>
            <Row>
                <Col lg={6} xl={3} >
                <Link to="#" onClick={(d) => {props.onState({selected:1}); }}>
                    <StatisticsChartWidget
                        description="Campaign Sent"
                        title="Inventario"
                        stats="9,184"
                        trend={{ textClass: 'text-success', icon: 'mdi mdi-arrow-up-bold', value: '3.27%' }}
                        colors={['#727cf5']}
                        data={[25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]}></StatisticsChartWidget> </Link>
                </Col>

                <Col lg={6} xl={3}>
                <Link to="#" onClick={(d) => {props.onState({selected:2}); }}>
                    <StatisticsChartWidget
                        description="New Leads"
                        title="Compras"
                        stats="3,254"
                        trend={{ textClass: 'text-danger', icon: 'mdi mdi-arrow-down-bold', value: '5.38%' }}
                        colors={['#0acf97']}
                        type="line"
                        data={[25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]}></StatisticsChartWidget> </Link>
                </Col>
                <Col lg={6} xl={3}>
                <Link to="#" onClick={(d) => {props.onState({selected:3}); }}>
                    <StatisticsChartWidget
                        description="Deals"
                        title="Ventas"
                        stats="861"
                        trend={{ textClass: 'text-success', icon: 'mdi mdi-arrow-up-bold', value: '4.87%' }}
                        colors={['#727cf5']}
                        data={[12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]}></StatisticsChartWidget> </Link>
                </Col>

                <Col lg={6} xl={3}>
                <Link to="#" onClick={(d) => {props.onState({selected:4}); }}>
                    <StatisticsChartWidget
                        description="Booked Revenue"
                        title="Proveedores"
                        stats="$253k"
                        trend={{ textClass: 'text-success', icon: 'mdi mdi-arrow-up-bold', value: '11.7%' }}
                        colors={['#0acf97']}
                        data={[47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82]}></StatisticsChartWidget> </Link>
                </Col>
            </Row>
        
        </React.Fragment>
    );
};

export default Statistics;
