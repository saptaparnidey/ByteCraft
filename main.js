const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    title: 'Javix',
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Load the Spring Boot app
  // Note: The Spring Boot app must be running on localhost:8080
  win.loadURL('http://localhost:8080/index.html');
  
  // Create Menu
  const { Menu } = require('electron');
  const template = [
    {
      label: 'Javix',
      submenu: [
        { role: 'quit' }
      ]
    },
    {
        label: 'View',
        submenu: [
          { role: 'reload' },
          { role: 'forceReload' },
          { role: 'toggleDevTools' },
          { type: 'separator' },
          { role: 'resetZoom' },
          { role: 'zoomIn' },
          { role: 'zoomOut' },
          { type: 'separator' },
          { role: 'togglefullscreen' }
        ]
    }
  ];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('quit-app', async () => {
  try {
    // Attempt to gracefully shutdown the Spring Boot backend
    await fetch('http://localhost:8080/actuator/shutdown', { method: 'POST' });
  } catch (error) {
    console.error('Failed to shutdown backend:', error.message);
  }
  app.quit();
});
