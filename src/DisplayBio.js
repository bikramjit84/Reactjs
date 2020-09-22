import React from 'react'
 import DeveloperBio from './DeveloperBio'

/*
    class DisplayBio extends Component {

    constructor(props) {
        super();

        this.state = {
            developers :[
                new Developer(1, "Bikramjit", "Sanjenbam", "JAVA", 2005),                
                new Developer(2, "ABC", "Last", "REACTJS", 2015)
            ]
        }

    }
    render() {
        return (
            this.state.developers.map(dev =><DeveloperBio developer={dev} key={dev.id} />)
        );
    }
}

export default   DisplayBio;
*/


function DisplayBio(props)  { 
    return (
        props.developers.map(dev =><DeveloperBio developer={dev} key={dev.id} />)
    );
     
}

export default   DisplayBio;