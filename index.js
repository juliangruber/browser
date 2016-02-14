var app = require('app');
var Window = require('browser-window');

var window = null;

app.on('ready', () => {
  window = new Window;
  window.loadURL('file://' + __dirname + '/index.html');
  window.openDevTools();
  window.on('closed', () => window = null);
});

