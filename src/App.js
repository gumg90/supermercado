import React from 'react';
import './App.css';
import Header from './components/Header'


export default class App extends React.Component {
  render() {
    return(
      <div>
          <div>
              <Header />
          </div>
          <div className="container">
              {this.props.children}
          </div>
      </div>
    )
  }
}
