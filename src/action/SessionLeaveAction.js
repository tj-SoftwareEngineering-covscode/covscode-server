import Action,{ActionType} from "./Action.js";

export default class SessionLeaveAction extends Action{
  constructor(data) {
    super(ActionType.SessionLeaveAction, data.clientUser);
  }
  /**
   * 格式
   * {
   *   actionType: 'SessionLeaveAction',
   *   clientUser: {
   *     userId: '123',
   *     siteId: '123',
   *     repoId: '123',
   *   },
   *   time: '2024-01-01 12:00:00',
   * }
   */
}