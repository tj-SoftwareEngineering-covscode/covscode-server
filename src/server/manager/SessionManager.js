
export default class SessionManager
{
  constructor()
  {
    // key:siteId
    // value:session
    this.sessionMap = new Map()
  }


  // 创建新的会话id，用时间戳＋随机数字来组合
  getSiteId()
  {
    return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  }


  // 添加会话到映射当中
  addSession(siteId,session)
  {
    this.sessionMap.set(siteId,session)
  }

  // 删除会话
  removeSession(siteId)
  {
  
  }

  // 根据id获取会话
  getSessionById(siteId) {
    if (this.sessionMap.has(siteId)) {
      return this.sessionMap.get(siteId);
    } else {
      return null; // 说明没有这个ws
    }
  }

  // 根据session获取siteId
  getIdBySession(session) 
  {
    for (const [key, value] of this.sessionMap.entries()) {
      if (value === session) {
        return key; // 如果找到对应的session，返回该session对应的siteId
      }
    }
    return null;
  }

  // 根据发送action给指定siteId的用户
  sendActionById(siteId, action) {
    if (this.sessionMap.has(siteId)) {
      let ws = this.sessionMap.get(siteId);
      let dataGenerator = new Json2Data();
      ws.send(JSON.stringify(dataGenerator.handleObjectData(action)));
    }
  }
}