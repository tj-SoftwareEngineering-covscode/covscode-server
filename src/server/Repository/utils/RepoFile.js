export default class RepoFile
{
  constructor(filePath)
  {
    this.filePath = filePath
    this.openingUsers = new Map()
  }

  addOpeningUser(user)  // 添加仓库当中的User
  {
    this.openingUsers.set(user.siteId,user)
  }

  getOpeningUser(siteId)
  {
    if(this.openingUsers.has(siteId))
    {
      return this.openingUsers.get(siteId)
    }
    return null
  }

  removeOpeningUser(siteId) {
    this.openingUsers.delete(siteId);
  }
  
  queryOpeningUser(siteId)  // 查询仓库当中的User
  {
    if (this.openingUsers.has(siteId)) {
      return this.openingUsers.get(siteId);
    }
    return null;
  }
}