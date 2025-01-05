

/**
 * 用于存储二进制数据（压缩后的zip信息）的管理类。
 * 该类主要用于新建仓库时存储二进制数据，后续如果有新的用户加入仓库，则需要直接压缩数据。
 */
export default class BinaryManager {
  constructor() {
    this.binaryDataMap = new Map(); // 建立一个二进制Map，键为SiteId（id），值为二进制数据（压缩后的zip信息）
  }

  /**
   * 添加仓库信息到二进制数据Map中。
   * @param {string} siteId - 仓库的SiteId。
   * @param {Object} data - 需要存储的二进制数据。
   */
  addRepoInfo(siteId, data) {
    let binaryDataMap = this.binaryDataMap;
    binaryDataMap.set(siteId, data);
  }

  /**
   * 根据SiteId获取对应的二进制数据。
   * @param {string} siteId - 仓库的SiteId。
   * @returns {Object|null} - 返回对应的二进制数据，如果不存在则返回null。
   */
  getRepoInfo(siteId) {
    let binaryDataMap = this.binaryDataMap;
    if (binaryDataMap.has(siteId)) {
      return binaryDataMap.get(siteId);
    } else {
      return null;
    }
  }
}
