import { IoCloudOutline, IoListOutline, IoMedalOutline, IoTimerOutline, IoVideocamOutline } from 'react-icons/io5';

import { Client } from '@projects/lookup/client';
import { WidgetProps } from '@Types/config';
import console from '@utils/tools/console';
import { kelvinToCelsius } from '@utils/math/formula';

export const WidgetItems = user => {
  const items = [
    {
      icon: IoListOutline,
      name: 'todo',
      unit: 'left',
      path: '/s/todo',
      openInNewTab: false,
      func: async () => '0',
    },
    {
      icon: IoTimerOutline,
      name: 'timer',
      unit: 'left',
      path: null,
      openInNewTab: false,
      func: async () => {
        try {
          const data = await (await fetch('/api/@me')).json();
          console.fetch(data, '@me');
          return data.timers.length;
        } catch (error) {
          console.error('Failed to fetch @me', error);
          return null;
        }
      },
    },
    {
      icon: IoCloudOutline,
      name: 'weather',
      unit: '°C',
      path: null,
      openInNewTab: true,
      removeSpace: true,
      func: async () => {
        const weather = new Client('weather');

        try {
          const city = await weather.get(user.geo.city);
          console.fetch(city, 'openweather');

          const kelvin = city.main.temp;
          const celsius = kelvinToCelsius(kelvin);

          return celsius.toFixed(2).toString();
        } catch (error) {
          console.error('Failed to fetch temp', error);

          return null;
        }
      },
    },
    {
      icon: IoMedalOutline,
      name: 'scoresaber',
      unit: 'pp',
      path: `https://new.scoresaber.com/u/${user.accounts.scoresaber}`,
      openInNewTab: true,
      removeSpace: true,
      func: async () => {
        const saber = new Client('scoresaber');
        try {
          const u = await saber.get(user.accounts.scoresaber);
          console.fetch(u, 'scoresaber');
          const pp = u.playerInfo.pp;
          return pp;
        } catch (error) {
          console.error('Failed to fetch from scoresaber', error);
          return null;
        }
      },
    },
    {
      icon: IoVideocamOutline,
      name: 'filmlist',
      unit: 'Items',
      path: '/s/filmlist/default/all',
      openInNewTab: false,
      func: async () => {
        try {
          const data = await (await fetch('/api/filmlist/info')).json();
          console.fetch(data, 'filmlist/info');
          return data.all;
        } catch (error) {
          console.error('Failed to fetch filmlist/info', error);
          return null;
        }
      },
    },
  ];

  return items;
};
