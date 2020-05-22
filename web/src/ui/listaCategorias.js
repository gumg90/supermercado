import React  from 'react'

function Categoria ({cat}){
    return(
        <div className="col-12 col-sm-12 col-xl-3">
            <div className="card mx-auto d-block">
                <img className="card-img-top mx-auto d-block imgProduto" src="https://rockcontent.com/wp-content/uploads/2018/01/Descri%C3%A7%C3%A3o-de-produto-no-e-commerce.png" alt="Imagem de capa do card" />
                <div className="card-body">
                    <h5 className="card-title">{cat.nome}</h5>
                    <p className="card-text">{cat.descricao}.</p>
                </div>
            </div>
        </div>
    )
}
export default Categoria