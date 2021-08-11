import Vibrant from 'node-vibrant';
import ColorThief from 'colorthief';

export const getKeyColor = async (imagePath: string) => {
  const {
    Vibrant: { hex, hsl, rgb },
  } = await Vibrant.from(imagePath).getPalette();

  return {
    css: `rgb(${rgb.join(', ')})`,
    hex,
    rgb,
    hsl,
  };
};

export const getDominantColor = async (imageElement: any) => {
  const colorThief = new ColorThief();
  const color = await colorThief.getColor(imageElement);

  return color;
};

export default getKeyColor;
