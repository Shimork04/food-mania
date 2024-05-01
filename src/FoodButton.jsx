import React from 'react';

const FoodButton = ({ name, onClick, isSelected }) => {
  const buttonStyle = {
    backgroundColor: isSelected ? '#A5762D' : '#4D1708',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'box-shadow 0.3s ease',
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
    >
      {name}
    </button>
  );
};

export default FoodButton;
