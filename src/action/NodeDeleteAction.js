import Action,{ActionType} from "./Action.js";

export default class NodeDeleteAction extends Action{
  constructor(data) {
    super(ActionType.NodeDeleteAction,data.clientUser)
    this.path=data.path
    this.name=data.name
    this.isFile=data.isFile
  }
  /**
   * 格式
   * {
   *   actionType: 'NodeDeleteAction',
   *   clientUser: {
   *     userId: '123',
   *     siteId: '123',
   *     repoId: '123',
   *   },
   *   path: '/123/123/123.txt',
   *   name: '123.txt',
   *   isFile: true,
   *   time: '2024-01-01 12:00:00',
   * }
   */
}