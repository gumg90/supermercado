import React from 'react'
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import MoveToInbox from '@material-ui/icons/MoveToInbox';


export default class Home extends React.Component {
    render(){
        return(
            <div className="row">
                <div className="col-12 col-sm-12 col-xl-4"  style={{marginTop : '5vw'}}>
                    <div className="card d-block text-white card-success mb-3" style={{textAlign: 'center'}}>
                        <div className="card-body" style={{padding: '2rem'}}>
                            <div>
                                <div>
                                <h5 className="card-title" style={{fontSize: "3rem"}}><ShoppingCart style={{fontSize: "5rem"}}/><span className="CardTitle">Vendas</span></h5>
                                </div>
                            </div>
                            <p className="card-text" style={{fontSize: "3rem"}}>0</p>
                        </div>
                    </div>
                </div> 
                <div className="col-12 col-sm-12 col-xl-4"  style={{marginTop : '5vw'}}>
                    <div className="card d-block text-white card-primary mb-3" style={{textAlign: 'center'}}>
                        <div className="card-body" style={{padding: '2rem'}}>
                        <div>
                            <div>
                                <h5 className="card-title" style={{fontSize: "3rem"}}><ShoppingBasket style={{fontSize: "5rem"}}/><span className="CardTitle">Compras</span></h5>
                                </div>
                            </div>                            
                            <p className="card-text" style={{fontSize: "3rem"}}>0</p>
                        </div>
                    </div>
                </div> 
                <div className="col-12 col-sm-12 col-xl-4"  style={{marginTop : '5vw'}}>
                    <div className="card d-block text-white card-danger mb-3" style={{textAlign: 'center'}}>
                        <div className="card-body" style={{padding: '2rem'}}>
                        <div>
                            <div>
                                <h5 className="card-title" style={{fontSize: "3rem"}}><MoveToInbox style={{fontSize: "5rem"}}/><span className="CardTitle">Estoque</span></h5>
                                </div>
                            </div>                            
                            <p className="card-text" style={{fontSize: "3rem"}}>0</p>
                        </div>
                    </div>
                </div> 
            </div>      
        ) 
    }
}
