import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Pagination } from "react-bootstrap";
import {Link, Route, Switch} from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            categoryProduct: 'All',
            pageOfItems: [],
            search : '',
            activePage: 1,
        };
    }

    componentDidMount() {
        axios.get('http://demo.omnigon.com/pgatdemo1/mikeg/products.json')
            .then(response => this.setState({data: response.data.products}))
            .catch(err => console.log(err))
    }

    onChangePage(page) {
        this.setState({
            activePage: page
        });
    }

    updateSearch (event) {
        this.setState({
            activePage: 1,
            search : event.target.value.substr(0, 20)
        })
    }

    onClickCategory(event) {
        this.setState({
            categoryProduct: event.target.value
        });
    }

    render() {

        // let filteredProduct = this.state.data.filter((product) => {
        //         return product.name.indexOf(this.state.search) !== -1
        //     }
        // );
        // //let test = filteredProduct.filter(product => product.bsr_category === 'Amazon Launchpad');
        // //console.log(test);
        //
        // const page = this.state.activePage;
        // const perPage = 10;
        // const pages = Math.ceil(filteredProduct.length / perPage);
        // const startOffset = (page - 1) * perPage;
        // let startCount = 0;


        return (
        <div className={"container"}>
            <div className={"row"}>
                <div className="col-md-2">
                    <ul>
                        <li><Link to={this.props.match.url + "/all"} className="active">All</Link></li>
                        <li><Link to={this.props.match.url + "/Amazon Launchpad/"} className="active">Amazon Launchpad</Link></li>
                    </ul>

                </div>

                <div className="col-md-8">

                    <Switch>
                        <Route path={`${this.props.match.url}/:level/`} component={Product}/>} />
                    </Switch>

                    {/*<Input*/}
                        {/*value = {this.state.search}*/}
                        {/*onChange = {this.updateSearch.bind(this)}/>*/}

                    {/*{filteredProduct.map((product, index) => {*/}
                        {/*if (index >= startOffset && startCount < perPage) {*/}
                            {/*startCount++;*/}
                            {/*return (*/}
                                {/*<div key={index}>{product.name}</div>*/}
                            {/*);*/}
                        {/*}*/}
                    {/*})}*/}

                    {/*<Pagination className="users-pagination pull-right" bsSize="medium" maxButtons={10} first last next*/}
                                {/*prev boundaryLinks items={pages} activePage={page} onSelect={this.onChangePage.bind(this)}/>*/}
                </div>

            </div>
        </div>
        );
    }
}

export default App;

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            categoryProduct: 'All',
            pageOfItems: [],
            search : '',
            activePage: 1,
        };
    }

    componentDidMount() {
        axios.get('http://demo.omnigon.com/pgatdemo1/mikeg/products.json')
            .then(response => this.setState({data: response.data.products}))
            .catch(err => console.log(err))
    }

    onChangePage(page) {
        this.setState({
            activePage: page
        });
    }

    updateSearch (event) {
        this.setState({
            activePage: 1,
            search : event.target.value.substr(0, 20)
        })
    }

    render() {
        // let searchProduct = this.state.data.filter((product) => {
        //         return product.name.indexOf(this.state.search) !== -1
        //     }
        // );
        //let test = filteredProduct.filter(product => product.bsr_category === 'Amazon Launchpad');
        //console.log(test);
        let params = this.props.match.params;

        let filteredData = this.state.data
            .filter(product => product.name.indexOf(this.state.search) !== -1)
            .filter(product => {
                if (params.level === 'all') return true;
                return product.bsr_category === this.props.match.params.level
            });

        const page = this.state.activePage;
        const perPage = 10;
        const pages = Math.ceil(filteredData.length / perPage);
        const startOffset = (page - 1) * perPage;
        let startCount = 0;
        console.log(filteredData);

        return (
            <div className="col-md-8">
                <Input
                value = {this.state.search}
                onChange = {this.updateSearch.bind(this)}/>

                {filteredData.map((product, index) => {
                    if (index >= startOffset && startCount < perPage) {
                        startCount++;
                        return (
                            <div key={index}>{product.name}</div>
                        );
                    }
                })}

                <Pagination className="users-pagination pull-right" bsSize="medium" maxButtons={10} first last next
                prev boundaryLinks items={pages} activePage={page} onSelect={this.onChangePage.bind(this)}/>
            </div>
        );
    }
}

class Input extends React.Component {

    render() {
        return <input
            className="default-input"
            placeholder="Enter your name"
            {...this.props}
            type="text"
        />;
    }

}

Input.propTypes = {
    onChange: PropTypes.func.isRequired
};