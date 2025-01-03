import { MessageType } from './BaseMessage';

export default class SiteIdMessage extends BaseMessage {
  constructor(id) {
    super(MessageType.SiteIdMessage);
    this.siteId = parseInt(id);
  }
}