import BinaryManager from "../manager/BinaryManager.js"
import RepoManager from "../manager/RepoManager.js"
import SessionManager from "../manager/SessionManager.js"
import UserManager from "../manager/UserManager.js"

export default class SessionService  // 会话服务接口
{
  constructor()  // 初始化
  {
    this.repoLocation = "./src/tmp"
    this.sessionManager = new SessionManager()
    this.repoManager = new RepoManager()
    this.userManager = new UserManager()
    this.binaryManager = new BinaryManager()
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
  async classsifyMessage()
  {

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