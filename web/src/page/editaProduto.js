import React, {useState} from 'react';
import {Link} from 'react-router'


function ProdutoForm({onSubmit}){
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descricao, setDescricao] = useState('');
    const [value, setValue] = useState('');
    const [ativo, setAtivo] = useState('');


    async function handleSubmit(e){
        e.preventDefault();
        await onSubmit({
            nome,
            descricao,
            categoria,
            value,
            ativo: true
 
        });

        setNome('');
        setDescricao('');
        setCategoria('');
        setValue('');
        setAtivo('');
    }
    
    return (
        <form onSubmit={handleSubmit} action={'/produtos'}>
            <div className="col-12 col-sm-12 col-xl-3">
            <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input name="nome" id="nome" className="form-control"value={nome} onChange={e => setNome(e.target.value)} required />
                <label htmlFor="categoria">Categoria</label>
                <input name="categoria" id="categoria" className="form-control"value={categoria} onChange={e => setCategoria(e.target.value)} required />
                <label htmlFor="descricao">Descricao</label>
                <input name="descricao" id="descricao" className="form-control"value={descricao} onChange={e => setDescricao(e.target.value)} required />
                <label htmlFor="value">Valor</label>
                <input type="number" name="value" className="form-control"id="value" value={value} onChange={e => setValue(e.target.value)} required />
            </div>
            </div>
          <button type="submit" className="btn btn-primary">Salvar</button>
          <button className="btn btn-warning"><Link to={'/produtos'}>cancelar</Link></button>
        </form>
    );
}

export default ProdutoForm;