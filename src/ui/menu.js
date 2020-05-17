import React from 'react'
import {Link} from 'react-router'
import Icon from '@material-ui/icons/';

  

const menu = (props) =>(
        <div>
            <Link to={'/'+ props.page} className="menu" >{props.icon}<span>{props.title}</span></Link>
            <hr style={{width : '2', size : '100', color:'black'}} /> 
        </div>
)

export default menu