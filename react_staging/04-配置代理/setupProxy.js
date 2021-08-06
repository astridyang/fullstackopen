// const proxy = require('http-proxy-middleware')

// module.exports = function (app) {
//   app.use(
//     createProxyMiddleware("/api1", {
//       target: "http://localhost:5000",
//       changeOrigin: true, // 服務器收到的请求头中Host的值
//       pathRewrite: { "^api1": "" }, // 去除请求前缀
//     }),
//     createProxyMiddleware("/api2", {
//       target: "http://localhost:5001",
//       changeOrigin: true,
//       pathRewrite: { "^api2": "" },
//     })
//   );
// };

const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api1", {
      target: "http://localhost:5000",
      changeOrigin: true,
      pathRewrite: {
        "/api1": "", 
      },
    }),
    createProxyMiddleware("/api2", {
      target: "http://localhost:5001",
      changeOrigin: true,
      pathRewrite: {
        "/api2": "", 
      },
    })
  );
};
