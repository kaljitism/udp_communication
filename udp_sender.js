const dgram = require('dgram');

const sender = dgram.createSocket('udp4');

sender.send("Hello Receiver!", 8000, '127.0.0.1', (error, bytes) => {
  if (error) console.log(error);
  console.log(`bytes sent ${bytes}`);
});

sender.on('message', (message, remoteInfo) => {
  console.log(
      `${message} --- received from ${remoteInfo.address}:${remoteInfo.port}`);
  sender.send("Hello Receiver!", 8000, '127.0.0.1');
});

sender.on('error', error => {
  console.log(`Sender socket error: ${error.message}\n${error.stack}`);
});

sender.on('close', () => {
  console.log('Sender socket closed');
});
