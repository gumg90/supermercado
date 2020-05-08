import React, {Component}  from 'react'

export default class Home extends Component {
    render(){
        return(
            <div className="row">
                <div className="col-12 col-sm-12 col-xl-4"  style={{marginTop : '5vw'}}>
                    <div className="card text-white bg-primary mb-3" style={{maxWidth: '18rem'}}>
                    <div className="card-header">Cabeçalho</div>
                    <div className="card-body">
                        <h5 className="card-title">Título de Card Primary</h5>
                        <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-xl-4"  style={{marginTop : '5vw'}}>

                    <div className="card text-white bg-secondary mb-3" style={{maxWidth: '18rem'}}>
                    <div className="card-header">Cabeçalho</div>
                    <div className="card-body">
                        <h5 className="card-title">Título de Card Secondary</h5>
                        <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                    </div>
                    </div>
                    </div>
                    <div className="col-12 col-sm-12 col-xl-4"  style={{marginTop : '5vw'}}>
                    <div className="card text-white bg-success mb-3" style={{maxWidth: '18rem'}}>
                    <div className="card-header">Cabeçalho</div>
                    <div className="card-body">
                        <h5 className="card-title">Título de Card Success</h5>
                        <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                    </div>
                    </div>
                    </div>
                    <div className="col-12 col-sm-12 col-xl-4"  style={{marginTop : '5vw'}}>
                    <div className="card text-white bg-danger mb-3" style={{maxWidth: '18rem'}}>
                    <div className="card-header">Cabeçalho</div>
                    <div className="card-body">
                        <h5 className="card-title">Título de Card Danger</h5>
                        <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                    </div>
                    </div>
                    </div>
                    <div className="col-12 col-sm-12 col-xl-4"  style={{marginTop : '5vw'}}>
                    <div className="card text-white bg-warning mb-3" style={{maxWidth: '18rem'}}>
                    <div className="card-header">Cabeçalho</div>
                    <div className="card-body">
                        <h5 className="card-title">Título de Card Warning</h5>
                        <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                    </div>
                    </div>
                    </div>
                    <div className="col-12 col-sm-12 col-xl-4"  style={{marginTop : '5vw'}}>
                        <div className="card text-white bg-info mb-3" style={{maxWidth: '18rem'}}>
                        <div className="card-header">Cabeçalho</div>
                        <div className="card-body">
                            <h5 className="card-title">Título de Card Info</h5>
                            <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-xl-4"  style={{marginTop : '5vw'}}>
                        <div className="card bg-light mb-3" style={{maxWidth: '18rem'}}>
                        <div className="card-header">Cabeçalho</div>
                        <div className="card-body">
                            <h5 className="card-title">Título de Card Light</h5>
                            <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-xl-4"  style={{marginTop : '5vw'}}>
                        <div className="card text-white bg-dark mb-3" style={{maxWidth: '18rem'}}>
                        <div className="card-header">Cabeçalho</div>
                        <div className="card-body">
                            <h5 className="card-title">Título de Card Dark</h5>
                            <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                        </div>
                        </div>
                    </div>
                </div>
        )

    }
}