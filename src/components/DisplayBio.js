import React, { Component } from 'react'
 import DeveloperBio from './DeveloperBio' 
import {connect} from 'react-redux'
import devActions from '../reducers/devReducers'

class DisplayBio extends Component  { 
 

componentDidMount() {
    fetch("https://tech-services-1000201953.uc.r.appspot.com/developers")
    .then( (response) => response.json()) 
     .then ((data) => {

        this.props.addDevsToStore(data)
      // this.setState({developers:data})
     }).catch(error => {
      console.log("Error while retrieving data ", error);
     })
  }

    render() {
        return (
            this.props.developers.map(dev =><DeveloperBio developer={dev} key={dev.id} />)
        )
    }
    
     
}

export default connect(({developers}) => ({
    developers:developers
}), {
    addDevsToStore : devActions.getAllBiosActionCreator 
}) ( DisplayBio);