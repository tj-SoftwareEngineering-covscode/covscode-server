import BinaryManager from "../manager/BinaryManager.js"
import RepoManager from "../manager/RepoManager.js"
import SessionManager from "../manager/SessionManager.js"
import UserManager from "../manager/UserManager.js"

export default class SessionService  // 会话服务接口
{
  constructor(binaryManager,sessionManager,repoManager,userManager)  // 初始化
  {
    this.repoLocation = "./src/tmp"
    this.sessionManager = sessionManager
    this.repoManager = repoManager
    this.userManager = userManager
    this.binaryManager = binaryManager
  }
  sessionConnect()  // 连接会话
  {

  }
  sendMessage()  // 发送更改信息
  {

  }
  proceessMessage() // 处理信息
  {

  }
  // 根据json内容解析分类消息
  async classsifyMessage(action)
  {
    if(action.type === "login")
    {
      //TODO: 登录操作
    }
  }
  broadcastMessage()
  {

  }
  

  saveBinaryData(ws,BinaryData)  // 存储二进制数据
  {
    let siteId = this.sessionManager.getIdBySession(ws);
    this.binaryManager.addRepoInfo(siteId, BinaryData);

  }
}