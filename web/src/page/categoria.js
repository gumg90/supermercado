import React  from 'react'


function categorias ({cat}){
    return (
        <div className='col-12 col-sm-12 col-xl-12'>
            <div className='col-12 col-sm-12 col-xl-3' style={{float: 'left', marginBottom: '5rem'}}>
                <img className="card-img-top mx-auto d-block imgProdutoList" src="https://rockcontent.com/wp-content/uploads/2018/01/Descri%C3%A7%C3%A3o-de-produto-no-e-commerce.png" alt="Imagem de capa do card" />
            </div>
            <div className='col-12 col-sm-12 col-xl-3' style={{float: 'left', textAlign: 'left'}}>
                <h5 style={{fontSize: '2.5rem'}}>Nome: {cat.nome}</h5>
                <h6>Descrição: {cat.descricao}</h6>
            </div>
        </div>
    )
}

export default categorias