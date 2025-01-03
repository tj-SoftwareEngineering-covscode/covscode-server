export const MessageType = {
  WebSocketMessage: 'WebSocketMessage',
  SiteIdMessage: 'SiteIdMessage'
}

export default class BaseMessage {

  constructor(messageType) {
    this.messageType = messageType;
  }
}