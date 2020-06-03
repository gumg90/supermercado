import React, {useState} from 'react';
import {Link} from 'react-router'


function CategoriaForm({onSubmit}){
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [ativo, setAtivo] = useState('');


    async function handleSubmit(e){
        e.preventDefault();
        await onSubmit({
            nome,
            descricao,
            ativo: true
 
        });

        setNome('');
        setDescricao('');
        setAtivo('');
    }
    
    return (
        <form onSubmit={handleSubmit} action={'/categorias'}>
            <div className="col-12 col-sm-12 col-xl-3">
            <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input name="nome" id="nome" className="form-control"value={nome} onChange={e => setNome(e.target.value)} required />
                <label htmlFor="descricao">Descricao</label>
                <input name="descricao" id="descricao" className="form-control"value={descricao} onChange={e => setDescricao(e.target.value)} required />
            </div>
            </div>
          <button type="submit" className="btn btn-primary">Salvar</button>
          <button className="btn btn-warning"><Link to={'/categorias'}>cancelar</Link></button>
        </form>
    );
}

export default CategoriaForm;