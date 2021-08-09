import Head from 'next/head';
import Favicon from '@components/Favicon';
import Discover from '@components/pages/hub/Discover';
import Projects from '@components/pages/hub/ProjectsCarousel';
import Sidebar from '@components/pages/hub/Sidebar';
import Topbar from '@components/pages/hub/Topbar';
import { ProjectProps } from '@Types/projects';
import Project from '@components/pages/hub/Project';
import { useSearch } from '@context/search';

export const Hub = () => {
  const { state } = useSearch();

  return (
    <>
      <div className="h-screen w-screen max-w-screen-2xl flex flex-row justify-between">
        <Sidebar />
        <div className="h-screen w-full max-w-screen-xl flex-col flex mx-7">
          <Topbar />
          <main className="h-full w-full py-6">
            {state.length === 0 || state === [false] ? (
              <>
                <Discover />
                <Projects />
              </>
            ) : (
              state.map((project: ProjectProps) => {
                if (!project) return;
                const { icon, description, badge, language, name, path, updatedAt, key } = project;

                return (
                  <Project
                    icon={icon}
                    description={description}
                    badge={badge}
                    language={language}
                    name={name}
                    path={path}
                    updatedAt={updatedAt}
                    Key={key}
                    key={key}
                    className="mb-3"
                  />
                );
              })
            )}
          </main>
          <div className="mt-4"></div>
        </div>
        <Sidebar invisible={true} />
      </div>
    </>
  );
};

export default Hub;
