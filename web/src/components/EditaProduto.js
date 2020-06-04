import React, {  useState } from 'react';
import api from '../service/api';
import EditaProd from '../page/editaProduto';
const getId = require('../utils/getId')


function CadProduto() {
  const [produto, setProduto] = useState([]);


    async function handleAddproduto(data){
        const response = await api.put(`/produto/editar/${getId()}`, data)
        setProduto(response.data);
        
    }
  return (
    <>  
        <h1 className="bd-title">Editar Produto</h1>
            <EditaProd onSubmit={handleAddproduto}/>
    </>
  );
}

export default CadProduto;
