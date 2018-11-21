#!/usr/bin/env node

import parseArgs from "getopts"
import path from "path"

import { startServer } from "./server"

const args = parseArgs(process.argv.slice(2))

startServer({
  port: args.port || +process.env.PORT,
  webroot: path.join(__dirname, "..", "client"),
  open: args.open,
}).catch(console.error)
