import { environment } from "client/environments/environment"

export const pairingUrl = [
  "http://",
  environment.ws.host,
  ":",
  environment.ws.port,
  "/remote-control",
].join("")
