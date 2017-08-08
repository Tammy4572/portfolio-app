import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class BaseLayout extends Component {
     render() {
          let titleStyle = {
               "fontFamily": "Patrick Hand",
               "fontSize": "120%"
          }
          let headerStyle = {
               "textAlign": "center",
               "color": "#fff",
               "fontFamily": "Open Sans",
               "fontSize": "120%"
          }
          let navTitle ={
               "fontFamily": "Patrick Hand",
               "fontSize": "120%"
          }
          return (
               <div className="container-fluid nav">
                    <nav className="row navbar">
                         <div className="container-fluid">
                              <div className="navbar-header">
                                   <ul className="nav navbar-nav">
                                        <li className="nav-link" activeClassName sytle={navTitle}><NavLink to="/">SplashPage</NavLink></li>
                                        <li className="nav-link" activeClassName style={navTitle}><NavLink to="/home">Home</NavLink></li>
                                        <li className="nav-link" activeClassName style={navTitle}><NavLink to="/about">About</NavLink></li>
                                        <li className="nav-link" activeClassName style={navTitle}><NavLink to="/portfolio">Portfolio</NavLink></li>
                                        <li className="nav-link" activeClassName style={navTitle}><NavLink to="/contact">Contact</NavLink></li>
                                        <li className="nav-link" activeClassName style={navTitle}><NavLink to="/references">References</NavLink></li>
                                   </ul>
                              </div>
                         </div>
                    </nav>
                    <div className="col-lg-12 header" style={headerStyle}>
                         <div className="header-title">
                              <div className="details" style={titleStyle}>Tammy Castro</div>
                         </div>
                    </div>
                    {this.props.children}
                    <footer className="col-lg-11 footer">
                         <span className="footer-title">Tammy Castro</span>
                         <span className="address">
                              100 Main Street, Summerville, SC 29483 | (843) 343-45700
                         </span>
                    </footer>
               </div>
          )
     }
}
