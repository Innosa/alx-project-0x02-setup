import React from 'react';
import { UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address, }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6">
      <div className="font-bold text-xl mb-2">{name}</div>
      <div className="text-gray-700 text-base mb-2">
        <p><span className="font-semibold">Email:</span> {email}</p>
        <p><span className="font-semibold">Address:</span> {address}</p>
        {<p><span className="font-semibold">Age:</span></p>}
      </div>
    </div>
  );
};

export default UserCard;
