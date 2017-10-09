import React, { Component } from 'react';
import axios from 'axios';

export class ProductData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }


    componentDidMount() {
        axios.get('http://demo.omnigon.com/pgatdemo1/mikeg/products.json')
            .then(response => this.setState({data: response.data.products}))
            .catch(err => console.log(err))
    }

    get getData() {
        return this.state.data;
    }
}