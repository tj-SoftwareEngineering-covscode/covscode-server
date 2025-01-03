import RepoUser from "../server/Repository/utils/RepoUser";

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
  /**
   * 
   * @param {ActionType} actionType 
   * @param {RepoUser} clientUser 
   */
  constructor(actionType, clientUser) {
    this.actionType = actionType;
    this.clientUser = clientUser;
    this.time = new Date();
  }
}