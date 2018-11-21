<h1 align="center">
  <img alt="Logo" src="https://image.flaticon.com/icons/svg/421/421829.svg" height="48">
  Movie Remote Control
</h1>

<p align="center">
  Watch movies using your phone as a remote control
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@n4bb12/config-tslint">
    <img alt="Version" src="https://flat.badgen.net/npm/v/@n4bb12/config-tslint?icon=npm">
  </a>
  <a href="https://raw.githubusercontent.com/n4bb12/config-tslint/master/LICENSE">
    <img alt="License" src="https://flat.badgen.net/github/license/n4bb12/config-tslint?icon=github">
  </a>
  <a href="https://github.com/n4bb12/movie-remote-control/issues/new">
    <img alt="Issues" src="https://flat.badgen.net/badge/github/create issue/pink?icon=github">
  </a>
  <a href="https://david-dm.org/n4bb12/movie-remote-control">
    <img alt="Dependencies" src="https://flat.badgen.net/david/dep/n4bb12/movie-remote-control?icon=npm">
  </a>
  <a href="https://circleci.com/gh/n4bb12/workflows/movie-remote-control">
    <img alt="CircleCI" src="https://flat.badgen.net/circleci/github/n4bb12/movie-remote-control?icon=circleci">
  </a>
</p>

<img src="client/assets/screenshots/remote-control.png" height="450">

## Features

| What                      | Effect                          | Notes                                                                                                                              |
| ------------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 👈&nbsp;Tap               | <i>Click</i>                    |                                                                                                                                    |
| 💨&nbsp;Pan               | <i>Mousemove</i>                | To accomodate for larger movie screens the movement distance is doubled.                                                           |
| #️⃣&nbsp;Keyboard         | <i>Keypress</i>                 | Tap on the input field to open the keyboard, type anything.                                                                        |
| ⏪&nbsp;Rewind             | <kbd>←</kbd> + <kbd>Enter</kbd> | Some video players require pressing enter to confirm.                                                                              |
| 🆗&nbsp;Pause             | <kbd>Spacebar</kbd>             |                                                                                                                                    |
| ⏩&nbsp;Fast&#8209;forward | <kbd>→</kbd> + <kbd>Enter</kbd> |                                                                                                                                    |
| 🔉&nbsp;Volume            | <kbd>↑</kbd> \| <kbd>↓</kbd>    | Drag left or right. Volume events are throttled, so you can keep the knob attached to your finger, until the volume is satisfying. |

## Usage

#### Install

```sh
$ npm install --global movie-remote-control
```

This adds the shell the commands `mrc` or `movie-remote-control`.

#### Start Server

Start the server and open the pairing page:

```sh
$ movie-remote-control --port 3000 --open
```

#### Pair Your Device

Either scan the displayed bar code or manually open the highlighted URL on your mobile phone.

<p align="center">
  <img src="client/assets/screenshots/pairing.png">
</p>

#

Logo made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/free-icon/television_421829" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a><br>
Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/packs/essential-set-2" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
