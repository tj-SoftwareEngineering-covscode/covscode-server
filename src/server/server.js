import express from "express"
import expressWs from "express-ws"
import WebSocketJSONStream from "@teamwork/websocket-json-stream"

// 创建服务端的websocket
const port = 300
const app = express()
const { app: expressApp, getWss } = expressWs(app);

app.listen(port, () => {
    console.log("Express 服务器已激活，端口为" + port);
});