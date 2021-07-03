const fs = require("fs");

const torIPs = {
  data: fs.readFileSync("./tor-exit-nodes.txt", "utf-8").split("\n"),
};

const fileContent = `const exitNodes = ${JSON.stringify(torIPs, null, 2)}\nexport default exitNodes`;

fs.writeFileSync("./exitNodes.ts", fileContent);
