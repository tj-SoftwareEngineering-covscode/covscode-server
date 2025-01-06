import { mkdir, mkdirSync, writeFileSync, renameSync, unlinkSync, rmdirSync } from "fs"
import { unzip } from "../../tools/Zip.js"
import { resolve,dirname } from "path"
import fs from "fs"

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
  createNode(path,isFile,context) // 创建文件
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
  * 删除文件夹下所有问价及将文件夹下所有文件清空
  * @param {*} path 
  */
  emptyDir(path) {
    const files = fs.readdirSync(path);
    files.forEach(file => {
        const filePath = `${path}/${file}`
        const stats = fs.statSync(filePath)
        if (stats.isDirectory()) {
            this.emptyDir(filePath)
        } else {
            fs.unlinkSync(filePath)
            console.log(`删除${file}文件成功`)
        }
    })
  }

  /**
  * 删除指定路径下的所有空文件夹
  * @param {*} path 
  */
  rmEmptyDir(path, level=0) {
    const files = fs.readdirSync(path);
    if (files.length > 0) {
        let tempFile = 0;
        files.forEach(file => {
            tempFile++;
            this.rmEmptyDir(`${path}/${file}`, 1);
        });
        if (tempFile === files.length && level !== 0) {
            fs.rmdirSync(path);
        }
    }
    else {
        level !==0 && fs.rmdirSync(path);
    }
  }

  /**
   * 删除文件或文件夹
   * @param {string} path 文件路径
   * @param {boolean} isFile 是否是文件
   */
  deleteNode(path,isFile) {
    try {
      const fullPath = resolve(this.repoPath, path)
      console.log("删除文件路径为：",fullPath)
      if (isFile) {
        unlinkSync(fullPath)
      } else {
        this.emptyDir(fullPath)
        this.rmEmptyDir(fullPath)
        rmdirSync(fullPath)
      }
    } catch (error) {
      console.error(`删除文件失败, 路径=${path}`, error);
      throw error;
    }
  }

  /**
   * 重命名文件或文件夹
   * @param {string} path 完整的文件路径（包含文件名）
   * @param {string} name 当前文件名
   * @param {string} newName 新文件名
   */
  renameNode(path, name, newName) {
    try {
        // 获取文件所在目录路径
        const dirPath = dirname(path);
        
        // 构建完整的旧文件路径和新文件路径
        const oldPath = resolve(this.repoPath, path);
        const newPath = resolve(this.repoPath, dirPath, newName);
        
        // 执行重命名
        renameSync(oldPath, newPath);
    } catch (error) {
        console.error(`重命名文件失败: ${name} -> ${newName}`, error);
        throw error;
    }
  }
}