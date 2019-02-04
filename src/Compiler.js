import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import './style.css';

export default class Compiler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Enter Your Code',
            output: '',
            lang:'C++'
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
        var rp = require('request-promise');
        var program = {
            script: r,
            language: "cpp",
            versionIndex: "0",
            clientId: "253a2a7d218eed59d4d99b89a24c9c31",
            clientSecret: "94b3ffea058f9f2f71e2da2dabd03e3aebfd65b9865486fa30bb03cfd88d4565"
        };
        var options = {
            method: 'POST',
            uri: 'https://cors-anywhere.herokuapp.com/https://api.jdoodle.com/execute',
            json: program
        };
        const that = this;
        rp(options)
            .then(function (parsedBody) {
                console.log(parsedBody);
                that.setState({ output: parsedBody.output });
            })
            .catch(function (err) {
                // POST failed...
                console.log(err);
            });
        event.preventDefault();
    }

    render() {
        const sty = {
            align: 'center',
            color: 'purple'
        }
        return (
            <div>
                <div>
                    <h3 style={sty}>Hello Panja</h3>
                    <form onSubmit={this.handleSubmit}>
                        <textarea value={this.state.value} onChange={this.handleChange} cols={140} rows={50} />
                    </form>
                </div>
                <Button variant="contained" color="primary" onClick={this.handleSubmit}>Submit!!!</Button>
                <input type="text" id="io" value={this.state.output} />
            </div>
        );
    }
}

