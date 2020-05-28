import React, { useEffect, useState } from 'react'
import api from '../service/api'
import Produtos from '../ui/produto'
import {Link} from 'react-router'
  




function Produto ({props}) {
    const [produto, setProduto] = useState([]);
    let url = window.location.href.split("/")[4];
    console.log(url)

    useEffect(() => {
        async function loadProduto(){
          const response = await api.get('/produto/'+url);
          setProduto(response.data)
          console.log(response.data)
        } 
        loadProduto();
    }, [])
    return(
        
        <div className="text-center">
            <div className="headerPage">
                <h1 className="titlePage">Produtos</h1>
                <button className="btn btn-primary"><Link to={'/produtos/cadProduto'}>Cadastrar Produto</Link></button>
            </div>
            <hr></hr>
            <div className="row">
                {produto.map(prod => (
                    <>
                        <Produtos key={prod._id} prod={prod} />
                    </>
                ))}

            </div>
        </div>
    );
}

export default Produto
