import Action,{ActionType} from "./Action.js";

/**
 * 关闭文件
 */
export default class FileCloseAction extends Action{
  constructor(data) {
    super(ActionType.FileCloseAction,data.clientUser);
    this.path=data.path
    this.name=data.name
  }
  /**
   * 格式
   * {
   *   actionType: 'FileCloseAction',
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