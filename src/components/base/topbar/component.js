import React, { Component, PropTypes } from 'react';

class TopBarComponent extends Component {
  render() {
    return (
        <div className="topbar">
            <div className="topbar-left">
                <div className="text-center">
                    <a href="index.html" className="logo"><i className="md md-terrain"></i> <span>DaoCasino</span></a>
                </div>
            </div>
            <div className="navbar navbar-default" role="navigation">
                <div className="container">
                    <div className="">

                        <form className="navbar-form pull-left" role="search">
                            <div className="form-group">
                                <input type="text" className="form-control search-bar" placeholder="Type here for search..."/>
                            </div>
                            <button type="submit" className="btn btn-search"><i className="fa fa-search"></i></button>
                        </form>

                        <ul className="nav navbar-nav navbar-right pull-right">
                            <li className="hidden-xs">
                                <a href="" className="">
                                    <span className="text-yellow">Online: 38</span>
                                </a>
                            </li>
                            <li className="dropdown">
                                <a href="" className="" aria-expanded="true">
                                    <img src="/src/assets/images/users/avatar-1.jpg" alt="user-img" className="img-circle img-top-bar"/>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="javascript:void(0)"><i className="md md-face-unlock"></i> Profile</a></li>
                                    <li><a href="javascript:void(0)"><i className="md md-settings"></i> Settings</a></li>
                                    <li><a href="javascript:void(0)"><i className="md md-lock"></i> Lock screen</a></li>
                                    <li><a href="javascript:void(0)"><i className="md md-settings-power"></i> Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default TopBarComponent;
