import { name, version } from './package.json';

const setEnv = () => {
  const fs = require('fs');
  const writeFile = fs.writeFile;
  // Configure Angular `environment.ts` file path
  const targetPath = './src/environments/environment.prod.ts';
  // Load node modules
  const colors = require('colors');
  const appVersion = require('./package.json').version;
  require('dotenv').config({
    path: 'src/environments/.env',
  });
  // `environment.ts` file structure
  // @ts-ignore
  const envConfigFile = `export const environment = {
   production: true,
   firebaseConfig: {
        apiKey: '${process.env.FIREBASE_API_KEY}'
    },
    name: '${name}',
    version: '${version}',
    title: '${process.env.TITLE}'
};
`;
  console.log(
    colors.magenta(
      `The file \`environment.prod.ts\` will be written with the following content: ${process.env.TITLE} \n`
    )
  );
  console.log('-------------------------------------------------');
  console.log(Object.keys(process.env));
  console.log('-------------------------------------------------');
  writeFile(targetPath, envConfigFile, (err: any) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(
        colors.magenta(
          `Angular environment.ts file generated correctly at ${targetPath} \n`
        )
      );
    }
  });
};

setEnv();
