const setEnv = () => {
  const envConfigFile = `${process.env.APP_CONFIG}`;
  const fs = require("fs");
  const writeFile = fs.writeFile;
  // Configure Angular `environment.ts` file path
  const targetPath = "./src/environments/environment.prod.ts";
  writeFile(targetPath, envConfigFile, (err) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(
        `Angular environment.ts file generated correctly at ${targetPath}`
      );
    }
  });
};

setEnv();
