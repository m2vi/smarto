import Image from 'next/image';
import { Avatar } from '@components/pages/lookup/discord/styles';

const AvatarEl = ({ avatarUrl }) => {
  const redirect = (url: string) => {
    window.open(url, '_ blank');
  };

  return (
    <Avatar onClick={() => redirect(`${avatarUrl}?size=1024`)}>
      <Image src={`${avatarUrl}?size=128`} alt=" " className="avatarImage-d2dk select-none" aria-hidden="true" height="120" width="120"></Image>
    </Avatar>
  );
};

export default AvatarEl;
