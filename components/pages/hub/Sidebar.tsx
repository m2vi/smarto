import { IoLogOutOutline, IoSettingsOutline } from 'react-icons/io5';
import { util } from '@utils/films/client';
import Link from 'next/link';
import { Projects } from '@projects/index';
import { useRouter } from 'next/router';

export const Divider = ({ className }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={`bg-primary-700 mx-4 w-8 ${className}`} style={{ height: '2px' }}></span>;
};

export const Sidebar = ({ settings }) => {
  const projects = new Projects(settings.markedProjects).getMarked();
  const Router = useRouter();

  return (
    <div className={`max-h-screen h-full flex flex-col items-center w-80 relative bg-primary-800`}>
      {projects
        .filter(p => p.key === ':h')
        .map(({ key, icon: Icon }) => (
          <span
            className="flex justify-center items-center p-4 cursor-pointer"
            key={key}
            onClick={() =>
              util.reload().then(() => {
                Router.reload();
              })
            }
          >
            <Icon className="h-8 w-8 rounded-15" draggable={false} />
          </span>
        ))}

      <Divider className="mb-3" />
      <div className=" w-full flex flex-col items-center">
        {projects.map(({ path, key, icon: Icon }) => {
          if (key === ':h') return;

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
        {/* <Divider className="mb-3" /> */}

        <span className="px-4 py-3 rounded-15 h-full w-full cursor-pointer flex justify-center items-center" aria-roledescription="wrapper">
          <Link href="/settings" passHref={true}>
            <span className="h-8 w-8 rounded-15 bg-primary-700 flex justify-center items-center">
              <IoSettingsOutline className="h-3 w-3 text-primary-100" />
            </span>
          </Link>
        </span>

        <span className="px-4 py-3 rounded-15 h-full w-full cursor-pointer flex justify-center items-center" aria-roledescription="wrapper">
          <Link href="/logout" passHref={true}>
            <span className="h-8 w-8 rounded-15 bg-primary-700 flex justify-center items-center">
              <IoLogOutOutline className="h-3 w-3 text-primary-100" />
            </span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
