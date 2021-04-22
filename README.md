<!--
 * @Author: 姜彦汐
 * @Date: 2021-04-21 16:25:34
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-04-22 10:10:09
 * @Description: 
 * Contact: jiangyanxi@live.com
 * @FilePath: /egg-sqlite/README.md
-->
# egg-sqlite
## 安装

```bash
$ npm i egg-sqlite --save
# or
$ yarn add egg-sqlite
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

};
```
## License

[MIT](LICENSE)