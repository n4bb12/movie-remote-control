import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "movie-remote-control"

  ngOnInit() {
    if (!("WebSocket" in window)) {
      alert("WebSocket NOT supported by your Browser!")
      return
    }

    const ws = new WebSocket("ws://localhost:3000")

    ws.onopen = () => {
      ws.send("browser")
      console.log("client sent:", "client")
    }

    ws.onmessage = evt => {
      console.log("client received:", evt.data)
    }

    ws.onclose = () => {
      console.log("connection closed...")
    }
  }

}
