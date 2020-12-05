import { Queues, Exchange } from "@dhln/common"
import db from "./db"
import { listen } from "./amqp"
import Koa from "koa"

const app = new Koa()

listen(
  Queues.TRADE,
  async (payload: Exchange): Promise<void> => {
    const { origin, destination , amount, rate } = payload
    await db.query(
      "INSERT INTO trades (origin, destination, amount, rate) VALUES (?, ?, ?, ?)",
      [origin, destination, amount, rate]
    );
  }
)

app.use(async (ctx) => {
  if (ctx.path === "/trades") {
    const { rows } = await db.query("select * from trades")
    ctx.body = rows
  } else {
    ctx.throw(404)
  }
})

app.listen(3000)
