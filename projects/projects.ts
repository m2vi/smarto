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
    key: ':h',
    name: 'Hub',
    path: 'discover',
    createdAt: 1618773316000,
    description: 'Browse my creations',
    icon: HubIcon,
    tags: ['main', 'hub', 'start', 'tools', 'utils'],
    badge: 'web',
    repository: {
      name: 'hub',
      type: 'git',
      user: 'm2vi',
    },
  },
  {
    enabled: false,
    key: ':pt',
    name: 'Package Tracker',
    path: 'package_tracker',
    createdAt: 0,
    description: 'Track deliveries easily',
    icon: PackageTrackerIcon,
    tags: ['package', 'delivery', 'find', 'track'],
    badge: 'web',
  },
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
  },
  {
    enabled: true,
    key: ':f',
    name: 'Filmlist',
    path: '/s/filmlist/all',
    createdAt: 0,
    description: "Browse all movies and series I've ever watched",
    icon: FilmIcon,
    tags: ['history', 'movie', 'watch', 'get', 'find', 'data'],
    badge: 'web',
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
  },
  {
    enabled: false,
    key: ':d',
    name: 'Downloader',
    path: '/s/downloader',
    createdAt: 1622672029000,
    description: 'Download from Social Platforms',
    icon: DownloaderIcon,
    tags: ['youtube', 'instagram', 'tiktok', 'social media'],
    badge: 'web',
    repository: {
      name: 'downloader',
      type: 'git',
      user: 'm2vi',
    },
  },
  {
    enabled: false,
    key: ':cs',
    name: 'Code Snippets',
    path: 'code_snippets',
    createdAt: 0,
    description: 'Frequently used code',
    icon: CodeSnippetsIcon,
    tags: ['code', 'example', 'hello world', 'get'],
    badge: 'web',
  },
];
export default projects;
