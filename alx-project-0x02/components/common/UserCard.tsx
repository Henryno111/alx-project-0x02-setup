// components/common/UserCard.tsx

import React from 'react';
import { UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({ id, name, email, address }) => {
  return (
    <div className="border p-4 rounded-md shadow-lg">
      <h3 className="text-2xl font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{email}</p>
      <div className="mt-2">
        <p><strong>Address:</strong></p>
        <p>{address.street}</p>
        <p>{address.city}</p>
        <p>{address.zipCode}</p>
      </div>
    </div>
  );
};

export default UserCard;
