import React from 'react'
import {Instagram, Facebook, YouTube} from '@material-ui/icons';

let now = new Date;

const footer = () =>(
    <footer className="bg-inverse">
        <span className="footer">Copyright© 2020 - {now.getFullYear()} - Todos os direitos reservados ao iMarket </span>
        <span className="socialIcons"><a href="http://instagram.com" target="_blank"><Instagram /></a>
                                      <a href="http://facebook.com" target="_blank"><Facebook /></a>
                                      <a href="http://youtube.com" target="_blank"><YouTube /></a></span> 
    </footer>
)

export default footer