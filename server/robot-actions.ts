import robot from "robotjs"

import { getRobotJSKey } from "./keymap"
import { Movement, Position } from "./websocket-messages"

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

let origin: Position

export function moveMouse(movement: Movement): void {
  if (!origin) {
    origin = robot.getMousePos()
  }

  const x = origin.x + movement.deltaX * 2
  const y = origin.y + movement.deltaY * 2
  robot.moveMouse(x, y)

  if (movement.isFinal) {
    origin = null
  }
}
