
import React from 'react';
import NavBar from '../page/navBar'
import './Components.css';


export default class Header extends React.Component {
    render() {    
      return (
          <header className="pos-f-t">
              <NavBar />
          </header>
      );
    }
  }
  