import React, { Component } from 'react';

export default class References extends Component {
     render(){
          let refStyle = {
              "backgroundSize": "cover",
              "height": "100%",
              "padding": "50px",
              "border": "solid 1px gray",
              "borderRadius": "25px"
            }
          return(
               <div>
                    <div className="row">
                         <img src="" className="profile-pic"/>
                         <section style={refStyle}>
                              <h3>Deshaun Watson</h3>
                              <ul>
                                   <li>843-821-8909</li>
                                   <li>Sugar plum tootsie roll dessert macaroon cake. Liquorice muffin wafer dessert jelly beans cupcake chocolate sweet sugar plum. Sweet roll biscuit sweet cake cupcake dessert. Sugar plum candy canes chocolate bar cupcake cake. Wafer chupa chups sesame snaps pudding caramels powder.</li>
                              </ul>
                         </section>
                    </div>
                    <div className="row">
                         <section style={refStyle}>
                         <h3>Lorem Watson</h3>
                         <ul>
                              <li>843-821-8909</li>
                              <li>Sugar plum tootsie roll dessert macaroon cake. Liquorice muffin wafer dessert jelly beans cupcake chocolate sweet sugar plum. Sweet roll biscuit sweet cake cupcake dessert. Sugar plum candy canes chocolate bar cupcake cake. Wafer chupa chups sesame snaps pudding caramels powder.</li>
                              </ul>
                              </section>
                    </div>
                    <div className="row">
                    <section style={refStyle}>
                    <h3>Sugar Plum</h3>
                         <ul>
                              <li>843-821-8909</li>
                              <li>Sugar plum tootsie roll dessert macaroon cake. Liquorice muffin wafer dessert jelly beans cupcake chocolate sweet sugar plum. Sweet roll biscuit sweet cake cupcake dessert. Sugar plum candy canes chocolate bar cupcake cake. Wafer chupa chups sesame snaps pudding caramels powder.</li>
                         </ul>
                         </section>
                    </div>
               </div>
          )
     }

}
