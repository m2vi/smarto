import user from '@config/me';
import { Client } from '@projects/lookup/client';
import Widget from './Widget';

const Discover = () => {
  return (
    <div className="w-full mb-10 grid grid-cols-6 gap-2">
      <Widget name="ScoreSaber Rank" icon="/assets/logos/scoresaber.svg" />
      <Widget name="Watch Later" icon="/assets/logos/youtube.svg" />
      <Widget name="Spotify Favourites" icon="/assets/logos/spotify.svg" />
      <Widget />
      <Widget />
      <Widget />
    </div>
  );
};

export default Discover;
