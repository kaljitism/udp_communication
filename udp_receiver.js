const dgram = require('dgram');

const receiver = dgram.createSocket('udp4');

receiver.bind(8000, '127.0.0.1');

receiver.on('message', (
    message,
    remoteInfo) => {
  console.log(
      `Socket received ${message} from ${remoteInfo.address} at ${remoteInfo.port}}`);
  receiver.send("Hello Sender", remoteInfo.port, remoteInfo.address);
});

receiver.on('listening', () => {
  const address = receiver.address();
  console.log(
      `Receiver Socket listening on ${address.address}:${address.port}`);
});

// receiver.on('error', (err) => {
//   console.log(`Receiver Socket error:\n${err.stack}`);
// });
//
// receiver.on('close', () => {
//   console.log('Receiver Socket closed');
//   receiver.close();
// });
