import user from '@config/me';
import { Client } from '@projects/lookup/client';
import Widget from './Widget';

const Discover = () => {
  return (
    <div className="w-full mb-10 grid grid-cols-6 gap-2">
      <Widget
        name="ScoreSaber Rank"
        icon="/assets/logos/scoresaber.svg"
        getValue={async () => {
          const api = new Client('scoresaber');
          const id = user.accounts.scoresaber.toString();
          const res = await api.get(id);

          if (!res.success) {
            return '...';
          }
          return `#${res.playerInfo.countryRank}`;
        }}
      />
      <Widget name="Watch Later" icon="/assets/logos/youtube.svg" />
      <Widget />
      <Widget />
      <Widget />
      <Widget />
    </div>
  );
};

export default Discover;
