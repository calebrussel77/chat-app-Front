import React from 'react';

const Button = (props) => (
    <div>
        <button
        className={prop.className}
        onClick={props.onClick}
        >
            {props.children}
        </button>
    </div>
);

export default Button;