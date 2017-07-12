var Cylon = require('cylon');

// API methods are created dynamically for each device
Cylon.api('http', {
  ssl: false
});

Cylon.robot({
  name: 'lamp',

  connections: {
    arduino: {
      adaptor: 'firmata',
      port: '/dev/ttyACM0'
    }
  },

  devices: {
    relay: { driver: 'relay', pin: 2, type: "closed" }
  }
}).start();
