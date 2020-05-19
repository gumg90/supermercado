import React from 'react'
import {Instagram, Facebook, YouTube} from '@material-ui/icons';


let now = new Date;

const footer = () =>(
    <footer className="bg-inverse">
        <span className="footer">Copyright© 2020 - {now.getFullYear()} - Todos os direitos reservados ao iMarket </span>
        <span className="socialIcons"><Instagram /><Facebook /><YouTube /></span> 
    </footer>
)

export default footer