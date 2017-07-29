import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';

export default class Portfolio extends Component {
     render() {

     return (
          <div className="app-body offset col-lg-10 col-lg-offset-1">
               <div className="row">
                 <div className="col-lg-12">
                     <h1 className="page-header">My Portfolio
                         <small>A few projects I have worked on in the past.</small>
                     </h1>
                 </div>
                </div>
               <div className="row">
                    <div className="col-md-7">
                         <img className="img-responsive" src="http://placehold.it/700x300" alt=""/>
                    </div>
                    <div className="col-md-5">
                          <h3>Project One</h3>
                          <h4>Subheading</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
                          <button className="btn btn-primary btn-lg btn-block" type="submit"><Link to={'/#'}>View Project</Link></button>
                     </div>
               </div>
               <div className="row">
                    <div className="col-md-7">
                         <img className="img-responsive" src="http://placehold.it/700x300" alt=""/>
                    </div>
                     <div className="col-md-5">
                           <h3>Project One</h3>
                           <h4>Subheading</h4>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
                           <button className="btn btn-primary btn-lg btn-block" type="submit"><Link to={'/#'}>View Project</Link></button>
                      </div>
               </div>
               <div className="row">
                    <div className="col-md-7">
                         <img className="img-responsive" src="http://placehold.it/700x300" alt=""/>
                    </div>
                      <div className="col-md-5">
                            <h3>Project One</h3>
                            <h4>Subheading</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
                            <button className="btn btn-primary btn-lg btn-block" type="submit"><Link to={'/#'}>View Project</Link></button>
                      </div>
               </div>
               <div className="row">
                    <div className="col-md-7">
                         <img className="img-responsive" src="http://placehold.it/700x300" alt=""/>
                    </div>
                      <div className="col-md-5">
                            <h3>Project One</h3>
                            <h4>Subheading</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
                           <button className="btn btn-primary btn-lg btn-block" type="submit"><Link to={'/#'}>View Project</Link></button>
                      </div>
               </div>
          </div>
     )
     }
}
