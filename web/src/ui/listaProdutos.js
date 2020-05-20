import React  from 'react'

function produtos ({prod}){

    return (

    <div className="col-12 col-sm-12 col-xl-3">
        <div className="card mx-auto d-block">
            <img className="card-img-top mx-auto d-block imgProduto" src="https://rockcontent.com/wp-content/uploads/2018/01/Descri%C3%A7%C3%A3o-de-produto-no-e-commerce.png" alt="Imagem de capa do card" />
            <div className="card-body">
                <h5 className="card-title">{prod.nome}</h5>
                <p className="card-text">{prod.descricao}.</p>
                <a className="value" href="#" onClick = {prod._id}>R$ {prod.value}</a>
            </div>
        </div>
    </div>
)
}

export default produtos