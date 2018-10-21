import { Key } from "w3c-keys"
import { RobotKey } from "./types/robot-key-name"

export function getRobotJSKey(key: string): string {
  // RobotJS docs: "The names of the letter and number keys
  // are the same as that single letter or digit."
  if (key.length === 1) {
    return key
  }
  return browserCodeToRobotJSKey[key]
}

const browserCodeToRobotJSKey: {
  [key: string]: RobotKey,
} = {
  [Key.Backspace]: RobotKey.Backspace,
  [Key.Delete]: RobotKey.Delete,
  [Key.Enter]: RobotKey.Enter,
  [Key.Tab]: RobotKey.Tab,
  [Key.Escape]: RobotKey.Escape,
  [Key.ArrowUp]: RobotKey.Up,
  [Key.ArrowDown]: RobotKey.Down,
  [Key.ArrowRight]: RobotKey.Right,
  [Key.ArrowLeft]: RobotKey.Left,
  [Key.Home]: RobotKey.Home,
  [Key.End]: RobotKey.End,
  [Key.PageUp]: RobotKey.Pageup,
  [Key.PageDown]: RobotKey.Pagedown,
  [Key.F1]: RobotKey.F1,
  [Key.F2]: RobotKey.F2,
  [Key.F3]: RobotKey.F3,
  [Key.F4]: RobotKey.F4,
  [Key.F5]: RobotKey.F5,
  [Key.F6]: RobotKey.F6,
  [Key.F7]: RobotKey.F7,
  [Key.F8]: RobotKey.F8,
  [Key.F9]: RobotKey.F9,
  [Key.F10]: RobotKey.F10,
  [Key.F11]: RobotKey.F11,
  [Key.F12]: RobotKey.F12,
  // [Key.F13]: RobotKey.F13,
  // [Key.F14]: RobotKey.F14,
  // [Key.F15]: RobotKey.F15,
  // [Key.F16]: RobotKey.F16,
  // [Key.F17]: RobotKey.F17,
  // [Key.F18]: RobotKey.F18,
  // [Key.F19]: RobotKey.F19,
  // [Key.F20]: RobotKey.F20,
  // [Key.F21]: RobotKey.F21,
  // [Key.F22]: RobotKey.F22,
  // [Key.F23]: RobotKey.F23,
  // [Key.F24]: RobotKey.F24,
  // [Key.Command]: RobotKey.Command,
  [Key.Alt]: RobotKey.Alt,
  [Key.Control]: RobotKey.Control,
  [Key.Shift]: RobotKey.Shift,
  // [Key.RightShift]: RobotKey.RightShift,
  [Key.Space]: RobotKey.Space,
  // [Key.Printscreen]: RobotKey.Printscreen,               // No Mac support
  [Key.Insert]: RobotKey.Insert,                            // No Mac support
  // [Key.Menu]: RobotKey.Menu,
  // [Key.AudioMute]: RobotKey.AudioMute,
  // [Key.AudioVolDown]: RobotKey.AudioVolDown,
  // [Key.AudioVolUp]: RobotKey.AudioVolUp,
  // [Key.AudioPlay]: RobotKey.AudioPlay,
  // [Key.AudioStop]: RobotKey.AudioStop,
  // [Key.AudioPause]: RobotKey.AudioPause,
  // [Key.AudioPrev]: RobotKey.AudioPrev,
  // [Key.AudioNext]: RobotKey.AudioNext,
  // [Key.Rewind]: RobotKey.AudioRewind,                    // Linux only
  // [Key.Forward]: RobotKey.AudioForward,                  // Linux only
  // [Key.Repeat]: RobotKey.AudioRepeat,                    // Linux only
  // [Key.Random]: RobotKey.AudioRandom,                    // Linux only
  [Key.Numpad0]: RobotKey.Numpad_0,                         // No Linux support
  [Key.Numpad1]: RobotKey.Numpad_1,                         // No Linux support
  [Key.Numpad2]: RobotKey.Numpad_2,                         // No Linux support
  [Key.Numpad3]: RobotKey.Numpad_3,                         // No Linux support
  [Key.Numpad4]: RobotKey.Numpad_4,                         // No Linux support
  [Key.Numpad5]: RobotKey.Numpad_5,                         // No Linux support
  [Key.Numpad6]: RobotKey.Numpad_6,                         // No Linux support
  [Key.Numpad7]: RobotKey.Numpad_7,                         // No Linux support
  [Key.Numpad8]: RobotKey.Numpad_8,                         // No Linux support
  [Key.Numpad9]: RobotKey.Numpad_9,                         // No Linux support
  // [Key.LightsMonUp]: RobotKey.LightsMonUp,               // No Windows support
  // [Key.LightsMonDown]: RobotKey.LightsMonDown,           // No Windows support
  // [Key.LightsKbdToggle]: RobotKey.LightsKbdToggle,       // No Windows support
  // [Key.LightsKbdUp]: RobotKey.LightsKbdUp,               // No Windows support
  // [Key.LightsKbdDown]: RobotKey.LightsKbdDown,           // No Windows support
}
