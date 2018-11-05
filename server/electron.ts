import { spawn } from "child_process"
import { app, BrowserWindow } from "electron"
import path from "path"

spawn("node", [
  path.join(__dirname, "cli"),
  ...process.argv.slice(2),
])

async function createWindow() {
  const window = new BrowserWindow({
    autoHideMenuBar: true,
    width: 640,
    height: 360,
    useContentSize: true,
    icon: path.join(__dirname, "..", "client", "assets", "webapp", "icon.png"),
  })

  window.loadURL("http://localhost:3000/pairing")
  window.focus()
}

app.on("ready", createWindow)
