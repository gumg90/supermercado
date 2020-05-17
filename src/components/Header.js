
import React from 'react';
import NavBar from '../ui/navBar'
import './Components.css';


export default class Header extends React.Component {
    render() {    
      return (
          <div className="pos-f-t">
              <NavBar />
          </div>
      );
    }
  }
  