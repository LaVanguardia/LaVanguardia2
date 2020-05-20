import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './CloseButtonMemory.scss';


class CloseButtonMemory extends React.Component {

  render(){
       //Button Icon
       const closeButton = < FontAwesomeIcon icon = {
           faTimesCircle
       }
       />

      return (
          
        <div>
            {/* CLOSE BUTTON */}
            <div className="bigCloseButton">
               <Link to = "/games-section" ><span style={{color: "#00ECFD", fontSize: "2em"}}>{closeButton}</span></Link> 
            </div>
            <div div className = "iframeCloseButton" >
               <Link to = "carousel"><span style={{color: "#A2A2A2", fontSize: "1.5em"}}>{closeButton}</span></Link> 
            </div>
        </div>
    )}
}
export default CloseButtonMemory;