import React, {Component}  from 'react';
import './App.css';
import withCrud from './hoc/withCrud';
import List from './components/products/List';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';
import { Product } from './components/products/Product';


// function App({ data, create }) {
//     return (
//         <div className={"container"}>
//             <div className={"row"}>
//                 <List data={data} />
//             </div>
//         </div>
//     );
// }

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {

        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-md-2"}>
                        <div className="leftNavi">
                            <ul>
                                <li><Link to={this.props.match.url +"/Amazon Launchpad/"} className="active">Level 1</Link></li>
                                <li><Link to={this.props.match.url + "/Arts, Crafts & Sewing"} className="active">Level 2</Link></li>
                                <li><Link to={this.props.match.url + "/level3"} className="active">Level 3</Link></li>
                            </ul>
                        </div>
                        <div className="rightContent">
                            <p>Second Level Content will appear here:</p>
                            <Switch>
                                <Route path={`${this.props.match.url}/:level/`} component={Product}/>} />
                            </Switch>
                        </div>
                    </div>

                    {/*<div className={"col-md-8"}>*/}
                        {/*<List data={this.props.data} category={this.props.category} />*/}
                    {/*</div>*/}
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
