import React  from 'react'

class MyButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 0};
      this.buttonClicked = this.buttonClicked.bind(this);
    }
    
    buttonClicked(event) {
      this.setState({value: this.state.value+1});
    }
    
    render() {
      return (
          <div>
            <button className="btn btn-primary" onClick={this.buttonClicked} style={{marginLeft: '0'}}>Quantidade</button>
            <span className="countProduto">{this.state.value} {this.props.prod}</span>
            <p className="countProduto">Valor toral: R$ {this.props.value*this.state.value}</p>
            <button className="btn btn-primary"  style={{marginLeft: '0'}}>Inserir no pedido</button>
        </div>
      );
    }
  }


function produtos ({prod}){
    return (
        <div className='col-12 col-sm-12 col-xl-12'>
            <div className='col-12 col-sm-12 col-xl-3' style={{float: 'left', marginBottom: '5rem'}}>
                <img className="card-img-top mx-auto d-block imgProdutoList" src="https://rockcontent.com/wp-content/uploads/2018/01/Descri%C3%A7%C3%A3o-de-produto-no-e-commerce.png" alt="Imagem de capa do card" />
            </div>
            <div className='col-12 col-sm-12 col-xl-3' style={{float: 'left', textAlign: 'left'}}>
                <h5 style={{fontSize: '2.5rem'}}>{prod.nome}</h5>
                <h6>Categoria: {prod.categoria}</h6>
                <h6>Descrição: {prod.descricao}</h6>
                <a className="value">Valor Unitario: R$ {prod.value}</a>
                <MyButton prod={prod.nome} value={prod.value}/>
            </div>
        </div>
    )
}

export default produtos