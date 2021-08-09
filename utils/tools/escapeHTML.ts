import { escape, unescape } from 'html-escaper';

export const e = (query: string) => {
  return escape(query);
};

export const ue = (query: string) => {
  return unescape(query);
};
