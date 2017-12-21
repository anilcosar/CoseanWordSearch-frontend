import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom'
import Home from "./Home";
import About from "./About"
import SearchKeywords from "./SearchKeywords"
import UrlSorting from "./UrlSorting"
import PageRating from "./PageRating"
import {history} from '../reducks'


class App extends Component {
   render() {
         return (
            <Router history={history}>
                  <Switch>
                     <Route path="/about" component={About}/>
                      <Route path="/searchkeyword" component={SearchKeywords}/>
                      <Route path="/urlsorting" component={UrlSorting}/>
                      <Route path="/pagerating" component={PageRating}/>
                     <Route path="/" component={Home}/>

                  </Switch>
            </Router>
         );


   }
}

const mapStateToProps = (state, ownProps) => {
   return {

   }
}

const mapDispatchToProps = (dispatch, ownProps) => {
   return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
