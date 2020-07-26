import React, { Component } from 'react';
import ShowProducts from './components/ShowProducts';
import SinglePro from './components/singlePro';
import Form from './components/form';
import './App.css';
import { BrowserRouter as Router , Route } from 'react-router-dom';

class App extends Component {
    render() { 
        return ( 
            <Router>
                <Route exact path="/" component={ShowProducts} />
                <Route exact path="/product/:id" component={SinglePro} />                
                <Route exact path="/form" component={Form} />
            </Router>
            // component in Route just takes a function or a component
         );
    }
}
 
export default App;