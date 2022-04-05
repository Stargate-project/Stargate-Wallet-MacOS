const { app, BrowserWindow } = require("electron");

function createWindow() {
  let appWindow = new BrowserWindow({
    width: 900,
    height: 600,
    center: true,
    show: false,
  });
  appWindow.loadURL("https://7ty.tech");

  appWindow.on("close", () => {
    appWindow = null;
  });

  appWindow.once("ready-to-show", () => {
    appWindow.show();
  });
}

app.on("ready", createWindow);
