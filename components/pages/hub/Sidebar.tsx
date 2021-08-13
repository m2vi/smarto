import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoMenuOutline, IoLogOutOutline, IoSettingsOutline } from 'react-icons/io5';
import { Projects } from '@projects/index';
import { ProjectProps } from '@Types/projects';
import user from '@config/me';

export const Divider = ({ className }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={`bg-primary-700 mx-4 w-8 ${className}`} style={{ height: '2px' }}></span>;
};

export const Sidebar = ({ invisible }: any) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (!invisible) {
      const func = async () => {
        const projects = new Projects(user.markedProjects).getMarked();
        setProjects(projects);
      };

      func();
    }
  }, [invisible]);

  return (
    <div className={`max-h-screen h-full flex flex-col items-center w-80 relative bg-primary-800 ${invisible && 'invisible'}`}>
      <span className="flex justify-center items-center p-6 cursor-pointer">
        <IoMenuOutline className="h-4 w-4" />
      </span>
      <Divider className="mb-3" />
      <div className=" w-full flex flex-col items-center">
        {!invisible &&
          projects.map(project => {
            const { path, key, icon }: ProjectProps = project;
            const Icon = icon;
            return (
              <Link href={path} passHref={true} key={key}>
                <span className="px-4 py-3 rounded-15 h-full w-full cursor-pointer">
                  <Icon className="h-8 w-8 rounded-15" draggable={false} />
                </span>
              </Link>
            );
          })}
      </div>

      <Divider className="mt-3" />
      <div className="absolute bottom-0 left-0 w-80 flex justify-center flex-col">
        <Divider className="mb-3" />

        <span className="px-4 py-3 rounded-15 h-full w-full cursor-pointer flex justify-center items-center" aria-roledescription="wrapper">
          <Link href="/settings" passHref={true}>
            <span className="h-8 w-8 rounded-15 bg-primary-800 flex justify-center items-center">
              <IoSettingsOutline className="h-3 w-3 text-primary-300" />
            </span>
          </Link>
        </span>

        <span className="px-4 py-3 rounded-15 h-full w-full cursor-pointer flex justify-center items-center" aria-roledescription="wrapper">
          <Link href="/logout" passHref={true}>
            <span className="h-8 w-8 rounded-15 bg-primary-800 flex justify-center items-center">
              <IoLogOutOutline className="h-3 w-3 text-primary-300" />
            </span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
