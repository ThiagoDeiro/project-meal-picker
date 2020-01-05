import React from 'react';
import {Link} from '@reach/router';
import './Navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'

class Navigation extends React.Component {
    

    render() {
        return(
        
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav">
              < >
                  
                  <li className="nav-item">
                    <Link className="nav-link nav-text" to="/"> 
                    <FontAwesomeIcon className="nav-text" icon={faHome} size="2x" />
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link menu-text nav-text" to="/search/"><span className="nav-text">Search</span></Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link menu-text nav-text" to="/searchlocation/"><span className="nav-text">Search by Location</span></Link>
                  </li> 
                    
                    </> 
            </ul>
           
            </nav>

        )
    }
}

export default Navigation