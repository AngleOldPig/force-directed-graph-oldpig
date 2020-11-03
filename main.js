var electron = require('electron');

var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        width: 800,
        height: 1000,
        webPreferences:{
            nodeIntegration:true,
            enableRemoteModule:true
        }
    });
    mainWindow.loadFile('index.html');
    mainWindow.on('closed',()=>{
        mainWindow = null;
    })
});