import Application from "koa"
const app = new Application()

// logger

app.use(async (ctx, next) => {
  await next()
  const rt = ctx.response.get("X-Response-Time")
  console.log(`${ctx.method} ${ctx.url} - ${rt}`)
})

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set("X-Response-Time", `${ms}ms`)
})

// response

app.use(async ctx => {
  ctx.body = "Hello World"
})

const protocol = "http"
const host = "localhost"
const port = 3000

app.listen(port, host, () =>
  console.log(`MRC-Server is listening on ${protocol}://${host}:${port}`))
