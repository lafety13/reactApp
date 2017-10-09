import React, {Component} from 'react';
import axios from 'axios';

export class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get('http://demo.omnigon.com/pgatdemo1/mikeg/products.json')
            .then(response => response.data.products)
            .then(products => this.setState({data: products}))
            .catch(error => console.error(error))
    }

    render() {
        let filtered = this.state.data.filter(product => product.bsr_category === this.props.test);
        // const location = this.props.location;
        // const params = this.props.match.params;

        return (
            <div>
                {filtered.map(product => <div key={product.name.toString()}>{product.name}</div>)}
                {/*<h2>This is {params.level}!</h2>*/}
                {/*<h3>this.props.location</h3>*/}
                {/*<p>{JSON.stringify(location)}</p>*/}
                {/*<h3>this.props.match</h3>*/}
                {/*<p>{JSON.stringify(this.props.match)}</p>*/}
                {/*{location.search !== "" ? <p><strong>Query String:</strong> {JSON.stringify(location.search, null, 2)}</p>:null}*/}
            </div>
        );
    }
}


