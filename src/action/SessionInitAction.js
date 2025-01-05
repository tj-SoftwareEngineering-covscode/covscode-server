import Action from "./Action.js";

export default class SessionInitAction extends Action{
  constructor(data) {
    super(ActionType.SessionInitAction, data.clientUser);
    Object.assign(this, data);
    // 此消息主要包含以下信息：
    /*
          actionType: "SessionInitAction"
          clientUser: { 
                      private userId
                      private siteId
                      private repoId
                  }
          content: "文件转成的String字符串"
    */
  }
}