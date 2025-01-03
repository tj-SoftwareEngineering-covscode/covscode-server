import { MessageType } from './BaseMessage';
import Action from '../action/Action';

export default class WebSocketMessage extends BaseMessage {
  data;
  isSuccessful;
  errorMessage;
  errorCode;
  /**
   * 
   * @param {MessageType} messageType 
   * @param {Action} data 
   * @param {boolean} isSuccessful 
   * @param {string} errorMessage 
   * @param {string} errorCode 
   */
  constructor(messageType, data, isSuccessful, errorMessage, errorCode) {
    super(messageType);
    this.data = data;
    this.isSuccessful = isSuccessful;
    this.errorMessage = errorMessage;
    this.errorCode = errorCode;
  }
}