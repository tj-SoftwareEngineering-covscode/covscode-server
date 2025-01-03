import SiteIdMessage from "../../message/SiteIdMessage";
import WebSocketMessage from "../../message/WebSocketMessage";
import ZippedDataMessage from "../../message/ZippedDataMessage";
import FileOpenAction from "../../action/FileOpenAction";
import FileCloseAction from "../../action/FileCloseAction";
import NodeCreateAction from "../../action/NodeCreateAction";
import NodeDeleteAction from "../../action/NodeDeleteAction";
import NodeRenameAction from "../../action/NodeRenameAction";
import SessionInitAction from "../../action/SessionInitAction";
import SessionJoinAction from "../../action/SessionJoinAction";
import SessionLeaveAction from "../../action/SessionLeaveAction";

export default class JsonConversion
{
  constructor() {
    // this.messageMap = {
    //   //消息类型
    //     "SiteIdMessage": SiteIdMessage, // 站点ID消息
    //     "WebSocketMessage": WebSocketMessage, // WebSocket消息
    // };
    this.actionMap = {
      //行为类型
      "FileOpenAction": FileOpenAction, // 打开文件
      "FileCloseAction": FileCloseAction, // 关闭文件
      "NodeCreateAction": NodeCreateAction, // 创建节点
      "NodeDeleteAction": NodeDeleteAction, // 删除节点
      "NodeRenameAction": NodeRenameAction, // 重命名节点
      "SessionInitAction": SessionInitAction, // 初始化会话
      "SessionJoinAction": SessionJoinAction, // 加入会话
      "SessionLeaveAction": SessionLeaveAction // 离开会话
    };
  }

  // 处理json数据，反序列化
  // 根据json的type字段分类，并返回对应的类实例
  handleJsonData(data) {
    try {
      const parsedData = JSON.parse(data).data;//提取data字段数据
      const actionType = parsedData.actionType;

      if(!(actionType in this.actionMap)){
        console.log("没有在actionMap中找到对应的操作类型");
        return null;
      }

      const actionClass = this.actionMap[actionType];
      actionInstance = new actionClass(parsedData);
      return actionInstance;
    } catch (err) {
      console.log('输入的数据不是JSON格式,无法解析出现问题');
    }
    return null;
  }
}

// 将对象转换为json格式
object2Json(object)
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