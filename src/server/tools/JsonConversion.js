import FileOpenAction from "../../action/FileOpenAction.js"
import FileCloseAction from "../../action/FileCloseAction.js"
import NodeCreateAction from "../../action/NodeCreateAction.js"
import NodeDeleteAction from "../../action/NodeDeleteAction.js"
import NodeRenameAction from "../../action/NodeRenameAction.js"
import SessionInitAction from "../../action/SessionInitAction.js"
import SessionJoinAction from "../../action/SessionJoinAction.js"
import SessionLeaveAction from "../../action/SessionLeaveAction.js"

export default class JsonConversion {
  constructor() {
    this.actionMap = {
      //行为类型
      FileOpenAction: FileOpenAction, // 打开文件
      FileCloseAction: FileCloseAction, // 关闭文件
      NodeCreateAction: NodeCreateAction, // 创建节点
      NodeDeleteAction: NodeDeleteAction, // 删除节点
      NodeRenameAction: NodeRenameAction, // 重命名节点
      SessionInitAction: SessionInitAction, // 初始化会话
      SessionJoinAction: SessionJoinAction, // 加入会话
      SessionLeaveAction: SessionLeaveAction // 离开会话
    }
  }

  // 处理json数据，反序列化
  // 根据json的type字段分类，并返回对应的类实例
  handleJsonData(data) {
    try {
      const parsedData = JSON.parse(data).data//提取data字段数据
      const actionType = parsedData.actionType

      if(!(actionType in this.actionMap)){
        console.log("没有在actionMap中找到对应的操作类型");
        return null
      }

      const actionClass = this.actionMap[actionType]
      var actionInstance = new actionClass(parsedData)
      return actionInstance;
    } catch (err) {
      console.log('输入的数据不是JSON格式,无法解析出现问题');
    }
    return null
  }

  // 将对象转换为json格式
  //处理行为数据转换
  handleObjectData(data) {
    console.log("data:",data)
    try {
      let messageData;
        messageData = {
                messageType: "WebSocketMessage",
                data: data,
                isSuccessful: true,
                errorMessage: "",
                errorCode: ""
        };
        
      return messageData;
  } catch (err) {
      console.error("数据转换错误：", err);
      return {
          messageType: "WebSocketMessage",
          data: null,
          isSuccessful: false,
          errorMessage: err.message,
          errorCode: "ERROR_001"
      };
  }
  }
}