import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Link, Route, Switch} from 'react-router-dom';
import ProductList from './components/products/ProductList';
import Test from './components/products/Test'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        axios.get('http://demo.omnigon.com/pgatdemo1/mikeg/products.json')
            .then(response => this.setState({
                data: response.data.products
            }))
            .catch(err => console.log(err))
    }

    render() {
        let category = this.state.data.map(product => product.bsr_category);
        let uniqueCategory = function(category) {
            let obj = {};
            for (let i = 0; i < category.length; i++) {
                let str = category[i];
                obj[str] = true;
            }
            return Object.keys(obj);
        }(category);

        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className="col-md-2">
                        <ul>
                            <li><Link to={"/products/all"} className="active">All</Link></li>
                            {uniqueCategory.map(category => <li key={category.toString()}><Link to={"/products/" + category} className="active">{category}</Link></li>)}
                        </ul>

                    </div>

                    <Route path='/products/:level' render={({match}) => (
                        <ProductList match={match} data={this.state.data}/>
                    )}/>

                </div>
            </div>
        );
    }
}

export default App;


