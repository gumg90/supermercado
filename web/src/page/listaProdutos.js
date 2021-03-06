import React  from 'react'
import {Link} from 'react-router'

function Produtos ({prod}){
    return (
        <div className="col-12 col-sm-12 col-xl-3" style={{padding: '0 3rem 0 3rem'}}>
            <div className="card mx-auto d-block">
                <Link to={"/produto/"+prod._id}>
                    <img className="card-img-top mx-auto d-block imgProduto" src="https://rockcontent.com/wp-content/uploads/2018/01/Descri%C3%A7%C3%A3o-de-produto-no-e-commerce.png" alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">{prod.nome}</h5>
                        <h6 className="card-title">{prod.categoria}</h6>
                        <a className="value" href="#" onClick = {prod._id}>R$ {prod.value}</a>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Produtos