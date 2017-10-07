import React from 'react';
import axios from 'axios';

function withCrud(Component, apiUrl = 'http://demo.omnigon.com/pgatdemo1/mikeg/products.json') {
    class WithCrud extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
                category: 'category11'
            };
        }

        componentDidMount() {
            this.get();
        }

        get = () => {
            axios.get(apiUrl)
                .then(response => response.data.products)
                .then(products => this.setState({data: products}))
                .catch(error => console.error(error))
        };

        render() {
            return <Component data={this.state.data}
                              get={this.get}
                              category={this.state.category}
                              {...this.props} />
        }
    }

    WithCrud.displayName = `WithCrud(${Component.displayName || Component.name || 'Component'})`;
    return WithCrud;
}

export default withCrud;