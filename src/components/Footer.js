import React, { Component } from 'react';
//IMPORT STYLES
import '../styles/App.css';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
     render() {
          return (
          <div className="panel-footer">
               <button className="btn btn-success">
                    <Link to="/about">Learn More</Link>
               </button>
          </div>
     )
     }
}
