import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                    <section className="row headerImg" style={servicesStyle}>
                         <h2 className="headerStyle">Welcome Home</h2>
                    </section>
                    <div>
                         <p>Tart lemon drops apple pie apple pie candy canes gummi bears. Topping caramels muffin candy. Dragée ice cream bear claw donut soufflé jelly-o muffin cupcake. Sugar plum dragée pastry cupcake dragée cookie candy. Toffee jujubes cake wafer gingerbread. Icing fruitcake jujubes topping dessert dragée chocolate cake. Lemon drops jelly-o croissant donut sweet roll jelly-o donut. Sesame snaps topping tart muffin topping sugar plum sesame snaps bear claw. Gummies apple pie biscuit cookie jelly-o chocolate cake cheesecake gummi bears. Bonbon pie muffin chocolate bar caramels. Tiramisu marshmallow sugar plum. Gingerbread sweet sugar plum sweet wafer biscuit soufflé tootsie roll marshmallow. Candy canes bear claw cookie marshmallow icing pudding lemon drops sweet.</p>
                    </div>
                    <div>
                         <button type="button" className="btn btn-primary btn-lg btn-block"><Link to="/portfolio">Check Out the Portfolio</Link></button>
                    </div>
               </div>
          )
     }
}
