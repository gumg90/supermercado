import React, { useEffect, useState } from 'react'
import api from '../service/api'
import ListaProdutos from '../ui/listaProdutos'
import {Link} from 'react-router'




function Produto () {
    const [produto, setProduto] = useState([]);

    useEffect(() => {
        async function loadProduto(){
          const response = await api.get('produtos');
          setProduto(response.data);

        } 
        loadProduto();
    }, [])

    return(
        <div className="text-center">
            <div className="headerPage">
                <h1 className="titlePage">Produtos</h1>
                <button className="btn btn-primary"><Link to={'/produtos/cadastro-produto'} >Cadastrar Produto</Link></button>
            </div>
            <hr></hr>

            <div className="row">
                {produto.map(prod => (
                    <>
                        <ListaProdutos key={prod._id} prod={prod}/>
                    </>
                ))}

            </div>
        </div>
    );
}

export default Produto
