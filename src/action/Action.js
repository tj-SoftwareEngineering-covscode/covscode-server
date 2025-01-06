import RepoUser from "../server/Repository/utils/RepoUser.js"

export const ActionType = {
  FileOpenAction: 'FileOpenAction',
  FileCloseAction: 'FileCloseAction',
  NodeCreateAction: 'NodeCreateAction',
  NodeDeleteAction: 'NodeDeleteAction',
  NodeRenameAction: 'NodeRenameAction',
  SessionInitAction: 'SessionInitAction',
  SessionJoinAction: 'SessionJoinAction',
  SessionLeaveAction: 'SessionLeaveAction'
}

/**
 * 行为类
 */
export default class Action {
  constructor(actionType, clientUser) {
    this.actionType = actionType
    this.clientUser = clientUser
    this.time = new Date()
  }
  /**
   * {
   *   actionType: 'FileOpenAction',
   *   clientUser: {
   *     userId: '123',
   *     siteId: '123',
   *     repoId: '123',
   *   },
   *   time: '2024-01-01 12:00:00',
   * }
   */
}