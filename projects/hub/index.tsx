import Head from 'next/head';
import Favicon from '@components/Favicon';
import Discover from '@projects/hub/Discover';
import Projects from '@projects/hub/ProjectsCarousel';
import Sidebar from '@projects/hub/Sidebar';
import Topbar from '@projects/hub/Topbar';
import { useHub } from '@context/hubSearch';
import { projectProps } from '@Types/projects';
import Widget from '@projects/hub/Widget';

export const Hub = () => {
  const { state } = useHub();

  console.log(state);

  return (
    <>
      <Head>
        <title>Discover</title>
        <Favicon project="hub" />
      </Head>
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
              state.map((project: projectProps) => {
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
