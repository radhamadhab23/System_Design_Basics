const amqp = require('amqplib');

(async () => {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  const queue = 'test';

  await channel.assertQueue(queue);
  channel.sendToQueue(queue, Buffer.from('Hello from Producer!'));

  console.log('✅ Message sent');
  setTimeout(() => connection.close(), 500);
})();
