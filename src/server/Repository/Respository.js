import RepoEditor from "../editor/RepoEditor"
export default class Repository
{
  constructor(repoId,repoPath)
  {
    this.repoId = repoId
    this.repoPath = repoPath
    this.repoEditor = new RepoEditor(repoPath)
    this.userMap = new Map()
    this.fileMap = new Map()
  }

  create() // 创建仓库
  {

  }

  getContent()
  {

  }

  excuteMessage() // 执行操作
  {

  }
}