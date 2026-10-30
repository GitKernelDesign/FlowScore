const { app, BrowserWindow, Menu, shell, nativeImage } = require('electron');
const path = require('path');

const isDev = !app.isPackaged;

// Single instance: relaunching focuses the existing window.
const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    const wins = BrowserWindow.getAllWindows();
    if (wins.length) {
      const w = wins[0];
      if (w.isMinimized()) w.restore();
      w.focus();
    }
  });

  let mainWindow = null;

  // Parse a window.open() "features" string into a key/value object.
  function parseFeatures(features) {
    const out = {};
    if (!features) return out;
    for (const part of features.split(',')) {
      const [k, v] = part.split('=').map((s) => (s ? s.trim() : s));
      if (k) out[k] = v;
    }
    return out;
  }

  function createWindow() {
    let icon;
    try {
      const iconPath = path.join(__dirname, 'icon_512.png');
      icon = nativeImage.createFromPath(iconPath);
      if (icon.isEmpty()) icon = undefined;
    } catch {
      icon = undefined;
    }

    mainWindow = new BrowserWindow({
      width: 1280,
      height: 820,
      minWidth: 760,
      minHeight: 560,
      title: 'Flow-Score',
      icon: icon,
      backgroundColor: '#f5f7fa',
      autoHideMenuBar: true,
      webPreferences: {
        contextIsolation: true,
        nodeIntegration: false,
        sandbox: true,
        spellcheck: false
      }
    });

    // Remove the application menu (File / Edit / View ...) entirely.
    Menu.setApplicationMenu(null);
    mainWindow.setMenuBarVisibility(false);
    mainWindow.removeMenu();

    mainWindow.loadFile(path.join(__dirname, 'build', 'index.html'));

    // Window-open handler.
    // - External http(s) links -> open in the user's default browser.
    // - about:blank / empty popups -> allowed as child windows so the app can
    //   open a print popup (window.open("", "_blank") + window.print()).
    mainWindow.webContents.setWindowOpenHandler(({ url, features }) => {
      if (/^https?:\/\//i.test(url)) {
        shell.openExternal(url);
        return { action: 'deny' };
      }

      const f = parseFeatures(features);
      const width = f.width ? Math.max(320, parseInt(f.width, 10) || 1000) : 1000;
      const height = f.height ? Math.max(240, parseInt(f.height, 10) || 700) : 700;

      return {
        action: 'allow',
        overrideBrowserWindowOptions: {
          width,
          height,
          title: 'Flow-Score — Impression',
          icon: icon,
          autoHideMenuBar: true,
          menuBarVisible: false,
          webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            sandbox: true,
            spellcheck: false
          }
        }
      };
    });

    // Make sure every child print popup also has its menu removed.
    mainWindow.webContents.on('did-create-window', (childWin) => {
      Menu.setApplicationMenu(null);
      childWin.setMenuBarVisibility(false);
      childWin.removeMenu();
    });

    mainWindow.webContents.on('will-navigate', (event, url) => {
      const requested = new URL(url, mainWindow.webContents.getURL());
      if (requested.protocol === 'file:') return;
      if (/^https?:\/\//i.test(url)) {
        event.preventDefault();
        shell.openExternal(url);
      } else {
        event.preventDefault();
      }
    });
  }

  app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
}
