import { app } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';

const log = require('electron-log');
var kill  = require('tree-kill');
const findPidFromPort = require("find-pid-from-port");

const BACKEND_PORT = 4545;
const JAR_PATH = 'C:\\JarPaths\\OS\\libs\\OS-0.0.1-SNAPSHOT.jar'

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    fullscreen: true,
    frame: false
  });

  if (isProd) {

    log.info(`Starting the spring boot app in port ${BACKEND_PORT}`);
    var pid;
    var child = require('child_process').spawn(
      'java', ['-jar', JAR_PATH, `--server.port=${BACKEND_PORT}`]
    );

    while(true){
      try{
        pid = await findPidFromPort(BACKEND_PORT);
        break;
      } catch(error){
      }
    }

    await mainWindow.loadURL('app://./home.html');

    mainWindow.on('closed', function () {
      log.info("Closing this PID: ", pid.tcp[0]);
      kill(pid.tcp[0]);
    });
  } else {
    log.info(`Starting the spring boot app in port ${BACKEND_PORT}`);
    var pid;
    var child = require('child_process').spawn(
      'java', ['-jar', JAR_PATH, `--server.port=${BACKEND_PORT}`]
    );

    while(true){
      try{
        pid = await findPidFromPort(BACKEND_PORT);
        break;
      } catch(error){
      }
    }

    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
      log.info("Closing this PID: ", pid.tcp[0]);
      kill(pid.tcp[0]);
    })
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});
