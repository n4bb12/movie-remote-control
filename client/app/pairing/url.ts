import { environment } from "client/environments/environment"

const { scheme, host, port } = environment.ws

export const pairingUrl = `${scheme}://${host}:${port}/remote-control`
