import robot from "robotjs"
import { Key } from "ts-keycode-enum"

export function tapKey(key: Key) {
  robot.keyTap("space")
}
