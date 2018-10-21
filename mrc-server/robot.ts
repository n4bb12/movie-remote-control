import robot from "robotjs"

import { getRobotJSKey } from "./keymap"

export function tap(key: string): boolean {
  const robotKey = getRobotJSKey(key)
  if (robotKey) {
    console.log(JSON.stringify({ key, robotKey }, null, 2))
    robot.keyTap(robotKey)
  }
  return !!robotKey
}
