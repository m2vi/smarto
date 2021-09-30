import CodeSnippetsIcon from '@public/assets/projects/code_snippets.svg';
import DownloaderIcon from '@public/assets/projects/downloader.svg';
import FilmIcon from '@public/assets/projects/filmlist.svg';
import HubIcon from '@public/assets/projects/hub.svg';
import LookupIcon from '@public/assets/projects/lookup.svg';
import PackageTrackerIcon from '@public/assets/projects/package_tracker.svg';
import { ProjectArray } from '@Types/projects';
import SearchIcon from '@public/assets/projects/search.svg';

export const projects: ProjectArray = [
  {
    enabled: true,
    key: ':s',
    name: 'Search',
    path: '/s/search',
    createdAt: 0,
    description: 'Search for files, links, etc. in a well-designed page ',
    icon: SearchIcon,
    tags: ['find', 'get', 'link', 'files'],
    badge: 'web',
    url: 'http://search.m2vi.me/',
  },
  {
    enabled: true,
    key: ':f',
    name: 'Filmlist',
    path: '/s/filmlist/default/all',
    createdAt: 0,
    description: "Browse all movies and series I've ever watched",
    icon: FilmIcon,
    tags: ['history', 'movie', 'watch', 'get', 'find', 'data'],
    badge: 'web',
    url: 'https://filmlist.m2vi.me/',
  },
  {
    enabled: true,
    key: ':l',
    name: 'Lookup',
    path: 'lookup',
    createdAt: 1622324739000,
    description: 'Learn more about users',
    icon: LookupIcon,
    tags: ['find', 'search', 'hack'],
    badge: 'web',
    url: 'https://github.com/m2vi/lookup',
  },
];
export default projects;
