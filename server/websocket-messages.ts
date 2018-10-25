export interface Position {
  x: number
  y: number
}

export interface Movement extends Position {
  deltaX: number
  deltaY: number
  isFinal: number
}
