import sharedb from "sharedb"

/**
 * ShareDBManager 类用于管理 ShareDB 的实例。
 * 该类采用单例模式，确保在整个应用程序中只有一个 ShareDB 实例。
 */
export default class ShareDBManager
{
  constructor()
  {
    this.sharedbService = new sharedb()
  }

}