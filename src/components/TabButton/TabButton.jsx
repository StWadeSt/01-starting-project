import React from 'react'

const TabButton = ({children, onSelect, isSelected}) => {


  return (
        <li>
            <button className={isSelected} onClick={onSelect}>
                {children}
            </button>
        </li>
    )
}

export default TabButton