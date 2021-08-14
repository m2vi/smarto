import Sidebar from '@components/pages/hub/Sidebar';
import Full from '@components/Full';
import Time from '@components/Time';
import { IoAddCircleOutline, IoEllipsisHorizontalOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import Widgets from './Widgets';

export const Hub = () => {
  const { t } = useTranslation();

  return (
    <Full className="flex flex-row">
      <Sidebar />
      <div className="h-screen w-full max-w-xs ml-3 bg-primary-800 p-4">
        <span className="flex justify-between items-center">
          <p className="font-semibold text-lg">{t('pages.hub.timer')}</p>
          <IoEllipsisHorizontalOutline className="h-4 w-4 text-primary-200 hover:text-primary-100 cursor-pointer" />
        </span>
      </div>
      <div className="h-screen w-full ml-3 bg-transparent p-4 pl-1">
        <Time className="text-primary-300" wrapperClassName="flex flex-col font-medium mb-5" />
        <Widgets />
      </div>
    </Full>
  );
};

export default Hub;

// <div className="h-screen w-full max-w-screen-xl flex-col flex ml-5 bg-primary-800 px-4">
//   <Topbar />
//   <main className="h-full w-full py-6">
//     {state.length === 0 || state === [false] ? (
//       <>
//         <Discover />
//         <Projects />
//       </>
//     ) : (
//       state.map((project: ProjectProps) => {
//         if (!project) return;
//         const { icon, description, badge, language, name, path, updatedAt, key } = project;

//         return (
//           <Project
//             icon={icon}
//             description={description}
//             badge={badge}
//             language={language}
//             name={name}
//             path={path}
//             updatedAt={updatedAt}
//             Key={key}
//             key={key}
//             className="mb-3"
//           />
//         );
//       })
//     )}
//   </main>
//   <div className="mt-4"></div>
// </div>;
