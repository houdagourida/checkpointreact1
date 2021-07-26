
import React from 'react'
import "./Hader.css";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
//import IconButton from '@material-ui/core/IconButton';

const Hader = () => {
    return (
        <div className='Hader hader-icon'>
           <div><PersonIcon fontSize="large"/><h5>profile</h5> </div>
           <div className="hader-logo"> <WhatshotIcon fontSize="large"/></div>
            <MessageIcon />
          
        </div>
    )
}

export default Hader
