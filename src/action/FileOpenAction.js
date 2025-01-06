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
  /**
   * 格式
   * {
   *   actionType: 'FileOpenAction',
   *   clientUser: {
   *     userId: '123',
   *     siteId: '123',
   *     repoId: '123',
   *   },
   *   path: '/123/123/123.txt',
   *   name: '123.txt',
   *   time: '2024-01-01 12:00:00',
   * }
   */
}