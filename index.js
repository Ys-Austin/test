const koa = require('koa');

const app = new koa();

app.use(ctx=>{
    ctx.body = 'hello koa'
})

app.listen(3000,()=>{
    console.log('port is in 3000')
})