import { writeFile } from 'fs';

import { name, version } from './package.json';

const targetPath = './src/environments/environment.prod.ts';

const envConfigFile = `export const environment = {
   production: true,
   firebaseConfig: {
        apiKey: '${process.env['FIREBASE_API_KEY']}'
    },
    name: '${name}',
    version: '${version}',
    title: '${process.env['title']}'
};
`;

writeFile(targetPath, envConfigFile, 'utf8', (err) => {
  if (err) {
    return console.log(err);
  }
});
