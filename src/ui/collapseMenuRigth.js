import Menu from './menu'
import React from 'react'
import Emoji from "react-emoji-render"
import {ExitToApp, AccountCircle} from '@material-ui/icons/'



export default class collapseMenuRigth extends React.Component{
  MinhaConta = {
    icon: <AccountCircle />,
    page: 'minha-conta',
    title: 'Minha Conta',
     action: () => window.location.reload(true)
  }
  Sair = {
      icon: <ExitToApp />,
      page: 'sair',
      title: 'Sair',
      action: () => window.location.reload(true)
  }
    
  render(){
    return(
      <div className="collapse" id="navbarToggleExternalContent1">
        <div style={{float: 'right'}}>
          <div className="bg-inverse p-4">
            <div className="bemVindo">
              <span style={{fontSize: 'x-large'}}>Seja Bem Vindo: </span> <span className="name">Gustavo Adolpho Ferraz de Oliveira Filho<Emoji style={{verticalAlign: '0'}} text="😍" /></span>
            </div>
            <hr style={{width : '2', size : '100', color:'black'}} />       
            <Menu {...this.MinhaConta} />
            <Menu {...this.Sair}/>
          </div>
        </div>
      </div>
    )
  }
}