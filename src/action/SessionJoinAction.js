import Action from "./Action.js";

export default class SessionJoinAction extends Action{
  constructor(data) {
    super(ActionType.SessionJoinAction, data.clientUser);
    Object.assign(this, data);
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