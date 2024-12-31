import express from "express"
import expressWs from "express-ws"
import WebSocketJSONStream from "@teamwork/websocket-json-stream"
import SessionService from "./service/SessionService.js"
import ShareDBManager from "./manager/ShareDBManager.js"
import JsonConversion from "./tools/JsonConversion.js"
import SiteIdMessage from "../message/SiteIdMessage.js"
// 创建服务端的websocket
const port = 3000
const app = express()
const { app: expressWsApp } = expressWs(app);




let dataGenerator = new JsonConversion()


const sharedbService = ShareDBManager.getInstance().sharedbService  // 从单例中获取对象

let sessionService = new SessionService()

app.listen(port, () => {
    console.log("Express 服务器已激活，端口为" + port);
});


app.ws("/websocket", async (ws, req) => {  // websocket接口路由
    console.log("连接已建立");
    let siteId = sessionManage.getSiteId()
    sessionService.sessionManager.addSession(siteId,ws) // 创建新的会话

    ws.on("message",async(message)=>{
        if(typeof message === "string")   // 对不同的action执行不同的action
        {
            let action = dataGenerator.deserializer(message)
            await sessionService.classsifyMessage(action)
        }
        else if(message instanceof Buffer){   // 二进制文件则将其解压后并存储起来
            sessionService.saveBinaryData(ws,message)
        }

        console.log("收到message", message);
    })

    ws.on("close",()=>{
        console.log("连接已经关闭");
    })
    // 返回siteId
    let siteIdDto = new SiteIdMessage(siteId)
    ws.send(JSON.stringify(dataGenerator.serializer(siteIdDto)))
});



app.ws("/sharedb",async (ws,req)=>{  // sharedb接口路由
 console.log("sharedb启动")
 const sharedbStream = new WebSocketJSONStream(ws)  // 将Ws数据流转化为sharedb需要的json数据流
 sharedbService.listen(sharedbStream) // 监听websocket信息
 
 ws.on("message",async (message)=>{  // 调试，输出接收到的信息
    console.log(message)
 })

}) 