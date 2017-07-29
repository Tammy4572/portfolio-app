import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class BaseLayout extends Component {
     render() {
          let titleStyle = {
               "fontFamily": "Patrick Hand",
               "fontSize": "120%"
          }
          let subtitleStyle = {
               "fontFamily": "serif",
               "fontSize": "12px"
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
                                        <li sytle={navTitle}><Link to="/">SplashPage</Link></li>
                                        <li style={navTitle}><Link to="/home">Home</Link></li>
                                        <li style={navTitle}><Link to="/about">About</Link></li>
                                        <li><Link to="/portfolio">Portfolio</Link></li>
                                   </ul>
                              </div>
                         </div>
                    </nav>
                    <div className="col-lg-12 header headerImg" style={headerStyle}>
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
