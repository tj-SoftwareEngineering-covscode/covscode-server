import Action,{ActionType} from "./Action.js";
  
export default class NodeRenameAction extends Action{
  constructor(data) {
    super(ActionType.NodeRenameAction,data.clientUser)
    this.path=data.path
    this.name=data.name
    this.isFile=data.isFile
    this.newName=data.newName
  }
  /**
   * 格式
   * {
   *   actionType: 'NodeRenameAction',
   *   clientUser: {
   *     userId: '123',
   *     siteId: '123',
   *     repoId: '123',
   *   },
   *   path: '/123/123/123.txt',
   *   name: '123.txt',
   *   isFile: true,
   *   newName: '321.txt',
   *   time: '2024-01-01 12:00:00',
   * }
   */
}