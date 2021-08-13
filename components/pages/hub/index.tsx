import Head from 'next/head';
import Favicon from '@components/Favicon';
import Discover from '@components/pages/hub/Discover';
import Projects from '@components/pages/hub/ProjectsCarousel';
import Sidebar from '@components/pages/hub/Sidebar';
import Topbar from '@components/pages/hub/Topbar';
import { ProjectProps } from '@Types/projects';
import Project from '@components/pages/hub/Project';
import { useHubSearch } from '@context/hubSearch';
import { useEffect } from 'react';
import notify, { NotifyTypes } from '@utils/tools/notify';
import Full from '@components/Full';
import Time from '@components/Time';

export const Hub = () => {
  const { state } = useHubSearch();

  return (
    <Full className="flex flex-row">
      <Sidebar />
      <div className="h-screen w-full max-w-xs ml-3 bg-primary-800 p-4"></div>
      <div className="h-screen w-full ml-3 bg-transparent p-4 pl-1">
        <Time className="text-primary-300" wrapperClassName="flex flex-col font-medium" />
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
