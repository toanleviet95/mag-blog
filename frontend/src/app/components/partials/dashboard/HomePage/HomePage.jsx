import React from 'react';
import { connect } from 'react-redux';

class HomePage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                </div>
            </div>
        );
    }
}

module.exports = connect()(HomePage);