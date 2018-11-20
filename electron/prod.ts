import { spawn } from "child_process"
import path from "path"

import "./dev"

spawn("node", [path.join(__dirname, "..", "server", "cli"), ...process.argv.slice(2)])
