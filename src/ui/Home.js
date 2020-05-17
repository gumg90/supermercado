import React from 'react'

const Home = (props) => (
    <div className="col-12 col-sm-12 col-xl-4"  style={{marginTop : '5vw'}}>
        <div className= {props.class + " card d-block text-white mb-3"} style={{textAlign: 'center'}}>
            <div className="card-body" style={{padding: '2rem'}}>
                <div>
                    <div>
                    <h5 className="card-title" style={{fontSize: "3rem"}}>{props.icon}<span>{props.title}</span></h5>
                    </div>
                </div>
                <p className="card-text" style={{fontSize: "3rem"}}>0</p>
            </div>
        </div>
    </div> 

)

export default Home
