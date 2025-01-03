import { mkdir, mkdirSync, writeFileSync } from "fs";
import { zip, unzip} from "../tools/Zip";
import { resolve } from "path";

// 进行服务器端仓库文件管理
export default class RepoEditor
{
  constructor(repoPath)
  {
    this.repoPath = repoPath
  }

  repoInit(repoData)  // 创建仓库
  {
    mkdir(this.repoPath, { recursive: true }, (err) => {
      if (err) {
        console.error("仓库文件夹创建失败",err);
      }
      console.log("仓库文件夹创建成功,路径为：",this.repoPath);
    });

    // 解压仓库
    unzip(this.repoPath,repoData)
  }

  createFile(path,context,isDir) // 创建文件
  {
    try
    {
      //合并路径
      const filePath = resolve(this.repoPath,path)
      if(isDir)
      {
      mkdirSync(filePath)
    }
    else
      {
        writeFileSync(filePath,context)
      }
    }
    catch(err)
    {
      console.error(`创建文件失败,路径=${path}`,err)
      }
  }
}