import React, {Component} from 'react';
import { Pagination } from "react-bootstrap";
import Product from './Product';
import { FormControl} from 'react-bootstrap';
import '../../App.css';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageOfItems: [],
            search : '',
            activePage: 1,
            perPage: 10
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

    _filterProductList() {
        let params = this.props.match.params;
        return this.props.data
            .filter(product => product.name.indexOf(this.state.search) !== -1)
            .filter(product => {
                if (params.level === 'all') return true;
                return product.bsr_category === this.props.match.params.level
            });
    }

    render() {
        let filteredData =  this._filterProductList();
        const page = this.state.activePage;
        const pages = Math.ceil(filteredData.length / this.state.perPage);
        const startOffset = (page - 1) * this.state.perPage;
        let startCount = 0;

        return (
            <div>
                <FormControl
                    bsClass="form-control m-bot"
                    value = {this.state.search}
                    onChange = {this.updateSearch.bind(this)}
                    type="text" placeholder="Write something to search for" />

                    {filteredData.map((product, index) => {
                        if (index >= startOffset && startCount < this.state.perPage) {
                            startCount++;
                            return (
                                <Product key={index} product={product}/>
                            );
                        }
                        return true;
                    })}


                <Pagination className="users-pagination pull-right" bsSize="medium" maxButtons={10} first last next
                            prev boundaryLinks items={pages} activePage={page} onSelect={this.onChangePage.bind(this)}/>
            </div>
        );
    }
}

export default ProductList