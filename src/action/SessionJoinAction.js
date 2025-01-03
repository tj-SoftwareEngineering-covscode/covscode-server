export default class SessionJoinAction {
  constructor(data) {
    let processedData = data; // 需要处理的数据直接从JSON数据中获取
    Object.assign(this, processedData);
    // 此消息主要包含以下信息：
    /*
          actionType: "SessionJoinAction"
          clientUser: { 
                      private userId
                      private siteId
                      private repoId
                  }
    */
  }
}