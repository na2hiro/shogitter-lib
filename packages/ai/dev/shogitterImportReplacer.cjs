const fs = require("fs");

exports.default = ({ orig, file }) => {
  const fileContents = fs.readFileSync(file, "utf8");
  fs.writeFileSync(
    file,
    fileContents.replace("@shogitter/core", "http://localhost:8090/index.module.js")
  );
  return orig;
};
