<img src="client/assets/screenshots/remote-control.png" height="500" align="right">

<h1 align="center">
  <img alt="Logo" src="https://image.flaticon.com/icons/svg/421/421829.svg" height="48">
  Movie Remote Control
</h1>

<p align="center">
  Watch movies using your phone as a remote control
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/movie-remote-control">
    <img alt="Version" src="https://flat.badgen.net/npm/v/movie-remote-control?icon=npm">
  </a>
  <a href="https://raw.githubusercontent.com/n4bb12/movie-remote-control/master/LICENSE">
    <img alt="License" src="https://flat.badgen.net/github/license/n4bb12/movie-remote-control?icon=github">
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

## Install

```
yarn global add movie-remote-control
```

## Usage

### Start Server

Start the server:

```
movie-remote-control

Optional flags:
  --port <PORT>     Customize the port (default 3000)
  --open            Open the pairing page in the default browser
```

### Pair Device

Open http://localhost:3000 in your browser and scan the QR code on your mobile phone.

<p align="center">
  <img src="client/assets/screenshots/pairing.png" height="250">
</p>

### Controls

The controls trigger the following effects on your computer:

| Action                    | How to use                                                                       | Effect                                                                                            |
| ------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 👈&nbsp;Tap               | Tap somewhere on the touch pad.                                                  | <i>Click</i>                                                                                      |
| 💨&nbsp;Pan               | Pan accross the touch pad.                                                       | <i>Mousemove</i><br>(To accomodate for the larger movie screen, the movement distance is doubled) |
| #️⃣&nbsp;Keyboard         | Tap on the input field to open the keyboard, type anything.                      | <i>Keypress</i>                                                                                   |
| ⏪&nbsp;Rewind             | Tap the rewind button next to the pause button.                                  | <kbd>←</kbd> + <kbd>Enter</kbd><br>(Some video players require pressing enter to confirm)         |
| 🆗&nbsp;Pause             | Tap the large pause button.                                                      | <kbd>Spacebar</kbd>                                                                               |
| ⏩&nbsp;Fast&#8209;forward | Tap the fast-forward button next to the pause button.                            | <kbd>→</kbd> + <kbd>Enter</kbd><br>(Some video players require pressing enter to confirm)         |
| 🔉&nbsp;Volume            | Drag the volume slider left or right until the volume reaches the desired level. | <kbd>↑</kbd> \| <kbd>↓</kbd>                                                                      |

#

Logo made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/free-icon/television_421829" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a><br>
Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/packs/essential-set-2" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
