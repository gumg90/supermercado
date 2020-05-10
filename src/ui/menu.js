import React from 'react'
import {Link} from 'react-router'

const menu = (props) =>(
        <div style={{color:'white'}}>
            <Link to={'/'+ props.title} className="menu">{props.title}</Link>
            <hr style={{width : '2', size : '100', color:'white'}} /> 
        </div>
)

export default menu