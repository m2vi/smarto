import Item from '@components/pages/search/Item';
import { SearchItemProps } from '@Types/search';
import { useSearch } from '@context/search';

const Body = () => {
  const { state } = useSearch();

  return (
    <div className="flex flex-col px-3 py-1 overflow-y-auto dD5d-items" style={{ margin: '2px' }}>
      {state.render.map((item: SearchItemProps) => {
        const { icon, name, path } = item;

        return <Item icon={icon} path={path} name={name} key={name} />;
      })}
    </div>
  );
};

export default Body;
