import React from 'react';

export interface SearchItemProps {
  icon?: React.FC;
  name?: string;
  path?: string;
  tags?: string[];
  type?: 'link' | 'file';
}
