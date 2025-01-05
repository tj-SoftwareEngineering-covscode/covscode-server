import Action from "./Action.js";

export default class NodeDeleteAction extends Action{
  constructor(data) {
    super()
    Object.assign(this, data)
    /*
      actionType: "NodeDeleteAction"
      clientUser: { 
                  private userId
                  private siteId
                  private repoId
              }
      path: "文件路径"
      name: "文件名"
      isFile: "是否是文件"
    */
  }
}