# 📬 Message Queue

This section contains message queuing examples using **RabbitMQ** and **Node.js**.

## 🧩 Subfolders

### 🔹 `message_queue_demo/`
A basic example of **Producer → Queue → Consumer** using `amqplib`.

#### 🛠 Components:
- `sender.js` — sends a message to the queue
- `receiver.js` — listens to the queue and consumes the message
- `package.json` — manages dependencies (`amqplib`)
- `.gitignore` — excludes `node_modules/`

## 🚀 Getting Started

1. Start RabbitMQ with Docker:

```bash
docker run -d --hostname rabbit-host --name rabbitmq \
  -p 5672:5672 -p 15672:15672 rabbitmq:4-management
2.Run the consumer first:
node message_queue_demo/receiver.js
3. Then run the producer:
node message_queue_demo/sender.js
