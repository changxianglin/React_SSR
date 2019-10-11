const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')

const router = new Router()

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })

const handle = app.getRequestHandler()

// app.prepare().then(() => {
   const server = new Koa()

   server.use(async (ctx, next) => {
      await next()
   })

   router.get('/test', async(ctx, next) => {
     ctx.body = `<span>welcome to use router</span>`
   })

   server.use(router.routes()).use(router.allowedMethods())
  //  server.use(async (ctx, next) => {
  //    await handle(ctx.req, ctx.res)
  //    ctx.respond = false
  //  })

   server.listen(3000, () => {
     console.log('koa server listening on 3000')
   })
// })