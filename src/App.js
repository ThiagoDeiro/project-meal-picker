import React from 'react';
import './App.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResults from './component/SearchResult'
import { Router } from '@reach/router'
import ResDetails from './component/ResDetails'
import Navigation from './component/Navigation'
import CuisineInfo from './component/CuisineInfo'
import SearchLocation from './component/SearchLocation';
export default class App extends React.Component {

  render(){
 
  return (

        <div className="App">
        <Navigation  />
          <Router>
            <Home path="/project-meal-picker" />
            <SearchResults path="/search/" />
            <ResDetails path='/restaurant/:id' />
            <CuisineInfo path='/cuisine/:id' />
            <SearchLocation path="/searchlocation/"/>
            
          </Router>
           
        </div>
  );
  }
}