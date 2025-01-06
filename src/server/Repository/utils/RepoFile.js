//正在打开的文件
export default class RepoFile
{
  constructor(filePath)
  {
    this.filePath = filePath
    this.openingUsers = new Map()
  }

  // 添加正在打开文件的用户
  addOpeningUser(user) 
  {
    this.openingUsers.set(user.siteId,user)
  }

  // 获取正在打开文件的用户
  getOpeningUser(siteId)
  {
    if(this.openingUsers.has(siteId))
    {
      return this.openingUsers.get(siteId)
    }
    return null
  }

  // 删除正在打开文件的用户
  removeOpeningUser(siteId) {
    this.openingUsers.delete(siteId);
  }
  
  // 查询正在打开文件的用户
  queryOpeningUser(siteId)  
  {
    if (this.openingUsers.has(siteId)) {
      return this.openingUsers.get(siteId);
    }
    return null;
  }
}