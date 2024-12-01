import RepoManager from "../Manager/RepoManager"
import SessionManager from "../Manager/SessionManager"
import ShareDBManager from "../Manager/ShareDBManager"
import UserManager from "../Manager/UserManager"

export default class SessionService  // 会话服务接口
{
  constructor(binaryManager,sessionManager,repoManager,userManager)  // 初始化
  {
    this.binaryManager = binaryManager
    this.sessionManager = sessionManager
    this.repoManager = repoManager
    this.userManager = userManager
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
  classsifyMessage()
  {

  }
  broadcastMessage()
  {

  }
}