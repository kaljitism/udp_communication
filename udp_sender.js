const dgram = require('dgram');

const senderSocket = dgram.createSocket('udp4');

senderSocket.send("Hello Receiver!", 8000, '127.0.0.1', (error, bytes) => {
  if (error) console.log(error);
  console.log(`bytes sent ${bytes}`);
});

senderSocket.on('message', (message, remoteInfo) => {
  console.log(
      `${message} --- received from ${remoteInfo.address}:${remoteInfo.port}`);
  // senderSocket.send("Hello Receiver!", 8000, '127.0.0.1');
});

senderSocket.on('error', error => {
  console.log(`Sender socket error: ${error.message}\n${error.stack}`);
});

senderSocket.on('close', () => {
  console.log('Sender socket closed');
});
