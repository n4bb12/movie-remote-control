import { Key } from "ts-keycode-enum"

/**
 * http://robotjs.io/docs/syntax#keys
 */
export const whichToRobotJSKey: {
  [which: number]: string,
} = {
  [Key.Backspace]: "backspace",
  [Key.Tab]: "tab",
  [Key.Enter]: "enter",
  [Key.Shift]: "shift",
  [Key.Ctrl]: "control",
  [Key.Alt]: "alt",
  [Key.PauseBreak]: 19,
  [Key.CapsLock]: 20,
  [Key.Escape]: "escape",
  [Key.Space]: "space",
  [Key.PageUp]: "pageup",
  [Key.PageDown]: "pagedown",
  [Key.End]: "end",
  [Key.Home]: "home",
  [Key.LeftArrow]: "left",
  [Key.UpArrow]: "up",
  [Key.RightArrow]: "right",
  [Key.DownArrow]: "down",
  [Key.Insert]: "insert", // No Mac support
  [Key.Delete]: "delete",
  [Key.Zero]: 48,
  [Key.ClosedParen]: 48,
  [Key.One]: 49,
  [Key.ExclamationMark]: 49,
  [Key.Two]: 50,
  [Key.AtSign]: 50,
  [Key.Three]: 51,
  [Key.PoundSign]: 51,
  [Key.Hash]: 51,
  [Key.Four]: 52,
  [Key.DollarSign]: 52,
  [Key.Five]: 53,
  [Key.PercentSign]: 53,
  [Key.Six]: 54,
  [Key.Caret]: 54,
  [Key.Hat]: 54,
  [Key.Seven]: 55,
  [Key.Ampersand]: 55,
  [Key.Eight]: 56,
  [Key.Star]: 56,
  [Key.Asterik]: 56,
  [Key.Nine]: 57,
  [Key.OpenParen]: 57,
  [Key.A]: "a",
  [Key.B]: "b",
  [Key.C]: "c",
  [Key.D]: "d",
  [Key.E]: "e",
  [Key.F]: "f",
  [Key.G]: "g",
  [Key.H]: "h",
  [Key.I]: "i",
  [Key.J]: "j",
  [Key.K]: "k",
  [Key.L]: "l",
  [Key.M]: "m",
  [Key.N]: "n",
  [Key.O]: "o",
  [Key.P]: "p",
  [Key.Q]: "q",
  [Key.R]: "r",
  [Key.S]: "s",
  [Key.T]: "t",
  [Key.U]: "u",
  [Key.V]: "v",
  [Key.W]: "w",
  [Key.X]: "x",
  [Key.Y]: "y",
  [Key.Z]: "z",
  [Key.LeftWindowKey]: 91,
  [Key.RightWindowKey]: 92,
  [Key.SelectKey]: 93,
  [Key.Numpad0]: "numpad_0", // No Linux support
  [Key.Numpad1]: "numpad_1", // No Linux support
  [Key.Numpad2]: "numpad_2", // No Linux support
  [Key.Numpad3]: "numpad_3", // No Linux support
  [Key.Numpad4]: "numpad_4", // No Linux support
  [Key.Numpad5]: "numpad_5", // No Linux support
  [Key.Numpad6]: "numpad_6", // No Linux support
  [Key.Numpad7]: "numpad_7", // No Linux support
  [Key.Numpad8]: "numpad_8", // No Linux support
  [Key.Numpad9]: "numpad_9", // No Linux support
  [Key.Multiply]: 106,
  [Key.Add]: 107,
  [Key.Subtract]: 109,
  [Key.DecimalPoint]: 110,
  [Key.Divide]: 111,
  [Key.F1]: "f1",
  [Key.F2]: "f2",
  [Key.F3]: "f3",
  [Key.F4]: "f4",
  [Key.F5]: "f5",
  [Key.F6]: "f6",
  [Key.F7]: "f7",
  [Key.F8]: "f8",
  [Key.F9]: "f9",
  [Key.F10]: "f10",
  [Key.F11]: "f11",
  [Key.F12]: "f12",
  [Key.NumLock]: 144,
  [Key.ScrollLock]: 145,
  [Key.SemiColon]: 186,
  [Key.Equals]: 187,
  [Key.Comma]: 188,
  [Key.Dash]: 189,
  [Key.Period]: 190,
  [Key.UnderScore]: 189,
  [Key.PlusSign]: 187,
  [Key.ForwardSlash]: 191,
  [Key.Tilde]: 192,
  [Key.GraveAccent]: 192,
  [Key.OpenBracket]: 219,
  [Key.ClosedBracket]: 221,
  [Key.Quote]: 222,

  // [Key.]: "command",
  // [Key.]: "right_shift",
  // [Key.]: "printscreen", // No Mac support
  // [Key.]: "audio_mute", // Mute the volume
  // [Key.]: "audio_vol_down", // Lower the volume
  // [Key.]: "audio_vol_up", // Increase the volume
  // [Key.]: "audio_play", // Play
  // [Key.]: "audio_stop", // Stop
  // [Key.]: "audio_pause", // Pause
  // [Key.]: "audio_prev", // Previous Track
  // [Key.]: "audio_next", // Next Track
  // [Key.]: "audio_rewind", // Linux only
  // [Key.]: "audio_forward", // Linux only
  // [Key.]: "audio_repeat", // Linux only
  // [Key.]: "audio_random", // Linux only
  // [Key.]: "lights_mon_up", // Turn up monitor brightness"// No Windows support
  // [Key.]: "lights_mon_down", // Turn down monitor brightness // No Windows support
  // [Key.]: "lights_kbd_toggle", // Toggle keyboard backlight on/off // No Windows support
  // [Key.]: "lights_kbd_up", // Turn up keyboard backlight brightness // No Windows support
  // [Key.]: "lights_kbd_down", // Turn down keyboard backlight brightness // No Windows support
}
