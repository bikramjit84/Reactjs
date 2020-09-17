import React from 'react'
import './DeveloperBio.css'
 
function DeveloperBio(props) {
    return (
        <div className="card d-inline-block text-dark">
            <div className="card-body">
                 <h3 className="card-title"> {props.title}</h3>

                 <p className="card-text">
                    <span className="bold">Favorite Language : </span>   {props.language}
                 </p>
                 <p className="card-text">
                    <span className="bold">Year Started : </span>  {props.year}
                 </p> 
            </div>
        </div>
    )
}

 
export default DeveloperBio

