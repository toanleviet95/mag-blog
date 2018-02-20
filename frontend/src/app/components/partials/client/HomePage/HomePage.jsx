import React from 'react';
import { connect } from 'react-redux';
import ListCard from 'Partials/client/HomePage/ListCard.jsx';

class HomePage extends React.Component {
    render() {
        return (
            <div id="main" role="main">
                <ListCard/>
            </div>
        );
    }
}

module.exports = connect()(HomePage);