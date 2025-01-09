// pages/users.tsx

import React, { useEffect, useState } from 'react';
import UserCard from '../components/common/UserCard';
import { UserProps } from '../interfaces';
import Header from '@/components/layout/Header';

const Users = () => {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-4">
        <Header />
      <h1 className="text-4xl mb-6">Users</h1>
      
      {/* Display the users using the UserCard component */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
