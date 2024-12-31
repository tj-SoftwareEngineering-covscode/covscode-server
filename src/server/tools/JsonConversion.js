import SiteIdMessage from "../../message/SiteIdMessage";

export default class JsonConversion
{
  constructor()
  {
  }

  serializer(data)  // 序列化对象
  {
    try{
      var result = {
        "data":Object.assign(data),
        "success":true
      }
      return result
    }catch(err)
    {
      console.error("将类转换为Websocket可使用的数据时出错：",err)
      var result = {
          "success" : false
      }
      return result
    }

  }

  deserializer() // 解析json
  {
    try{
      const parsedData = JSON.parse(data).data
      
  
    }catch(err)
    {
      console.log('输入的数据不是JSON格式,无法解析出现问题')
    }
    return null
  }
}