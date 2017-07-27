import React, { Component } from 'react';

import '../styles/App.css';

export default class Home extends Component {
     render(){
          let servicesStyle = {
           "backgroundImage": "url('/background.jpg')",
           "backgroundSize": "cover",
           "textShadow": "1px 1px 2px black",
           "height": "100%",
           "padding": "100px"
      }
          return (
               <div className="container col-lg-12">
                    <section className="row" style={servicesStyle}>
                         <h2 className="headerStyle">Welcome Home</h2>
                    </section>
                    <div>
                         <button type="button" className="btn btn-primary">Check Out the Portfolio</button>
                    </div>
               </div>
          )
     }
}
