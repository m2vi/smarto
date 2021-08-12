import Tooltip from '@components/Tooltip';
import { BackgroundColor } from '@components/pages/lookup/discord/styles';
import { useEffect, useState } from 'react';
import getKeyColor from '@utils/tools/image/getColor';

const Banner = ({ customBannerColor, bannerKey, bannerUrl, avatarUrl }) => {
  const [bannerColor, setBannerColor] = useState('transparent');
  const [bannerTooltip, setBannerTooltip] = useState('');
  const [bannerStyle, setBannerStyle] = useState({});

  const redirect = (url: string) => {
    window.open(url, '_ blank');
  };

  useEffect(() => {
    if (customBannerColor && !bannerKey) {
      setBannerColor(customBannerColor);
      setBannerTooltip('Custom Banner Color');
    } else if (bannerKey && bannerUrl) {
      setBannerStyle({ backgroundImage: `url(${bannerUrl}?size=512)`, width: '600px', height: '240px', cursor: 'pointer' });
    } else {
      getKeyColor(avatarUrl).then(c => setBannerColor(c.hex));
      setBannerTooltip('I use a different algorithm');
    }
  }, [avatarUrl, bannerKey, bannerUrl, customBannerColor]);

  return (
    <Tooltip>
      <span data-tip={bannerTooltip}>
        <BackgroundColor color={bannerColor} style={bannerStyle} onClick={() => bannerKey && bannerUrl && redirect(`${bannerUrl}?size=2048`)} />
      </span>
    </Tooltip>
  );
};

export default Banner;
