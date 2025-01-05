import Action,{ActionType} from "./Action.js";

export default class NodeCreateAction extends Action{
  constructor(data) {
    super(ActionType.NodeCreateAction,data.clientUser)
    this.path=data.path
    this.name=data.name
    this.isFile=data.isFile
    this.content=data.content
  }
}