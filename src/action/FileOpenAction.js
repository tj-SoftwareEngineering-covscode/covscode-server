import Action from "./Action.js";

/**
 * 打开文件 继承FileFolderNodeAction
 */
export default class FileOpenAction extends Action{
  constructor(data) {
    super();
    Object.assign(this, data);
    /*
      actionType: "FileOpenAction"
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