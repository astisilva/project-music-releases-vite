import React from 'react';
import './index.css';

export const Button = ({ onClick, icon }) => {
  return (
    <div>
      <button onClick={onClick} className='svg-button'>
        <img src={icon} alt='icon' className='svg-icon' />
      </button>
    </div>
  );
};
