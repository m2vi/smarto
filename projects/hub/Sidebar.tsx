import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoMenuOutline, IoLogOutOutline, IoSettingsOutline } from 'react-icons/io5';
import { Projects } from '@projects/object';
import { projectProps } from '@Types/projects';

export const Divider = ({ className }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={`bg-primary-700 mx-4 w-8 ${className}`} style={{ height: '2px' }}></span>;
};

export const Sidebar = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const func = async () => {
      const projects = new Projects(['hub', 'package_tracker', 'lookup']);
      projects.setActive();
      setProjects(projects.getActiveArray());
    };

    func();
  }, []);

  return (
    <div className="max-h-screen h-full flex flex-col items-center w-80 mr-7 relative">
      <span className="flex justify-center items-center p-6 cursor-pointer">
        <IoMenuOutline className="h-4 w-4" />
      </span>
      <Divider className="mb-3" />
      <div className=" w-full flex flex-col items-center">
        {projects.map(project => {
          const { path, key, icon }: projectProps = project;

          return (
            <Link href={path} passHref={true} key={key}>
              <span className="px-4 py-3 rounded-15 h-full w-full cursor-pointer">
                <Image src={icon} alt={key} className="h-8 w-8 rounded-15" draggable={false} />
              </span>
            </Link>
          );
        })}
      </div>

      <Divider className="mt-3" />
      <div className="absolute bottom-0 left-0 w-80 flex justify-center flex-col">
        <Divider className="mb-3" />

        <span className="px-4 py-3 rounded-15 h-full w-full cursor-pointer flex justify-center items-center" aria-roledescription="wrapper">
          <Link href="/settigns" passHref={true}>
            <span className="h-8 w-8 rounded-15 bg-primary-700 flex justify-center items-center">
              <IoSettingsOutline className="h-3 w-3 text-primary-300" />
            </span>
          </Link>
        </span>

        <span className="px-4 py-3 rounded-15 h-full w-full cursor-pointer flex justify-center items-center" aria-roledescription="wrapper">
          <Link href="/logout" passHref={true}>
            <span className="h-8 w-8 rounded-15 bg-primary-700 flex justify-center items-center">
              <IoLogOutOutline className="h-3 w-3 text-primary-300" />
            </span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
