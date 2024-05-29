const dgram = require('dgram');

const receiverSocket = dgram.createSocket('udp4');

receiverSocket.bind(8000, '127.0.0.1');

receiverSocket.on('message', (
    message,
    remoteInfo) => {
  console.log(
      `Socket received ${message} from ${remoteInfo.address} at ${remoteInfo.port}}`);
  receiverSocket.send("Hello Sender", remoteInfo.port, remoteInfo.address);
});

receiverSocket.on('listening', () => {
  const address = receiverSocket.address();
  console.log(
      `Receiver Socket listening on ${address.address}:${address.port}`);
});

receiverSocket.on('error', (err) => {
  console.log(`Receiver Socket error:\n${err.stack}`);
});

receiverSocket.on('close', () => {
  console.log('Receiver Socket closed');
  receiverSocket.close();
});
