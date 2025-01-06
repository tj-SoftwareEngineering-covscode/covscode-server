import BaseMessage,{MessageType} from './BaseMessage.js'
import Action from '../action/Action.js'

export default class WebSocketMessage extends BaseMessage {
  data;
  isSuccessful;
  errorMessage;
  errorCode;
  /**
   * 
   * @param {Action} data 
   * @param {boolean} isSuccessful 
   * @param {string} errorMessage 
   * @param {string} errorCode 
   */
  constructor(data, isSuccessful, errorMessage, errorCode) {
    super(MessageType.WebSocketMessage);
    this.data = data;
    this.isSuccessful = isSuccessful;
    this.errorMessage = errorMessage;
    this.errorCode = errorCode;
  }
  /**
   * 格式示例
   * {
   *   messageType: 'WebSocketMessage',
   *   data: {
   *     actionType: 'SessionInitAction',
   *     clientUser: {
   *       userId: '123',
   *       siteId: '123',
   *       repoId: '123',
   *     },
   *     content: '',   // zip压缩后转成字符串的数据
   *     time: '2024-01-01 12:00:00',
   *   },
   *   isSuccessful: true,
   *   errorMessage: '',
   *   errorCode: '',
   * }
   */
}