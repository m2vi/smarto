import cache from 'memory-cache';
import { isProduction } from '@utils/env/constants';

export const defaultFetch = async (url: string, options?: any) => await (await fetch(url, options)).json();

export const fetchWithCache = async (url: string, minutes: number = 30, dontCache?: boolean, auth?: string) => {
  const value = cache.get(url);
  if (value && isProduction && !dontCache) {
    return value;
  } else {
    const data = await defaultFetch(url, {
      headers: new Headers({
        Authorization: auth,
      }),
    });
    cache.put(url, data, 1000 * 60 * minutes);
    return data;
  }
};

export const basicFetch = async (input: RequestInfo, init?: RequestInit) => {
  return await (await fetch(input, init)).json();
};
