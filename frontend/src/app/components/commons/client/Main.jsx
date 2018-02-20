import React from 'react';
import Nav from 'Commons/client/Nav.jsx';
import Footer from 'Commons/client/Footer.jsx';
import { connect } from 'react-redux';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="content">
                    <div className="wrap">
                        {this.props.children}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

module.exports = connect()(Main);