import { useState } from 'react';
import { Collapse } from 'react-collapse';
import { IoChevronDown, IoHome } from 'react-icons/io5';

const Sidebar = ({ settings }) => {
  const [isOpened, setIsOpened] = useState(false);

  const Trigger = () => (
    <div className="bg-primary-900 w-full px-4 py-3 rounded-8 flex items-center justify-between cursor-pointer select-none" onClick={() => setIsOpened(!isOpened)}>
      <div className="flex items-center justify-start">
        <IoHome className="h-4 w-4 mr-4" />
        <span>My Projects</span>
      </div>
      <div className="grid place-items-center">
        <IoChevronDown className="h-3 w-3 text-primary-300" />
      </div>
    </div>
  );

  return (
    <div className="h-full bg-primary-800 p-4 rounded-8" style={{ width: '300px' }}>
      <Trigger />
      <Collapse isOpened={isOpened}>
        <div className="bg-primary-900 w-full px-4 py-3 flex items-center justify-between cursor-pointer mb-4 select-none">
          <div className="flex items-center justify-start">
            <IoHome className="h-4 w-4 mr-4" />
            <span>My Projects</span>
          </div>
          <div className="grid place-items-center">
            <IoChevronDown className="h-3 w-3 text-primary-300" />
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Sidebar;
