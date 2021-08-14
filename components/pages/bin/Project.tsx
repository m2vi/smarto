import { useWidgetState } from '@context/widgetState';
import { ProjectProps } from '@Types/projects';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export interface ProjectIProps extends React.HTMLAttributes<HTMLDivElement>, ProjectProps {
  Key: string;
}

export const Project = ({ icon, description, badge, language, name, path, updatedAt, Key, className, ...props }: ProjectIProps) => {
  const Router = useRouter();
  const Icon = icon;
  const handleClick = () => {
    Router.push(path, undefined, { shallow: true });
  };

  return (
    <div
      className={`bg-primary-800 p-3 pb-4 flex flex-col items-start cursor-pointer rounded-25 relative hover:bg-primary-700 ${className}`}
      style={{ height: '135px' }}
      onClick={handleClick}
      {...props}
    >
      <span className="h-8 w-8 bg-primary-600 rounded-15 mb-1">
        <Icon className="h-8 w-8 rounded-15" />
      </span>
      <span className="flex items-center justify-start flex-row">
        <p className="mr-1">{name}</p>
      </span>
      <p className="small text-primary-300">{description}</p>
    </div>
  );
};

export default Project;
