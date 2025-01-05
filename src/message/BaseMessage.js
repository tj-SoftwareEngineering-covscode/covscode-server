export const MessageType = {
  WebSocketMessage: 'WebSocketMessage',
  SiteIdMessage: 'SiteIdMessage',
  ZippedDataMessage: 'ZippedDataMessage'
}

export default class BaseMessage {

  constructor(messageType) {
    this.messageType = messageType;
  }
}