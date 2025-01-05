import Action,{ActionType} from "./Action.js";

/**
 * 关闭文件 继承FileFolderNodeAction
 */
export default class FileCloseAction extends Action{
  constructor(data) {
    super(ActionType.FileOpenAction,data.clientUser);
    this.path=data.path
    this.name=data.name
  }
}