import Action,{ActionType} from "./Action.js";

export default class NodeDeleteAction extends Action{
  constructor(data) {
    super(ActionType.NodeDeleteAction,data.clientUser)
    this.path=data.path
    this.name=data.name
    this.isFile=data.isFile
  }
}