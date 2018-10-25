import robot from "robotjs"

import { getRobotJSKey } from "./keymap"

export function tapKey(key: string): boolean {
  const robotKey = getRobotJSKey(key)
  if (robotKey) {
    robot.keyTap(robotKey)
  }
  return !!robotKey
}

export function clickMouse(): void {
  robot.mouseClick("left")
}

export function moveMouse(x, y): void {
  robot.moveMouse(x, y)
}
