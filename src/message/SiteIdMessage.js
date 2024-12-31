export default class SiteIdMessage {
  constructor(id) {
    // 为客户端分配的siteId信息
    this.messageType = "SiteIdMessage";
    let siteId = parseInt(id);
    this.siteId = siteId;
  }
}