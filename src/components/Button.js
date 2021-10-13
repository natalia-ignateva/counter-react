import React from 'react';

const Button = ({ label, onClickFunction }) => {
    const handleClick = () => {
        onClickFunction(label);
    };

    return <button onClick={handleClick}>{label}</button>;
};

export default Button;
