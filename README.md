<h1 align="center">
  <img alt="Logo" src="https://image.flaticon.com/icons/svg/421/421829.svg" height="48">
  Movie Remote Control
</h1>

<p align="center">
  Watch movies using your phone as a remote control
</p>

<p align="center">
  <a href="https://circleci.com/gh/n4bb12/workflows/movie-remote-control">
    <img alt="CircleCI" src="https://flat.badgen.net/circleci/github/n4bb12/movie-remote-control?icon=circleci">
  </a>
  <a href="https://david-dm.org/n4bb12/movie-remote-control">
    <img alt="Dependencies" src="https://flat.badgen.net/david/dep/n4bb12/movie-remote-control?icon=npm">
  </a>
  <a href="https://raw.githubusercontent.com/n4bb12/movie-remote-control/master/LICENSE">
    <img alt="License" src="https://flat.badgen.net/github/license/n4bb12/movie-remote-control?icon=github">
  </a>
  <!-- <a href="https://app.netlify.com/sites/movie-remote-control/deploys">
    <img alt="Netlify" src="https://img.shields.io/badge/netlify-movie-remote-control.netlify.com-00ad9f.svg?style=flat-square&logo=netlify">
  </a> -->
  <a href="https://github.com/n4bb12/movie-remote-control/issues/new">
    <img alt="Issues" src="https://flat.badgen.net/badge/github/create issue/pink?icon=github">
  </a>
</p>

<hr>

<p align="center">
⚠️ Early development, please don't use. ⚠️
</p>

<hr>

<img src="client/assets/screenshots/remote-control.png" height="450">

## Remote Control Features

| What           | Effect                          | Notes                                                                                                                              |
| -------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 👈 Tap         | <i>Click</i>                    |                                                                                                                                    |
| 💨 Pan         | <i>Mousemove</i>                | To accomodate for larger movie screens the movement distance is doubled.                                                           |
| #️⃣ Keyboard   | <i>Keypress</i>                 | Tap on the input field to open the keyboard, type anything.                                                                        |
| ⏪ Rewind       | <kbd>←</kbd> + <kbd>Enter</kbd> | Some video players require pressing enter to confirm.                                                                              |
| 🆗 Pause       | <kbd>Spacebar</kbd>             |                                                                                                                                    |
| ⏩ Fast-forward | <kbd>→</kbd> + <kbd>Enter</kbd> |                                                                                                                                    |
| 🔉 Volume      | <kbd>↑</kbd> \| <kbd>↓</kbd>    | Drag left or right. Volume events are throttled, so you can keep the knob attached to your finger, until the volume is satisfying. |

## Usage

#### Install

With yarn

```sh
$ yarn global add movie-remote-control
```

With npm

```sh
$ npm install movie-remote-control
```

This adds the shell the commands `mrc` and `movie-remote-control`.

#### Start Server

Start the server with one of the following commands.

```sh
$ mrc

# fallback alternative
$ movie-remote-control
```

#### Customize Port

The default port is `3000`. Specify a custom port via the `--port` flag:

```sh
$ mrc --port 4000
```

The pairing web page is automatically opened.

#### Pair Your Device

Either scan the displayed bar code or manually open the highlighted URL on your mobile phone.

<img src="client/assets/screenshots/pairing.png" height="360">

#### Add to Homescreen



#

Logo made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/free-icon/television_421829" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a><br>
Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/packs/essential-set-2" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
