import React from 'react';
import { Link, IndexLink, withRouter } from 'react-router';

class BreadCrumb extends React.Component {
    render() {
        const { location } = this.props;
        let pathName = location.pathname;
        if (pathName.indexOf('/') === 0) {
            pathName = pathName.slice(1, pathName.length);
        }

        let xhtml = '';

        if(pathName === 'admin') {
            xhtml =  <li className="active"><i className="ace-icon fa fa-home home-icon"></i>&nbsp;Home</li>
        } else if(pathName === 'admin/content-moderator') {
            xhtml = <li className="active"><i className="ace-icon fa fa-pencil-square-o home-icon"></i>&nbsp;Content Moderator</li>
        }

        return (
            <div className="breadcrumbs ace-save-state" id="breadcrumbs">
                <ul className="breadcrumb">
                   {xhtml}
                </ul>
            </div>
        );
    }
}

module.exports = withRouter(BreadCrumb);