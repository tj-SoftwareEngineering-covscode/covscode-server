import Action from "./Action.js";

/**
 * 文件夹节点操作的父类
 */
export default class FileFolderNodeAction extends Action {
  /**
   * 构造函数，初始化 FileFolderNodeAction 实例。
   * @param {string} path 文件路径
   * @param {string} name 文件名
   * @param {boolean} isDir 是否为目录
   */
  constructor(path, name, isDir) {
    super();
    this.path = path;
    this.name = name;
    this.isDir = isDir;
  }
}