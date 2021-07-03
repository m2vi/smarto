const adBlockDetect = async () => {
  let allowed: boolean = true;
  await fetch("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
    method: "HEAD",
    mode: "no-cors",
  }).catch((err) => {
    allowed = false;
  });

  return allowed;
};

export default adBlockDetect;
