import CollapseMenuLeft from './collapseMenuLeft'
import CollapseMenuRight from './collapseMenuRigth'


import React  from 'react'

export default class produtos extends React.Component{
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
 render(){
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
 return(   
    <div>
        <nav className="navbar navbar-inverse bg-inverse">
        <button className="navbar-toggler"  onClick={this.props.onClick ? this.props.onClick: ()=> {this.handleClick();}} type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <div style={{...styles.line,...styles.lineTop}}/>
            <div style={{...styles.line,...styles.lineMiddle}}/>
            <div style={{...styles.line,...styles.lineBottom}}/>
        </button>
        <button className="navbar-toggler accountButton" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent1" aria-controls="navbarToggleExternalContent1" aria-expanded="false" aria-label="Toggle navigation">
            <img className="accountMenu" src="https://rockcontent.com/wp-content/uploads/2018/01/Descri%C3%A7%C3%A3o-de-produto-no-e-commerce.png" alt="Imagem de capa do card" />
        </button>
        </nav>
        <CollapseMenuLeft />
        <CollapseMenuRight />
    </div>
    )
 }
}