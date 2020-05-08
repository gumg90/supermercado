import React  from 'react'

const Produtos = (props) => (
    <div className="col-12 col-sm-12 col-xl-4"  style={{marginTop : '5vw'}}>
        <div className="card mx-auto d-block" style={{width: '18rem'}}>
            <img className="card-img-top mx-auto d-block" src="https://rockcontent.com/wp-content/uploads/2018/01/Descri%C3%A7%C3%A3o-de-produto-no-e-commerce.png" alt="Imagem de capa do card" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}.</p>
                <a href="#" className="btn btn-primary" onClick={props.action}>{props.value}</a>
            </div>
        </div>
    </div>
)

export default Produtos