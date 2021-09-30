import { useState } from 'react';
import { Collapse } from 'react-collapse';
import { IoChevronDown, IoChevronUp, IoHome } from 'react-icons/io5';
import { BsDot } from 'react-icons/bs';
import Projects from '@projects/index';
import { sortByKey } from '@utils/tools/array';

const Sidebar = ({ settings }) => {
  const [isOpened, setIsOpened] = useState(false);
  const projects = sortByKey(new Projects().get(), 'name');

  const Trigger = () => (
    <div
      className={`bg-primary-700 w-full px-4 py-3  flex items-center justify-between cursor-pointer select-none ${
        isOpened ? 'border-b border-primary-500 rounded-t-8' : 'rounded-8'
      }`}
      onClick={() => setIsOpened(!isOpened)}
    >
      <div className="flex items-center justify-start">
        <IoHome className="h-4 w-4 mr-4" />
        <span>My Projects</span>
      </div>
      <div className="grid place-items-center">
        {isOpened ? <IoChevronUp className="h-3 w-3 text-primary-300" /> : <IoChevronDown className="h-3 w-3 text-primary-300" />}
      </div>
    </div>
  );

  return (
    <div className="h-full bg-primary-800 p-4 rounded-8" style={{ width: '300px' }}>
      <Trigger />
      <Collapse isOpened={isOpened} className="last-rounded">
        {projects.map(({ url, key, name }, i) => {
          return (
            <a
              href={url}
              key={key}
              className={`bg-primary-700 w-full px-4 py-3 flex items-center justify-between ${i + 1 === projects.length && 'rounded-b-8'}`}
            >
              <div className="flex items-center justify-start">
                <BsDot className="h-4 w-4 mr-4" />
                <span>{name}</span>
              </div>
            </a>
          );
        })}
      </Collapse>
    </div>
  );
};

export default Sidebar;
