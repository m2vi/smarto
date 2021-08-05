import { ProjectArray } from '@Types/projects';

import HubIcon from '@public/assets/hub.svg';
import SpeedtestIcon from '@public/assets/speedtest.svg';
import LinkShortenerIcon from '@public/assets/link_shortener.svg';
import PackageTrackerIcon from '@public/assets/package_tracker.svg';
import CointrackerIcon from '@public/assets/cointracker.svg';
import LookupIcon from '@public/assets/lookup.svg';
import WeatherAppIcon from '@public/assets/weather_app.svg';
import DownloaderIcon from '@public/assets/downloader.svg';
import SmartHomeHandlerIcon from '@public/assets/smart_home_handler.svg';
import FilesIcon from '@public/assets/files.svg';
import CodeSnippetsIcon from '@public/assets/code_snippets.svg';

export const projects: ProjectArray = {
  hub: {
    enabled: true,
    key: 'hub',
    name: 'Hub',
    path: '/s/discover',
    createdAt: 1618773316000,
    description: 'Browse my creations',
    icon: HubIcon,
    tags: ['main', 'hub', 'start', 'tools', 'utils', '*'],
    badge: 'web',
    repository: {
      name: 'hub',
      type: 'git',
      user: 'm2vi',
    },
  },
  speedtest: {
    enabled: false,
    key: 'speedtest',
    name: 'Speedtest',
    path: '/s/speedtest',
    createdAt: 0,
    description: 'Test your internet speed',
    icon: SpeedtestIcon,
    tags: ['internet', 'speed', 'test', 'check', '*'],
    badge: 'all',
  },
  link_shortener: {
    enabled: false,
    key: 'link_shortener',
    name: 'Link Shortener',
    path: '/s/link_shortener',
    createdAt: 0,
    description: 'Short links to share them better',
    icon: LinkShortenerIcon,
    tags: ['url', 'link', 'short', '*'],
    badge: 'all',
  },
  package_tracker: {
    enabled: false,
    key: 'package_tracker',
    name: 'Package Tracker',
    path: '/s/package_tracker',
    createdAt: 0,
    description: 'Track deliveries easily',
    icon: PackageTrackerIcon,
    tags: ['package', 'delivery', 'find', 'track', '*'],
    badge: 'web',
  },
  cointracker: {
    enabled: false,
    key: 'cointracker',
    name: 'Cointracker',
    path: '/s/cointracker',
    createdAt: 0,
    description: 'Track the most popular coins',
    icon: CointrackerIcon,
    tags: ['cointracker', 'elon musk', 'track', 'find', '*'],
    badge: 'web',
  },
  lookup: {
    enabled: true,
    key: 'lookup',
    name: 'Lookup',
    path: '/s/lookup',
    createdAt: 1622324739000,
    description: 'Learn more about users',
    icon: LookupIcon,
    tags: ['find', 'search', 'hack', '*'],
    badge: 'web',
  },
  weather_app: {
    enabled: false,
    key: 'weather_app',
    name: 'Weather App',
    path: '/s/weather_app',
    createdAt: 0,
    description: 'Is it getting hot? Find out',
    icon: WeatherAppIcon,
    tags: ['outside', 'life', 'cloud', '*'],
    badge: 'all',
  },
  downloader: {
    enabled: false,
    key: 'downloader',
    name: 'Downloader',
    path: '/s/downloader',
    createdAt: 1622672029000,
    description: 'Download from Social Platforms',
    icon: DownloaderIcon,
    tags: ['youtube', 'instagram', 'tiktok', 'social media', '*'],
    badge: 'web',
    repository: {
      name: 'downloader',
      type: 'git',
      user: 'm2vi',
    },
  },
  smart_home_handler: {
    enabled: false,
    key: 'smart_home_handler',
    name: 'Smart Home Handler',
    path: '/s/smart_home_handler',
    createdAt: 0,
    description: 'Manage your e.g. light bulbs',
    icon: SmartHomeHandlerIcon,
    tags: ['smart', 'home', 'light', 'control', '*'],
    badge: 'all',
  },
  files: {
    enabled: false,
    key: 'files',
    name: 'Files',
    path: '/s/files',
    createdAt: 0,
    description: 'Connect via SSH to a server',
    icon: FilesIcon,
    tags: ['ssh', 'connect', 'control', 'manage', '*'],
    badge: 'all',
  },
  code_snippets: {
    enabled: false,
    key: 'code_snippets',
    name: 'Code Snippets',
    path: '/s/code_snippets',
    createdAt: 0,
    description: 'Frequently used code',
    icon: CodeSnippetsIcon,
    tags: ['code', 'example', 'hello world', 'get', '*'],
    badge: 'web',
  },
};
export default projects;
