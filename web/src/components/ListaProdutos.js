import React, { useEffect, useState } from 'react'
import api from '../service/api'
import ListaProdutos from '../ui/listaProdutos'
import './Components.css';



function Produto () {
    const [produto, setProduto] = useState([]);

    useEffect(() => {
        async function loadProduto(){
          const response = await api.get('produto');
          setProduto(response.data);
        } 
        loadProduto();
    }, [])

    return(
        <div className="text-center">
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
