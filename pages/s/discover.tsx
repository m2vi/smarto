import Hub from "../../projects/hub";
import { HubProvider } from "../../context/hubSearch";

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
