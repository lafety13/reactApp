import React, {Component} from 'react';
import {Product} from "./Product";
import PropTypes from 'prop-types';
import { Pagination } from "react-bootstrap";

export class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            activePage: 1
        };
    }

    onChangePage(page) {
        this.setState({
            activePage: page
        });
    }

    updateSearch (event) {
        this.setState({
            search : event.target.value.substr(0, 20)
        })
    }

    render() {
        let filteredProduct = this.props.data.filter((product) => {
                return product.name.indexOf(this.state.search) !== -1
            }
        );
        const page = this.state.activePage;
        const perPage = 10;
        const pages = Math.ceil(filteredProduct.length / perPage);
        const startOffset = (page - 1) * perPage;
        let startCount = 0;

        return (
          <div>
            <Input
                value = {this.state.search}
                onChange = {this.updateSearch.bind(this)}/>

            <ul className={"list-group"}>
                {filteredProduct.map((product, index) => {
                    if (index >= startOffset && startCount < perPage) {
                        startCount++;
                        return (
                            <Product key={index} product={product} />
                        );
                    }
                })}
            </ul>

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