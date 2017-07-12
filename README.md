# iot-the-fun-parts

Slides and examplary configs for IoT introduction presentation.

Slides are available [here](https://docs.google.com/presentation/d/1b8Q1zbg6wF-zxzT1CACJy6sny4BqSQpjhcAYZxRxUQ0/edit).

## Connection
1. Connect GND of Arduino to relay's GND
2. Connect PIN2 of Arduino to relay's IN
3. Connect 5V of Arduino to VCC on relay
4. Connect Arduino to host-computer

## Installation
1. Install `homebridge` and `homebridge-http-simple-switch` on host computer.
2. Copy config.json to `~/.homebridge/config.json`.
3. Run `npm i` in `cylon` directory. 

## Usage
1. Run `node index.js` in `cylon` directory. 
2. Run `homebridge` app.
3. Search for `Homebridge` accessory in iOS Home app. 
    * if you cannot find the accessory, remove `persist` directory next to `~/.homebridge/config.json`

## Thanks to
* [@nfarina](http://github.com/nfarina) for `homebridge`
* [@lucacri](http://github.com/lucacri) for `homebridge-http-simple-switch`
* [CylonJS crew](https://cylonjs.com) for... `CylonJS`, Sherlock
* [@NielsLeenheer](https://github.com/NielsLeenheer), [@pepelsbey](https://github.com/pepelsbey)
