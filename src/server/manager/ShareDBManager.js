import sharedb from "sharedb"

/**
 * ShareDBManager 类用于管理 ShareDB 的实例。
 * 该类采用单例模式，确保在整个应用程序中只有一个 ShareDB 实例。
 */
export default class ShareDBManager
{
  static instance = null
  constructor()
  {
    let sharedbService = new sharedb()
    this.sharedbService = sharedbService
  }
  /**
   * 获取 ShareDBManager 的单例实例。
   * @returns {ShareDBManager} 返回 ShareDBManager 的单例实例。
   */
  static getInstance()  /*获取ShareDB实例 */
  {
    if(!ShareDBManager.instance)
    {
      ShareDBManager.instance = new ShareDBManager()
    }
    return ShareDBManager.instance
  }

}