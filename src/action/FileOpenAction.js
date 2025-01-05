import Action,{ActionType} from "./Action.js";

/**
 * 打开文件 继承FileFolderNodeAction
 */
export default class FileOpenAction extends Action{
  constructor(data) {
    super(ActionType.FileOpenAction,data.clientUser);
    this.path=data.path
    this.name=data.name
  }
}