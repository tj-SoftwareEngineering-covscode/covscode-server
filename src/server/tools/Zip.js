import AdmZip from 'adm-zip'

export default class Zip
{
  constructor()
  {
    
  }
  
  async zip(path)  // 将该路径的文件夹压缩成ZIP文件
  {
    const zip = new AdmZip();
    await zip.addLocalFolderPromise(path, {});
    return await zip.toBufferPromise();
  }

  async unzip(path,data) // 将该路径的ZIP数据解压
  {
    const zip = new AdmZip(data);
    return new Promise((res, rej) => {
      zip.extractAllToAsync(path, true, true, err => (err ? rej(err) : res()));
      res();
    });
  }
}