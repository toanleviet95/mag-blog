import React from 'react';
import { connect } from 'react-redux';
import Card from 'Partials/client/HomePage/Card.jsx';

class ListCard extends React.Component {
    render() {
        return (
            <ul id="tiles">
                {this.props.listCards.map((e, i) => 
                    <li>
                        <Card index={i} key={i}>{e}</Card>
                    </li>
                )}
            </ul>
        );
    }
}

module.exports = connect((state) => {
    return {
        listCards: state.getListCards
    }
})(ListCard);