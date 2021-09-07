import cache from 'memory-cache';
import { isProduction } from '@utils/env/constants';

export const defaultFetch = async (url: string) => await (await fetch(url)).json();

export async function fetchWithCache(url: string, minutes: number = 30, dontCache?: boolean) {
  const value = cache.get(url);
  if (value && isProduction && !dontCache) {
    return value;
  } else {
    const data = await defaultFetch(url);
    cache.put(url, data, 1000 * 60 * minutes);
    return data;
  }
}
