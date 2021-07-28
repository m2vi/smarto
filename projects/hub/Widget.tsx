import { projectProps } from '@Types/projects';
import Image from 'next/image';

export interface WidgetProps extends React.HTMLAttributes<HTMLDivElement>, projectProps {
  Key: string;
}

export const Widget = ({ icon, description, badge, language, name, path, updatedAt, Key, className, ...props }: WidgetProps) => {
  const style = { height: '150px', width: '248px' };
  return (
    <div
      className={`bg-primary-800 p-3 pb-4 flex flex-col items-start cursor-pointer rounded-25 relative hover:bg-primary-600 ${className}`}
      style={{ height: '150px' }}
      {...props}
    >
      <span className="h-8 w-8 bg-primary-700 rounded-15 mb-1">
        <Image src={icon} alt={Key} className="h-8 w-8 rounded-15" />
      </span>
      <span className="flex items-center justify-start flex-row">
        <p className="mr-1">{name}</p>
      </span>
      <p className="small text-primary-300">{description}</p>
      <p className="absolute bottom-4 left-3 text-primary-300 small">
        {language} &#8226; {updatedAt}
      </p>
    </div>
  );
};

export default Widget;
