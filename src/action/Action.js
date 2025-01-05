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

export default class Action {
  constructor(actionType, clientUser) {
    this.actionType = actionType
    this.clientUser = clientUser
    this.time = new Date()
  }
}