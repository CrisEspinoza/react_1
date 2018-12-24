import React, { Component } from 'react';


export default class student extends Component{

    state = {
        code_1: '',
        name_1:'',
        edad_1:'',
    }


    editProduct = () => {
        this.setState({
            code_1:this.props.code,
            name_1:this.props.name,
            edad_1:this.props.edad,
        });

    }

    render(){
        return(
            <tr>
                <td>{this.props.code}</td>
                <td>{this.props.name}</td>
                <td>{this.props.edad}</td>
            </tr>

        );
    }
}