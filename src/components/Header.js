import React from 'react';
import Menu from './Menu'

class Header extends React.Component {
    constructor(props){
      super(props);
      this.state={
        open: this.props.open? this.props.open:false,
        color: this.props.color? this.props.color:'white',
       menuOpen:false,
      }
    }
    
    handleClick(){
    this.setState({open:!this.state.open});
    }
    Home = {
      title: 'Home',
      action: () => alert('Produto Maça CLick')
  }
  Produtos = {
      title: 'Produtos',
      action: () => alert('Produto Laranja CLick')
  }
  Categoria = {   
      title: 'Categoria',
      action: () => alert('Produto Uva CLick')
  }
  
    
    render() {
      
      const styles = {
        line: {
          height: '3px',
          width: '35px',
          background: this.state.color,
          transition: 'all 0.2s ease',
        },
        lineTop: {
          transform: this.state.open ? 'rotate(38deg)':'none',
          transformOrigin: 'top left',
          marginBottom: '8px',
        },
        lineMiddle: {
          opacity: this.state.open ? 0: 1,
          transform: this.state.open ? 'translateX(-16px)':'none',
        },
        lineBottom: {
          transform: this.state.open ? 'translateX(-2px) rotate(-39deg)':'none',
          transformOrigin: 'top left',
          marginTop: '8px',
        },       
      }
      return (
          <div className="pos-f-t">
            <nav className="navbar navbar-inverse bg-inverse">
              <button className="navbar-toggler"  onClick={this.props.onClick ? this.props.onClick: ()=> {this.handleClick();}} type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <div style={{...styles.line,...styles.lineTop}}/>
              <div style={{...styles.line,...styles.lineMiddle}}/>
              <div style={{...styles.line,...styles.lineBottom}}/>
              </button>
            </nav>
            <div className="collapse" id="navbarToggleExternalContent">
              <div className="bg-inverse p-4">
                <Menu {...this.Home}/>
                <Menu {...this.Produtos}/>
                <Menu {...this.Categoria}/>
                </div>
              </div>
          </div>
      );
    }
    }
    
    export default Header;
    