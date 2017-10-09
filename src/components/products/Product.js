import React, {Component} from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <li className="list-group-item">{this.props.product.name}</li>
        );
    }
}

export default Product