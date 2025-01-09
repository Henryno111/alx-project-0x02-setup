// pages/users.tsx

import React from 'react';
import { UserProps } from '../interfaces';
import UserCard from '../components/common/UserCard';

interface UsersPageProps {
  users: UserProps[];
}

const Users = ({ users }: UsersPageProps) => {
  return (
    <div className="p-4">
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

// Fetch users data at build time with getStaticProps
export async function getStaticProps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
      props: {
        users: data,  // Return the fetched users data as props
      },
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    return {
      props: {
        users: [],  // In case of an error, return an empty array
      },
    };
  }
}

export default Users;
