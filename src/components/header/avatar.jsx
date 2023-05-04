import React from 'react';
import '../../App.css';


const Avatar = (props) => {



return (
    <div className="header-wrapper">
      <div className='user_info'>
        <div className="avatar">
            <div className='user_photo'>
                <span>{props.name.toString().slice(0,2).toUpperCase()}</span>
            </div>
          <span className='name'>Max Batishev</span>
        </div>
      </div>
    </div>
);
};

export default Avatar;