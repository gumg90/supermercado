import React, { useEffect, useState } from 'react'
import api from '../service/api'
import Produtos from '../page/produto'
import {Link} from 'react-router'
const getId = require('../utils/getId')
  




function Produto ({props}) {
    const [produto, setProduto] = useState([]);

    useEffect(() => {
        async function loadProduto(){
          const response = await api.get('/produto/'+getId());
          setProduto(produto => [...produto, response.data])
        } 
        loadProduto();
    }, [])



    return(
        
        <div className="text-center">
            <div className="headerPage">
                <h1 className="titlePage">Produto</h1>
                <button className="btn btn-primary"><Link to={'/produtos/cadastro-produto'}>Cadastrar Produto</Link></button>
            </div>
            <hr></hr>
            <div className="row">
                {produto.map(prod => (
                    <>
                        <Produtos key={prod._id} prod={prod}/>
                    </>
                ))}
                <button className="btn btn-danger"><Link  onClick={deleteProduto} to="/produtos">Deletar Produto</Link></button>

            </div>
        </div>
    );
    
    async function deleteProduto(){

        const response = await api.delete('/produto/'+getId())

        setProduto(response.data);


        
    }
}

export default Produto
