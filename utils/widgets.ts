import { IoCloudOutline, IoListOutline, IoMedalOutline, IoTimerOutline, IoTrophyOutline, IoVideocamOutline } from 'react-icons/io5';

import { Client } from '@projects/lookup/client';
import console from '@utils/tools/console';
import { kelvinToCelsius } from '@utils/math/formula';
import { fetchWithCache } from './db/fetch';

export const WidgetItems = user => {
  const items = [
    {
      default: '0',
      icon: IoTrophyOutline,
      name: 'splitgate',
      unit: 'wins',
      path: null,
      openInNewTab: false,
      func: async () => {
        try {
          const data = await fetchWithCache('/api/stats/splitgate', 60 * 3);
          console.fetch(data, 'stats/splitgate');
          return data?.data?.segments[0]?.stats.wins?.value;
        } catch (error) {
          console.error('Failed to fetch stats/splitgate', error);
          return null;
        }
      },
    },
    {
      default: '0',
      icon: IoTimerOutline,
      name: 'timer',
      unit: 'left',
      path: null,
      openInNewTab: false,
      func: async () => {
        try {
          const data = await fetchWithCache('/api/@timer', 60 * 24);
          console.fetch(data, '@timer');
          return data?.length;
        } catch (error) {
          console.error('Failed to fetch @timer', error);
          return null;
        }
      },
    },
    {
      default: '00.00',
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
      default: '0',
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
      default: '0',
      icon: IoVideocamOutline,
      name: 'filmlist',
      unit: 'Items',
      path: 'https://filmlist.m2vi.me',
      openInNewTab: false,
      func: async () => {
        try {
          const data = await fetchWithCache('/api/filmlist', 60 * 3);
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
