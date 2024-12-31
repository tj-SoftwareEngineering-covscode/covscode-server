
export default class SessionManager
{
  constructor()
  {
    this.sessionMap = new Map()
  }

  getSiteId()   // 创建新的会话id，用时间戳＋随机数字来组合
  {
    return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  }


  addSession(siteId,session)  // 添加会话到映射当中
  {
    this.sessionMap.set(siteId,session)
  }

  removeSession()  // 删除会话
  {


  }

  getSession(siteId)  // 根据id获取会话
  {
    if (this.sessionMap.has(siteId)) {
      return this.sessionMap.get(siteId);
    } else {
      return null; // 说明没有这个ws连接
    }

  }

  getId(session) // 根据session获取siteId
  {
    for (const [key, value] of this.sessionMap.entries()) {
      if (value === session) {
        return key; // 如果找到对应的session，返回该session对应的siteId
      }
    }
    return null;
  }
}