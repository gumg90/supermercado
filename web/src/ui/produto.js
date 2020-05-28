import React  from 'react'


function produtos ({prod}){
    return (
            <div>
                <div>
                    <img className="card-img-top mx-auto d-block imgProduto" src="https://rockcontent.com/wp-content/uploads/2018/01/Descri%C3%A7%C3%A3o-de-produto-no-e-commerce.png" alt="Imagem de capa do card" />
                    <div>
                        <h5>{prod.nome}</h5>
                        <h6>{prod.categoria}</h6>
                        <a className="value">R$ {prod.value}</a>
                    </div>
                </div>
            </div>
    )
}

export default produtos