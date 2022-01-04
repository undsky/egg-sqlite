# egg-sqlite

> egg plugin for sqlite
## 安装

```bash
$ npm i egg-database-sqlite --save
# or
$ yarn add egg-database-sqlite
```

## 依赖说明

### 依赖的 egg 版本

egg 2.x | egg 1.x
--- | ---
😁 | ❌

### 依赖的插件

[better-sqlite3](https://github.com/JoshuaWise/better-sqlite3)

## 开启插件

```js
// {app_root}/config/plugin.js
exports.sqlite = {
  enable: true,
  package: 'egg-sqlite',
};
```

## 配置

```js
// {app_root}/config/config.default.js
config.sqlite = {
      path: ':memory:',
      options: null
};
```

## 示例

## [点击查看更多开源项目 https://undsky.com/](https://undsky.com/)

## License

[MIT](LICENSE)