import React from 'react';

const buttonStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#333',
  color: '#fff',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};

const Button = ({ children, onClick }) => (
  <button
    style={buttonStyles}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default Button;
