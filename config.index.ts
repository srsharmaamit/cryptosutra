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
    title: '${process.env['TITLE']}'
};
`;

console.log(
  `THIS IS A VERIFICATION OF GITHUB ACTION SECRET ACCESS:  ${process.env['TITLE']}`
);
writeFile(targetPath, envConfigFile, 'utf8', (err) => {
  if (err) {
    return console.log(err);
  }
});
