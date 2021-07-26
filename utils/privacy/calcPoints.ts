const calcPoints = (data: any) => {
  let points = 100;
  if (data.ip.success === true) {
    points = points - 20;
  }

  if (data.system.cookieEnabled === true) {
    points = points - 10;
  }

  if (data.system.doNotTrack === false) {
    points = points - 20;
  }

  if (data.system.adsAllowed === true) {
    points = points - 50;
  }

  if (data.graphics.videocard.success === true) {
    points = points - 10;
  }

  return points;
};

export default calcPoints;
