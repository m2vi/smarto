import exitNodes from "../../assets/exitNodes/exitNodes";

const torDetect = (ip: string) => {
  return exitNodes.data.includes(ip);
};

export default torDetect;
