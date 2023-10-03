import React from 'react'

const List = ({ array, renderButton = () => {} }) => {
    return (
        <ul className='list'>
            {array.map(item => (
                <li key={item.id}>
                    {renderButton(item)}
                </li>
                )
            )}
        </ul>
    )
};

export { List };