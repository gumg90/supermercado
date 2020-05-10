import React, {Component} from 'react'
import HomePage from '../ui/home'

export default class Home extends Component{
    render(){
        return(
            <div className="row">
                <HomePage />
                <HomePage />
                <HomePage />
                <HomePage />
                <HomePage />
            </div>
            
        )
    }
}