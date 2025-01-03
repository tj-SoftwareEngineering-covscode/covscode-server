import RepoEditor from "./utils/RepoEditor"
import RepoFile from "./utils/RepoFile"
import zip from "./utils/zip"

export default class Repository
{
  /**
   * repoId: string 仓库名称
   * repoPath: string 仓库的根路径
   * userMap: Map<number, repoUser> 此仓库所有用户，用户的id就是siteId
   * fileMap: Map<string, repoFile> key是文件路径，value是文件，用来管理当前仓库已打开的文件
   */

  /**
   * 服务端维护的仓库
   * @param {String} repoId 仓库ID
   * @param {String} repoPath 仓库根目录路径 
   */
  constructor(repoId,repoPath)
  {
    this.repoLocation = "./src/tmp"
    this.repoId = repoId
    this.repoPath = repoPath
    this.repoEditor = new RepoEditor(repoPath)
    this.userMap = new Map()
    this.fileMap = new Map()
    if (!fs.existsSync(this.repoLocation)) {
        fs.mkdirSync(this.repoLocation, { recursive: true })
    }
  }

 /**
  * 创建仓库
  * @param {Object} initAction SessionInitAction
  * @returns {Repository} 返回仓库对象
  */
  create(initAction)
  {
    const binaryData = Buffer.from(initAction.content, 'utf8')
    let unzipPath = path.join(this.repoLocation, initAction.clientUser.repoId) // 解压缩的路径 src/tmp/repoId
    let repo = new Repository(initAction.clientUser.repoId,unzipPath)
    repo.repoEditor.repoInit(binaryData)
    repo.addUser(initAction)
    return repo
  }

  /**
   * 添加用户至仓库的userMap
   * @param {Object} initAction 初始化加入动作
   */
  addUser(initAction)
  {
    this.userMap.set(initAction.clientUser.siteId,initAction.clientUser)
  }
  
  /**
   * 内部关闭文件
   * @param {string} path 文件路径
   * @param {string} siteId 用户ID
   */
  innerCloseFile(path, siteId) {
    let repoFile = this.fileMap.get(path)
    repoFile.removeOpenUser(siteId)
  }

  /**
   * 将仓库压缩为zip文件，用于转发给加入的用户
   * @returns {Promise<Buffer>} 
   */
  async toZippedBytes() {
    try {
      let repoBytes = await zip(this.repoPath)
      return repoBytes
    } catch (error) {
      console.error("压缩服务端仓库时出现问题：", error)
      throw new Error("Error when zipping repo to bytes")
    }
  }

  /**
   * 用户加入仓库
   * @param {Object} joinAction 加入动作
   * @returns {Promise<Buffer>} 转发给加入用户的zip文件
   */
  async userJoin(joinAction) {
    this.addUser(joinAction)
    let bData = await this.toZippedBytes()
    return bData
  }
  

  /**
   * 用户离开仓库
   * @param {String} siteId 用户id
   */
  userLeave(siteId)
  {
    if (siteId == null) {
      return
    }
    // 先将该用户的所有文件给关了，实际上客户端已经完成了这个操作，但是为了防止意外服务端也做此操作
    for (const [key, value] of this.fileMap) {
      let user = value.queryUser(siteId)
      if (user) {
        let closeFileAction = {
          actionType: "FileCloseAction",
          clientUser: user,
          path: value.filePath,
        }
        this.fileClose(closeFileAction)
      }
    }
    this.userMap.delete(siteId)
  }

  /**
   * 关闭文件
   * @param {Object} closeFileAction 关闭文件动作
   */
  fileClose(closeFileAction) {
    let path = closeFileAction.path
    let siteId = closeFileAction.clientUser.siteId
    this.innerCloseFile(path, siteId)
  }





  getContent(path)
  {
    return this.repoEditor.getContent(path)
  }

  excuteMessage() // 执行操作
  {

  }
}