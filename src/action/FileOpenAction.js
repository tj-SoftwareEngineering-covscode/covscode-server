import FileFolderNodeAction from "./FileFolderNodeAction";

/**
 * 打开文件 继承FileFolderNodeAction
 */
export default class FileOpenAction extends FileFolderNodeAction{
  constructor(data) {
    super();
    Object.assign(this, data);
  }
}