import { GenIcon, IconType, IconBaseProps } from 'react-icons/lib/cjs/iconBase';

// Sn stands for stolen

export const SnMiniPlayer = (props: IconBaseProps) => {
  return GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        child: [],
        tag: 'path',
        attr: {
          d: 'M19 11H11V17H19V11ZM23 19V4.98C23 3.88 22.1 3 21 3H3C1.9 3 1 3.88 1 4.98V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19ZM21 19.02H3V4.97H21V19.02Z',
        },
      },
    ],
  })(props);
};
