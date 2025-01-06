import Action,{ActionType} from "./Action.js";

export default class NodeCreateAction extends Action{
  constructor(data) {
    super(ActionType.NodeCreateAction,data.clientUser)
    this.path=data.path
    this.name=data.name
    this.isFile=data.isFile
    this.content=data.content
  }
  /**
   * 格式
   * {
   *   actionType: 'NodeCreateAction',
   *   clientUser: {
   *     userId: '123',
   *     siteId: '123',
   *     repoId: '123',
   *   },
   *   path: '/123/123/123.txt',
   *   name: '123.txt',
   *   isFile: true,
   *   content: '123',
   *   time: '2024-01-01 12:00:00',
   * }
   */
}