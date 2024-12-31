export default class SessionLeaveMessage {
    constructor(data) {
      // 从客户端直接获得数据，SessionLeave主要需要使用repoId和siteId这两个数据，主要作用是:删除这个用户的相关信息；广播同仓库的其他用户有人离开仓库
      let { repoId, siteId } = data; 
      this.repoId = repoId;
      this.siteId = siteId;
    //   this.type = "leaveAction"; // 消息类型为leaveAction
    }
  }
  