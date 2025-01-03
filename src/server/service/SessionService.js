import SessionInitAction from "../action/SessionInitAction.js"
import SessionJoinAction from "../action/SessionJoinAction.js"
import SessionLeaveAction from "../action/SessionLeaveAction.js"
import FileOpenAction from "../action/FileOpenAction.js"
import FileCloseAction from "../action/FileCloseAction.js"
import NodeCreateAction from "../action/NodeCreateAction.js"
import NodeDeleteAction from "../action/NodeDeleteAction.js"
import NodeRenameAction from "../action/NodeRenameAction.js"
import Repository from "../Repository/Respository.js"
import ZippedDataMessage from "../../message/ZippedDataMessage.js"
import fs from 'fs';


export default class SessionService  // 会话服务接口
{
  constructor(binaryManager,sessionManager,repoManager,userManager)  // 初始化
  {
    this.repoLocation = "./src/tmp"
    this.sessionManager = sessionManager
    this.repoManager = repoManager
    this.userManager = userManager
    this.binaryManager = binaryManager
    if (!fs.existsSync(this.repoLocation)) {
        fs.mkdirSync(this.repoLocation, { recursive: true });
    }
  }

  // 给不在siteIds列表中的用户广播action
  broadcast(repo, action, siteIds) {
    let keys = [];
    for (const [key, value] of repo.userMap.entries()) {
      keys.push(key);
    }
    keys.forEach((eachSid) => {
      if (!siteIds.includes(eachSid)) {
        this.sessionManager.sendActionById(eachSid, action);
      }
    });
  }

  // 初始化会话（包括创建仓库，添加用户）
  InitSession(initAction)
  {
    let newRepo = Repository.create(initAction)
    this.repoManager.addRepo(newRepo)
    this.userManager.addUser(initAction.clientUser)
  }

  // 加入会话（添加用户，转发zip，广播消息）
  async joinSession(joinAction)
  {
    let repo = this.repoManager.getRepoById(joinAction.repoId);
    let bData = await repo.userJoin(joinAction);
    this.userManager.addUser(joinAction.clientUser)
    let users = []
    for(let user of repo.userMap)
    {
      users.push(user) 
    }
    // 将bData转换为字符串传输
    let bufferString = "";
      for (let i = 0; i < bData.length; i++) {
        bufferString += String.fromCharCode(bData[i]);
      }
    let zippedData = new ZippedDataMessage(joinAction.repoId,users,bufferString)

    this.broadcast(repo,joinAction,[joinAction.clientUser.siteId]);

    return zippedData;
  }

  // 离开会话（删除用户，广播消息）
  leaveSession(leaveAction)
  {
    let repo = this.repoManager.getRepoById(leaveAction.clientUser.repoId);
    let user = leaveAction.clientUser;
    if (repo != null && this.userManager.userExists(user.siteId)) {
      repo.userLeave(user.siteId);
      this.broadcast(repo, leaveAction, [user.siteId]);
      this.userManager.removeUser(user.siteId);
    }
  }
  
  // 打开文件动作
  openFile(openFileAction){
    let user = openFileAction.clientUser;
    let repo = this.repoManager.getRepoById(user.repoId)
    repo.openFile(openFileAction)
    this.broadcast(repo, openFileAction, [user.siteId]);
  }

  // 关闭文件动作
  closeFile(closeFileAction){
    let repo = this.repoManager.getRepoById(closeFileAction.clientUser.repoId)
    repo.closeFile(closeFileAction)
    this.broadcast(repo, closeFileAction, [closeFileAction.clientUser.siteId]);
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

    if(action instanceof SessionInitAction)
    {
      this.InitSession(action);
    }
    else if(action instanceof SessionJoinAction)
    {
      let zippedData = await this.joinSession(action);
      let ws = this.sessionManager.getSessionById(action.clientUser.siteId);
      if (ws != null) {
        let dataGenerator = new Json2Data();
        ws.send(JSON.stringify(dataGenerator.handleObjectData(zippedData)));
      }
    }
    else if(action instanceof SessionLeaveAction)
    {
      this.leaveSession(action);
    }
    else if(action instanceof FileOpenAction)
    {
      this.openFile(action);
    }
    else if(action instanceof FileCloseAction)
    {
      this.closeFile(action);
    }
    else if(action instanceof NodeCreateAction)
    {
      this.repoManager.createNode(action.repoId,action.nodeId);
    }
    else if(action instanceof NodeDeleteAction)
    {
      this.repoManager.deleteNode(action.repoId,action.nodeId);
    }
    else if(action instanceof NodeRenameAction)
    {
      this.repoManager.renameNode(action.repoId,action.nodeId,action.newName);
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