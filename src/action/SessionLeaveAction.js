import Action,{ActionType} from "./Action.js";

export default class SessionLeaveAction extends Action{
  constructor(data) {
    super(ActionType.SessionLeaveAction, data.clientUser);
  }
}