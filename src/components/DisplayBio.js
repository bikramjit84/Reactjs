import React, { Component } from 'react'
 import DeveloperBio from './DeveloperBio' 
import {connect} from 'react-redux'
import devActions from '../reducers/devReducers'

class DisplayBio extends Component  { 
 constructor(props) {
     super(props)
     this.props.addDevsToStore();
 }

 

    render() {
        return (
            this.props.developers
            ?
               this.props.developers.map(dev =><DeveloperBio developer={dev} key={dev.id} />)
            : <div></div>
        )
    }
    
     
}

export default connect(({developers}) => ({
    developers:developers
}), {
    addDevsToStore : devActions.getAllBiosRequestActionCreator 
}) ( DisplayBio);