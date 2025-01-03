import RepoUser from "../Repository/utils/RepoUser";

export default class UserManager
{
  constructor()
  {
    // key:siteId
    // value:RepoUser
    this.userMap = new Map()  // 使用Map存储用户信息
  }
  /**
   * 新增用户
   * @param {RepoUser} clientUser 
   */
  addUser(clientUser) 
  {
    this.userMap.set(clientUser.siteId,clientUser)
  }

  removeUser(siteId) //  删除用户
  {
    this.userMap.delete(siteId)
  }

  getUser()  // 获取用户
  {

  }
  userExists(siteId)  // 查询用户
  {
    return this.userMap.has(siteId);
  }
}