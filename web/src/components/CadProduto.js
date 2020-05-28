import React, { useEffect, useState } from 'react';
import api from '../service/api';
import CadProd from '../ui/cadProduto';
import { FindReplace } from '@material-ui/icons';

function CadProduto() {
  const [produto, setProduto] = useState([]);

    async function handleAddproduto(data){
        const response = await api.post('/produto', data)
        setProduto([...produto, response.data]);
        
    }
  return (
    <>  
        <h1 className="bd-title">Cadastrar Produto</h1>
            <CadProd onSubmit={handleAddproduto}/>
    </>
  );
}

export default CadProduto;
