import React from 'react';
import { SearchItemProps } from './search';

export enum supportedAccounts {
  discord = 'discord',
  github = 'github',
  instagram = 'instagram',
  ip = 'ip',
  reddit = 'reddit',
  scoresaber = 'scoresaber',
  steam = 'steam',
  youtube = 'youtube',
}

export type accountProps = {
  [key in supportedAccounts]?: string;
};

export interface userData {
  nickname?: string;
  firstname?: string;
  lastname?: string;
  birthday?: number;
  createdAt?: number;
  geo?: {
    city?: string;
    country?: string;
  };
  accounts?: accountProps;
  search?: SearchItemProps[];
  markedProjects?: string[];
  settings?: ProjectSettingsProps;
}

export interface ProjectSettingsProps {
  search?: {
    openInNewTab?: boolean;
  };
  hub?: {
    widgets?: {
      includeUnits: boolean;
    };
  };
}

export interface WidgetProps {
  icon: any;
  name: string;
  unit: string;
  path: string;
  openInNewTab: boolean;
  func?: () => Promise<string>;
  removeSpace?: boolean;
}
