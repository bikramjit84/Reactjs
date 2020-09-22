import React from 'react'
import './DeveloperBio.css'
 
function DeveloperBio(props) {
    return (
        <div className="card d-inline-block text-dark">
            <div className="card-body">
                 <h3 className="card-title"> {props.developer.firstName} {props.developer.lastName}'s Bios</h3>

                 <p className="card-text">
                    <span className="bold">Favorite Language : </span>   {props.developer.favoriteLanguage}
                 </p>
                 <p className="card-text">
                    <span className="bold">Year Started : </span>  {props.developer.yearStarted}
                 </p> 
            </div>
        </div>
    )
}

 
export default DeveloperBio

