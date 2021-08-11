import { useSearch } from '@context/search';
import Item from '@components/pages/search/Item';
import { SearchItemProps } from '@Types/search';

const Body = () => {
  const { state } = useSearch();

  return (
    <div className="flex flex-col px-3 py-1 overflow-y-auto" style={{ margin: '2px' }}>
      {state.map((item: SearchItemProps) => {
        const { icon, name, path } = item;

        return <Item icon={icon} path={path} name={name} key={name} />;
      })}
    </div>
  );
};

export default Body;
