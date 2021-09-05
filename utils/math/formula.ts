export const kelvinToCelsius = (k: number) => {
  return k - 273.15;
};

export class Temperature {
  from() {}
}

export class Percent {
  outOf(w: number, g: number) {
    return (w / g) * 100;
  }
}
