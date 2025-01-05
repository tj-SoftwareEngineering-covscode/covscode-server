import Action from "./Action.js";

export default class NodeCreateAction extends Action{
  constructor(data) {
    super()
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
      content: "文件转成的String字符串"
    */
  }
}