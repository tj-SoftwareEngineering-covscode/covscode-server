import Action,{ActionType} from "./Action.js";
  
export default class NodeRenameAction extends Action{
  constructor(data) {
    super(ActionType.NodeRenameAction,data.clientUser)
    this.path=data.path
    this.name=data.name
    this.isFile=data.isFile
    this.newName=data.newName
  }
}