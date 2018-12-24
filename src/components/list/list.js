import React, { Component } from 'react';

import { Table, Grid, Row, Col} from 'react-bootstrap';

import Student from "../student/student";

export default class list extends Component {


    state = {
        prod:[
            {"id":1,"name":"Cristian","edad":10},
            {"id":2,"name":"Juan","edad":7},
            {"id":3,"name":"Francisco","edad":4},
            {"id":4,"name":"Mario","edad":2},
            {"id":5,"name":"Keyla","edad":10},
            {"id":6,"name":"Francisco","edad":50},
            {"id":7,"name":"Maria","edad":60},
            {"id":8,"name":"Julieta","edad":70},
            {"id":9,"name":"Cristofer","edad":80},
            {"id":10,"name":"Carolina","edad":12},
            {"id":11,"name":"Patricio","edad":11}
        ],
        cnt:1
    }

    buildList(){
        return this.state.prod.map((prod) => {
            return (
                <Student  key = {prod.id} it = {this.state.cnt++} code = {prod.id} name = {prod.name} edad = {prod.edad}/>
            )


        })
    }


    render() {
        return (

            <div className = "list">

                <div className = "container-fluid">
                    <Grid>
                        <Row className = "show-grid">
                            <Col lg = {1} md = {1}></Col>
                            <Col lg = {10} md = {10}>
                                <h2 style = {{marginBottom: 20 + 'px'}}>Listado de alumnos</h2>
                                <Table striped bordered condensed hover>
                                    <thead>
                                    <tr>
                                        <th className = "datos" >#</th>
                                        <th className = "datos" >Nombre</th>
                                        <th className = "datos" >Edad</th>
                                    </tr>
                                    </thead>
                                    <tbody >
                                        {this.buildList()}
                                    </tbody>
                                </Table>
                            </Col>
                            <Col lg = {1} md = {1}></Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}
