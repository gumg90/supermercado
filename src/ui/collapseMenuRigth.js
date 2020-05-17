import Menu from './menu'
import React from 'react'
import Emoji from "react-emoji-render"


export default class collapseMenuRigth extends React.Component{
  MinhaConta = {
    page: 'minha-conta',
    title: 'minha-conta',
     action: () => window.location.reload(true)
  }
  Sair = {
      page: 'sair',
      title: 'sair',
      action: () => window.location.reload(true)
  }
    
  render(){
    return(
      <div className="collapse" id="navbarToggleExternalContent1">
        <div style={{float: 'right'}}>
          <div className="bg-inverse p-4">
            <span className='bemVindo'>Seja Bem Vindo:<span className="name">Gustavo</span><Emoji text="😍" /></span>
            <hr style={{width : '2', size : '100', color:'black'}} />       
            <Menu {...this.MinhaConta} />
            <Menu {...this.Sair}/>
          </div>
        </div>
      </div>
    )
  }
}