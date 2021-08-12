import Full from '@components/Full';
import DiscordLogo from '@public/assets/logos/discord.svg';
import Modal from '@components/pages/lookup/Modal';
import { useLookupModal } from '@context/lookupModal';

const Home = () => {
  const { dispatch } = useLookupModal();

  return (
    <>
      <Full className="grid place-items-center">
        <div
          className="bg-primary-800 p-3 w-80 h-80 grid place-items-center rounded-15 hover:bg-primary-700 cursor-pointer no-drag select-none"
          onClick={() => dispatch({ value: [true, 'discord'] })}
        >
          <DiscordLogo className="w-full h-full" />
        </div>
        <Modal />
      </Full>
    </>
  );
};

export default Home;

// TODO: Use react-modal and context
