import Hub from '@components/pages/hub';
import { HubProvider } from '@context/hubSearch';

export const Discover = () => {
  return (
    <>
      <HubProvider>
        <Hub />
      </HubProvider>
    </>
  );
};

export default Discover;
