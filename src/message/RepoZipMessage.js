/*
用于帮助用户加入已创建好的仓库的类，包含有所需的相关信息
*/
export default class RepoZippedMessage {
    constructor(repoId, users, data, fileContents) {
    //   this.type = "repoZippedMessage";
      this.repoId = repoId;
      this.users = users;
      this.data = data;
      this.fileContents = fileContents;
    }
  }
  