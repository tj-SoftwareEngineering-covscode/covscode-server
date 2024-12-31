/*
每个被打开文件的基本信息，目前只包含文件路径。
*/

export default class FileContentMessage {
    constructor(path) {
    //   let type = "fileContentMessage";
    //   this.type = type;
      this.path = path;
    }
  }
  