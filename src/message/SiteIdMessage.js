import BaseMessage,{ MessageType } from './BaseMessage.js';

/**
 * 站点ID消息
 */
export default class SiteIdMessage extends BaseMessage {
  constructor(id) {
    super(MessageType.SiteIdMessage);
    this.siteId = id;
  }
  /**
   * 格式示例
   * {
   *   messageType: 'SiteIdMessage',
   *   siteId: '123',
   * }
   */
}