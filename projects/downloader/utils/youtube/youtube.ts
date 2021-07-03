import moment, { Duration } from 'moment';
import ytdl, {
  getBasicInfo,
  getURLVideoID,
  validateID,
  validateURL,
  videoInfo,
} from 'ytdl-core';
import { itagArray } from './itags';
import { AppendParamProps, urlAppend } from '../url';

export interface parsedProps {
  success: boolean;
  itags: itagArray | any;
  length: {
    seconds: number;
    minutes: number;
    hours: number;
    formated: string;
  };
  rating: {
    allowRatings: boolean;
    averageRating: number;
    likes: number;
    dislikes: number;
  };
  author: {
    id: string;
    name: string;
    channel_url: string;
    verified: boolean;
    subscriber_count: number;
    thumbnail: {
      url: string;
      height: number;
      width: number;
    };
  };
  embed: {
    iframeUrl: string;
    flashUrl: string;
    width: number;
    height: number;
    flashSecureUrl: string;
  };
  description: string;
  title: string;
  videoId: string;
  video_url: string;
  keywords?: Array<string>;
  viewCount: string;
  thumbnails: Array<{
    url: string;
    width: number;
    height: number;
  }>;
}

interface lengthProps {
  seconds: number;
  minutes: number;
  hours: number;
  formated: string;
}

export const calcLength = (lengthSeconds: string): lengthProps => {
  const duration = moment.duration(
    parseInt(lengthSeconds) ? parseInt(lengthSeconds) : 0,
    'seconds'
  );

  const format = (duration: Duration) => {
    const hasHours = duration.asHours() > 1;
    // I have absolutely no idea what to call this variable
    const executor = moment.utc(duration.as('milliseconds'));

    if (hasHours) {
      return executor.format('HH:mm:ss');
    } else {
      return executor.format('mm:ss');
    }
  };

  return {
    seconds: duration.asSeconds(),
    minutes: Math.floor(duration.asMinutes() * 100) / 100,
    hours: Math.floor(duration.asHours() * 10) / 10,
    formated: format(duration),
  };
};

const parse = (data: videoInfo): parsedProps => {
  if ((data as any).success === false) {
    return data as any;
  }

  const { videoDetails, formats } = data;

  const {
    lengthSeconds,
    allowRatings,
    averageRating,
    likes,
    dislikes,
    author,
    embed,
    description,
    title,
    videoId,
    video_url,
    keywords,
    viewCount,
  } = videoDetails;
  const { id, name, channel_url, verified, subscriber_count, thumbnails } =
    author;
  const { flashSecureUrl, flashUrl, height, iframeUrl, width } = embed;

  return {
    success: true,
    itags: formats,
    length: calcLength(lengthSeconds),
    rating: {
      allowRatings,
      averageRating,
      likes,
      dislikes,
    },
    author: {
      id,
      name,
      channel_url,
      verified,
      subscriber_count,
      thumbnail: thumbnails[thumbnails.length - 1],
    },
    embed: {
      iframeUrl,
      flashUrl,
      flashSecureUrl,
      height,
      width,
    },
    description,
    title,
    videoId,
    video_url,
    keywords,
    viewCount,
    thumbnails: videoDetails.thumbnails,
  };
};

const e = (code: number, message?: string, error?: string) => {
  return {
    success: false,
    code,
    message,
    error,
  };
};

export const getVideoDetails = async (link: string) => {
  if (!validateURL(link)) {
    return e(1, 'The link given does not satisfy the requierements.');
  } else if (!validateID(getURLVideoID(link))) {
    return e(2, "The link given does not match YouTube's requirements.");
  }

  const id = getURLVideoID(link);

  let details: any = e(0, null, null);

  try {
    details = await getBasicInfo(id);
  } catch (e) {
    details = e(0, 'Internal Server Error', e.message);
  }

  return parse(details);
};

export interface downloadDetails {
  name?: string;
}

export const genDownloadDetails = (name?: string): downloadDetails => {
  return {
    name: name,
  };
};

export interface ytOptionProps {}

export const genDownloadLink = (
  url: string,
  vname: string,
  itag: number,
  format: string,
  options?: ytOptionProps
) => {
  const { protocol, port, hostname } = window.location;
  const baseUrl = new URL(
    `${protocol}//${hostname}:${port}/api/youtube/download`
  );

  const params: Array<AppendParamProps> = [
    { param: 'url', value: url },
    { param: 'vname', value: vname },
    { param: 'itag', value: itag.toString() },
    { param: 'format', value: format },
    { param: 'options', value: JSON.stringify(options) },
  ];

  return urlAppend(baseUrl, params);
};
