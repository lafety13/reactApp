import React, {Component}  from 'react';
import './App.css';
import withCrud from './hoc/withCrud';
import List from './components/products/List';
import PropTypes from 'prop-types';


// function App({ data, create }) {
//     return (
//         <div className={"container"}>
//             <div className={"row"}>
//                 <List data={data} />
//             </div>
//         </div>
//     );
// }

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <List data={this.props.data} category={this.props.category} />
                </div>
            </div>
        );
    }
}

App.propTypes = {
    data: PropTypes.array.isRequired
};

App.defaultProps = {
    data: []
};

export default withCrud(App);
