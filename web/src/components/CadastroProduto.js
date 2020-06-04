import React, {  useState } from 'react';
import api from '../service/api';
import CadProd from '../page/cadastroProduto';

function CadProduto() {
  const [produto, setProduto] = useState([]);


    async function handleAddproduto(data){
        const response = await api.post('/produtos', data)
        setProduto(response.data);
        
    }
  return (
    <>  
        <h1 className="bd-title">Cadastrar Produto</h1>
            <CadProd onSubmit={handleAddproduto}/>
    </>
  );
}

export default CadProduto;
