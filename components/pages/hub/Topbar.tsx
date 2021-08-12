import Avatar from 'react-avatar';

import { GoChevronDown } from 'react-icons/go';
import { Bar, BarButton } from '@components/pages/hub/Input';
import { useEffect, useState } from 'react';
import { Client } from '@projects/lookup/client';
import user from '@config/me';

export const Topbar = () => {
  const [src, setSrc] = useState('');

  useEffect(() => {
    const api = new Client('discord');
    const id = user.accounts.discord.toString();

    api.get(id).then(res => {
      console.log(res);
      if (res && res.success) {
        const avatar = `${res.avatar.url}?size=128`;
        console.log(avatar);
        setSrc(avatar);
      } else {
        // error
      }
    });
  }, []);

  return (
    <div className="w-full py-4 h-80 flex items-center justify-between">
      <div className="max-w-2xl w-full flex justify-center items-center">
        <Bar placeholder="Search" />
        <BarButton aria-label="Search" />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row items-center cursor-pointer select-none">
          <Avatar src={src} round="50%" size="35px" className="no-drag bg-primary-700" alt="m2vi" color="#1f2733" fgColor="#1f2733" />
          <p className="px-2 small">m2vi</p>
          <GoChevronDown className="h-3 w-3 text-primary-300" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
