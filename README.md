# figure-bed

> github + github action + npm + jsdelivr = figure bed

## 使用方法

- 上传图片至 [images](./images) 文件夹
- 在 [record.json](./release.json) 文件中获取链接

## 如何搭建

- fork 仓库
- 修改 [package.json](./package.json) 中的 name 字段
- secret 中新增 NPM_TOKEN

## 流程

- 上传文件触发 push
- 触发 github action
- 图片数据写列表，发布图片到 npm
- 清除图片文件
- 回传内容到仓库
