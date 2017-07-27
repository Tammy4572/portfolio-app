import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class NavBar extends Component {
     render() {
          return (
               <div className="App container">
                    <nav className="navbar navbar-default navbar-fixed-top">
                         <div className="container">
                              <Link activeClassName="selected" className="nav-link" exact to="/">Home</Link>
                              <Link activeClassName="selected" className="nav-link" to="/about">About</Link>
                              <Link activeClassName="selected" className="nav-link" to="/portfolio">Portfolio</Link>
                         </div>
                    </nav>
                    {this.props.children}
               </div>
          )
     }
}
