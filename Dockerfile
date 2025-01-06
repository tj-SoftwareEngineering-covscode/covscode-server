FROM node:20.12.2

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json（如果有）
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目文件到容器内
COPY . .

# 暴露 WebSocket 服务端口（假设是 8080）
EXPOSE 8080

# 启动应用
CMD ["npm", "start"]
