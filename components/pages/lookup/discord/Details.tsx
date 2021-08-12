import { CustomStatus } from '@components/pages/lookup/discord/styles';
import moment from 'moment';

const Details = ({ creationDate, flags, id }) => {
  return (
    <CustomStatus>
      <span>
        <b>Creation Date: </b>
        <span>
          {moment(creationDate).format('Mo of MMMM YYYY')} ({moment().diff(creationDate, 'days')} Days)
        </span>
      </span>
      <span>
        <b>Flags: </b>
        <span>{flags}</span>
      </span>
      <span>
        <b>Id: </b>
        <span>{id}</span>
      </span>
    </CustomStatus>
  );
};

export default Details;
