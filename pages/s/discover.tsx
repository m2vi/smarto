import Hub from '@components/pages/hub';
import { SearchProvider } from '@context/search';

export const Discover = () => {
  return (
    <>
      <SearchProvider>
        <Hub />
      </SearchProvider>
    </>
  );
};

export default Discover;
