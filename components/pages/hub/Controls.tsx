import { Client } from '@projects/lookup/client';
import { useEffect, useState } from 'react';
import { IoEllipsisHorizontalOutline } from 'react-icons/io5';

const Controls = ({ user }) => {
  const [src, setSrc] = useState('');

  useEffect(() => {
    const api = new Client('discord');
    const id = user.accounts.discord.toString();

    api.get(id).then(res => {
      res && res.success ? setSrc(`${res.avatar.url}?size=128`) : null;
    });
  }, [user]);

  return (
    <div className="h-screen w-full max-w-xs ml-3 bg-primary-800 p-4">
      <span className="flex justify-between items-center">
        <p className="font-semibold text-lg">Controls</p>
        <IoEllipsisHorizontalOutline className="h-4 w-4 text-primary-200 hover:text-primary-100 cursor-pointer" />
      </span>
    </div>
  );
};

export default Controls;
