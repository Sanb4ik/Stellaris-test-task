import React from 'react';
import  '../styles/Input.css';
const Input = ({text, type, size}) => {
    return (
        <div className= {`input_box ${size}`}>
            <input type={type}/>
            <label className={`label_${size}`}>{text}</label>
            <div className='underline'> </div>
        </div>
    );
};

export default Input;
