import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
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

export default Input