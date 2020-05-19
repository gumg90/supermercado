
import React from 'react';
import NavBar from '../ui/navBar'
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
  