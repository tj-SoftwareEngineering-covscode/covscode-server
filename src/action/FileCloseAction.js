import Action from "./Action.js";

/**
 * 关闭文件 继承FileFolderNodeAction
 */
export default class FileCloseAction extends Action{
  constructor(data) {
    super();
    Object.assign(this, data);
    /*
      actionType: "FileCloseAction"
      clientUser: { 
                  private userId
                  private siteId
                  private repoId
              }
      path: "文件路径"
      name: "文件名"
    */
  }
}