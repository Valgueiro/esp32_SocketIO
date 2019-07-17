# esp32_SocketIO

Simple example using the [socketIO](https://socket.io/) library on ESP 32 boards.

## How to run
After setting up Arduino IDE to accept ESP32 devices (if you didn't, [try this tutorial](https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-windows-instructions/)):

1. Install the `WebSockets by Markus Settler` library on your IDE with _Sketch > Include Library > Manage Libraries..._
2. Install the `Socket IO Client` library available on [this repository](https://github.com/timum-viw/socket.io-client). Note: I've tried to use the version available on the library manager of Arduino IDE but I got some error messages on console. So, I had to download and install the .zip from the last commit of the library repo (I've used [this commit](https://github.com/timum-viw/socket.io-client/tree/5f5ccd94c38b5b6a5284500dc9d3e95f92298d3b)).

After those two steps you are ready to go!

If you want to make a quick test, you can use the server folder! [Check that out!](https://github.com/Valgueiro/esp32_SocketIO/tree/master/server)
