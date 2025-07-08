const amqp = require('amqplib');

(async () => {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  const queue = 'test';

  await channel.assertQueue(queue);
  console.log('📥 Waiting for messages...');

  channel.consume(queue, (msg) => {
    console.log('📨 Received:', msg.content.toString());
    channel.ack(msg);
  });
})();
