import Action,{ActionType} from "./Action.js";

export default class SessionJoinAction extends Action{
  constructor(data) {
    super(ActionType.SessionJoinAction, data.clientUser);
  }
}