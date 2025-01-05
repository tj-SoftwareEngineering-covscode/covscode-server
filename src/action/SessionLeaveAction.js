import Action from "./Action.js";

export default class SessionLeaveAction extends Action{
  constructor(data) {
    super(ActionType.SessionLeaveAction, data.clientUser);
    Object.assign(this, data);
    /*
          actionType: "SessionLeaveAction"
          clientUser: { 
                     private userId
                     private siteId
                     private repoId
                  }
    */
  }
}