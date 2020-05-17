import React from 'react';
import './App.css';
import Header from './components/Header'


export default class App extends React.Component {
  render() {
    return(
      <div>
          <Header />
          <div className="container">
              {this.props.children}
          </div>
      </div>
    )
  }
}
