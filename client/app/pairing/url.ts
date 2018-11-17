import { environment } from "../../environments/environment"

const { scheme, host, port } = environment.pairing

export const pairingUrl = `${scheme}://${host}:${port}/remote-control`
