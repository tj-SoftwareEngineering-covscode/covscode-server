import BaseMessage,{MessageType} from './BaseMessage.js';

export default class ZippedDataMessage extends BaseMessage {
  constructor(repoId, users, data) {
    super(MessageType.ZippedDataMessage);
    this.repoId = repoId;
    this.users = users;
    this.data = data;
  }
  /**
   * 格式示例
   * {
   *   messageType: 'ZippedDataMessage',
   *   repoId: '123',
   *   users: [{
   *     userId: '123',
   *     siteId: '123',
   *     repoId: '123',
   *   },
   *   {
   *     userId: '1234',
   *     siteId: '1234',
   *     repoId: '1234',
   *   }],
   *   data: '',   // 仓库压缩成zip后转成字符串的数据
   * }
   */
}
