import { IoLinkOutline, IoReturnDownBackSharp } from 'react-icons/io5';

import { SearchItemProps } from '@Types/search';

export const Item = ({ icon: Icon = IoLinkOutline, name, path }: SearchItemProps) => {
  return (
    <a href={path}>
      <div className="flex items-center justify-between px-3 py-2 rounded-8 cursor-pointer dD5d-search">
        <div className="flex items-center justify-start">
          <span className="h-3 w-3 grid place-items-center mr-3">
            <Icon />
          </span>
          <span className="small font-light l-1">{name}</span>
        </div>
        <IoReturnDownBackSharp className="h-3 w-3 dD5d-icon" />
      </div>
    </a>
  );
};

export default Item;
