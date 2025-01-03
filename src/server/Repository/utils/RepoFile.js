export default class RepoFile
{
  constructor(filePath)
  {
    this.filePath = filePath
    this.openingUsers = new Map()
  }

  addUser(user)  // 添加仓库当中的User
  {
    this.openingUsers.set(user.siteId,user)
  }

  removeOpenUser(siteId) {
    this.openingUsers.delete(siteId);
  }
  
  queryUser(siteId)  // 查询仓库当中的User
  {
    if (this.openingUsers.has(siteId)) {
      return this.openingUsers.get(siteId);
    }
    return null;
  }
}