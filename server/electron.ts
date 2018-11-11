import { spawn } from "child_process"
import { app, BrowserWindow } from "electron"
import debug from "electron-debug"
import path from "path"

spawn("node", [path.join(__dirname, "cli"), ...process.argv.slice(2)])
debug()

let win

function createWindow() {
  win = new BrowserWindow({
    // https://electronjs.org/docs/api/browser-window
    width: 640,
    height: 360,
    useContentSize: true,
    show: false,
  })
  win.loadURL("http://localhost:3000/pairing")
  // win.loadURL("http://example.com")
  win.focus()
  win.once("ready-to-show", () => win.show())
}

app.on("ready", createWindow)

app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})
