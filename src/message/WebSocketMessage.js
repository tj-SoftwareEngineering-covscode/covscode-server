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
}