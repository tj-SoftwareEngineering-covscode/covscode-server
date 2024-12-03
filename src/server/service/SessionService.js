import RepoManager from "../manager/RepoManager.js"
import SessionManager from "../manager/SessionManager.js"
import UserManager from "../manager/UserManager.js"

export default class SessionService  // 会话服务接口
{
  constructor()  // 初始化
  {
    this.sessionManager = new SessionManager()
    this.repoManager = new RepoManager()
    this.userManager = new UserManager()
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