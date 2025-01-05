import Action,{ActionType} from "./Action.js";

export default class SessionInitAction extends Action{
  constructor(data) {
    super(ActionType.SessionInitAction, data.clientUser);
    this.content=data.content
  }
}