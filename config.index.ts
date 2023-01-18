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
  console.log('GITHUB_ENV: ' + process.env.GITHUB_ENV);
  console.log('-------------------------------------------------');
  const remo = [
    'GITHUB_STATE',
    'DEPLOYMENT_BASEPATH',
    'DOTNET_NOLOGO',
    'USER',
    'npm_config_user_agent',
    'CI',
    'GITHUB_ENV',
    'PIPX_HOME',
    'npm_node_execpath',
    'JAVA_HOME_8_X64',
    'SHLVL',
    'npm_config_noproxy',
    'HOME',
    'RUNNER_TEMP',
    'GITHUB_EVENT_PATH',
    'npm_package_json',
    'JAVA_HOME_11_X64',
    'PIPX_BIN_DIR',
    'GRAALVM_11_ROOT',
    'GITHUB_REPOSITORY_OWNER',
    'GRADLE_HOME',
    'ANDROID_NDK_LATEST_HOME',
    'STATS_RDCL',
    'GITHUB_RETENTION_DAYS',
    'GITHUB_REPOSITORY_OWNER_ID',
    'POWERSHELL_DISTRIBUTION_CHANNEL',
    'AZURE_EXTENSION_DIR',
    'GITHUB_HEAD_REF',
    'npm_config_userconfig',
    'npm_config_local_prefix',
    'SYSTEMD_EXEC_PID',
    'GITHUB_GRAPHQL_URL',
    'COLOR',
    'NVM_DIR',
    'npm_config_metrics_registry',
    'DOTNET_SKIP_FIRST_TIME_EXPERIENCE',
    'JAVA_HOME_17_X64',
    'ImageVersion',
    'RUNNER_OS',
    'GITHUB_API_URL',
    'SWIFT_PATH',
    'RUNNER_USER',
    'CHROMEWEBDRIVER',
    'JOURNAL_STREAM',
    'GITHUB_WORKFLOW',
    '_',
    'npm_config_prefix',
    'GITHUB_RUN_ID',
    'npm_config_cache',
    'GOROOT_1_17_X64',
    'GITHUB_REF_TYPE',
    'BOOTSTRAP_HASKELL_NONINTERACTIVE',
    'GITHUB_WORKFLOW_SHA',
    'GITHUB_BASE_REF',
    'ImageOS',
    'GITHUB_WORKFLOW_REF',
    'PERFLOG_LOCATION_SETTING',
    'GOROOT_1_18_X64',
    'GITHUB_ACTION_REPOSITORY',
    'npm_config_node_gyp',
    'PATH',
    'ANT_HOME',
    'DOTNET_MULTILEVEL_LOOKUP',
    'RUNNER_TRACKING_ID',
    'INVOCATION_ID',
    'RUNNER_TOOL_CACHE',
    'GOROOT_1_19_X64',
    'NODE',
    'npm_package_name',
    'GITHUB_ACTION',
    'GITHUB_RUN_NUMBER',
    'GITHUB_TRIGGERING_ACTOR',
    'RUNNER_ARCH',
    'XDG_RUNTIME_DIR',
    'AGENT_TOOLSDIRECTORY',
    'LANG',
    'VCPKG_INSTALLATION_ROOT',
    'CONDA',
    'RUNNER_NAME',
    'XDG_CONFIG_HOME',
    'GITHUB_REF_NAME',
    'GITHUB_REPOSITORY',
    'npm_lifecycle_script',
    'ANDROID_NDK_ROOT',
    'GITHUB_ACTION_REF',
    'DEBIAN_FRONTEND',
    'GITHUB_REPOSITORY_ID',
    'GITHUB_ACTIONS',
    'npm_package_version',
    'npm_lifecycle_event',
    'GITHUB_REF_PROTECTED',
    'GITHUB_WORKSPACE',
    'ACCEPT_EULA',
    'GITHUB_JOB',
    'RUNNER_PERFLOG',
    'GITHUB_SHA',
    'GITHUB_RUN_ATTEMPT',
    'GITHUB_REF',
    'GITHUB_ACTOR',
    'ANDROID_SDK_ROOT',
  ];

  Object.keys(process.env).forEach((key: string) => {
    if (remo.indexOf(key) === -1) {
      console.log(key + '  =====> ' + process.env[key]);
    }
  });

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
