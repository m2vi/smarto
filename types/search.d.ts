import React from 'react';
import { userData } from './config';

export interface SearchItemProps {
  icon?: React.FC;
  name?: string;
  path?: string;
  tags?: string[];
  type?: 'link' | 'file';
  me?: userData;
}
