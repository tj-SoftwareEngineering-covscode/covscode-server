import Action from "./Action.js";
  
export default class NodeRenameAction extends Action{
  constructor(data) {
    super(data)
    Object.assign(this, data)
    /*
      actionType: "NodeCreateAction"
      clientUser: { 
                  private userId
                  private siteId
                  private repoId
              }
      path: "文件路径"
      name: "文件名"
      isFile: "是否是文件"
      newName: "新文件名"
    */
  }
}