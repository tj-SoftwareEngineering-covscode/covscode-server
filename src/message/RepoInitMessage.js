export default class RepoInitMessage {
    constructor(data) {
      let processedData = data; // 需要处理的数据直接从JSON数据中获取
      Object.assign(this, processedData);
      // 此消息主要包含以下信息：
      /*
              createNew: 是否创建新的仓库
              repoId: 仓库的ID
              user: 动作发起人的信息，类型是CoUser
      */
    }
  }