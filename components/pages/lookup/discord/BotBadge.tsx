import { BotBadgeEl } from './styles';

const BotBadge = ({ isBot }) => {
  return isBot ? <BotBadgeEl>bot</BotBadgeEl> : null;
};

export default BotBadge;
