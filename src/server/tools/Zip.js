import AdmZip from 'adm-zip';

export async function zip(path){
  const zip = new AdmZip();
  await zip.addLocalFolderPromise(path, {});
  return await zip.toBufferPromise();
}

export async function unzip(path, data) {
  const zip = new AdmZip(data);
  return new Promise((res, rej) => {
    zip.extractAllToAsync(path, true, true, err => (err ? rej(err) : res()));
    res();
  });
}