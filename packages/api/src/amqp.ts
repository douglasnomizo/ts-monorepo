import { connect } from "amqplib";

export const listen = async (
  queueName: string,
  callback: (message: string) => void
): Promise<void> => {
  const connection = await connect("amqp://localhost");
  const channel = await connection.createChannel();
  const queue = channel.assertQueue(queueName);
  channel.consume(queue, function (message) {
    channel.ack(message);
    callback(message.content);
  });
};
