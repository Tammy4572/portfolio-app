import React, { Component } from 'react';
import '../styles/App.css';

export default class About extends Component {
  render() {
    let aboutStyle = {
      "backgroundImage": "url('./styles/ocean-bg.jpg')",
      "backgroundSize": "cover",
      "backgroundPosition": "top",
      "height": "50%"
    }

    return (
      <div className="app-body about offset col-lg-10 col-lg-offset-1">
        <section className="row" style={aboutStyle}>
          <article className="col-lg-6 col-lg-offset-3">
            <h2 className="heading">
              About Me
            </h2>
            <hr/>
            <p className="primary-text">
              Ice cream candy canes wafer croissant dessert. Chocolate oat cake dessert oat cake jelly fruitcake wafer. I love muffin cupcake gingerbread cake pastry. Chocolate bar I love marzipan sweet roll jujubes sesame snaps. Oat cake cake marshmallow cake lemon drops. I love muffin sesame snaps chocolate carrot cake cupcake marshmallow marshmallow chocolate. Pie powder soufflé cake bonbon pie gummi bears apple pie bear claw. Lemon drops sweet roll cookie dessert I love gummies I love candy.
            </p>
            <p className="primary-text">
              I love carrot cake candy jujubes sweet bonbon. Cupcake fruitcake I love marshmallow chocolate biscuit dragée. Oat cake sesame snaps biscuit jelly-o tart bonbon. Chocolate pudding icing sweet roll I love sugar plum chocolate oat cake pudding. Chocolate bar jelly-o sugar plum danish caramels. Danish I love toffee. Macaroon bonbon sweet jelly chupa chups I love gingerbread chocolate cake. Sweet croissant soufflé icing chocolate bar. Marzipan fruitcake marzipan jujubes bonbon apple pie biscuit cheesecake. Fruitcake cake sweet roll I love biscuit marshmallow jelly macaroon.
            </p>
          </article>
        </section>
        <div className="headerImg"/>
        <section className="row" style={aboutStyle}>
          <article className="col-lg-10 ">
            <h2 className="heading">
            More About Me...
            </h2>
            <hr/>
            <p className="primary-text">Oat cake cake tart topping. Carrot cake cotton candy dragée ice cream. Biscuit brownie I love. Cheesecake donut tart toffee sesame snaps dessert marzipan. Marzipan pie gummies. Chocolate cake sweet roll I love I love jelly jelly croissant. Cotton candy I love cotton candy tart sweet gingerbread donut sesame snaps. Lollipop toffee chupa chups fruitcake tootsie roll cake. Donut I love cookie sweet. </p>
          </article>
        </section>
      </div>
    );
  }
}
