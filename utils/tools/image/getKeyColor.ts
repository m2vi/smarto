import Vibrant from "node-vibrant";

const getKeyColor = async (imagePath: string) => {
  const palette = await Vibrant.from(imagePath).getPalette();

  const rgb = palette.Vibrant.rgb;
  const hsl = palette.Vibrant.hsl;

  return {
    cssReady: `rgb(${rgb.join(", ")})`,
    rgb,
    hsl,
  };
};

export default getKeyColor;
