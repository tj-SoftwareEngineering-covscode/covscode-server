import { mkdir, mkdirSync, writeFileSync } from "fs"
import { unzip } from "../../tools/Zip.js"
import { resolve } from "path"

// 进行服务器端仓库文件管理
export default class RepoEditor
{
  constructor(repoPath)
  {
    this.repoPath = repoPath
  }

  async repoInit(binaryData)  // 创建仓库
  {
    mkdir(this.repoPath, { recursive: true }, (err) => {
      if (err) {
        console.error("仓库文件夹创建失败",err);
      }
      console.log("仓库文件夹创建成功,路径为：",this.repoPath);
    });

    // 解压仓库
    unzip(this.repoPath,binaryData)
  }

  /**
   * 创建文件
   * @param {string} path 文件路径
   * @param {boolean} isFile 是否是文件
   * @param {string} context 文件内容
   */
  createNode(path,name,isFile,context) // 创建文件
  {
    try
    {
      //合并路径
      console.log("根目录路径",this.repoPath)
      const filePath = resolve(this.repoPath,path)
      console.log(  "创建文件路径为：",filePath)
      if(!isFile)
      {
      mkdirSync(filePath)
      }
      else
      {
        if(context)
        {
          writeFileSync(filePath,context)
        }
        else
        {
          writeFileSync(filePath,"")
        }
      }
    }
    catch(err)
    {
      console.error(`创建文件失败,路径=${filePath}`,err)
      }
  }

  /**
   * 删除文件或文件夹
   * @param {string} path 文件路径
   */
  deleteNode(path) // 删除文件
  {
    unlinkSync(resolve(this.repoPath,path))
  }

  /**
   * 重命名文件
   * @param {string} path 文件路径
   * @param {string} name 原文件名
   * @param {string} newName 新文件名
   */
  renameNode(path,name,newName) // 重命名文件
  {
    renameSync(resolve(this.repoPath,path,name),resolve(this.repoPath,path,newName))
  }
}