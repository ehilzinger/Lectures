import React from 'react';

const CallToActionComponent = ({title, text}) => {
    const announcementStyle =  {
        background: 'linear-gradient(45deg, #6BB9DB, #AA55FF)',
        borderRadius: '10px',
        padding: "15px 15px"
      }
    return (
        <div style={announcementStyle}>
        <h4>{title}</h4>
        <p >{text}</p>
        </div>
    )
}

export default CallToActionComponent;