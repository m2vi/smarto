import { useEffect, useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { projectArray } from '@projects/object';
import { ProjectProps } from '@Types/projects';
import Project from '@components/pages/hub/Project';

const ProjectsCarousel = () => {
  const [slidesPerView, setSlidesPerView] = useState(5);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slidesPerView,
    spacing: 10,
    loop: false,
    initial: 0,
  });

  const getWidth = () => {};

  return (
    <div className="w-full">
      <h4 className="mb-4">Projects</h4>
      <div ref={sliderRef} className="keen-slider">
        {projectArray.map(project => {
          if (!project || !project.enabled) return;
          const { icon, description, badge, language, name, path, updatedAt, key }: ProjectProps = project;

          return (
            <Project
              Key={key}
              icon={icon}
              description={description}
              badge={badge}
              language={language}
              name={name}
              path={path}
              updatedAt={updatedAt}
              key={key}
              className="keen-slider__slide"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsCarousel;
