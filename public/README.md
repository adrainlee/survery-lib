# 调查问卷系统使用说明

## Docker 部署

### 使用 Docker Compose 启动

1. 启动所有服务：

```bash
docker-compose up -d
```

2. 查看服务状态：

```bash
docker-compose ps
```

3. 查看日志：

```bash
# 查看所有服务日志
docker-compose logs

# 查看特定服务日志
docker-compose logs mongodb
docker-compose logs backend
docker-compose logs frontend
```

4. 停止服务：

```bash
docker-compose down
```

### 服务说明

- MongoDB (mongodb): 数据库服务

  - 端口: 27017
  - 数据持久化: mongodb_data 卷
  - 数据库名: survey_system

- 后端服务 (backend):

  - 端口: 5000
  - 依赖: mongodb
  - 环境变量通过 docker-compose.yml 配置

- 前端服务 (frontend):
  - 端口: 3000
  - 依赖: backend
  - 自动热重载

### 数据持久化

MongoDB 数据通过 Docker 卷持久化存储：

```yaml
volumes:
  mongodb_data:
```

数据位置：

- Linux: /var/lib/docker/volumes/[project_name]\_mongodb_data
- macOS: 使用 Docker Desktop 管理

### 开发环境配置

1. 本地开发（不使用 Docker）：

```bash
# .env 配置
MONGODB_URI=mongodb://localhost:27017/survey_system
PORT=5000
```

2. Docker 环境：

```bash
# .env 配置（自动使用）
MONGODB_URI=mongodb://mongodb:27017/survey_system
PORT=5000
```

### 常见问题

1. MongoDB 连接问题：

   - 检查容器状态：`docker-compose ps`
   - 检查日志：`docker-compose logs mongodb`
   - 确认网络连接：`docker network ls`

2. 数据持久化：

   - 数据保存在 mongodb_data 卷中
   - 使用 `docker volume ls` 查看卷
   - 备份：`docker volume backup [volume_name]`

3. 端口冲突：

   - 修改 docker-compose.yml 中的端口映射
   - 确保本地对应端口未被占用

4. 容器间通信：
   - 服务间使用容器名称通信
   - 所有服务在同一网络 (survey_network)

### 系统维护

1. 更新服务：

```bash
# 重新构建并启动
docker-compose up -d --build
```

2. 数据备份：

```bash
# 导出数据
docker exec survey_mongodb mongodump --out /data/backup

# 复制到主机
docker cp survey_mongodb:/data/backup ./backup
```

3. 监控：

```bash
# 查看容器资源使用
docker stats

# 查看容器日志
docker-compose logs -f
```

## 项目结构

[原有的项目结构部分保持不变...]

## 版本管理系统

[原有的版本管理系统部分保持不变...]

## 数据模型

[原有的数据模型部分保持不变...]

## 注意事项

1. Docker 环境：

   - 确保 Docker 和 Docker Compose 已安装
   - 检查容器资源限制
   - 定期备份数据卷

2. 数据库：

   - 使用 Docker 卷保证数据持久化
   - 定期备份数据
   - 监控数据库性能

3. 开发流程：
   - 本地开发可使用 Docker 或直接运行
   - 测试环境建议使用 Docker
   - 生产环境必须使用 Docker

完整的配置选项和问题类型请参考 [SurveyJS 文档](https://surveyjs.io/Documentation/Library)
