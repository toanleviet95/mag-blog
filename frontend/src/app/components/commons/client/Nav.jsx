import React from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="wrap">
                    <div className="logo">
                        <a href="index.html">
                            <img src="images/logo.png" title="pinbal" />
                        </a>
                    </div>
                    <div className="nav-icon">
                        <a className="right_bt" id="activator">
                            <span> </span>
                        </a>
                    </div>
                    <div className="box" id="box">
                        <div className="box_content">
                            <div className="box_content_center">
                                <div className="form_content">
                                    <div className="menu_box_list">
                                        <ul>
                                            <li>
                                                <IndexLink to="/" activeClassName="active"><span>Home</span></IndexLink>
                                            </li>
                                            <li>
                                                <Link to="/detail" activeClassName="active"> <span>Detail</span></Link>
                                            </li>
                                            <div className="clear"> </div>
                                        </ul>
                                    </div>
                                    <a className="boxclose" id="boxclose">
                                        <span> </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-searchbar">
                        <form>
                            <input type="text" />
                            <input type="submit" value="" />
                        </form>
                    </div>
                    <div className="userinfo">
                        <div className="user">
                            <ul>
                                <li>
                                    <a>
                                        <img src="images/user-pic.png" title="user-name" />
                                        <span>ToanLV</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="clear"> </div>
                </div>
            </div>
        );
    }
}

module.exports = Nav;