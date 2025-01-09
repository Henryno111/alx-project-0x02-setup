// components/common/Button.tsx

import React from 'react';
import { type ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ size, shape, label, onClick }) => {
  let sizeClass = '';
  switch (size) {
    case 'small':
      sizeClass = 'px-4 py-2 text-sm';
      break;
    case 'medium':
      sizeClass = 'px-6 py-3 text-base';
      break;
    case 'large':
      sizeClass = 'px-8 py-4 text-lg';
      break;
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
