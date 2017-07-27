import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
     render() {
     return (
           <div className="app-body container-fluid">
               <div className="container">
                    <h2 className="col-lg-12 heading header">Tammy</h2>
                         <p className="primary-text">Cotton candy pudding toffee cookie. Cheesecake sugar plum pie sugar plum brownie. Cotton candy ice cream topping pudding. Icing bear claw powder. Gummi bears muffin sesame snaps chocolate cake tootsie roll muffin croissant sugar plum. Bear claw jelly-o marshmallow gummies.
                         </p>
               </div>
               <hr/>
               <div className="App-intro">
                    <p>Using what you know with React and React Router, create a stylized portfolio with functionality similiar to this!</p>
                    <div><button type="button" className="btn btn-primary btn-lg btn-block"><a className="btn-text" href="/home">Learn More</a></button></div>
               </div>
           </div>
      );
     }
}

export default App;
