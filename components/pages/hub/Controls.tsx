import { basicFetch } from '@utils/db/fetch';
import { useEffect, useState } from 'react';
import { IoChevronDown, IoChevronUp, IoEllipsisHorizontalOutline } from 'react-icons/io5';
import Image from 'next/image';
import moment from 'moment';
import Collapsible from 'react-collapsible';
const Controls = ({ me }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      basicFetch(`https://api.lanyard.rest/v1/users/${me.accounts.discord}`).then(data => {
        if (!data || !data.success) return;
        console.log(data);
        setData(data?.data);
      });
    }, 500);
    return () => clearInterval(interval);
  }, [me]);

  return (
    <div className="h-screen w-full max-w-xs ml-3 bg-primary-800 p-4">
      {data && (
        <>
          <span className="flex justify-between items-center mb-300">
            <p className="font-semibold text-lg">{data.discord_status}</p>
            <IoEllipsisHorizontalOutline className="h-4 w-4 text-primary-200 hover:text-primary-100 cursor-pointer" />
          </span>
          <div className="w-full"></div>
          <Activities data={data} />
        </>
      )}
    </div>
  );
};

export default Controls;

const Activities = ({ data }) => {
  return (
    <div className="flex flex-col w-full">
      <span className="flex flex-row justify-between items-center text-primary-300 mb-2 cu">
        <span>Activities</span>
        <IoChevronDown className="h-4 w-4 text-primary-300 hover:text-primary-200 cursor-pointer" />
      </span>
      {data.activities.map(({ id, application_id, assets, details, name, state, timestamps }) => {
        if (!timestamps?.start || !assets.large_image) return;

        return (
          <div key={id} className="flex my-1">
            <div className="h-8 w-8 rounded-5 overflow-hidden mr-2">
              <Image
                src={`https://cdn.discordapp.com/app-assets/${application_id}/${assets?.large_image}.png`}
                alt={assets?.large_text}
                height="40px"
                width="40px"
                sizes="2"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="small text-primary-200 l-1" style={{ marginBottom: '3.5px', marginTop: '-1.5px' }}>
                Playing {name}
              </span>
              <span className="small text-primary-300 l-1" title={state}>
                {details} ({moment(timestamps?.start).fromNow(true)})
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
