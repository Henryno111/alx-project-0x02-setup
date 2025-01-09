import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ size, shape, label, onClick }) => {
  let sizeClass = '';
  switch (size) {
    case 'sm':
      sizeClass = 'px-4 py-2 text-sm';
      break;
    case 'md':
      sizeClass = 'px-6 py-3 text-base';
      break;
    case 'lg':
      sizeClass = 'px-8 py-4 text-lg';
      break;
    default:
      sizeClass = 'px-6 py-3 text-base'; // Default case
  }

  let shapeClass = '';
  switch (shape) {
    case 'rounded-sm':
      shapeClass = 'rounded-sm';
      break;
    case 'rounded-md':
      shapeClass = 'rounded-md';
      break;
    case 'rounded-full':
      shapeClass = 'rounded-full';
      break;
    default:
      shapeClass = 'rounded-md'; // Default case
  }

  return (
    <button
      className={`${sizeClass} ${shapeClass} bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;