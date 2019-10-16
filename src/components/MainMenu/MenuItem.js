import React from 'react';
import { withRouter } from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
    return (
        <div 
            className={`menu-item ${size}`} 
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} />
            <div className="menu-content">
                <h1 className="menu-title"> {title} </h1>
                <span className="menu-subtitle">Shop now</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);
