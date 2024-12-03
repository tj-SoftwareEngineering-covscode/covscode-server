import express from "express"
import expressWs from "express-ws"
import WebSocketJSONStream from "@teamwork/websocket-json-stream"
import SessionService from "./service/SessionService.js"
import ShareDBManager from "./manager/ShareDBManager.js"
// 创建服务端的websocket
const port = 3000
const app = express()
const { app: expressWsApp, getWss } = expressWs(app);


let sessionService = new SessionService()



app.listen(port, () => {
    console.log("Express 服务器已激活，端口为" + port);
});
const wss = getWss("/websocket")  // 创建WebSocket实例


app.ws("/websocket", async (ws, req) => {  // websocket接口路由
    console.log("连接已建立");
});
app.ws("/sharedb",async (ws,req)=>{  // sharedb接口路由
 console.log("sharedb启动")
 const sharedbStream = new WebSocketJSONStream(ws)  // 将Ws数据流转化为sharedb需要的json数据流
 sharedbService.listen(sharedbStream) // 监听websocket信息

 
}) 