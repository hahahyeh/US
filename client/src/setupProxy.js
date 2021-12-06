const { createProxyMiddleware } = require("http-proxy-middleware");

// src/setupProxy.js
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://untacttalk.shop:8080", // 비즈니스 서버 URL 설정
      changeOrigin: true,
    })
  );
};
