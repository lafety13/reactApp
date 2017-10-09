import React, {Component} from 'react';
import { Pagination } from "react-bootstrap";
import axios from 'axios';
import Input from './Input';
import Product from './Product';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageOfItems: [],
            search : '',
            activePage: 1,
        };
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
        let params = this.props.match.params;

        let filteredData = this.props.data
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

        return (
            <div className="col-md-8">
                <Input
                    value = {this.state.search}
                    onChange = {this.updateSearch.bind(this)}/>

                <ul className="list-group">
                    {filteredData.map((product, index) => {
                        if (index >= startOffset && startCount < perPage) {
                            startCount++;
                            return (
                                <Product key={index} product={product}/>
                            );
                        }
                        return true;
                    })}
                </ul>

                <Pagination className="users-pagination pull-right" bsSize="medium" maxButtons={10} first last next
                            prev boundaryLinks items={pages} activePage={page} onSelect={this.onChangePage.bind(this)}/>
            </div>
        );
    }
}

export default ProductList