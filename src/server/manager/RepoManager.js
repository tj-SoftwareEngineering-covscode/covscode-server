
export default class RepoManager
{
  constructor()
  {
    // key:repoId
    // value:Repository
    this.repoMap = new Map()
  }
  /**
   * 添加一个新的仓库对象到repositoryMap中。
   * @param {Repository} repository - 需要添加的仓库对象。
   */
  addRepo(repository) // 向repoMap当中添加一个新的仓库对象
  {
    this.repoMap.set(repository.repoId,repository)
  }

  /**
   * 根据repoId获取对应的仓库对象。
   * @param {string} repoId  仓库的唯一标识符。
   * @returns {Repository|undefined} - 返回对应的仓库对象，如果不存在则返回undefined。
   */
  getRepoById(repoId) {
    return this.repoMap.get(repoId);
  }

  // 判断仓库是否存在
  repoExist(repoId)
  {
    return this.repoMap.has(repoId);
  }

}