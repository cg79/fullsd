const koa = require('koa2')
const serve = require('koa2-static-middleware');
var serveStatic = require('koa-static-folder');
const Router = require("koa-router");

const app = new koa();
const router = new Router();
const BodyParser = require("koa-bodyparser");
let request = require('koa2-request');
const send = require('koa-send');

const { httpProxy } = require('koa-http-proxy-middleware-fix');
const httpsProxyAgent = require('https-proxy-agent');

const microServicePath = "http://localhost:6002";
const wsMicroServicePath = "ws://localhost:6002";

path = require('path'),
  fs = require('fs');

var staticRoot = __dirname + '/';


app.use(httpProxy('/api', {
  target: microServicePath,
  changeOrigin: true,
  // rewrite: path => path.replace(/^\/api(\/|\/\w+)?$/, '/api'),
  logs: true
}))

app.use(httpProxy('/uploads', {
  target: microServicePath,
  changeOrigin: true,
  // rewrite: path => path.replace(/^\/api(\/|\/\w+)?$/, '/api'),
  logs: true
}))

app.use(httpProxy('/angular', {
  target: microServicePath,
  changeOrigin: true,
  // rewrite: path => path.replace(/^\/api(\/|\/\w+)?$/, '/api'),
  logs: true
}))

app.use(httpProxy('/socket.io', {
  target: wsMicroServicePath,
  changeOrigin: true,
  // rewrite: path => path  + "/socket.js",
  logs: true
}))

app.use(async function(ctx, next) {
  // console.log(ctx);

  // console.log(ctx.path);
  if (ctx.path == '/') {
      return await next();
    }
    // console.log('b');
    var ext = path.extname(ctx.path);
    // console.log("ext = " + ext);
    if (ext !== '') {
      // console.log('aaaaaaaaaaaaaaa');
      await send(ctx, 'dist/' + ctx.path);
    }

    // console.log("ccccccccccccccccccccccccc");

  let resp = null;
  try {
   resp = await  next();
    // console.log(resp);
    return resp;
  }
  catch (exxx){
    // console.log(exxx);

    const root = path.resolve("./dist");
    let requested = path.normalize("/index.html");

    return await send(ctx, requested, { root });

  }
    // return await send(ctx, '/dist/index.html');
})




router.get('/', serve('./dist', { index: 'index.html' }));
router.get('/home', serve('./dist', { index: 'index.html' }));
router.get('/dailyNews', serve('./dist', { index: 'index.html' }));
router.get('/login', serve('./dist', { index: 'index.html' }));
router.get('/dailyChallenge', serve('./dist', { index: 'index.html' }));
router.get('/survey', serve('./dist', { index: 'index.html' }));
router.get('/courses', serve('./dist', { index: 'index.html' }));
router.get('/registercourse', serve('./dist', { index: 'index.html' }));
router.get('/about', serve('./dist', { index: 'index.html' }));
router.get('/createUser', serve('./dist', { index: 'index.html' }));
router.get('/forgotPassword', serve('./dist', { index: 'index.html' }));
router.get('/resetpassword', serve('./dist', { index: 'index.html' }));
router.get('/addquestions', serve('./dist', { index: 'index.html' }));
router.get('/users', serve('./dist', { index: 'index.html' }));
router.get('/edituser', serve('./dist', { index: 'index.html' }));
router.get('/confirmemail', serve('./dist', { index: 'index.html' }));
router.get('/js', serve('./dist', { index: 'index.html' }));
router.get('/addNews', serve('./dist', { index: 'index.html' }));
router.get('/*', serve('./dist', { index: 'index.html' }));


app.use(router.routes()).use(router.allowedMethods());



const port = 80;
app.listen(port, () => console.log(`==> Listening at http://localhost:${port}`));
