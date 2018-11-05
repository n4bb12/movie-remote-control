import parseArgs from "getopts"
import path from "path"

import { startServer } from "./server"

const args = parseArgs(process.argv.slice(2))

startServer({
  scheme: "http",
  host: "localhost",
  port: args.port || +process.env.PORT || 3000,
  webroot: path.join(__dirname, "..", "client"),
  open: args.open,
}).catch(console.error)
