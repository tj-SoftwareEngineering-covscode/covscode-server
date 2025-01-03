import { MessageType } from './BaseMessage';

export default class ZippedDataMessage extends BaseMessage {
  constructor(repoId, users, data) {
    super(MessageType.ZippedDataMessage);
    this.repoId = repoId;
    this.users = users;
    this.data = data;
  }
}
