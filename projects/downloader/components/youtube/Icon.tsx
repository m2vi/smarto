export const YouTube = ({ ...props }) => {
  return (
    <svg
      width={200}
      height={200}
      viewBox='0 0 200 200'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g filter='url(#prefix__filter0_d)'>
        <path
          d='M162.293 69.239a16.284 16.284 0 00-11.455-11.456C140.667 55 99.985 55 99.985 55s-40.683 0-50.853 2.676c-5.46 1.5-9.957 5.996-11.456 11.563C35 79.409 35 100.5 35 100.5s0 21.198 2.676 31.261a16.282 16.282 0 0011.456 11.455C59.409 146 99.985 146 99.985 146s40.682 0 50.853-2.676a16.286 16.286 0 0011.455-11.456c2.676-10.17 2.676-31.261 2.676-31.261s.107-21.198-2.676-31.368z'
          fill='var(--m2v-red)'
        />
      </g>
      <g filter='url(#prefix__filter1_d)'>
        <path
          d='M120.861 100.5l-33.83-19.485v38.97l33.83-19.485z'
          fill='var(--color-button-text)'
        />
      </g>
      <defs>
        <filter
          id='prefix__filter0_d'
          x={11}
          y={31}
          width={177.97}
          height={139}
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset />
          <feGaussianBlur stdDeviation={12} />
          <feColorMatrix values='0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0' />
          <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
          <feBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
        </filter>
        <filter
          id='prefix__filter1_d'
          x={52.031}
          y={46.015}
          width={103.831}
          height={108.969}
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset />
          <feGaussianBlur stdDeviation={17.5} />
          <feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0' />
          <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
          <feBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
        </filter>
      </defs>
    </svg>
  );
};

export default YouTube;
