import React, { Component } from 'react';
import styled from 'styled-components';

import './style.css';

export default class Compiler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Enter Your Code',
            summa: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.summa = this.summa.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    };
    summa(event) {
        document.getElementById('io').innerHTML = "<input type='text' value = {this.state.output}/>"
    };
    handleSubmit(event) {
        var r = this.state.value;
        var i;
        var request = require('request');
        var program = {
            script: r,
            language: "python3",
            versionIndex: "0",
            clientId: "253a2a7d218eed59d4d99b89a24c9c31",
            clientSecret: "94b3ffea058f9f2f71e2da2dabd03e3aebfd65b9865486fa30bb03cfd88d4565"
        };
        request({
            url: 'https://cors-anywhere.herokuapp.com/https://api.jdoodle.com/execute',
            method: "POST",
            json: program
        },
            function (error, response, body,event) {
                console.log('error:', error);
                console.log('statusCode:', response && response.statusCode);
                event.setState({output:body.output});
                console.log('body:', body.output);
                console.log(i);
            });
            console.log(request);
            
        event.preventDefault();
    }

    componentDidUpdate(){
        document.getElementById('io').innerHTML = "<input type='text' value = '${this.state.output}'/>"
    }
    render() {
        const Button = styled.button`
            background: transparent;
              border-radius: 3px;
              border: 2px solid palevioletred;
              color: palevioletred;
              margin: 0.5em 1em;
              padding: 0.25em 1em;`;
        const sty = {
            align: 'center',
            color: 'purple'
        }
        return (
            <div>
                <div>
                    <h3 style={sty}>Hello Panja</h3>
                    <form onSubmit={this.handleSubmit}>
                        <textarea value={this.state.value} onChange={this.handleChange} cols={140} rows={50}/>
                    </form>
                </div>
                <Button onClick={this.handleSubmit}>Submit!!!</Button>
                <input type="text" id="io" />
            </div>
        );
    }
}

