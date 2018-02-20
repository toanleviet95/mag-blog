import React from 'react';
import Nav from 'Commons/dashboard/Nav.jsx';
import Footer from 'Commons/dashboard/Footer.jsx';
import SideBar from 'Commons/dashboard/SideBar.jsx';
import BreadCrumb from 'Commons/dashboard/BreadCrumb.jsx';
import { connect } from 'react-redux';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="main-container ace-save-state" id="main-container">
                    <SideBar />
                    <div className="main-content">
                        <div className="main-content-inner">
                            <BreadCrumb />
                            <div className="page-content">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                    <Footer />
                    <a href="#" id="btn-scroll-up" className="btn-scroll-up btn btn-sm btn-inverse">
                        <i className="ace-icon fa fa-angle-double-up icon-only bigger-110"></i>
                    </a>
                </div>
            </div>
        );
    }
}

module.exports = connect()(Main);