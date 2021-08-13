import React from 'react';

export interface MetaProps {
  description: string;
  langauge: string;
}

export interface RedirectProps {
  type: 'push' | 'replace';
  url: string;
  as?: string;
  title?: string;
  options?: {
    shallow?: boolean;
    locale?: string | false;
    scroll?: boolean;
  };
}

export interface TimeProps extends React.HTMLAttributes<HTMLSpanElement> {
  format?: string;
  wrapperClassName?: string;
}
