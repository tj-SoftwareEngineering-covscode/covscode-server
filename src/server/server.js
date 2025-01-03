import express from "express"
import expressWs from "express-ws"
import WebSocketJSONStream from "@teamwork/websocket-json-stream"
import SessionService from "./service/SessionService.js"
import ShareDBManager from "./manager/ShareDBManager.js"
import JsonConversion from "./tools/JsonConversion.js"
import SiteIdMessage from "../message/SiteIdMessage.js"
import BinaryManager from "./manager/BinaryManager.js"
import SessionManager from "./manager/SessionManager.js"
import UserManager from "./manager/UserManager.js"
import RepoManager from "./manager/RepoManager.js"

// 创建服务端的websocket
const port = 3000
const app = express()
const { app: expressWsApp } = expressWs(app);

const sharedbService = ShareDBManager.getInstance().sharedbService  // 从单例中获取对象

// 数据映射
let dataGenerator = new JsonConversion();

// 存储二进制数据
let binaryManager = new BinaryManager();
// 存储session数据以及分配SiteId(可以视作每个Session的ID)
let sessionManager = new SessionManager();
// 管理User信息
let userManager = new UserManager();
// 管理仓库信息
let repoManager = new RepoManager();
// 创造sessionService，来进行相关操作
let sessionService = new SessionService(
  binaryManager,
  sessionManager,
  repoManager,
  userManager
);

app.listen(port, () => {
    console.log("Express 服务器已启动，端口为" + port);
});

app.ws("/websocket", async (ws, req) => {  // websocket接口路由
    console.log("连接已建立");
    // 为客户端设置siteId
    let siteId = sessionManager.getSiteId()
    sessionManager.addSession(siteId,ws) // 创建新的会话

    ws.on("message",async(message)=>{
        if(typeof message === "string")   // 对不同的action执行不同的action
        {
            let action = dataGenerator.handleJsonData(message)
            await sessionService.classsifyMessage(action)
        }
        else if(message instanceof Buffer){   // 二进制文件则将其解压后并存储起来
            // 1. 存储在binaryManager中
            // 2. 解压
            sessionService.saveBinaryData(ws,message)
        }

        console.log("收到message", message);
    })

    // 监听关闭事件（表示用户退出会话）
    ws.on("close",()=>{
       // TODO:

        console.log("连接已经关闭");
    })
    // 返回给客户端siteId
    let siteIdDto = new SiteIdMessage(siteId)
    ws.send(JSON.stringify(dataGenerator.object2Json(siteIdDto)))
});


app.ws("/sharedb",async (ws,req)=>{  // sharedb接口路由
 console.log("sharedb启动")
 const sharedbStream = new WebSocketJSONStream(ws)  // 将Ws数据流转化为sharedb需要的json数据流
 sharedbService.listen(sharedbStream) // 监听websocket信息
 
 ws.on("message",async (message)=>{  // 调试，输出接收到的信息
    console.log(message)
 })

}) 