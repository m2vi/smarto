import Full from '@components/Full';
import Redirect from '@components/Redirect';
import { Spinner } from '@components/Spinner';

const index = () => {
  return (
    <Full className="grid place-items-center">
      <Redirect type="replace" url="/s/discover" />
      <Spinner />
    </Full>
  );
};

export default index;
