import React from 'react';
import { Link, IndexLink, withRouter } from 'react-router';

class SideBar extends React.Component {
	handleClickRedirect = (url) => (e) => {
		e.preventDefault();
		window.location.href = url;
	}
	
    render() {
		const {location} = this.props;
		let pathName = location.pathname;
		if (pathName.indexOf('/') === 0) {
			pathName = pathName.slice(1, pathName.length);
		}
        return (
            <div id="sidebar" className="sidebar responsive ace-save-state">
				<div className="sidebar-shortcuts" id="sidebar-shortcuts">
					<div className="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
						<button className="btn btn-success">
							<i className="ace-icon fa fa-signal"></i>
						</button>

						<button className="btn btn-info">
							<i className="ace-icon fa fa-pencil"></i>
						</button>

						<button className="btn btn-warning">
							<i className="ace-icon fa fa-users"></i>
						</button>

						<button className="btn btn-danger">
							<i className="ace-icon fa fa-cogs"></i>
						</button>
					</div>

					<div className="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
						<span className="btn btn-success"></span>

						<span className="btn btn-info"></span>

						<span className="btn btn-warning"></span>

						<span className="btn btn-danger"></span>
					</div>
				</div>

				<ul className="nav nav-list">
					<li className={pathName === 'admin' ? 'active' : ''}>
						<IndexLink to="/admin">
							<i className="menu-icon fa fa-tachometer"></i>
							<span className="menu-text"> Dashboard </span>
						</IndexLink>
					</li>

					<li id="content-moderator" className={pathName === 'admin/content-moderator' ? 'active' : ''}>
						<Link to="admin/content-moderator">
								<i className="menu-icon fa fa-pencil-square-o"></i>
								<span className="menu-text"> Content Moderator </span>
						</Link>
					</li>
				</ul>

				<div className="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
					<i id="sidebar-toggle-icon" className="ace-icon fa fa-angle-double-left ace-save-state" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right"></i>
				</div>
			</div>
        );
    }
}

module.exports = withRouter(SideBar);