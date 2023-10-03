import React from 'react';

const Button = ({ item, clicked = () => {} }) => {
    const handleClick = (param) => {
        clicked(param);
    };
    return (
        <button onClick={() => handleClick(item.id)}>{item.title}</button>
    )
};

export { Button };