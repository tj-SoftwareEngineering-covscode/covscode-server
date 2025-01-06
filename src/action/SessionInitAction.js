import Action,{ActionType} from "./Action.js";

export default class SessionInitAction extends Action{
  constructor(data) {
    super(ActionType.SessionInitAction, data.clientUser);
    this.content=data.content
  }
  /**
   * 格式
   * {
   *   actionType: 'SessionInitAction',
   *   clientUser: {
   *     userId: '123',
   *     siteId: '123',
   *     repoId: '123',
   *   },
   *   content: '',   // 仓库压缩成zip后转成字符串的数据
   *   time: '2024-01-01 12:00:00',
   * }
   */
}