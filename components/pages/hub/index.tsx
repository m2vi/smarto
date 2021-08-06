import Head from 'next/head';
import Favicon from '@components/Favicon';
import Discover from '@components/pages/hub/Discover';
import Projects from '@components/pages/hub/ProjectsCarousel';
import Sidebar from '@components/pages/hub/Sidebar';
import Topbar from '@components/pages/hub/Topbar';
import { ProjectProps } from '@Types/projects';
import Widget from '@components/pages/hub/Widget';
import { useSearch } from '@context/search';
import { useEffect } from 'react';
export const Hub = () => {
  const { state } = useSearch();

  useEffect(() => console.log(state));

  return (
    <>
      <div className="h-screen w-full flex flex-row">
        <Sidebar />
        <div className="h-screen w-full flex-col flex mr-8">
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
                  <Widget
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
      </div>
    </>
  );
};

export default Hub;